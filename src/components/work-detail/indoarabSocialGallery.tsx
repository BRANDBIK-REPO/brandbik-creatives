"use client"

import Image from "next/image"

export default function IndoArabSocialGallery() {
  return (
    <div className="w-full px-4 sm:px-5 md:px-16 lg:px-24 py-6 md:py-8 lg:pb-24 h-auto">
      {/* Main Image - Full width on mobile */}
      <div className="w-full rounded-2xl overflow-hidden mb-4 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative bg-[#F3D4FA]">
        <Image 
          src="/images/Digital-Marketing/indo-min.jpg" 
          alt="Green Door Organics Social Media Campaign"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Two Images - 50-50 on mobile, 70-30 on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-10 gap-4">
        {/* Left Image - 5 columns on mobile, 7 columns on larger screens */}
        <div className="col-span-1 md:col-span-7 rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative bg-[#F3D4FA]">
          <Image 
            src="/images/Digital-Marketing/indo-min.jpg" 
            alt="Green Door Organics Content Strategy"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Image - 5 columns on mobile, 3 columns on larger screens */}
        <div className="col-span-1 md:col-span-3 rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative bg-[#F3D4FA]">
          <Image 
            src="/images/Digital-Marketing/indo-min.jpg" 
            alt="Green Door Organics Social Media Posts"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
} 