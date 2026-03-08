import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Driveway Services in Bolton & Greater Manchester | Sulli's Mega Driveways",
  description:
    'Block paving, tarmac, resin bound surfaces, new driveway installations and groundworks across Bolton and Greater Manchester.',
}

const services = [
  {
    icon: '🚗',
    title: 'New Driveway Installations',
    description:
      'Full excavation, base preparation and professional finishing. We build driveways the right way from the start, ensuring your surface is level, durable and properly drained for years to come.',
  },
  {
    icon: '🧱',
    title: 'Block Paving Driveways',
    description:
      "Available in a range of colours and patterns to suit your property. Block paving is one of the most popular driveway choices — it's versatile, attractive and individual blocks can be replaced if ever needed.",
  },
  {
    icon: '🛣',
    title: 'Tarmac Driveways',
    description:
      'Durable, cost-effective and ideal for heavy use. Tarmac driveways are a practical, long-lasting solution with a clean, professional finish that suits all types of property.',
  },
  {
    icon: '✨',
    title: 'Resin Bound Surfaces',
    description:
      'Smooth, modern finishes with excellent drainage. Resin bound driveways are SUDS compliant, low-maintenance and available in a wide range of colours and aggregate sizes.',
  },
  {
    icon: '🌿',
    title: 'Patios & Pathways',
    description:
      'Enhance your outdoor space with quality paving solutions. From natural stone patios to block paved pathways, we can transform any area of your garden or outdoor space.',
  },
  {
    icon: '🏗',
    title: 'Groundworks & Preparation',
    description:
      "Proper excavation, foundations and drainage. We don't cut corners on preparation — a quality finish starts with quality groundworks. Every project begins with thorough preparation.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-darker border-b border-brand-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-white/40 mb-3">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">
            Driveway &amp; Paving{' '}
            <span className="text-brand-orange">Services Across Greater Manchester</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            We provide a complete range of driveway and paving solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-brand-card border border-brand-border rounded-lg p-8 hover:border-brand-orange/40 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="font-heading font-bold text-2xl text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-white/55 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-brand-card border border-brand-orange/30 rounded-lg p-8 text-center">
            <p className="text-white/70 text-lg mb-4">
              Not sure which option is right for you? We&apos;re happy to offer advice during your free
              quote visit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded transition-colors duration-200"
            >
              Book a Free Quote Visit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
