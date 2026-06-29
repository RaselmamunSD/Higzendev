import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  mobileSrc?: string;
  tabletSrc?: string;
  className?: string;
  sizes?: string;
}

/**
 * Responsive image component that serves different images based on screen size
 * Uses srcset and sizes for optimized loading
 */
const ResponsiveImage = ({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  className,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}: ResponsiveImageProps) => {
  // If we have different sources for different screen sizes, use picture element
  if (mobileSrc || tabletSrc) {
    return (
      <picture>
        {mobileSrc && (
          <source media="(max-width: 640px)" srcSet={mobileSrc} />
        )}
        {tabletSrc && (
          <source media="(max-width: 1024px)" srcSet={tabletSrc} />
        )}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn('w-full h-auto object-cover', className)}
          sizes={sizes}
          {...props}
        />
      </picture>
    );
  }

  // Simple responsive image with lazy loading
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn('w-full h-auto object-cover', className)}
      sizes={sizes}
      {...props}
    />
  );
};

export default ResponsiveImage;
