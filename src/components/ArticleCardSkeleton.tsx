import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ArticleCardSkeleton: React.FC = () => {
  return (
    <div className="h-full bg-white border border-border rounded-lg overflow-hidden" role="status" aria-label="Loading article">
      <div className="p-6 flex flex-col h-full">
        {/* Metadata skeleton */}
        <div className="flex items-center mb-3">
          <Skeleton className="h-4 w-24 rounded-full" />
          <Skeleton className="h-4 w-4 mx-2 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
        
        {/* Title skeleton */}
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        
        {/* Abstract skeleton */}
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        
        {/* Image skeleton */}
        <Skeleton className="w-full h-48 mb-4" />
        
        {/* Author skeleton */}
        <Skeleton className="h-4 w-32 mt-auto" />
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
