"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Send,
  Heart,
  ArrowUp,
} from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("Sending...")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("Thank you for subscribing!")
        setEmail("")
        setTimeout(() => setMessage(""), 3000)
      } else {
        throw new Error("Failed to subscribe")
      }
    } catch (error) {
      setMessage("Failed to subscribe. Please try again.")
      setTimeout(() => setMessage(""), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Show scroll to top button when scrolled down
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.pageYOffset > 300)
    })
  }

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">About EGC</h3>
              <p className="mb-4 text-gray-400">
                Evolution Global Consultancy (EGC) was founded to turn overlooked problems into scalable business
                opportunities, with deep roots in Africa and the world.
              </p>
              <div className="flex gap-4">
                <a href="#" className="transition-colors hover:text-blue-400">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="transition-colors hover:text-blue-400">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="transition-colors hover:text-blue-400">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="transition-colors hover:text-blue-400">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="transition-colors hover:text-blue-400">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="flex items-center text-gray-400 transition-colors hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="flex items-center text-gray-400 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center text-gray-400 transition-colors hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center text-gray-400 transition-colors hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                    Other Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center text-gray-400 transition-colors hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-400">123 Business Avenue, Harare, Zimbabwe</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-400">+263 787 182 187</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-400">info@egconsultancy.com</span>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-400">Monday - Friday: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Newsletter</h3>
              <p className="mb-4 text-gray-400">
                Subscribe to our newsletter to receive updates on our services, insights, and industry news.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                  aria-label="Subscribe"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
              {message && <p className="mt-2 text-sm text-blue-400">{message}</p>}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Evolution Global Consultancy. All Rights Reserved. Designed with{" "}
              <Heart className="inline h-4 w-4 text-red-500" /> by{" "}
              <Link href="/about" className="text-blue-400 hover:underline">
                EGC Team
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-colors hover:bg-blue-700"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
