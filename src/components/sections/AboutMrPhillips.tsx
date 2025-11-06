import Image from 'next/image';

export default function AboutMrPhillips() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-secondary text-center mb-16">About Mr. Phillips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/headshot.png"
                alt="Steven Phillips, CPA"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-body mb-6">
                Steven Phillips is a CPA, an Enrolled Agent, a Master of Science in Real Estate (MSRE) and an MBA. Steven has worked with a wide variety of small to medium sized businesses, high-net-worth clients, real estate professionals & investors, and real estate developers to provide tax preparation and other tax services.
              </p>
              <p className="text-body">
                His knowledge of and expertise in those areas is enhanced by his passion to help people.
              </p>
              <div className="mt-8">
                <a href="/#contact" className="btn-secondary">
                  Learn More About Steven
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

