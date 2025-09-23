import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const AlGarafaBanner = dynamic(() => import('@/components/work-detail/alGharafaBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const AlGarafaCasestudy = dynamic(() => import('@/components/work-detail/alGharafaCaseStudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const AlGarfaGallery = dynamic(() => import('@/components/work-detail/alGharafaGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});
const ResultSection = dynamic(() => import('@/components/webResultSection'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const Testimonial = dynamic(() => import('@/components/webTestimonial'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const InnerRelatedWorks = dynamic(() => import('@/components/webRelatedWorks'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const BottomBar = dynamic(() => import('@/components/bottomBar'), {
  loading: () => <div className="h-[100px] animate-pulse bg-gray-200" />
});

export default function MikaraOrganics() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <AlGarafaBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AlGarafaCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AlGarfaGallery />
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
    </>
  );
} 