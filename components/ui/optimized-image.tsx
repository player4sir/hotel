"use client";

import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
  return (
    <Image
      className={cn('duration-700 ease-in-out', className)}
      alt={alt}
      {...props}
    />
  );
} 