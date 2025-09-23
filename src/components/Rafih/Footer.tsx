"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
         <a href="/rafih-book" className="flex items-center" aria-label="BrandBik Home">
            <Image src="/rafi-logo.png" alt="BrandBik Logo" width={163} height={136} className="w-[56px] h-[56px] object-cover mr-2" />
          </a>
        {/* Brand/Developed by with logo */}
        <div className="flex items-center gap-2 text-xs md:text-sm">
         
          <span>Developed with</span>
          <span className="text-red-500 text-base">❤</span>
          <span>by</span>
          <a href="https://brandbik.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">BrandBik LLP</a>
        </div>
      </div>
    </footer>
  );
}
