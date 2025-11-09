export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h1 className="heading-primary mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-body space-y-6">
              <p>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <div>
                <h2 className="heading-tertiary mb-4">Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, such as when you fill out our contact form, schedule an appointment, or communicate with us.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about our services.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="heading-tertiary mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:stevephillips825@gmail.com" className="text-navy-600 hover:text-navy-800">
                    stevephillips825@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


