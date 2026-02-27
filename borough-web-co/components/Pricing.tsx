const plans = [
  {
    name: 'Starter',
    price: '£399',
    description: 'Get your business online quickly with a clean, professional site.',
    features: [
      'Up to 3 pages',
      'Mobile responsive',
      'Contact form',
      'Basic SEO setup',
      '1 revision round',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Business',
    price: '£599',
    description: 'A fully optimised site built to attract and convert customers.',
    features: [
      'Up to 6 pages',
      'Mobile responsive',
      'Contact form',
      'Full SEO optimisation',
      'Google Analytics setup',
      '2 revision rounds',
    ],
    highlight: true,
    cta: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '£799',
    description: 'Everything you need to grow — with a blog and content management.',
    features: [
      'Up to 10 pages',
      'Mobile responsive',
      'Contact form',
      'Full SEO optimisation',
      'Google Analytics setup',
      'Blog / CMS included',
      '3 revision rounds',
    ],
    highlight: false,
    cta: 'Get Started',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            Fixed quotes. No hidden fees. No awkward conversations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-navy-950 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-amber-500 text-navy-950 text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-navy-900'}`}>
                  {plan.name}
                </h3>
                <div className={`mt-2 text-4xl font-extrabold ${plan.highlight ? 'text-amber-400' : 'text-navy-900'}`}>
                  {plan.price}
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${plan.highlight ? 'text-navy-300' : 'text-navy-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlight ? 'bg-amber-500' : 'bg-navy-100'
                    }`}>
                      <svg
                        className={`w-3 h-3 ${plan.highlight ? 'text-navy-950' : 'text-navy-600'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={`text-sm ${plan.highlight ? 'text-navy-200' : 'text-navy-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-semibold text-base transition-colors ${
                  plan.highlight
                    ? 'bg-amber-500 hover:bg-amber-400 text-navy-950'
                    : 'bg-navy-950 hover:bg-navy-800 text-white'
                }`}
              >
                Get a Free Quote
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-navy-400 text-sm mt-10">
          Not sure which plan is right for you?{' '}
          <a href="#contact" className="text-amber-500 hover:underline font-medium">
            Get in touch
          </a>{' '}
          and we&apos;ll help you decide.
        </p>
      </div>
    </section>
  )
}
