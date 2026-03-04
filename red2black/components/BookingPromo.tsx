import Link from 'next/link'

export default function BookingPromo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
          Reserve Your Table in Advance
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Avoid waiting and guarantee your play time. Book online in seconds
          and receive confirmation by email.
        </p>
        <Link
          href="/book"
          className="inline-block bg-white hover:bg-white/90 text-brand-red font-bold text-lg px-10 py-4 rounded transition-colors duration-200"
        >
          Book Now
        </Link>
      </div>
    </section>
  )
}
