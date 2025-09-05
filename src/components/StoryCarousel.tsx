import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface StoryCarouselProps {
  className?: string;
}

const StoryCarousel = ({ className = "" }: StoryCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const storyImages = [
    {
      src: "/lovable-uploads/ca7e6037-9517-4397-a50b-cb47d27d20cd.png",
      alt: "Área de treino funcional com equipamentos premium"
    },
    {
      src: "/lovable-uploads/0f54dbfd-b10c-4c7a-8f31-5e8d31938a6f.png",
      alt: "Vista completa do estúdio com área de café"
    },
    {
      src: "/lovable-uploads/5a6e795a-16c4-4fdc-9d1e-671bf83ae283.png",
      alt: "Área de musculação com equipamentos modernos"
    },
    {
      src: "/lovable-uploads/020895d0-4727-49a3-b26b-a04341f1c93b.png",
      alt: "Espaço amplo para treinamento personalizado"
    },
    {
      src: "/lovable-uploads/0f1efe9d-c551-407a-98ee-18cb9aa64cc6.png",
      alt: "Área funcional com piso de borracha premium"
    },
    {
      src: "/lovable-uploads/06df3d44-5396-467d-98e3-98020ef05125.png",
      alt: "Equipamentos de última geração"
    },
    {
      src: "/lovable-uploads/0e50b423-a059-46b1-812c-94bb97041a7a.png",
      alt: "Ambiente acolhedor e profissional"
    },
    {
      src: "/lovable-uploads/17463614-c8e1-430c-88a5-9ab632ad39c1.png",
      alt: "Espaço de relaxamento e convivência"
    },
    {
      src: "/lovable-uploads/23810c73-f9d0-4d8f-92d5-b922a66bc1dc.png",
      alt: "Área de aquecimento e alongamento"
    },
    {
      src: "/lovable-uploads/2be62f36-f655-4c07-a731-79ed6665affd.png",
      alt: "Equipamentos funcionais especializados"
    },
    {
      src: "/lovable-uploads/2eab7843-e9e1-4b4c-b8e0-6dde60d1502b.png",
      alt: "Vista lateral do estúdio"
    },
    {
      src: "/lovable-uploads/45ed08ef-1b3c-41a8-9ca0-d4a2f0e68f93.png",
      alt: "Área de treinamento personalizado"
    },
    {
      src: "/lovable-uploads/4f5a49ee-d244-4d9d-898f-8b9504251afa.png",
      alt: "Equipamentos cardiovasculares"
    },
    {
      src: "/lovable-uploads/5887683d-daed-44f6-a773-8375cc8221c0.png",
      alt: "Espaço para grupos pequenos"
    },
    {
      src: "/lovable-uploads/7015c4c7-ce1f-42fa-9ba6-3cd8e59920f0.png",
      alt: "Área de musculação completa"
    },
    {
      src: "/lovable-uploads/7a11de65-3d89-4c33-abbb-236959d4cab1.png",
      alt: "Vista panorâmica do estúdio"
    },
    {
      src: "/lovable-uploads/86e8ea06-b77e-418f-9754-1743a70bf9fe.png",
      alt: "Ambiente motivador e inspirador"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === storyImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, storyImages.length]);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-elegant">
        {storyImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          />
        ))}
        
        {/* Overlay para melhor contraste */}
        <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {storyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Ícone decorativo */}
      <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-2xl shadow-gold">
        <Heart className="h-12 w-12 text-primary" />
      </div>
    </div>
  );
};

export default StoryCarousel;