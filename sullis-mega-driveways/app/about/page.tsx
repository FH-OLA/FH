import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "About Us | Sulli's Mega Driveways Bolton",
  description:
    "Sulli's Mega Driveways is a local Bolton driveway and paving specialist committed to delivering reliable, high-quality workmanship.",
}

const values = [
  { label: 'Clear communication' },
  { label: 'Honest pricing' },
  { label: 'Professional standards' },
  { label: 'Respecting your property' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-darker border-b border-brand-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-white/40 mb-3">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>About</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">
            About <span className="text-brand-orange">Sulli&apos;s Mega Driveways</span>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Sulli&apos;s Mega Driveways is a local Bolton driveway and paving specialist committed
                to delivering reliable, high-quality workmanship.
              </p>
              <p className="text-white/65 text-lg leading-relaxed mb-6">
                We understand that a driveway is more than just somewhere to park — it&apos;s the first
                thing people see when they visit your home. That&apos;s why we focus on durability,
                detail and professional finishing on every project.
              </p>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                From small domestic driveways to larger installations, our goal is simple: deliver
                strong, long-lasting results our customers are proud of.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded transition-colors duration-200"
              >
                Get a Free Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-lg p-8">
              <h2 className="font-heading font-bold text-3xl text-white mb-6">
                What We <span className="text-brand-orange">Believe In</span>
              </h2>
              <ul className="space-y-5">
                {values.map((v) => (
                  <li key={v.label} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/15 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-brand-orange"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-lg font-medium">{v.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-brand-border">
                <p className="text-white/50 text-sm leading-relaxed">
                  If you&apos;re looking for dependable driveway installers in Bolton, you&apos;re in safe
                  hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
