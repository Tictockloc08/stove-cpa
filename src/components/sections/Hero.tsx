import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sunset.jpg"
          alt="Sunset over greenspace"
          fill
          priority
          quality={85}
          className="object-cover brightness-[0.55] saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-slate-950/85 to-slate-950/94" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-gold-400/10 blur-[140px]" />
        <div className="absolute -left-24 top-20 h-[22rem] w-[22rem] rounded-full bg-gold-200/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,231,190,0.08),rgba(5,7,11,0))]" />
      </div>

      <div className="relative container-custom section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <p className="luxeyebrow">A Trusted Accountant</p>
          <h1 className="mt-6 text-4xl font-semibold text-gold-100 md:text-6xl">
            Trusted Accounting Leadership
            <span className="block font-light text-white/80">for individuals and businesses</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-100/80 md:text-xl">
            Stephen D. Phillips, CPA partners with clients to deliver tailored tax solutions and accounting oversight—
            providing the dependability you deserve from your advisor.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book-appointment" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link
              href="/#services"
              className="btn-secondary border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-gold-100"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


