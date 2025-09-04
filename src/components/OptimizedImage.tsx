import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  lazy?: boolean;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "landscape";
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width,
  height,
  className,
  lazy = true,
  priority = false,
  aspectRatio,
  ...props 
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video", 
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]"
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const imageClasses = cn(
    "transition-opacity duration-300",
    isLoading && "opacity-0",
    !isLoading && "opacity-100",
    aspectRatio && aspectRatioClasses[aspectRatio],
    "object-cover",
    className
  );

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground",
          aspectRatio && aspectRatioClasses[aspectRatio],
          className
        )}
      >
        <span className="text-sm">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            aspectRatio && aspectRatioClasses[aspectRatio]
          )}
        />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={imageClasses}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;