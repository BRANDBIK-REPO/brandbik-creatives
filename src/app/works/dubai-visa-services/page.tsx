import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const DubaiVisaBanner = dynamic(() => import('@/components/work-detail/dubaiVisaBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const DubaiVisaCasestudy = dynamic(() => import('@/components/work-detail/dubaiVisaCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const DubaiVisaGallery = dynamic(() => import('@/components/work-detail/dubaiVisaGallery'), {
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


export default function DubaiVisaServices() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <DubaiVisaBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <DubaiVisaCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <DubaiVisaGallery />
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