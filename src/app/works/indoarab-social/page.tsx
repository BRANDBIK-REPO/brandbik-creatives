import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const GreenDoorBanner = dynamic(() => import('@/components/work-detail/indoarabSocial'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const GreenDoorCaseStudy = dynamic(() => import('@/components/work-detail/indoarabSocialCaseStudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const GreenDoorGallery = dynamic(() => import('@/components/work-detail/indoarabSocialGallery'), {
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

export default function IndoArab() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <GreenDoorBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <GreenDoorCaseStudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <GreenDoorGallery />
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