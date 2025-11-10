export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <div className="absolute bottom-0 right-24 h-72 w-72 rounded-full bg-gold-300/15 blur-[130px]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="luxeyebrow">Get in Touch</p>
          <h2 className="mt-4 text-3xl font-semibold text-gold-100 md:text-5xl">
            Connect with Stephen D. Phillips, CPA
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-100/80">
            Reach out to discuss accounting, tax planning, or advisory needs. Messages receive a response within one
            business day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            {
              label: 'Office Location',
              value: 'San Diego, CA',
              href: null,
              hint: 'In-person meetings available by appointment',
            },
            {
              label: 'Direct Line',
              value: '(703) 297-6370',
              href: 'tel:703-297-6370',
              hint: 'Monday – Friday, 9am to 6pm PST',
            },
            {
              label: 'Email',
              value: 'stevephillips825@gmail.com',
              href: 'mailto:stevephillips825@gmail.com',
              hint: 'Secure document exchange arranged after introduction',
            },
            {
              label: 'Schedule',
              value: 'Book a Consultation →',
              href: '/book-appointment',
              hint: 'Virtual and in-person options available',
            },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/60"
            >
              <p className="luxeyebrow">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-4 block font-serif text-2xl text-gold-100 transition-colors hover:text-white"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-4 font-serif text-2xl text-gold-100">{item.value}</p>
              )}
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/50">{item.hint}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


