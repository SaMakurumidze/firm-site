import Header from "@/components/header"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { Search, TrendingUp, Settings, ShoppingCart, Signal, Award } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Research Consulting",
    description:
      "We deliver fast, tailored research that empowers smarter decision-making across sectors. From market analysis to policy insights, our data-driven solutions help you reduce risk, unlock opportunities, and move with confidence—locally and globally.",
    image: "/business-research-consulting.jpg",
  },
  {
    icon: TrendingUp,
    title: "New Business Concept",
    description:
      "We transform bold ideas into scalable, investable ventures. Whether you're a startup, government agency, or investor, our team builds concepts grounded in research and designed for real-world impact—ready to launch, grow, and lead in any market.",
    image: "/business-innovation-startup.jpg",
  },
  {
    icon: Settings,
    title: "Change Management",
    description:
      "We help organizations navigate transformation with clarity and control. From IPO preparation to public sector reform, we align people, systems, and strategy to ensure change drives progress—not disruption.",
    image: "/change-management-business.jpg",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description:
      "We design and implement e-commerce platforms that connect investors, buyers, and businesses—seamlessly. From strategy to tech deployment, we help you tap into digital markets, increase visibility, and drive growth across borders.",
    image: "/ecommerce-technology-platform.jpg",
  },
  {
    icon: Signal,
    title: "Resource & Operations",
    description:
      "We streamline operations and optimize resource allocation for greater efficiency and impact. Whether scaling or restructuring, we ensure your systems and teams are aligned for sustainable performance and measurable ROI.",
    image: "/business-operations-management.png",
  },
  {
    icon: Award,
    title: "Brand Dev & Reinforcement",
    description:
      "We build brands that stand out and scale. From identity creation to market positioning, we help you craft a compelling presence that attracts customers, inspires loyalty, and amplifies your business value across regions",
    image: "/brand-development-strategy.jpg",
  },
]

const testimonials = [
  {
    content:
      "EGC's business strategy services were transformative for our company. Their team provided insights that helped us pivot our business model and capture new market opportunities.",
    author: "Michael Tshuma",
    role: "CEO, TechVentures",
    image: "/african-business-executive.jpg",
  },
  {
    content:
      "The market entry support we received from EGC was exceptional. Their deep understanding of regional markets helped us navigate complex regulatory environments and establish strong local partnerships.",
    author: "Tendai Moyo",
    role: "COO, GrowthFarms",
    image: "/african-business-professional-woman.jpg",
  },
  {
    content:
      "EGC's investment readiness program helped us secure the funding we needed to scale our operations. Their guidance on financial projections and pitch preparation was invaluable.",
    author: "Lisa Ncube",
    role: "Founder, HealthTech Solutions",
    image: "/african-female-entrepreneur.png",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Other Services"
        description="Discover our comprehensive range of specialized services designed to help your business thrive."
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            Beyond our core solutions, EGC offers a diverse range of specialized services tailored to meet the unique
            needs of businesses and entrepreneurs at various stages of growth. Our expert team brings deep industry
            knowledge and innovative approaches to every engagement.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="overflow-hidden rounded-xl border border-gray-200 transition-shadow hover:shadow-xl"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="mb-6 leading-relaxed text-gray-700">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block rounded-lg bg-gray-900 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-800"
                  >
                    Consult Us
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-gray-200 p-8">
                <p className="mb-6 leading-relaxed text-gray-700">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Let's work together to unlock your business potential and achieve sustainable growth. Contact us today to
            discuss how our services can address your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
