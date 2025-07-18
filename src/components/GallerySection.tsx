
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import trainingImage from "@/assets/training-image.jpg";

const GallerySection = () => {
  const galleryImages = [
    {
      src: studioInterior,
      alt: "Área de treino premium",
      title: "Ambiente Exclusivo",
      description: "Espaço amplo e equipado"
    },
    {
      src: trainingImage,
      alt: "Equipamentos modernos",
      title: "Equipamentos de Ponta",
      description: "Tecnologia para resultados"
    },
    {
      src: heroImage,
      alt: "Atendimento personalizado",
      title: "Atendimento Individual",
      description: "Foco total em você"
    },
    {
      src: studioInterior,
      alt: "Estética luxuosa",
      title: "Design Sofisticado",
      description: "Ambiente que inspira"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-h1 text-primary mb-6">Nossos Ambientes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Muito além de uma academia – um estúdio criado para performance, saúde e estilo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                          <p className="text-sm text-gray-200">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏋️</span>
              </div>
              <h3 className="font-h3 text-primary">Equipamentos Premium</h3>
              <p className="text-muted-foreground text-sm">Tecnologia de ponta para máximos resultados</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-h3 text-primary">Ambiente Exclusivo</h3>
              <p className="text-muted-foreground text-sm">Privacidade e conforto para seu treino</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-h3 text-primary">Design Sofisticado</h3>
              <p className="text-muted-foreground text-sm">Ambiente que inspira e motiva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
