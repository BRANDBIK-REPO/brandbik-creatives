import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const SheTalksBanner = dynamic(() => import('@/components/work-detail/sheTalksAppBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const SheTalksAppCasestudy = dynamic(() => import('@/components/work-detail/sheTalksAppCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const SheTalksAppGallery = dynamic(() => import('@/components/work-detail/sheTalksAppGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});
const ResultSection = dynamic(() => import("@/components/appResultSection"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const Testimonial = dynamic(() => import("@/components/appTestimonial"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const InnerRelatedWorks = dynamic(() => import("@/components/appRelatedWorks"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const BottomBar = dynamic(() => import("@/components/bottomBar"), {
  loading: () => <div className="h-[100px] animate-pulse bg-gray-200" />
});

export default function SheTalksAppPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <SheTalksBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SheTalksAppCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SheTalksAppGallery />
      </Suspense>
      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <ResultSection />
      </Suspense>

      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <Testimonial />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <InnerRelatedWorks />
      </Suspense>

      <Suspense fallback={<div className="h-[100px] animate-pulse bg-gray-200" />}>
        <BottomBar />
      </Suspense>
    </main>
  );
} 