
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Apple, 
  Users, 
  Leaf,
  Heart, 
  Smartphone,
  Zap, 
  Brain,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Treinamento Personalizado",
      description: "Programa individual desenvolvido especificamente para seus objetivos e limitações."
    },
    {
      icon: Apple,
      title: "Nutrição Funcional",
      description: "Orientação nutricional integrada ao treino para potencializar resultados."
    },
    {
      icon: Users,
      title: "Aulas Coletivas Exclusivas",
      description: "Turmas pequenas, focadas e com acompanhamento técnico personalizado."
    },
    {
      icon: Leaf,
      title: "Pilates e Alongamento",
      description: "Desenvolva consciência corporal, postura e flexibilidade com práticas suaves."
    },
    {
      icon: Heart,
      title: "Monitoramento Cardíaco",
      description: "Acompanhe sua frequência cardíaca em tempo real para otimizar o desempenho."
    },
    {
      icon: Smartphone,
      title: "Agendamento via App",
      description: "Sistema prático para agendamento de treinos através do aplicativo."
    },
    {
      icon: Zap,
      title: "Sala Recovery",
      description: "Espaço dedicado para relaxamento, recuperação muscular e melhora do sono."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-h1 text-primary mb-6">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma gama completa de serviços personalizados para atender suas necessidades específicas 
            e garantir que você alcance seus objetivos de forma eficiente e sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-h3 text-primary mb-3 text-lg min-h-[3.5rem] flex items-center">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link to="/servicos">
            <Button 
              size="lg" 
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
