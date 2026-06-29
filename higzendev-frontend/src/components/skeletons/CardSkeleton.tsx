import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface CardSkeletonProps {
  className?: string;
  showImage?: boolean;
  lines?: number;
}

const CardSkeleton = ({ className, showImage = true, lines = 3 }: CardSkeletonProps) => {
  return (
    <div className={cn('rounded-lg border border-border bg-card p-4 space-y-4', className)}>
      {showImage && (
        <Skeleton className="h-40 w-full rounded-md" />
      )}
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton 
            key={i} 
            className={cn(
              'h-4',
              i === lines - 1 ? 'w-1/2' : 'w-full'
            )} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardSkeleton;
