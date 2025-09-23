import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const ManaverBanner = dynamic(() => import("@/components/work-detail/maneverBanner"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const ManeverCasestudy = dynamic(() => import("@/components/work-detail/maneverCaseStudy"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const ManeverGallery = dynamic(() => import("@/components/work-detail/maneverGallery"), {
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

export default function Manever() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <ManaverBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <ManeverCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <ManeverGallery />
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