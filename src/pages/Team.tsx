
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Heart } from "lucide-react";

const Team = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de conhecer melhor a equipe do Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };

  const personalTrainers = [
    {
      name: "Carlos Eduardo",
      specialty: "Personal Trainer Sênior",
      education: "Ed. Física USP + Pós Fisiologia",
      experience: "8 anos",
      differential: "Especialista em transformação corporal e performance atlética. Método exclusivo para queima de gordura.",
      image: "/placeholder.svg"
    },
    {
      name: "Marina Santos",
      specialty: "Personal Trainer",
      education: "Ed. Física UNINOVE + Biomecânica",
      experience: "5 anos", 
      differential: "Focada no público feminino. Expert em treino funcional e fortalecimento do core.",
      image: "/placeholder.svg"
    },
    {
      name: "Rafael Lima",
      specialty: "Personal Executive",
      education: "Ed. Física PUC + MBA Gestão",
      experience: "10 anos",
      differential: "Atendimento VIP para executivos. Treinos otimizados para agenda corrida.",
      image: "/placeholder.svg"
    }
  ];

  const nutritionists = [
    {
      name: "Dra. Ana Beatriz",
      specialty: "Nutricionista Esportiva",
      education: "Nutrição UNIFESP + Pós Esportiva",
      experience: "7 anos",
      differential: "Especialista em composição corporal. Protocolos para ganho de massa magra e definição.",
      image: "/placeholder.svg"
    },
    {
      name: "Dra. Camila Rocha",
      specialty: "Nutricionista Clínica",
      education: "Nutrição USP + Pós Funcional",
      experience: "6 anos",
      differential: "Foco em saúde hormonal e anti-aging. Nutrição personalizada por bioimpedância.",
      image: "/placeholder.svg"
    }
  ];

  const evaluators = [
    {
      name: "Prof. Marcos Vieira",
      specialty: "Avaliador Físico",
      education: "Ed. Física UNICAMP + Cineantropometria",
      experience: "12 anos",
      differential: "Avaliações precisas com tecnologia 3D. Protocolos científicos para acompanhamento.",
      image: "/placeholder.svg"
    }
  ];

  const TeamSection = ({ title, icon: Icon, members, bgColor = "bg-background" }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-accent mr-3" />
            <h2 className="font-h2 text-primary">{title}</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-subtle flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-4xl text-primary">👤</span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="font-h3 text-primary mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-2">{member.specialty}</Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Formação:</span>
                    <span className="font-medium text-right flex-1 ml-2">{member.education}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experiência:</span>
                    <span className="font-medium">{member.experience}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.differential}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="font-h1 mb-6">
              Nossa Equipe de <span className="bg-gradient-gold bg-clip-text text-transparent">Especialistas</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Profissionais altamente qualificados e dedicados à sua transformação. 
              Cada membro da nossa equipe é selecionado pela expertise e paixão em entregar resultados excepcionais.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Trainers */}
      <TeamSection 
        title="Personal Trainers" 
        icon={Users}
        members={personalTrainers}
      />

      {/* Nutritionists */}
      <TeamSection 
        title="Nutricionistas" 
        icon={Heart}
        members={nutritionists}
        bgColor="bg-gradient-subtle"
      />

      {/* Evaluators */}
      <TeamSection 
        title="Avaliação Física" 
        icon={Award}
        members={evaluators}
      />

      {/* Team Philosophy */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-h2 text-primary mb-8">Nossa Filosofia de Atendimento</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary">Cuidado Individual</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cada cliente é único. Desenvolvemos estratégias personalizadas baseadas em suas necessidades, objetivos e estilo de vida.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary">Excelência Técnica</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Formação continuada e certificações internacionais. Nossa equipe está sempre atualizada com as melhores práticas do mercado.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary">Trabalho Integrado</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Personal, nutricionista e avaliador trabalham em conjunto. Comunicação constante para resultados potencializados.
                </p>
              </div>
            </div>

            <Card className="p-8 bg-background border-accent shadow-gold">
              <div className="space-y-4">
                <h3 className="font-h3 text-primary">Comprometimento com Resultados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Não somos apenas profissionais, somos seus parceiros na jornada de transformação. 
                  Cada membro da equipe está genuinamente investido no seu sucesso e bem-estar.
                </p>
                <p className="text-sm text-accent font-semibold">
                  "Seu sucesso é o nosso maior indicador de qualidade."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-h2 text-white mb-6">
              Conheça Nossa Equipe Pessoalmente
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Agende uma visita e converse com nossos profissionais. 
              Queremos entender seus objetivos e mostrar como podemos ajudar.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
            >
              Agendar Visita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
