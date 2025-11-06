import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Steven Phillips, CPA</h3>
            <p className="text-gray-300">
              A trusted advisor for both individuals and businesses.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>San Diego, CA</li>
              <li>
                <a href="mailto:stevephillips825@gmail.com" className="hover:text-white transition-colors">
                  stevephillips825@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:703-297-6370" className="hover:text-white transition-colors">
                  (703) 297-6370
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Steven Phillips, CPA. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

