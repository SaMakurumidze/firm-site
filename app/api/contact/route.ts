import { NextResponse } from "next/server"
import { Resend } from "resend"
import { parseContactPayload, singleLineHeaderSegment } from "@/lib/contact-validation"

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured. Add RESEND_API_KEY to your environment (see https://resend.com/api-keys).",
        },
        { status: 503 },
      )
    }

    let json: unknown
    try {
      json = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
    }

    const parsed = parseContactPayload(json)
    if (!parsed.success) {
      const first =
        parsed.error.issues[0]?.message ||
        Object.values(parsed.error.flatten().fieldErrors).flat()[0] ||
        "Invalid form data."
      return NextResponse.json({ error: first }, { status: 400 })
    }

    const { firstName, lastName, phone, email, subject } = parsed.data

    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() || "EGC Contact <onboarding@resend.dev>"

    const contactTo = process.env.CONTACT_TO_EMAIL?.trim() || "kudzie1007@gmail.com"

    const resend = new Resend(apiKey)
    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      subject: escapeHtml(subject),
    }

    const text = [
      `New message from the EGC contact form`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      ``,
      `Message:`,
      subject,
    ].join("\n")

    const html = `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${safe.email}</a></p>
      <p><strong>Phone:</strong> ${safe.phone}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;">${safe.subject}</pre>
    `

    const emailSubject = `[EGC Contact] ${singleLineHeaderSegment(firstName, 80)} ${singleLineHeaderSegment(lastName, 80)}`.slice(0, 200)

    const { error } = await resend.emails.send({
      from,
      to: [contactTo],
      replyTo: email,
      subject: emailSubject,
      text,
      html,
    })

    if (error) {
      console.error("[contact] Resend error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 502 },
      )
    }

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[contact] Error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
