
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Heart, 
  Brain, 
  Zap, 
  Target, 
  UserCheck,
  ArrowRight, 
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

const Services = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços do Life Personal Estúdio.", "_blank");
  };

  const services = [
    {
      icon: Dumbbell,
      title: "Treinamento Personalizado",
      description: "Programa individual desenvolvido especificamente para seus objetivos, limitações e preferências.",
      features: ["Avaliação física completa", "Programa exclusivo", "Acompanhamento constante", "Ajustes semanais"],
      process: "Começamos com uma avaliação detalhada, desenvolvemos seu programa único e acompanhamos cada progresso.",
      duration: "Sessões de 60 minutos",
      ideal: "Pessoas que buscam resultados específicos e acompanhamento próximo"
    },
    {
      icon: Heart,
      title: "Condicionamento Cardiovascular",
      description: "Melhore sua capacidade cardiorrespiratória com métodos modernos e eficientes.",
      features: ["HIIT personalizado", "Treinos funcionais", "Monitoramento cardíaco", "Progressão gradual"],
      process: "Testamos sua capacidade atual, criamos protocolos específicos e evoluímos gradualmente.",
      duration: "Sessões de 45-60 minutos",
      ideal: "Pessoas que querem melhorar condicionamento e queimar gordura"
    },
    {
      icon: Brain,
      title: "Consultoria Nutricional",
      description: "Orientação nutricional alinhada aos seus treinos para potencializar os resultados.",
      features: ["Plano alimentar", "Suplementação", "Acompanhamento nutricional", "Receitas personalizadas"],
      process: "Analisamos seus hábitos, criamos um plano sustentável e acompanhamos a evolução.",
      duration: "Consultas mensais + suporte contínuo",
      ideal: "Pessoas que querem otimizar a alimentação para melhores resultados"
    },
    {
      icon: Zap,
      title: "Treinamento Funcional",
      description: "Desenvolva força, agilidade e coordenação através de movimentos naturais do corpo.",
      features: ["Exercícios funcionais", "Melhora da mobilidade", "Prevenção de lesões", "Movimentos naturais"],
      process: "Avaliamos padrões de movimento, corrigimos desequilíbrios e desenvolvemos capacidades.",
      duration: "Sessões de 50 minutos",
      ideal: "Pessoas que buscam movimento natural e prevenção de lesões"
    },
    {
      icon: Target,
      title: "Reabilitação e Reforço",
      description: "Programas específicos para recuperação de lesões e fortalecimento preventivo.",
      features: ["Fisioterapia esportiva", "Fortalecimento", "Prevenção de lesões", "Recuperação ativa"],
      process: "Avaliamos a condição, desenvolvemos protocolo de recuperação e fortalecemos pontos fracos.",
      duration: "Sessões de 60 minutos",
      ideal: "Pessoas em recuperação ou que querem prevenir lesões"
    },
    {
      icon: UserCheck,
      title: "Acompanhamento Premium",
      description: "Suporte total com avaliações regulares, ajustes de treino e motivação constante.",
      features: ["Avaliações mensais", "Ajustes contínuos", "Suporte 24/7", "Relatórios de progresso"],
      process: "Monitoramento constante, avaliações regulares e ajustes para garantir progresso contínuo.",
      duration: "Acompanhamento contínuo",
      ideal: "Pessoas que querem máximo suporte e resultados acelerados"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-hero text-white mb-6">
              Serviços Que 
              <span className="bg-gradient-gold bg-clip-text text-transparent"> Transformam Vidas</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Cada serviço foi desenvolvido para atender suas necessidades específicas, 
              garantindo resultados sustentáveis e uma experiência única de transformação.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 md:p-12 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="font-h2 text-primary">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-primary">O que está incluído:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      onClick={handleWhatsApp}
                      className="btn-premium bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-xl group"
                    >
                      Saber Mais Sobre Este Serviço
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <Card className="p-6 bg-gradient-subtle">
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Como Funciona
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.process}
                      </p>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4 bg-gradient-subtle">
                        <h5 className="font-semibold text-primary mb-2 flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          Duração
                        </h5>
                        <p className="text-muted-foreground text-sm">{service.duration}</p>
                      </Card>

                      <Card className="p-4 bg-gradient-subtle">
                        <h5 className="font-semibold text-primary mb-2 flex items-center text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          Ideal Para
                        </h5>
                        <p className="text-muted-foreground text-sm">{service.ideal}</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="font-h2 text-white mb-6">
              Pronto Para Começar Sua Transformação?
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Agende sua avaliação gratuita e vamos criar juntos o programa perfeito para seus objetivos.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
            >
              Agendar Avaliação Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
