export default function Contact() {
  return (
    <section id="contact" className="bg-navy-900 text-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-secondary text-white text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-300">San Diego, CA</p>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <a
                href="mailto:stevephillips825@gmail.com"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                stevephillips825@gmail.com
              </a>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <a
                href="tel:703-297-6370"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                (703) 297-6370
              </a>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Have a Question?</h3>
              <a
                href="/book-appointment"
                className="inline-block mt-2 text-gold-400 hover:text-gold-300 transition-colors font-medium"
              >
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

