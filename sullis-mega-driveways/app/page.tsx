import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import GalleryPreview from '@/components/GalleryPreview'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro section */}
      <section className="py-16 bg-brand-card border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-lg leading-relaxed">
            At Sulli&apos;s Mega Driveways, we help homeowners across Bolton transform tired, damaged or
            outdated driveways into strong, attractive, long-lasting surfaces built to stand the test
            of time.
          </p>
          <p className="text-white/60 text-lg leading-relaxed mt-4">
            Whether you&apos;re looking for block paving, tarmac, resin or a complete driveway
            installation, our team delivers workmanship you can trust — with honest pricing and no
            hidden surprises.
          </p>
        </div>
      </section>

      <Services />
      <WhyChooseUs />
      <GalleryPreview />
      <CTASection />
    </>
  )
}
