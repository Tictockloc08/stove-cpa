const services = [
  {
    title: 'Tax Preparation and Planning',
    description: 'Taxes can be a difficult and time-consuming task, but it doesn\'t have to be. Steven Phillips CPA makes it effortless, from start to finish.',
    icon: '📊',
  },
  {
    title: 'Sales Tax Remediation and Compliance',
    description: 'The Wayfair decision of 2019 has created new sales tax requirements for remote sellers. My firm can help remediate past sales tax compliance issues and setup software to automate sales tax collection, remittance and reporting.',
    icon: '💰',
  },
  {
    title: 'Tax Issues',
    description: 'From unfiled taxes to tax notices, I can analyze, address, and resolve any tax issues that may arise.',
    icon: '🔍',
  },
  {
    title: 'Fiduciary Tax Return Preparation',
    description: 'The IRS requires the filing of fiduciary income tax returns for trusts and estates on Form 1041. Allow me to simplify this process and prepare this complex tax filing.',
    icon: '📋',
  },
  {
    title: 'Bookkeeping & Accounting',
    description: 'Accounting mistakes can throw off your financials, become very costly and increase your IRS audit risk. I can help resolve those issues.',
    icon: '📚',
  },
  {
    title: 'New Business Ventures',
    description: 'I provide exceptional guidance for you along your business journey every step of the way.',
    icon: '🚀',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="heading-tertiary mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

