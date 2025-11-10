const services = [
  {
    title: 'Tax Preparation & Planning',
    description:
      'Tax strategies for individuals, founders, and family offices focused on preserving wealth and maintaining compliance.',
    pillar: 'Strategy',
  },
  {
    title: 'Sales Tax Remediation',
    description:
      'Address multistate nexus obligations with detailed reviews, remediation plans, and automation support.',
    pillar: 'Compliance',
  },
  {
    title: 'IRS Representation',
    description:
      'Navigate notices and examinations with organized documentation, steady communication, and clear next steps.',
    pillar: 'Advocacy',
  },
  {
    title: 'Fiduciary & Trust Filings',
    description:
      'Preparation of fiduciary income tax returns and estate filings with careful attention to evolving requirements.',
    pillar: 'Stewardship',
  },
  {
    title: 'Controller-Level Bookkeeping',
    description:
      'Monthly financial statements, reconciliations, and dashboards that give leadership the clarity they need.',
    pillar: 'Operations',
  },
  {
    title: 'New Venture Advisory',
    description:
      'Entity formation, cash flow planning, and tax elections to help new ventures launch on solid footing.',
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


