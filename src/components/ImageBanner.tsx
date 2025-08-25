import { useState, useEffect } from "react";

interface ImageBannerProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoRotateInterval?: number;
  className?: string;
}

const ImageBanner = ({ 
  images, 
  autoRotateInterval = 4000, 
  className = "" 
}: ImageBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [images.length, autoRotateInterval, isHovered]);

  if (!images.length) return null;

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl shadow-elegant group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
          </div>
        ))}
        
        {/* Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-6 right-8 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageBanner;