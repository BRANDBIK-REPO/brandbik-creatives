export default function MoonWhiteBanner() {
    return (
      <div 
        className="h-[600px] relative flex items-center px-5 md:px-16 lg:px-24"
        style={{
          backgroundImage: 'url(/moonwhite/five.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        
        {/* Overlay with gradient for left side darkness */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0) 80%)',
          }}
        />
        
        <div className="max-w-xl w-full space-y-6 relative z-10 text-white">
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
          Corporate identity for Moonwhite: a visionary group blending growth, trust, and innovation across ventures.          </h1>
  
          <div className="space-y-4 text-white text-lg">
            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Client:</span>
              <span className="text-base sm:text-lg text-gray-200">Moonwhite Group of Companies</span>
            </div>
  
            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Service:</span>
              <span className="text-base sm:text-lg text-gray-200">Corporate Branding & Identity</span>
            </div>
          </div>
        </div>
      </div>
    );
  } 