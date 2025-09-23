import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const GalaxonMaxBanner = dynamic(() => import('@/components/work-detail/galaxonMaxBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const GalaxonMaxCasestudy = dynamic(() => import('@/components/work-detail/galaxonMaxCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const GalaxonMaxGallery = dynamic(() => import('@/components/work-detail/galaxonMaxGallery'), {
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

export default function GalaxonMax() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <GalaxonMaxBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <GalaxonMaxCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <GalaxonMaxGallery />
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