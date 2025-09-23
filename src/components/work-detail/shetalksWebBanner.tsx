export default function SheTalksWebBanner() {
    return (
      <div 
        className="h-[600px] relative flex items-center px-5 md:px-16 lg:px-24 bg-[url('/images/Web-development/she-4.jpg')] bg-cover md:bg-cover  bg-no-repeat"
      >
        {/* Overlay with gradient for left side darkness */}
        <div 
          className="absolute inset-0"
          
        />
        
        <div className="max-w-xl w-full space-y-6 relative z-10 text-white">
          {/* Mobile: short heading, md+: full heading */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight block md:hidden">
            Web we built for SheTalks  – Empowering Women, Sharing Stories
          </h1>
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight hidden md:block">
            Web we built for SheTalks  – Empowering Women Through Stories and Opportunities
          </h1>
        

          <div className="space-y-4 text-white text-lg">
            
            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Industry:</span>
              <span className="text-base sm:text-lg text-gray-200">Empowerment & Community</span>
            </div>

            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Service:</span>
              <span className="text-base sm:text-lg text-gray-200">Web Development</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
    