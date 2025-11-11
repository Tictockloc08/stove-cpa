import Image from 'next/image';

export default function AboutMrPhillips() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-gold-300/15 blur-[140px]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-5xl text-center">
          <p className="luxeyebrow">Principal Profile</p>
          <h2 className="mt-4 text-3xl font-semibold text-gold-100 md:text-5xl">Meet Stephen D. Phillips, CPA</h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <p className="text-lg leading-relaxed text-slate-100/85">
              Stephen D. Phillips, CPA, is an Enrolled Agent with dual master&apos;s degrees and former Big Four senior
              accountant with EY. His leadership spans Noble Street Advisors, Thompson Greenspon, and finance roles with
              Expovision, Compu Dynamics, and Avis Budget Group—experience that blends technical audit depth with daily
              operational insight.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-100/80">
              Stephen has partnered with business owners, CFOs, controllers, and high-net-worth clients to navigate complex
              accounting and tax requirements. Today he leads his own boutique firm, offering responsive service, direct
              access, and practical guidance—driven by a commitment to see clients succeed and move forward with confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.35em] text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-2">Licensed in CA & VA</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Trusted Advisor Since 2009</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Virtual & In-Person</span>
            </div>
            <div className="mt-10">
              <a href="/#contact" className="btn-secondary">
                Request a Consultation
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative h-[26rem] w-full max-w-md rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10">
                <Image
                  src="/images/headshot.png"
                  alt="Stephen D. Phillips, CPA"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

