'use client';

import { useState } from 'react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-primary text-center mb-4">Book Appointment</h1>
            <p className="text-center text-body mb-12">
              Schedule a consultation with Steven Phillips, CPA. Fill out the form below and we&apos;ll get back to you soon.
            </p>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h2>
                <p className="text-green-700">
                  Your appointment request has been submitted. We&apos;ll contact you shortly to confirm.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Tell us about your tax needs or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Submit Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

