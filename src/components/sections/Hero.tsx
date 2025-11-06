import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-primary text-white mb-6">
            A Trusted Tax Accountant
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            As a premier accounting firm, Steven Phillips, CPA, is a trusted advisor for both individuals and businesses.
          </p>
          <Link href="/book-appointment" className="btn-primary bg-gold-600 hover:bg-gold-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

