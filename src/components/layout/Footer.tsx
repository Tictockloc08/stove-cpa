import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute left-8 top-0 h-64 w-64 rounded-full bg-gold-400/10 blur-[120px]" />
      </div>

      <div className="container-custom relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="luxeyebrow">Stephen D. Phillips, CPA</p>
            <h3 className="mt-4 font-serif text-3xl text-gold-100">
              Trusted tax and accounting guidance for complex needs.
            </h3>
            <p className="mt-6 max-w-md text-sm text-white/70 leading-relaxed">
              Partnering with individuals, founders, and fiduciaries across the United States.
            </p>
          </div>

          <div>
            <h4 className="luxeyebrow text-gold-200/80">Navigation</h4>
            <ul className="mt-6 space-y-3 text-sm uppercase tracking-[0.35em] text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="transition-colors hover:text-gold-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition-colors hover:text-gold-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition-colors hover:text-gold-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="transition-colors hover:text-gold-200">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="luxeyebrow text-gold-200/80">Connect</h4>
            <div className="mt-6 space-y-5 text-sm text-white/70">
              <p>San Diego, CA</p>
              <p>
                <a href="mailto:stevephillips825@gmail.com" className="transition-colors hover:text-gold-200">
                  stevephillips825@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:703-297-6370" className="transition-colors hover:text-gold-200">
                  (703) 297-6370
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.35em] text-white/40">
          <p>&copy; {new Date().getFullYear()} Stephen D. Phillips, CPA. All Rights Reserved.</p>
          <p className="mt-3">
            <Link href="/privacy-policy" className="transition-colors hover:text-gold-200">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}


