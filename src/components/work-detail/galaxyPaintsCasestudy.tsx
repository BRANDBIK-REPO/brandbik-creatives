import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins', // optional: for using with Tailwind
});

export default function GalaxyPaintsCaseStudy() {
    return (
      <div className={`h-auto lg:h-screen bg-white px-5 md:px-16 lg:px-24 py-12 lg:py-28 lg:pb-0 ${poppins.className}`}>
        <div className="mx-auto space-y-8 md:space-y-16 lg:space-y-20">
          {/* Scope Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">Scope</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg block md:hidden">
                Galaxy Paints, based in Pune, specializes in eco-friendly, high-performance paint products for both interiors and exteriors.
              </p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                Galaxy Paints, based in Pune, specializes in eco-friendly, high-performance paint products for both interiors and exteriors. Their product range includes emulsions, primers, damp-proof coatings, and expert guidance for professional-grade finishes. Our project involved designing and developing a modern, user-friendly website to showcase their offerings and expertise.
              </p>
            </div>
          </div>
  
          {/* The Challenge Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">The Challenge</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg block md:hidden">
                The main challenge was to create a digital presence that effectively communicates Galaxy Paints’ commitment to sustainability and quality.
              </p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg hidden md:block">
                The main challenge was to create a digital presence that effectively communicates Galaxy Paints’ commitment to sustainability and quality, while making their diverse product range easily accessible to customers. The website needed to balance technical product information with an engaging, approachable design to appeal to both professionals and homeowners.
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
                <div className="flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4">
                  <span className="text-gray-800 font-medium text-base md:text-lg border border-gray-300 rounded-full px-4 py-2 md:px-8 md:py-3">
                    Website Development
                  </span>
                  <span className="text-gray-800 font-medium text-base md:text-lg border border-gray-300 rounded-full px-4 py-2 md:px-8 md:py-3">
                    UI/UX Design
                  </span>
                  <span className="text-gray-800 font-medium text-base md:text-lg border border-gray-300 rounded-full px-4 py-2 md:px-8 md:py-3">
                    Content Structuring
                  </span>
                  <span className="text-gray-800 font-medium text-base md:text-lg border border-gray-300 rounded-full px-4 py-2 md:px-8 md:py-3">
                    Product Presentation
                  </span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom divider line */}
          <div className="border-b border-gray-200"></div>
        </div>
      </div>
    )
  }
  