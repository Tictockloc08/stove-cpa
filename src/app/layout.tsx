import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Stephen D. Phillips, CPA - A Trusted Tax Accountant',
  description: 'Premier accounting firm serving individuals and businesses. Tax preparation, planning, and comprehensive financial services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-slate-950 text-gray-100 antialiased selection:bg-gold-500/30">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


