import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoryModal = ({ isOpen, onClose }: StoryModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const storyImages = [
    {
      src: "/lovable-uploads/dae9f4fa-948e-487d-953e-170214e8e6af.png",
      alt: "2004 - INÍCIO de um sonho: Academia Life Sport Fitness",
      year: "2004",
      title: "INÍCIO de um sonho",
      subtitle: "Academia Life Sport Fitness"
    },
    {
      src: "/lovable-uploads/e4a9a6f2-9dac-4193-924c-912ee04c96bd.png",
      alt: "2005-2006 - Um novo Ciclo e novos sonhos",
      year: "2005-2006",
      title: "Um novo Ciclo",
      subtitle: "e novos sonhos"
    },
    {
      src: "/lovable-uploads/03e7f5e6-d347-45f8-8fb3-e21e052ce707.png",
      alt: "2009-2011 - A GRANDE reinauguração",
      year: "2009-2011",
      title: "A GRANDE reinauguração",
      subtitle: "Novo conceito de academia"
    },
    {
      src: "/lovable-uploads/70c74dcc-70d9-4580-97c4-9961ddbe33ac.png",
      alt: "2012-2014 - O MARCO da expansão - Crescimento exponencial",
      year: "2012-2014",
      title: "O MARCO da expansão",
      subtitle: "Crescimento exponencial"
    },
    {
      src: "/lovable-uploads/916bc7ae-f9e6-4041-9961-6a3b6264495e.png",
      alt: "2012-2014 - O MARCO da expansão - Ampliação da estrutura",
      year: "2012-2014",
      title: "O MARCO da expansão",
      subtitle: "Ampliação da estrutura"
    },
    {
      src: "/lovable-uploads/ed08fb03-0163-4c66-bd02-299815244210.png",
      alt: "2012-2014 - O MARCO da expansão - Eventos e atividades coletivas",
      year: "2012-2014",
      title: "O MARCO da expansão",
      subtitle: "Eventos e atividades coletivas"
    },
    {
      src: "/lovable-uploads/3aef2d9b-39a8-411e-924e-f14a74f2de28.png",
      alt: "2015-2020 - ENTRE ESTABILIDADE e tempestade - Período de consolidação",
      year: "2015-2020",
      title: "ENTRE ESTABILIDADE e tempestade",
      subtitle: "Período de consolidação"
    },
    {
      src: "/lovable-uploads/d3787581-421b-4c0c-8763-9367522091d9.png",
      alt: "2015-2020 - ENTRE ESTABILIDADE e tempestade - Enfrentando desafios",
      year: "2015-2020",
      title: "ENTRE ESTABILIDADE e tempestade",
      subtitle: "Enfrentando desafios"
    },
    {
      src: "/lovable-uploads/14ba99d6-2cb8-4a5e-ae0b-6d9879affeb3.png",
      alt: "2015-2020 - ENTRE ESTABILIDADE e tempestade - Pandemia COVID-19",
      year: "2015-2020",
      title: "ENTRE ESTABILIDADE e tempestade",
      subtitle: "Pandemia COVID-19"
    },
    {
      src: "/lovable-uploads/dae74d17-dd70-4c3d-94c9-94254d5e3c7b.png",
      alt: "2021 - UM NOVO caminho - Inovação e metodologia híbrida",
      year: "2021",
      title: "UM NOVO caminho",
      subtitle: "Inovação e metodologia híbrida"
    },
    {
      src: "/lovable-uploads/61910244-d625-4dd9-b4c9-85e52bb4851f.png",
      alt: "2021 - UM NOVO caminho - Reformulação do espaço",
      year: "2021",
      title: "UM NOVO caminho",
      subtitle: "Reformulação do espaço"
    },
    {
      src: "/lovable-uploads/6f38537a-8136-47a1-9b33-c015307677e6.png",
      alt: "2024 - Nasce o Life Personal Estúdio",
      year: "2024",
      title: "Nasce o Life Personal Estúdio",
      subtitle: "Uma nova era"
    },
    {
      src: "/lovable-uploads/abfacdad-034a-4d27-85ef-1f594d1e5f08.png",
      alt: "2024 - Nasce o Life Personal Estúdio - Foco humanizado",
      year: "2024",
      title: "Nasce o Life Personal Estúdio",
      subtitle: "Foco humanizado"
    },
    {
      src: "/lovable-uploads/a3f508a1-2379-40d9-9760-8e1e8b6c6287.png",
      alt: "2024 - A VIRADA para o Propósito",
      year: "2024",
      title: "A VIRADA para o Propósito",
      subtitle: "Transformação completa"
    },
    {
      src: "/lovable-uploads/5de897b4-8e3a-46e8-802b-1e1bf11fdb8d.png",
      alt: "2025 - E continua... - Life Personal Estúdio",
      year: "2025",
      title: "E continua...",
      subtitle: "Life Personal Estúdio"
    },
    {
      src: "/lovable-uploads/0cb170a3-9a9d-4d95-ad95-559f51fff7e6.png",
      alt: "2025 - E continua... - Metodologia de treinamento avançado",
      year: "2025",
      title: "E continua...",
      subtitle: "Metodologia de treinamento avançado"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % storyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + storyImages.length) % storyImages.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = storyImages[currentImageIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-sm sm:max-w-4xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] bg-background rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Main Content */}
        <div className="flex flex-col h-full max-h-[95vh] sm:max-h-[90vh]">
          {/* Image Section */}
          <div className="relative flex-1 bg-gradient-subtle flex items-center justify-center p-3 sm:p-4 lg:p-8 overflow-hidden">
            <div className="relative w-full max-w-xs sm:max-w-lg lg:max-w-2xl">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] object-contain rounded-lg sm:rounded-xl shadow-elegant"
              />
              
              {/* Navigation Arrows */}
              <Button
                onClick={prevImage}
                variant="ghost"
                size="icon"
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button
                onClick={nextImage}
                variant="ghost"
                size="icon"
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-background border-t p-4 sm:p-6 flex flex-col justify-between min-h-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-gradient-gold p-2 sm:p-3 rounded-full">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-primary">{currentImage.year}</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-primary leading-tight">
                  {currentImage.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {currentImage.subtitle}
                </p>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="space-y-4">
              <div className="flex justify-center space-x-2">
                {storyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-primary shadow-lg' 
                        : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                {currentImageIndex + 1} de {storyImages.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;