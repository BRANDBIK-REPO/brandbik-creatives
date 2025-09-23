import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const TeamAEBrandingBanner = dynamic(() => import("@/components/work-detail/teamAeBrandingBanner"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const TeamAeBrandingCasestudy = dynamic(() => import("@/components/work-detail/teamaeBrandCaseStudy"), {
    loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
  });

const TeamAeBrandingGallery = dynamic(() => import("@/components/work-detail/teamAeBrandingGallery"), {
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

export default function TeamAe() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <TeamAEBrandingBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <TeamAeBrandingCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <TeamAeBrandingGallery />
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