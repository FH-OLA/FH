import Link from 'next/link'

export default function Community() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-darker">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-green font-heading font-semibold uppercase tracking-widest text-sm mb-4">
              Community
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Leagues, Competitions &amp; Friendly Matches
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Whether you&apos;re a competitive player or just playing for fun,
              we welcome all skill levels. Join one of our regular league
              nights, enter a tournament, or organise your own group session.
            </p>
            <Link
              href="/leagues"
              className="inline-block border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold text-base px-7 py-3 rounded transition-all duration-200"
            >
              Enquire About Leagues
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '10+', label: 'Tables Available' },
              { value: '238+', label: 'Google Reviews' },
              { value: 'All', label: 'Skill Levels Welcome' },
              { value: '7', label: 'Days a Week' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-card border border-brand-border rounded-lg p-6 text-center"
              >
                <p className="font-heading font-bold text-4xl text-brand-green">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
