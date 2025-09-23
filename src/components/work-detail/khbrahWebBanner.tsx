export default function KhbrahWebBanner() {
    return (
      <div 
        className="h-[600px] relative flex items-center px-5 md:px-16 lg:px-24"
        style={{
          backgroundImage: 'url(/images/Web-development/khbrah-4.png)',
          backgroundSize: 'cover',
         
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay with gradient for left side darkness */}
        <div 
          className="absolute inset-0"
         
        />
        <div className="max-w-xl w-full space-y-6 relative z-10 text-white">
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
          Khbrah App: Legal help with expert lawyers, video calls, and docs—fast and easy.
          </h1>
          <div className="space-y-4 text-white text-lg">
            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Industry:</span>
              <span className="text-base sm:text-lg text-gray-200">Legal Services</span>
            </div>
            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Location:</span>
              <span className="text-base sm:text-lg text-gray-200">Saudi Arabia</span>
            </div>
          </div>
        </div>
      </div>
    )
  } 