// app/actions/contact.js
"use server"

import { Resend } from "resend"
import ContactFormEmail from "@/emails/ContactFormEmail"
import ClientConfirmationEmail from "@/emails/clientConfirmationEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData) {
  try {
    // Make sure formData is a FormData object
    if (!(formData instanceof FormData)) {
      console.error("Invalid form data received:", formData);
      return { 
        success: false, 
        message: "Invalid form submission" 
      }
    }

    // Extract form data
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Validate form data
    if (!name || !email || !subject || !message) {
      return { 
        success: false, 
        message: "Please fill out all fields" 
      }
    }

    const data = { name, email, subject, message }
    
    // Send email to admin
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: ContactFormEmail(data)
    })

    // Send confirmation email to client
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'We have received your message',
      html: ClientConfirmationEmail(data)
    })

    return { 
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!"
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return { 
      success: false, 
      message: "Failed to send your message. Please try again later." 
    }
  }
}