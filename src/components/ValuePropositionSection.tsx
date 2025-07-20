
import trainingImage from "@/assets/training-image.jpg";
import studioImage from "@/assets/studio-interior.jpg";

const ValuePropositionSection = () => {
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

          <div className="grid grid-cols-1 gap-8 animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={trainingImage} 
                alt="Treinamento personalizado no Life Estúdio" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={studioImage} 
                alt="Interior premium do Life Estúdio" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
