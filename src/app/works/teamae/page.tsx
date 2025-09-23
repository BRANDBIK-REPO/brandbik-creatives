import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const TeamAeWebBanner = dynamic(() => import('@/components/work-detail/teamAeWebBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const TeamAEWebCaseStudy = dynamic(() => import('@/components/work-detail/teamAEWebCaseStudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const TeamAeWebGallery = dynamic(() => import('@/components/work-detail/teamAeWebGallery'), {
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

export default function Zayior() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <TeamAeWebBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <TeamAEWebCaseStudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <TeamAeWebGallery />
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