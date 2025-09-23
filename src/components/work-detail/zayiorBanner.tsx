"use client";
 

export default function CyberceedBanner() {
  
  return (
    <div 
      className=" h-[600px] relative flex items-center px-5 md:px-16 lg:px-24"
      style={{ 
        backgroundImage:   
           'url(/images/Web-development/zayior-4.jpg)'
       ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
     
      
      {/* Only show text on non-mobile views */}
      
        <div className="max-w-xl w-full space-y-6 relative z-10 text-white">
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
            We built Zayior&apos;s luxury resort website with immersive visuals and easy booking.
          </h1>

          <div className="space-y-4 text-white text-lg">
            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Industry:</span>
              <span className="text-base sm:text-lg text-gray-200">Resort & Hospitality</span>
            </div>

            <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-base sm:text-lg">Location:</span>
              <span className="text-base sm:text-lg text-gray-200">Kakkadampoyil</span>
            </div>
          </div>
        </div>
      
    </div>
  )
}
  