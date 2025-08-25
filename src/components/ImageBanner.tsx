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
      className={`relative overflow-hidden bg-black/5 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageBanner;