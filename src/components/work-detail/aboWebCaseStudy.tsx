import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins', // optional: for using with Tailwind
});

export default function AboWebCaseStudy() {
    const services = [
      [
        " Web Development",
        "User & Contractor Portal Design",
      
        "Service Category Management",
        "Mobile-First Responsive UI",
        "Admin Dashboard",
        "SEO & Local Optimization",
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
                We built a robust, user-friendly web platform for a Saudi-based home services marketplace, connecting customers with trusted local contractors for essential household tasks.
              </p>
              {/* Desktop/Tablet: full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                We built a robust, user-friendly web platform for a Saudi-based home services marketplace and booking app. The platform enables customers to seamlessly connect with professional local contractors for services such as plumbing, electrical work, painting, flooring, AC repair, and carpentry—backed by over 15 years of industry experience.
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
                The main challenge was to design a seamless digital experience that builds trust and simplifies booking for a wide range of home services.
              </p>
              {/* Desktop/Tablet: full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                The main challenge was to design a seamless digital experience that builds trust and simplifies booking for a wide range of home services. The platform needed to accommodate both customers and contractors, ensure secure transactions, and provide an intuitive interface for managing bookings, service categories, and real-time availability—all while reflecting the local Saudi market’s expectations for reliability and professionalism.
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
  