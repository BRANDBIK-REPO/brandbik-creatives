export default function TeamAeWebBanner() {
  return (
    <div 
      className="h-[600px] relative flex items-center px-5 md:px-16 lg:px-24"
      style={{
        backgroundImage: 'url(/images/Web-development/teamae-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      {/* Overlay with gradient for left side darkness */}
      <div 
        className="absolute inset-0"
        
      />
      
      <div className="max-w-xl w-full space-y-6 relative z-10 text-white">
        <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
          Website for Team AE: a trusted online presence for Calicut’s leading financial experts.
        </h1>

        <div className="space-y-4 text-white text-lg">
          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Client:</span>
            <span className="text-base sm:text-lg text-gray-200">Mohammad Sahal (CEO)  , Favaz Ahamed (Director),</span>
          </div>

          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Location:</span>
            <span className="text-base sm:text-lg text-gray-200">Perinthalmanna, Kerala</span>
          </div>
        </div>
      </div>
    </div>
  );
} 