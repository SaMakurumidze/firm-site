import Header from "@/components/header"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Target, Lightbulb, Users, Book, Heart, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Who We Are"
        description="Learn about our journey, mission, and the team behind EGC's innovative solutions."
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mb-16 space-y-8">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="leading-relaxed text-gray-700">
              Evolution Global Consultancy (EGC) was founded to turn overlooked problems into scalable business
              opportunities. We identified a gap—billions in idle capital, underfunded SMEs, and infrastructure
              bottlenecks—and built solutions to bridge them. With deep roots in Africa and a global outlook, EGC brings
              together innovation, strategy, and execution to solve high-impact societal and business challenges.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">What We Do</h3>
            <p className="leading-relaxed text-gray-700">
              EGC offers high-value consulting and digital solutions across ten core areas—from research and e-commerce
              to IT payments and infrastructure advisory. Our mobile and USSD platform enables everyday users to invest
              micro-capital, while helping pre-IPO businesses access growth funding without traditional barriers.
              Governments benefit from cost-effective, data-driven consulting that stretches budgets and drives
              development.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Why It Matters</h3>
            <p className="leading-relaxed text-gray-700">
              We deliver outcomes—not just advice. Our platforms unlock new capital flows, increase financial inclusion,
              and accelerate business scaling. For clients, that means more funding, faster deals, and measurable
              growth. For governments, it means better infrastructure at lower cost. EGC is not just a consultancy—it's
              a launchpad for financial and societal transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="leading-relaxed text-gray-700">
                Our mission is to unlock capital, drive growth, and enable scalable change for businesses, governments,
                and individuals—through smart technology, trusted collaboration, and practical innovation.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="leading-relaxed text-gray-700">To be a catalyst of distinctive success.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <Users className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold text-gray-900">Collaboration</h3>
              <p className="text-gray-700">We believe that for us to succeed, our stakeholder must succeed first.</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <Lightbulb className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold text-gray-900">Innovativeness</h3>
              <p className="text-gray-700">
                We innovate relentlessly—equipping you with smarter strategies, world-class tools, and market-ready
                solutions that drive growth and loyalty.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <Heart className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold text-gray-900">Love</h3>
              <p className="text-gray-700">
                Our standards are to love the Lord our God with all our heart, soul, mind and strength. And also, to
                love our stakeholder as we love our self.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <Book className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold text-gray-900">Prudence</h3>
              <p className="text-gray-700">
                We act with wisdom, care, and responsibility—delivering well-thought-out solutions that protect your
                interests and support lasting success.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg">
              <CheckCircle className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold text-gray-900">Trust</h3>
              <p className="text-gray-700">
                We have faith in your capabilities to prosper. And through shared trust, acquired by faith in our
                practical methods and sagacious counsel, together will prosper indefinitely.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Leadership Team</h2>
          <p className="mb-8 text-lg text-gray-700">
            EGC is led by a diverse team of experienced professionals with expertise in finance, technology, business
            development, law, and research. Our leadership team combines deep industry knowledge with innovative
            thinking to drive our mission forward.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 p-6 text-center">
              <img
                src="/professional-african-business-executive-portrait.jpg"
                alt="K. R. Makurumidze"
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-900">K. R. Makurumidze</h3>
              <p className="mb-3 font-medium text-blue-600">Founder/Director</p>
              <p className="text-sm text-gray-700">
                With over 15 years of experience in investment banking and business development across Africa.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 text-center">
              <img
                src="/african-technology-professional-portrait.jpg"
                alt="Prosper Mapepa"
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Prosper Mapepa</h3>
              <p className="mb-3 font-medium text-blue-600">Technology Officer</p>
              <p className="text-sm text-gray-700">
                A technology innovator with expertise in fintech solutions and digital platforms.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 text-center">
              <img
                src="/african-finance-professional-portrait.jpg"
                alt="Freedom Danha"
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Freedom Danha</h3>
              <p className="mb-3 font-medium text-blue-600">Finance Manager</p>
              <p className="text-sm text-gray-700">
                Financial strategist with a background in investment management and corporate finance.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 text-center">
              <img
                src="/african-legal-professional-portrait.jpg"
                alt="Munashe Rupondo"
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Munashe Rupondo</h3>
              <p className="mb-3 font-medium text-blue-600">Company Secretary</p>
              <p className="text-sm text-gray-700">
                Compliance & legal expert with experience in data protection law, contract law, international commercial
                law etc., across various markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
