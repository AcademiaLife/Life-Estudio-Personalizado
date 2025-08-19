
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import trainingImage from "@/assets/training-image.jpg";

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const studioImages = [
    {
      src: "/lovable-uploads/7015c4c7-ce1f-42fa-9ba6-3cd8e59920f0.png",
      alt: "Área de equipamentos premium do Life Personal Estúdio",
      title: "Equipamentos de Elite",
      description: "Tecnologia de ponta em ambiente profissional"
    },
    {
      src: "/lovable-uploads/86e8ea06-b77e-418f-9754-1743a70bf9fe.png",
      alt: "Ambiente moderno e sofisticado do estúdio",
      title: "Design Contemporâneo",
      description: "Espaço moderno projetado para sua comodidade"
    },
    {
      src: "/lovable-uploads/fe940964-a328-437f-bd3d-1e2da424d8d6.png",
      alt: "Área ampla e premium para treinos personalizados",
      title: "Ambiente Exclusivo",
      description: "Espaço amplo e privativo para seu treino ideal"
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
            
            {/* Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
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
              <span className="text-2xl">✨</span>
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
