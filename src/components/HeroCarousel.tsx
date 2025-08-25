import { useState, useEffect } from 'react';
import heroImage from "@/assets/hero-image.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import trainingImage from "@/assets/training-image.jpg";

// Studio images for the carousel
const studioImages = [
  {
    src: heroImage,
    alt: "Life Personal Estúdio - Área de treino principal"
  },
  {
    src: studioInterior,
    alt: "Life Personal Estúdio - Interior moderno e equipado"
  },
  {
    src: trainingImage,
    alt: "Life Personal Estúdio - Ambiente de treinamento personalizado"
  },
  {
    src: heroImage,
    alt: "Life Personal Estúdio - Equipamentos profissionais"
  },
  {
    src: studioInterior,
    alt: "Life Personal Estúdio - Espaço amplo para exercícios"
  },
  {
    src: trainingImage,
    alt: "Life Personal Estúdio - Ambiente climatizado e confortável"
  },
  {
    src: heroImage,
    alt: "Life Personal Estúdio - Vista geral das instalações"
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
      className="absolute inset-0 z-0"
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