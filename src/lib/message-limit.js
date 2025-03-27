import { getPocketBaseClient, getCurrentUser } from "./pocketbase"

// Function to get or create a message limit record for the current user
export async function getUserMessageLimit() {
  const pb = getPocketBaseClient()
  const currentUser = getCurrentUser()

  if (!currentUser) {
    console.error("No user is logged in")
    return null
  }

  try {
    // Always fetch the latest record to ensure we have the most up-to-date count
    const records = await pb.collection("messageLimits").getList(1, 1, {
      filter: `user = "${currentUser.id}"`,
      sort: "-created", // Get the most recent record
    })

    if (records.items.length > 0) {
      return records.items[0]
    }

    // If no record exists, create one
    const newRecord = await pb.collection("messageLimits").create({
      user: currentUser.id,
      messageCount: 0,
      isPremium: false,
    })

    return newRecord
  } catch (error) {
    console.error("Error getting message limit:", error)
    return null
  }
}

// Function to increment the message count
export async function incrementMessageCount() {
  const pb = getPocketBaseClient()
  const userLimit = await getUserMessageLimit()

  if (!userLimit) {
    return {
      success: false,
      messageCount: 0,
      reachedLimit: false,
      isPremium: false,
    }
  }

  // If user is premium, don't count messages
  if (userLimit.isPremium) {
    return {
      success: true,
      messageCount: userLimit.messageCount,
      reachedLimit: false,
      isPremium: true,
    }
  }

  try {
    const updatedRecord = await pb.collection("messageLimits").update(userLimit.id, {
      messageCount: userLimit.messageCount + 1,
    })

    const newCount = updatedRecord.messageCount
    const reachedLimit = newCount >= 5

    return {
      success: true,
      messageCount: newCount,
      reachedLimit,
      isPremium: false,
    }
  } catch (error) {
    console.error("Error incrementing message count:", error)
    return {
      success: false,
      messageCount: userLimit.messageCount,
      reachedLimit: userLimit.messageCount >= 5,
      isPremium: userLimit.isPremium,
    }
  }
}

// Function to reset message count (e.g., after payment)
export async function resetMessageCount() {
  const pb = getPocketBaseClient()
  const userLimit = await getUserMessageLimit()

  if (!userLimit) {
    return false
  }

  try {
    await pb.collection("messageLimits").update(userLimit.id, {
      messageCount: 0,
    })
    return true
  } catch (error) {
    console.error("Error resetting message count:", error)
    return false
  }
}

// Function to upgrade user to premium
export async function upgradeUserToPremium() {
  const pb = getPocketBaseClient()
  const userLimit = await getUserMessageLimit()

  if (!userLimit) {
    return false
  }

  try {
    await pb.collection("messageLimits").update(userLimit.id, {
      isPremium: true,
    })
    return true
  } catch (error) {
    console.error("Error upgrading user to premium:", error)
    return false
  }
}

// Add a new function to check if a user has reached their limit
export async function hasReachedMessageLimit() {
  const userLimit = await getUserMessageLimit()

  if (!userLimit) {
    return false
  }

  // If user is premium, they haven't reached their limit
  if (userLimit.isPremium) {
    return false
  }

  // Check if user has reached or exceeded the message limit
  return userLimit.messageCount >= 5
}