'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-900/70 backdrop-blur-xl">
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.2em] text-gold-200 transition-colors hover:text-gold-100"
          >
            Stephen D. Phillips, CPA
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 transition-colors hover:text-gold-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="rounded-full border border-white/10 p-2 text-slate-200 transition-all hover:border-gold-300/70 hover:text-gold-200 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-2 border-t border-white/10 py-6 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-full border border-white/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-100 transition-colors hover:border-gold-200/60 hover:text-gold-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}


