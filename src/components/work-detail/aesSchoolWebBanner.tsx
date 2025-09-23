export default function AesSchoolBanner() {
  return (
    <div 
      className="h-[600px] relative flex items-center px-5 md:px-16 lg:px-24"
      style={{
        backgroundImage: 'url(/images/Web-development/aes-3.jpg)',
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
        {/* Mobile view heading */}
        <h1 className="text-white text-3xl font-light leading-tight md:hidden">
          Website Development for AES School of Commerce
        </h1>
        {/* Desktop and tablet view heading */}
        <h1 className="hidden md:block text-white text-4xl lg:text-4xl font-light leading-tight">
          Website Development for AES School of Commerce, empowering future business leaders
        </h1>

        <div className="space-y-4 text-white text-lg">
          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Industry:</span>
            <span className="text-base sm:text-lg text-gray-200">Education</span>
          </div>

          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Location:</span>
            <span className="text-base sm:text-lg text-gray-200">Kerala, India</span>
          </div>
        </div>
      </div>
    </div>
  )
}
  