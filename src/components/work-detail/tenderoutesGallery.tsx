import Image from 'next/image'

export default function TenderoutesGallery() {
  return (
    <div className="w-full px-4 sm:px-5 md:px-16 lg:px-24 py-6 md:py-8 lg:pb-24 h-auto">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* First Square Image */}
        <div className="w-full sm:w-1/3 aspect-square rounded-2xl overflow-hidden  relative">
          <Image 
            src="/images/Web-development/tenderoutes-1.jpg" 
            alt="Team AE Web Banner"
            fill
            className="object-cover"
          
            priority
          />
        </div>
        {/* Second Square Image */}
        <div className="w-full sm:w-1/3 aspect-square rounded-2xl overflow-hidden   relative">
          <Image 
            src="/images/Web-development/tenderoutes-3.jpg" 
            alt="Team AE Web Interface"
            fill
            className="object-cover object-right"
         
          />
        </div>
        {/* Third Square Image */}
        <div className="w-full sm:w-1/3 aspect-square rounded-2xl overflow-hidden   relative">
          <Image 
            src="/images/Web-development/tenderoutes-4.jpg" 
            alt="Team AE Web Background"
            fill
            className="object-cover object-right"
      
          />
        </div>
      </div>
    </div>
  )
}
  