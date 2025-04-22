import {  NextResponse } from "next/server"
import PocketBase from "pocketbase"
import { resend } from "@/lib/resend"
import { getUserEmailTemplate, getAdminEmailTemplate} from "@/emails/email-templates"

export async function POST(request) {
  try {
    const formData = await request.formData()

    // Initialize PocketBase
    const pb = new PocketBase("https://zep-research.pockethost.io")

    // Extract file if present
    const file = formData.get("file") 
    let fileUrl = ""

    // Create data object for PocketBase
    const data = {
      author: formData.get("author"),
      phone_number: formData.get("phone_number"),
      email: formData.get("email"),
      country: formData.get("country"),
      co_author: formData.get("co_author"),
      paper_title: formData.get("paper_title"),
      department: formData.get("department"),
      organization: formData.get("organization"),
      message: formData.get("message"),
      journal_name: formData.get("journal_name"),
    }

    // Create a new FormData for PocketBase (needed for file upload)
    const pbFormData = new FormData()

    // Add all fields to PocketBase FormData
    Object.entries(data).forEach(([key, value]) => {
      pbFormData.append(key, value )
    })

    // Add file if present
    if (file && file.size > 0) {
      pbFormData.append("file", file)
    }

    // Submit to PocketBase
    const record = await pb.collection("paper_form_submission").create(pbFormData)

    // Get file URL if a file was uploaded
    if (record.file && record.file.length > 0) {
        // Use the URL method as per latest documentation
        fileUrl = pb.files.getURL(record, record.file),{'download': 1};
        
        // If you need to add download parameter
        // fileUrl = pb.files.getURL(record, record.file[0], {'download': 1});
      }

    // Send confirmation email to user
    await resend.emails.send({
      from: "ZepResearch|Submission <info@zepresearch.com>",
      to: data.email,
      subject:
        "Journal Submission Confirmation - Zepresearch ",
      html: getUserEmailTemplate(data),
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "ZepResearch|Submission <info@zepresearch.com>",
      to: "gayatri@zepresearch.com", // Replace with actual admin email
      subject: "New Journal Submission - from Zepresearch",
      html: getAdminEmailTemplate(data, fileUrl),
    })

    return NextResponse.json({
      success: true,
      message: "Paper submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting paper:", error)
    return NextResponse.json({ success: false, message: "Failed to submit paper" }, { status: 500 })
  }
}

