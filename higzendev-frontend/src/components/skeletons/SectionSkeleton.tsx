import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import CardSkeleton from './CardSkeleton';

interface SectionSkeletonProps {
  cards?: number;
  showTitle?: boolean;
}

const SectionSkeleton = ({ cards = 3, showTitle = true }: SectionSkeletonProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-10 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 max-w-full mx-auto" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: cards }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSkeleton;
