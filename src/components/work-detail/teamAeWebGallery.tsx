import Image from 'next/image'

export default function TeamAeWebGallery() {
  return (
    <div className="w-full px-4 sm:px-5 md:px-16 lg:px-24 py-6 md:py-8 lg:pb-24 h-auto">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* First Square Image */}
        <div className="w-full sm:w-1/3 aspect-square rounded-2xl overflow-hidden border border-black relative">
          <Image 
            src="/images/Web-development/team-1.jpg" 
            alt="Team AE Web Banner"
            fill
            className="object-cover"
        
            priority
          />
        </div>
        {/* Second Square Image */}
        <div className="w-full sm:w-1/3 aspect-square rounded-2xl overflow-hidden border border-black relative">
          <Image 
            src="/images/Web-development/team-2.jpg" 
            alt="Team AE Web Interface"
            fill
            className="object-cover"
       
          />
        </div>
        {/* Third Square Image */}
        <div className="w-full sm:w-1/3 aspect-square rounded-2xl overflow-hidden border border-black relative">
          <Image 
            src="/images/Web-development/team-3.jpg" 
            alt="Team AE Web Background"
            fill
            className="object-cover"
        
          />
        </div>
      </div>
    </div>
  )
}
  