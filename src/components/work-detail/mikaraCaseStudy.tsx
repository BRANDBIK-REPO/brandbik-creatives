import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins', // optional: for using with Tailwind
});

export default function MikaraCaseStudy() {
    const services = [
      [
        "Responsive Web Design",
        "UI/UX Design",
        "Backend Development",
        "SEO Optimization",
        "Content Management System Integration",
        "E-commerce Enablement",
      ],
    ]
  
    return (
      <div className={`h-auto lg:h-screen bg-white px-5 md:px-16 lg:px-24 py-12 lg:py-28 lg:pb-0 ${poppins.className}`}>
        <div className="mx-auto space-y-8 md:space-y-16 lg:space-y-20">
          {/* Scope Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">Scope</h2>
            </div>
            <div className="lg:col-span-8">
              {/* Mobile only: first sentence */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg block md:hidden">
                We built a digital platform for Mikara Organics, a nation-wide organic food provider, to showcase their pure, affordable produce and commitment to farmer welfare and customer satisfaction.
              </p>
              {/* Desktop/Tablet: full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                We built a digital platform for Mikara Organics, a nation-wide organic food provider registered in Karnataka since 2016, to highlight their dedication to purity, affordability, farmer welfare, and customer satisfaction. The website supports their expansion across India, including new distribution and team presence in regions like Kozhikode, Kerala.
              </p>
            </div>
          </div>
  
          {/* The Challenge Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">The Challenge</h2>
            </div>
            <div className="lg:col-span-8">
              {/* Mobile only: first sentence */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg block md:hidden">
                The challenge was to communicate Mikara Organics&apos; mission of delivering pure, affordable organic produce while supporting farmers and building trust with customers nationwide.
              </p>
              {/* Desktop/Tablet: full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                The challenge was to communicate Mikara Organics&apos; mission of delivering pure, affordable organic produce across India, emphasizing their support for farmer welfare and customer satisfaction. The website needed to build trust, clearly present their expanding operations, and make information accessible to a diverse audience.
              </p>
            </div>
          </div>
  
          {/* Services Provided Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">Services Provided</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {services.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4">
                    {row.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="text-gray-800 font-medium text-base md:text-lg border border-gray-300 rounded-full px-4 py-2 md:px-8 md:py-3">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Bottom divider line */}
          <div className="border-b border-gray-200"></div>
        </div>
      </div>
    )
  }
  