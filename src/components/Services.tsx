import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Heart, 
  Brain, 
  Zap, 
  Target, 
  UserCheck,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Treinamento Personalizado",
      description: "Programa individual desenvolvido especificamente para seus objetivos, limitações e preferências.",
      features: ["Avaliação física completa", "Programa exclusivo", "Acompanhamento constante"]
    },
    {
      icon: Heart,
      title: "Condicionamento Cardiovascular",
      description: "Melhore sua capacidade cardiorrespiratória com métodos modernos e eficientes.",
      features: ["HIIT personalizado", "Treinos funcionais", "Monitoramento cardíaco"]
    },
    {
      icon: Brain,
      title: "Consultoria Nutricional",
      description: "Orientação nutricional alinhada aos seus treinos para potencializar os resultados.",
      features: ["Plano alimentar", "Suplementação", "Acompanhamento nutricional"]
    },
    {
      icon: Zap,
      title: "Treinamento Funcional",
      description: "Desenvolva força, agilidade e coordenação através de movimentos naturais do corpo.",
      features: ["Exercícios funcionais", "Melhora da mobilidade", "Prevenção de lesões"]
    },
    {
      icon: Target,
      title: "Reabilitação e Reforço",
      description: "Programas específicos para recuperação de lesões e fortalecimento preventivo.",
      features: ["Fisioterapia esportiva", "Fortalecimento", "Prevenção de lesões"]
    },
    {
      icon: UserCheck,
      title: "Acompanhamento Premium",
      description: "Suporte total com avaliações regulares, ajustes de treino e motivação constante.",
      features: ["Avaliações mensais", "Ajustes contínuos", "Suporte 24/7"]
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de saber mais sobre os serviços do Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-h1 text-primary mb-6">Serviços Exclusivos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços personalizados para atender suas necessidades específicas 
            e garantir que você alcance seus objetivos de forma eficiente e sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant="outline" 
                className="w-full group-hover:bg-accent group-hover:text-primary transition-all"
                onClick={handleWhatsApp}
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 shadow-elegant animate-fade-in">
          <h3 className="font-h2 text-white mb-4">
            Pronto Para Começar Sua Transformação?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Agende sua avaliação gratuita e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
          <Button 
            size="lg" 
            className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl"
            onClick={handleWhatsApp}
          >
            Agendar Avaliação Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;