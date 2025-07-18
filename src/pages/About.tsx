
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Heart, Trophy, Users, Star, Award, ArrowRight } from "lucide-react";
import trainingImage from "@/assets/training-image.jpg";
import studioImage from "@/assets/studio-interior.jpg";

const About = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de conhecer mais sobre o Life Personal Estúdio e agendar minha visita.", "_blank");
  };

  const differentials = [
    {
      icon: Star,
      title: "Atendimento 100% Personalizado",
      description: "Cada treino é único, desenvolvido especificamente para você, suas necessidades e objetivos."
    },
    {
      icon: Award,
      title: "Profissionais de Elite",
      description: "Equipe com certificações internacionais e experiência comprovada em alta performance."
    },
    {
      icon: Trophy,
      title: "Estrutura Premium",
      description: "Equipamentos de última geração em ambiente exclusivo e climatizado."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={studioImage} 
            alt="Interior do Life Personal Estúdio" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-hero text-white mb-6 animate-fade-in">
              Mais que uma Academia,
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Uma Filosofia de Vida
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed animate-fade-in">
              Descubra como transformamos vidas através do movimento há mais de uma década, 
              criando experiências únicas que vão muito além dos exercícios tradicionais.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-h1 text-primary mb-6">Nossa Jornada Começou com um Sonho</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Em 2013, nascemos de uma visão revolucionária: <strong>criar um espaço onde cada pessoa 
                  pudesse descobrir seu verdadeiro potencial</strong>. Não queríamos ser apenas mais uma academia, 
                  mas sim um estúdio que respeitasse a individualidade de cada aluno.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Começamos pequenos, com apenas 3 profissionais e um sonho grande: 
                  <strong>provar que o treinamento personalizado poderia transformar vidas de forma definitiva</strong>. 
                  Cada conquista de nossos primeiros alunos nos motivava a crescer e aperfeiçoar nossos métodos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hoje, mais de <strong>500 vidas transformadas depois</strong>, somos reconhecidos como 
                  referência em treinamento personalizado de alta performance, mas nossa essência permanece a mesma: 
                  <strong>cuidar de cada pessoa como se fosse única, porque ela realmente é</strong>.
                </p>
              </div>
              
              <div className="bg-gradient-gold p-6 rounded-2xl">
                <blockquote className="text-primary font-medium text-lg italic">
                  "Acreditamos que cada conquista no estúdio se reflete em todas as áreas da vida. 
                  Não treinamos apenas corpos, desenvolvemos confiança, disciplina e bem-estar integral."
                </blockquote>
                <cite className="text-primary/80 text-sm mt-2 block">— Fundadores do Life Personal Estúdio</cite>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src={trainingImage} 
                alt="Treinamento personalizado Life Personal Estúdio" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-2xl shadow-gold">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Propósito */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-8">Nosso Propósito que Nos Move Todos os Dias</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              <strong>Capacitar pessoas a alcançarem suas metas através de treinamento personalizado de excelência</strong>, 
              proporcionando não apenas transformação física, mas também mental e emocional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sabemos que quando você se sente forte e confiante no seu corpo, essa energia se espalha para 
              sua carreira, relacionamentos e todos os aspectos da sua vida. 
              <strong>É isso que nos inspira todos os dias</strong>.
            </p>
          </div>

          {/* Diferenciais */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {differentials.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-6">Nossa Base Sólida</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estes são os pilares que orientam cada decisão, cada treino e cada relacionamento 
              que construímos no Life Personal Estúdio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer treinamento personalizado de máxima qualidade, focado em resultados sustentáveis 
                e no bem-estar integral de nossos alunos, sempre com excelência e dedicação total.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecidos nacionalmente como referência em treinamento personalizado, 
                sendo lembrados pela transformação genuína de vidas e pela inovação em metodologias de bem-estar.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excelência em tudo que fazemos, personalização como diferencial, respeito absoluto à individualidade, 
                comprometimento com resultados, ética profissional e paixão genuína pela transformação de vidas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="font-h2 text-white mb-6">
              Pronto Para Fazer Parte Desta História?
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Venha conhecer nossa estrutura, nossa equipe e descobrir como podemos ajudar você 
              a escrever seu próprio capítulo de transformação. Sua jornada começa com uma conversa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
              >
                Agendar Visita Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
