import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const AesSchoolDigitalBanner = dynamic(() => import('@/components/work-detail/aesSchoolDigitalBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const AesSchoolDigitalCasestudy = dynamic(() => import('@/components/work-detail/aesSchoolDigitalCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const AesSchoolDigitalGallery = dynamic(() => import('@/components/work-detail/aesSchoolDigitalGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const SocialResultSection = dynamic(() => import('@/components/socialResultSection'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});
const SocialTestimonial = dynamic(() => import('@/components/socialTestimonial'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});
const SocialRelatedWorks = dynamic(() => import('@/components/socialRelatedWorks'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function AesSchoolDigital() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <AesSchoolDigitalBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AesSchoolDigitalCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AesSchoolDigitalGallery />
      </Suspense>
      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SocialResultSection />
      </Suspense>
      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SocialTestimonial />
      </Suspense>
      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SocialRelatedWorks />
      </Suspense>
    </>
  );
} 