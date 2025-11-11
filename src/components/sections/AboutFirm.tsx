export default function AboutFirm() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/10 blur-[120px]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-5xl text-center">
          <p className="luxeyebrow">About the Practice</p>
          <h2 className="mt-4 text-3xl font-semibold text-gold-100 md:text-5xl">
            Tailored Counsel. Dependable Results.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-100/80">
            Stephen D. Phillips, CPA delivers full-service accounting support—from business and individual tax services to
            comprehensive bookkeeping and outsourced accounting solutions. Remote engagements are available nationwide with
            in-person consultations by appointment.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-100/80">
            The practice focuses on individual tax returns, start-ups, self-employed professionals, and businesses with fewer
            than 100 employees. Every engagement balances high-quality execution with cost-conscious rates so clients save
            time, reduce risk, and remain confident in their financial position.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Flexible & Confidential',
              copy: 'Virtual delivery with secure document handling keeps your financial information protected while preserving your schedule.',
            },
            {
              title: 'Industry Depth',
              copy: 'Focused insight for start-ups, closely held businesses, and self-employed professionals navigating everyday and complex obligations.',
            },
            {
              title: 'Outcome Focused',
              copy: 'Practical planning and ongoing reviews designed to streamline operations, control cost, and support growth.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-gold-300/50 hover:bg-gold-500/10"
            >
              <h3 className="font-serif text-2xl text-gold-100">{item.title}</h3>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">Confidence · Clarity · Continuity</p>
              <p className="mt-6 text-base leading-relaxed text-slate-100/85">{item.copy}</p>
              <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


