import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const SaverBanner = dynamic(() => import('@/components/work-detail/saverBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const SaverCasestudy = dynamic(() => import('@/components/work-detail/saverCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const SaverGallery = dynamic(() => import('@/components/work-detail/saverGallery'), {
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


export default function SaverPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <SaverBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SaverCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SaverGallery />
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