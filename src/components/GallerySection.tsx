
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import trainingImage from "@/assets/training-image.jpg";

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const studioImages = [
    {
      src: "/lovable-uploads/17463614-c8e1-430c-88a5-9ab632ad39c1.png",
      alt: "Treino personalizado em ação no Life Personal Estúdio",
      title: "Treino em Ação",
      description: "Acompanhamento profissional durante seu exercício"
    },
    {
      src: "/lovable-uploads/d531f947-83bd-4170-8e91-d88efbe21dca.png",
      alt: "Vista panorâmica do estúdio com ambiente de treino completo",
      title: "Ambiente Completo",
      description: "Espaço amplo e moderno para todos os tipos de treino"
    },
    {
      src: "/lovable-uploads/7a11de65-3d89-4c33-abbb-236959d4cab1.png",
      alt: "Área de equipamentos premium com atendimento personalizado",
      title: "Equipamentos Premium",
      description: "Tecnologia de ponta com orientação especializada"
    }
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % studioImages.length);
      }, 3000);
      
      return () => clearInterval(timer);
    }
  }, [isHovered, studioImages.length]);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-h1 text-primary mb-6">Conheça Nosso Estúdio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ambiente premium criado especialmente para sua transformação
          </p>
        </div>

        {/* Auto Banner */}
        <div 
          className="relative max-w-6xl mx-auto mb-16 overflow-hidden rounded-2xl shadow-elegant group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            {studioImages.map((image, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              </div>
            ))}
            
            {/* Content Overlay - Hidden on mobile */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 hidden md:block">
              <div className="max-w-2xl">
                <h3 className="font-h2 mb-3 animate-fade-in">
                  {studioImages[currentImageIndex].title}
                </h3>
                <p className="text-lg opacity-90 animate-fade-in">
                  {studioImages[currentImageIndex].description}
                </p>
              </div>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 right-8 flex space-x-2 z-10">
              {studioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🏋️</span>
            </div>
            <h3 className="font-h3 text-primary mb-2">Equipamentos Premium</h3>
            <p className="text-muted-foreground">Tecnologia de ponta para máximos resultados</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-h3 text-primary mb-2">Ambiente Exclusivo</h3>
            <p className="text-muted-foreground">Privacidade e conforto para seu treino</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-h3 text-primary mb-2">Design Sofisticado</h3>
            <p className="text-muted-foreground">Ambiente que inspira e motiva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
