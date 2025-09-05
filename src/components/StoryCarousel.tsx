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
      src: "/lovable-uploads/dae9f4fa-948e-487d-953e-170214e8e6af.png",
      alt: "2004 - INÍCIO de um sonho: Academia Life Sport Fitness"
    },
    {
      src: "/lovable-uploads/e4a9a6f2-9dac-4193-924c-912ee04c96bd.png",
      alt: "2005-2006 - Um novo Ciclo e novos sonhos"
    },
    {
      src: "/lovable-uploads/03e7f5e6-d347-45f8-8fb3-e21e052ce707.png",
      alt: "2009-2011 - A GRANDE reinauguração"
    },
    {
      src: "/lovable-uploads/70c74dcc-70d9-4580-97c4-9961ddbe33ac.png",
      alt: "2012-2014 - O MARCO da expansão - Crescimento exponencial"
    },
    {
      src: "/lovable-uploads/916bc7ae-f9e6-4041-9961-6a3b6264495e.png",
      alt: "2012-2014 - O MARCO da expansão - Ampliação da estrutura"
    },
    {
      src: "/lovable-uploads/ed08fb03-0163-4c66-bd02-299815244210.png",
      alt: "2012-2014 - O MARCO da expansão - Eventos e atividades coletivas"
    },
    {
      src: "/lovable-uploads/3aef2d9b-39a8-411e-924e-f14a74f2de28.png",
      alt: "2015-2020 - ENTRE ESTABILIDADE e tempestade - Período de consolidação"
    },
    {
      src: "/lovable-uploads/d3787581-421b-4c0c-8763-9367522091d9.png",
      alt: "2015-2020 - ENTRE ESTABILIDADE e tempestade - Enfrentando desafios"
    },
    {
      src: "/lovable-uploads/14ba99d6-2cb8-4a5e-ae0b-6d9879affeb3.png",
      alt: "2015-2020 - ENTRE ESTABILIDADE e tempestade - Pandemia COVID-19"
    },
    {
      src: "/lovable-uploads/dae74d17-dd70-4c3d-94c9-94254d5e3c7b.png",
      alt: "2021 - UM NOVO caminho - Inovação e metodologia híbrida"
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