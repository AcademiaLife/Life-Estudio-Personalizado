
import { useState, useEffect } from "react";
import trainingImage from "@/assets/training-image.jpg";
import studioImage from "@/assets/studio-interior.jpg";

const ValuePropositionSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Array com 6 imagens (placeholder até você enviar as imagens)
  const bannerImages = [
    {
      src: trainingImage,
      alt: "Treinamento personalizado 1"
    },
    {
      src: studioImage,
      alt: "Ambiente premium 1"
    },
    {
      src: trainingImage,
      alt: "Treinamento personalizado 2"
    },
    {
      src: studioImage,
      alt: "Ambiente premium 2"
    },
    {
      src: trainingImage,
      alt: "Treinamento personalizado 3"
    },
    {
      src: studioImage,
      alt: "Ambiente premium 3"
    }
  ];

  // Auto-rotate imagens a cada 3 segundos
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
      }, 3000);
      
      return () => clearInterval(timer);
    }
  }, [isHovered, bannerImages.length]);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-h1 text-primary mb-6">O que nos torna diferentes?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seu treino, sua jornada. Cada detalhe é pensado para respeitar seu ritmo e te levar aos resultados que você busca, 
            com uma experiência personalizada e acolhedora.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="font-h2 text-primary">Experiência Personalizada</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada treino é único, pensado especificamente para você. Nossa abordagem vai além do físico, 
                cuidando de todas as suas necessidades para garantir resultados sustentáveis.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-h2 text-primary">Ambiente Premium</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Um espaço exclusivo onde você se sente acolhido e motivado. Equipamentos de última geração 
                em um ambiente sofisticado e confortável.
              </p>
            </div>
          </div>

          <div className="animate-scale-in">
            {/* Banner Vertical com Rotação Automática */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-elegant group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative aspect-[4/5]">
                {bannerImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {bannerImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-accent scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Ver imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
