import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins', // optional: for using with Tailwind
});

export default function GamegateCaseStudy() {
    const services = [
      ["Full Stack Web Development", "Payment Gateway", "Authentication"],
      [ "Marketplace Integration", "Security & Compliance"],
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
              {/* Mobile: show only first sentence, Desktop: show full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg block lg:hidden">
                Built a robust, secure, and scalable full stack web application for GG‑TOPS, a global digital marketplace enabling gamers to buy and sell virtual gaming assets such as gift cards, coins, and accounts.
              </p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden lg:block">
                Built a robust, secure, and scalable full stack web application for GG‑TOPS, a global digital marketplace enabling gamers to buy and sell virtual gaming assets such as gift cards, coins, and accounts. The platform was designed to facilitate seamless, secure transactions and provide a user-friendly experience for a worldwide audience.
              </p>
            </div>
          </div>
  
          {/* The Challenge Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">The Challenge</h2>
            </div>
            <div className="lg:col-span-8">
              {/* Mobile: show only first sentence, Desktop: show full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg block lg:hidden">
                The client required a secure, intuitive platform to support global transactions of digital gaming assets, with robust user authentication.
              </p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden lg:block">
                The client required a secure, intuitive platform to support global transactions of digital gaming assets, with robust user authentication, fraud prevention, and compliance with international standards. Ensuring trust, ease of use, and scalability for a diverse gaming community were key priorities.
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
  