"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Youtube, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            EGC
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <a href="#" className="text-gray-600 transition-colors hover:text-blue-600">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 transition-colors hover:text-blue-600">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 transition-colors hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 transition-colors hover:text-blue-600">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav className="hidden gap-8 md:flex">
          <Link
            href="/solutions"
            className={`font-medium transition-colors hover:text-blue-600 ${
              isActive("/solutions") ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors hover:text-blue-600 ${
              isActive("/about") ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Who We Are
          </Link>
          <Link
            href="/services"
            className={`font-medium transition-colors hover:text-blue-600 ${
              isActive("/services") ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Other Services
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-colors hover:text-blue-600 ${
              isActive("/contact") ? "text-blue-600" : "text-gray-700"
            }`}
          >
            Contact
          </Link>
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 md:hidden" aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col px-6 py-4">
            <Link
              href="/solutions"
              className="border-b border-gray-100 py-3 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="border-b border-gray-100 py-3 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              href="/services"
              className="border-b border-gray-100 py-3 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Other Services
            </Link>
            <Link
              href="/contact"
              className="py-3 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
