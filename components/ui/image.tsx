"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageProps extends NextImageProps {
  wrapperClassName?: string;
}

export function Image({ 
  wrapperClassName, 
  className, 
  onLoad: onLoadProp,
  ...props 
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("overflow-hidden", wrapperClassName)}>
      <NextImage
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0",
          className
        )}
        onLoad={(e) => {
          setIsLoading(false);
          onLoadProp?.(e);
        }}
        {...props}
      />
    </div>
  );
} 