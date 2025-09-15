import { useState, useEffect } from 'react';

// Studio images for the carousel
const studioImages = [
  {
    src: "/lovable-uploads/0e50b423-a059-46b1-812c-94bb97041a7a.png",
    alt: "Life Personal Estúdio - Área funcional com equipamentos modernos e espaço verde"
  },
  {
    src: "/lovable-uploads/be4ce413-8d8f-46f6-81f7-abc0c5d35b4f.png",
    alt: "Life Personal Estúdio - Área de musculação com halteres e equipamentos"
  },
  {
    src: "/lovable-uploads/bd04263d-4dba-4a19-a337-434bf100f8af.png",
    alt: "Life Personal Estúdio - Ampla área de pesos livres e musculação"
  },
  {
    src: "/lovable-uploads/23810c73-f9d0-4d8f-92d5-b922a66bc1dc.png",
    alt: "Life Personal Estúdio - Espaço cardio com esteiras e área funcional"
  },
  {
    src: "/lovable-uploads/fa7fb012-7c24-4bb7-9150-7e8d45bc5a0b.png",
    alt: "Life Personal Estúdio - Ambiente amplo com piso de madeira para treinos"
  },
  {
    src: "/lovable-uploads/4f5a49ee-d244-4d9d-898f-8b9504251afa.png",
    alt: "Life Personal Estúdio - Vista geral do espaço de treinamento"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === studioImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="absolute inset-0 z-0 min-h-[120vh] sm:min-h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      {studioImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 right-6 flex space-x-2 z-10">
        {studioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;