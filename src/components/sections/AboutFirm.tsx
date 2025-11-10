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
            From high-net-worth individuals to emerging enterprises, Stephen D. Phillips, CPA provides personalized tax
            and accounting services that prioritize clarity, responsiveness, and lasting partnerships.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Flexible & Confidential',
              copy: 'Virtual consultations, secure document handling, and clear communication keep your financial information protected.',
            },
            {
              title: 'Industry Depth',
              copy: 'Focused insight for real estate, start-ups, professional services, and closely held businesses navigating complex obligations.',
            },
            {
              title: 'Outcome Focused',
              copy: 'Proactive planning and regular reviews designed to preserve capital, manage risk, and support growth.',
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


