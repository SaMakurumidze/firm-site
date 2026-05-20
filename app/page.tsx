"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kruger-bc0PmHIm4GVqAD0wzYc9Wj5FJyjaMm.jpg",
    title1: "Abi",
    title2: "lity",
    subtitle: "Capital",
    heading: "Solution 01: Ability",
    description:
      "Unlock the power of capital with Ability—a mobile wallet by EGC designed to help you grow, trade, and profit from your investments. Seamlessly accumulate capital, exchange it with other users or fast-growing pre-IPO businesses, and earn potential dividends or IPO returns. Whether you're investing locally or globally, Ability puts opportunity in your hands. Ready to grow your financial future? Download Ability now on the Apple Store or Play Store.",
    link: "/solutions#ability",
    marginRight: "-10px",
    marginLeft: "0",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mutarazi-falls-tBrqD7orTUb3Dcopk7RRZtPPt0AyM0.jpg",
    title1: "Res",
    title2: "earch",
    subtitle: "Consulting",
    heading: "Solution 02: Research",
    description:
      "We deliver fast, tailored research that empowers smarter decision-making across sectors. From market analysis to policy insights, our data-driven solutions help you reduce risk, unlock opportunities, and move with confidence—locally and globally.",
    link: "/solutions#research",
    marginRight: "0",
    marginLeft: "0",
  },
  {
    id: 3,
    image: 
"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desert-FD479DURBCyaKUWIpy37Ck4glEIkh1.webp",
    title1: "Con",
    title2: "cept",
    subtitle: "Development",
    heading: "Solution 03: New Concept Development",
    description:
      "We transform bold ideas into scalable, investable ventures. Whether you're a startup, government agency, or investor, our team builds concepts grounded in research and designed for real-world impact—ready to launch, grow, and lead in any market.",
    link: "/solutions#concept",
    marginRight: "-10px",
    marginLeft: "10px",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <Header />
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentSlide ? "slide-active" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.heading}
                className={`absolute inset-0 h-full w-full object-cover pointer-events-none transition-opacity duration-300 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`absolute top-0 left-0 w-full md:w-1/2 h-full transition-all duration-500 ${
                  index === currentSlide ? "translate-x-0 z-10" : "-translate-x-full"
                }`}
              >
                {/* Penetrate Blur Glass Container with 80px blur */}
                <div className="penetrate-blur">
                  <h1 className="font-bold text-white" style={{ marginRight: slide.marginRight }}>
                    {slide.title1}
                  </h1>
                </div>

                <div
                  className="absolute left-[10%] right-[5%] md:right-auto md:max-w-xl text-white z-20"
                  style={{ bottom: "8%" }}
                >
                  <h3 className="mb-2.5" style={{ fontSize: "20px" }}>
                    {slide.heading}
                  </h3>
                  <p className="leading-relaxed my-2.5 mb-4" style={{ fontSize: "16px", margin: "10px 0 15px" }}>
                    {slide.description}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-block bg-white text-[#444] font-semibold transition-all duration-500 hover:bg-transparent hover:text-white border-2 border-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                    style={{
                      padding: "14px 28px",
                      fontSize: "16px",
                      borderRadius: "4px",
                    }}
                  >
                    More Details
                  </Link>
                </div>
              </div>

              <div
                className={`hidden md:flex absolute top-0 right-0 w-1/2 h-full items-center transition-all duration-500 ${
                  index === currentSlide ? "translate-x-0 z-10" : "translate-x-full"
                }`}
              >
                <div className="relative w-full">
                  <h1
                    className="font-bold text-white right-info-text"
                    style={{
                      fontSize: slide.title2FontSize || "150px",
                      marginLeft: slide.marginLeft,
                      lineHeight: 1,
                    }}
                  >
                    {slide.title2}
                  </h1>
                  <h3
                    className="font-normal text-white right-info-subtitle"
                    style={{
                      fontSize: slide.subtitleFontSize || "65px",
                      marginLeft: "13px",
                    }}
                  >
                    {slide.subtitle}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 right-8 z-30 flex gap-3 md:bottom-12 md:right-12 md:gap-4">
          <button
            onClick={prevSlide}
            className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30 border border-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30 border border-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 gap-2 md:bottom-28">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
