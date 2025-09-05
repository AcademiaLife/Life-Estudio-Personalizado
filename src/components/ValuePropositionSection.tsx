import { useState, useEffect } from "react";
import trainingImage from "@/assets/training-image.jpg";
import studioImage from "@/assets/studio-interior.jpg";
const ValuePropositionSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Array com 5 imagens do estúdio
  const bannerImages = [{
    src: "/lovable-uploads/45ed08ef-1b3c-41a8-9ca0-d4a2f0e68f93.png",
    alt: "Espaço exclusivo com bikes ergométricas e ambiente descontraído"
  }, {
    src: "/lovable-uploads/da2e1463-7c06-4115-8111-cceaf499ad29.png",
    alt: "Vista panorâmica do estúdio com equipamentos premium e área de treino funcional"
  }, {
    src: "/lovable-uploads/2eab7843-e9e1-4b4c-b8e0-6dde60d1502b.png",
    alt: "Área principal com espelho e ambiente sofisticado para treinamento personalizado"
  }, {
    src: "/lovable-uploads/bfefcc3c-2ced-47af-8030-d1f768d4ab2f.png",
    alt: "Zona cardio com esteiras e equipamentos de última geração"
  }, {
    src: "/lovable-uploads/e74211ae-1691-4c4c-b789-b13fbe755297.png",
    alt: "Área completa de cardio com vista ampla do estúdio moderno"
  }];

  // Auto-rotate imagens a cada 3 segundos
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % bannerImages.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered, bannerImages.length]);
  return <section className="py-20 bg-background">
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
              <h3 className="font-h2 text-primary">Ambiente</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">Um ambiente pensado para você se sentir acolhido e motivado, com equipamentos de qualidade e profissionais capacitados para acompanhar sua jornada, seja para conquistar resultados fitness, reabilitar, fortalecer ou viver com mais qualidade de vida.</p>
            </div>
          </div>

          <div className="animate-scale-in">
            {/* Banner Vertical com Rotação Automática */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <div className="relative aspect-[4/5]">
                {bannerImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>)}
                
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {bannerImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-accent scale-125' : 'bg-white/50 hover:bg-white/70'}`} aria-label={`Ver imagem ${index + 1}`} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ValuePropositionSection;