import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const BabaGanoushBanner = dynamic(() => import("@/components/work-detail/babaGanoushBanner"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const BabaGanoushCasestudy = dynamic(() => import("@/components/work-detail/babaGanoushCasestudy"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const BabaGanoushGallery = dynamic(() => import("@/components/work-detail/babaGanoushGallery"), {
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

export default function BabaGanoush() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <BabaGanoushBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <BabaGanoushCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <BabaGanoushGallery />
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