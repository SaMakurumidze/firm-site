"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import {
  Wallet,
  Search,
  Lightbulb,
  DollarSign,
  TrendingUp,
  BarChart,
  TestTube,
  Rocket,
  ArrowUpCircle,
} from "lucide-react"

export default function SolutionsPage() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        setTimeout(() => {
          const top = element.getBoundingClientRect().top + window.pageYOffset - 100
          window.scrollTo({ top, behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Header />

      <PageHero
        title="Our Solutions"
        description="Discover innovative solutions designed to empower businesses, governments and individuals across Africa and beyond."
      />

      <div className="container mx-auto px-6 py-16">
        <div className="space-y-16">
          <div id="ability" className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900">
              <Wallet className="h-8 w-8 text-blue-600" />
              Ability
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Investment capital is a highly demanded resource domestically, regionally, continentally, and even
              globally. As EGC we have created Ability, a mobile capital wallet, that empowers you to financially
              accumulate capital, exchange it with both Ability users and pre-IPO private businesses with rapid growth
              potential, and earn a dividend or return on your investment through various options.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <DollarSign className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Capital Accumulation</h3>
                <p className="text-gray-600">
                  Securely inject and grow your investment capital with our innovative mobile capital wallet solution.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <ArrowUpCircle className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Capital Exchange</h3>
                <p className="text-gray-600">
                  Exchange capital with other Ability users, pre-IPO private businesses, and public entities seamlessly.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <TrendingUp className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Investment Returns</h3>
                <p className="text-gray-600">Earn dividends and returns on your investments through various options.</p>
              </div>
            </div>

            <p className="mb-6 text-gray-700">
              If you don't have Ability, visit Apple Store or Play Store and download the app right now.
            </p>
            <button className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800">
              Download Ability
            </button>
          </div>

          <div id="research" className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900">
              <Search className="h-8 w-8 text-blue-600" />
              Research Consulting
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Research consulting is a service in which we conduct a systematic evaluation of a business phenomenon
              through various methodologies, some of which may include experiments, observations, interviews, and
              surveys. Our research services help businesses make informed decisions based on data-driven insights.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <BarChart className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Market Analysis</h3>
                <p className="text-gray-600">Comprehensive market analysis to identify opportunities and threats.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <Search className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Consumer Research</h3>
                <p className="text-gray-600">In-depth consumer research to understand behaviors and preferences.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <TrendingUp className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Trend Forecasting</h3>
                <p className="text-gray-600">Identify emerging trends to stay ahead of the competition.</p>
              </div>
            </div>

            <button className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800">
              Learn More
            </button>
          </div>

          <div id="concept" className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900">
              <Lightbulb className="h-8 w-8 text-blue-600" />
              New Concept Development
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Ignite your next big venture with our premium new business concept development consulting. We guide bold
              thinkers through powerful ideation, sharp concept testing, and high-impact market launches. Designed for
              ambitious brands ready to lead, our process transforms ideas into standout solutions that capture markets
              — locally and globally — with speed, precision, and lasting value.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <Lightbulb className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Ideation</h3>
                <p className="text-gray-600">Structured ideation processes to generate innovative business concepts.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <TestTube className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Concept Testing</h3>
                <p className="text-gray-600">Rigorous testing methodologies to validate new business concepts.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <Rocket className="mb-4 h-10 w-10 text-blue-600" />
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Market Launch</h3>
                <p className="text-gray-600">Strategic guidance for successful market entry and growth.</p>
              </div>
            </div>

            <button className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800">
              Discover More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
