import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins', // optional: for using with Tailwind
});

export default function SheTalksWebCaseStudy() {
    const services = [
      [
        "Brand Storytelling Website",
        "Content Management System",
        "SEO & Social Media Integration",
        "Interactive Community Features",
        "Responsive Design",
        "Event & Article Showcasing",
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
                We created an engaging advertising website for SheTalks, designed to amplify the app’s mission of empowering women through stories, opportunities, and community connection.
              </p>
              {/* Desktop/Tablet: full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                We developed a dynamic advertising website for SheTalks.world, crafted to highlight the app’s vision of empowering women globally. The site serves as a digital hub for sharing inspiring stories, promoting community events, and connecting users to the SheTalks app, while providing resources and information to support women’s personal and professional growth.
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
                The challenge was to create a vibrant, welcoming online presence that authentically represents the SheTalks brand and inspires women to join the movement.
              </p>
              {/* Desktop/Tablet: full text */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                The challenge was to design an advertising website that not only captures the essence of SheTalks’ empowering mission but also encourages engagement and app downloads. The site needed to balance compelling storytelling, intuitive navigation, and interactive features to foster a sense of community, while ensuring seamless integration with social media and the SheTalks app ecosystem.
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
  