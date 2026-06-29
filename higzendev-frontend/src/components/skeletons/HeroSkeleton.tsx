import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSkeleton = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background skeleton */}
      <Skeleton className="absolute inset-0" />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            {/* Badge skeleton */}
            <Skeleton className="h-10 w-40 rounded-full" />
            
            {/* Heading skeleton */}
            <Skeleton className="h-16 sm:h-20 md:h-24 w-full max-w-2xl" />
            
            {/* Subtext skeleton */}
            <Skeleton className="h-8 w-full max-w-xl" />
            
            {/* Buttons skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Skeleton className="h-14 w-40 rounded-full" />
              <Skeleton className="h-14 w-44 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation dots skeleton */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <Skeleton className="w-3 h-3 rounded-full" />
        <Skeleton className="w-3 h-3 rounded-full" />
        <Skeleton className="w-3 h-3 rounded-full" />
      </div>
    </section>
  );
};

export default HeroSkeleton;
