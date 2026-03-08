import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Gallery | Sulli's Mega Driveways Bolton & Greater Manchester",
  description:
    "Browse examples of our completed driveways and paving projects across Bolton and Greater Manchester.",
}

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-darker border-b border-brand-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-white/40 mb-3">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Gallery</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">
            Our <span className="text-brand-orange">Recent Projects</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Browse examples of our completed driveways and paving projects across Bolton and
            Greater Manchester.
          </p>
          <p className="text-brand-orange font-heading font-semibold text-xl mt-3">
            Quality. Precision. Professional Finish.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-brand-card border border-brand-border rounded-lg flex flex-col items-center justify-center gap-2"
              >
                <svg
                  className="w-10 h-10 text-white/15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="text-white/20 text-xs">Photo coming soon</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              Photos from recent projects will be added here shortly. In the meantime,{' '}
              <Link href="/contact" className="text-brand-orange hover:underline">
                get in touch
              </Link>{' '}
              to discuss your project.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
