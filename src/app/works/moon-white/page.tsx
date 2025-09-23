import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const MoonWhiteBanner = dynamic(() => import("@/components/work-detail/moonwhiteBanner"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const MoonWhiteCaseStudy = dynamic(() => import("@/components/work-detail/moonwhiteCasestudy"), {
    loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
  });

const MoonWhiteGallery = dynamic(() => import("@/components/work-detail/moonwhiteGallery"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const BrandingResultSection = dynamic(() => import("@/components/brandingResultSection"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const BrandingTestimonial = dynamic(() => import("@/components/brandingTestimonial"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const BrandingRelatedWorks = dynamic(() => import("@/components/brandingRelatedWorks"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const BottomBar = dynamic(() => import("@/components/bottomBar"), {
  loading: () => <div className="h-[100px] animate-pulse bg-gray-200" />
});

export default function Moonwhite() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <MoonWhiteBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <MoonWhiteCaseStudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <MoonWhiteGallery />
      </Suspense>

      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <BrandingResultSection />
      </Suspense>

      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <BrandingTestimonial />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <BrandingRelatedWorks />
      </Suspense>

      <Suspense fallback={<div className="h-[100px] animate-pulse bg-gray-200" />}>
        <BottomBar />
      </Suspense>
    </>
  );
} 