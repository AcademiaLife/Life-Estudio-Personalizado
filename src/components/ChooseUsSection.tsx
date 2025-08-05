
import { Card } from "@/components/ui/card";
import { Dumbbell, Apple, Users, TrendingUp } from "lucide-react";

const ChooseUsSection = () => {
  const differentiators = [
    {
      icon: Dumbbell,
      title: "Treinamento Personalizado",
      description: "Programa individual desenvolvido especificamente para seus objetivos e limitações."
    },
    {
      icon: Apple,
      title: "Nutrição Funcional",
      description: "Orientação nutricional integrada ao treino para potencializar seus resultados."
    },
    {
      icon: Users,
      title: "Aulas Coletivas Exclusivas",
      description: "Turmas pequenas, focadas e com acompanhamento técnico personalizado."
    },
    {
      icon: TrendingUp,
      title: "Monitoramento de Progresso",
      description: "Acompanhamento contínuo dos seus resultados com análises e ajustes personalizados."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-h1 text-primary mb-6">Por Que Escolher o Life Estúdio Personalizado?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform flex-shrink-0 mx-auto">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-3 min-h-[4rem] flex items-center text-center">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow text-left">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transforme sua saúde e bem-estar com um treinamento único que respeita seu ritmo e suas metas. 
            O Life Estúdio oferece a você um ambiente onde os resultados falam mais alto que qualquer promessa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
