export default function GalaxonMaxBanner() {
  return (
    <div 
      className="h-[600px] relative flex items-center px-5 md:px-16 lg:px-24 bg-[url('/images/Digital-Marketing/galaxy-min.jpg')] bg-cover md:bg-contain bg-right bg-no-repeat"
    >
      {/* Overlay with gradient for left side darkness */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0) 80%)',
        }}
      />
      
      <div className="max-w-xl w-full space-y-6 relative z-10 text-white">
        <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
          Creative Social Media Works for Galaxon Max
        </h1>
        <div className="space-y-4 text-white text-lg">
          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Client:</span>
            <span className="text-base sm:text-lg text-gray-200">Galaxon Max India Pvt. Limited</span>
          </div>
          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Service:</span>
            <span className="text-base sm:text-lg text-gray-200">Social Media</span>
          </div>
        </div>
      </div>
    </div>
  )
}
  