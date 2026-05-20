"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactPhoneField } from "@/components/contact-phone-field"
import { buildE164Phone } from "@/lib/country-dial-codes"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneCountryIso: "zw",
    phoneNational: "",
    email: "",
    subject: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: "", text: "" })

    const phone = buildE164Phone(formData.phoneCountryIso, formData.phoneNational)
    const nationalDigits = formData.phoneNational.replace(/\D/g, "")
    if (!phone || nationalDigits.length < 6) {
      setMessage({ type: "error", text: "Please enter a valid phone number (including country code)." })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone,
          email: formData.email,
          subject: formData.subject,
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully. We will get back to you soon.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          phoneCountryIso: "zw",
          phoneNational: "",
          email: "",
          subject: "",
        })
      } else {
        setMessage({
          type: "error",
          text: typeof data.error === "string" ? data.error : "Failed to send message. Please try again.",
        })
      }
    } catch {
      setMessage({ type: "error", text: "Failed to send message. Please try again or contact us directly." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Header />

      <PageHero
        title="Contact Us"
        description="Get in touch with our team. We're here to help with any questions or inquiries you may have."
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mb-8 text-gray-700">
              We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Our Location</h3>
                  <p className="text-gray-700">123 Business Avenue, Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Phone Number</h3>
                  <p className="text-gray-700">+263 787 182 187</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Email Address</h3>
                  <p className="text-gray-700">info@egconsultancy.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Working Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Send Us A Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="mb-2 block font-medium text-gray-900">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="mb-2 block font-medium text-gray-900">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Doe"
                />
              </div>

              <ContactPhoneField
                id="phone"
                countryIso={formData.phoneCountryIso}
                national={formData.phoneNational}
                onCountryChange={(iso2) => setFormData((prev) => ({ ...prev, phoneCountryIso: iso2 }))}
                onNationalChange={(value) => setFormData((prev) => ({ ...prev, phoneNational: value }))}
                disabled={isSubmitting}
                required
              />

              <div>
                <label htmlFor="email" className="mb-2 block font-medium text-gray-900">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="abc@def.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block font-medium text-gray-900">
                  Subject <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="To schedule a consultation, please specify the type of service, preferred date and time for the consultation.."
                />
              </div>

              {message.text && (
                <div
                  className={`rounded-lg p-4 ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Find Us</h2>
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711154905!2d31.017457!3d-17.824858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0xa3c2febcd6e49def!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
