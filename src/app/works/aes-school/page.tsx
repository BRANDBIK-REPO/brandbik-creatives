import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const AesSchoolBanner = dynamic(() => import('@/components/work-detail/aesSchoolWebBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const AesSchoolCaseStudy = dynamic(() => import('@/components/work-detail/aesSchoolWebCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const AesSchoolGallery = dynamic(() => import('@/components/work-detail/aesWebGallery'), {
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

export default function AesSchool() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <AesSchoolBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AesSchoolCaseStudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AesSchoolGallery />
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