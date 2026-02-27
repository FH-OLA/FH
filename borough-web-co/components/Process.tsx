const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We discuss your goals, audience and requirements.',
  },
  {
    number: '02',
    title: 'Fixed Quote',
    description:
      'You receive a clear price and timeline.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'We create your site and keep you updated throughout.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We launch your website and provide optional ongoing support.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900">
            Simple, straightforward process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-gradient-to-r from-amber-200 to-transparent" />
              )}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-navy-950 border border-navy-800">
                <span className="text-4xl font-black text-amber-500/30 mb-2">{step.number}</span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
