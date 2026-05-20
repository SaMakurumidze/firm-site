import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Log the newsletter subscription
    console.log("[v0] Newsletter subscription:", email)

    // TODO: Integrate with email service or database
    // Store the email in your database or send to an email marketing service

    return NextResponse.json({ message: "Subscription successful" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
