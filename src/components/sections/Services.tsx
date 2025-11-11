const services = [
  {
    title: 'Tax Preparation & Future Planning',
    description:
      'Full-service preparation and proactive planning so individuals and companies can stay compliant while looking ahead with confidence.',
    pillar: 'Strategy',
  },
  {
    title: 'Tax Issues',
    description:
      'Evaluation of prior filings, amendments, and notices to determine next steps and resolve outstanding tax questions efficiently.',
    pillar: 'Resolution',
  },
  {
    title: 'Bookkeeping & Outsourced Accounting',
    description:
      'Bank reconciliations, vendor and receivables management, payroll processing, and monthly close procedures handled with controller-level oversight.',
    pillar: 'Operations',
  },
  {
    title: 'Sales & Use Tax',
    description:
      'Monthly calculations and filings that keep sales and use tax compliant across jurisdictions while reducing administrative strain.',
    pillar: 'Compliance',
  },
  {
    title: 'Internal Controls',
    description:
      'Assessment and refinement of control structures so risks are mitigated and reporting remains accurate, timely, and audit-ready.',
    pillar: 'Governance',
  },
  {
    title: 'Start-Up Advisory',
    description:
      'Entity formation guidance, cash-flow planning, and early-stage advisory to help emerging businesses make informed decisions from day one.',
    pillar: 'Growth',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold-300/10 blur-[120px]" />
        <div className="absolute -top-20 right-1/3 h-64 w-64 rounded-full bg-gold-400/10 blur-[130px]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="luxeyebrow">Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-gold-100 md:text-5xl">Comprehensive Services</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-100/80">
            Every engagement starts with a focused discovery session. Explore the services available to support your
            accounting and tax objectives.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-gold-300/50 hover:bg-gold-500/15"
            >
              <span className="luxeyebrow inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 tracking-[0.5em] text-gold-200/90">
                {service.pillar}
              </span>
              <h3 className="mt-6 font-serif text-2xl text-gold-100">{service.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-slate-100/85">{service.description}</p>
              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold-200/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />
                Core Service
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


