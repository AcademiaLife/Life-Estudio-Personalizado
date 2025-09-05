import { Card } from "@/components/ui/card";
import { Target, Heart, Trophy, Users } from "lucide-react";
import trainingImage from "@/assets/training-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* História */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-h1 text-primary">Nossa História</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Há mais de uma década, o <strong>Life Personal Estúdio</strong> nasceu da paixão por transformar vidas através do movimento. 
              Nossa jornada começou com uma visão simples, mas poderosa: criar um espaço onde cada pessoa pudesse descobrir 
              seu verdadeiro potencial físico e mental.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde o início, acreditamos que o treinamento personalizado vai muito além dos exercícios. 
              É sobre conhecer profundamente cada aluno, suas necessidades, limitações e objetivos, 
              criando um programa único que respeita sua individualidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoje, somos reconhecidos como referência em treinamento personalizado de alta performance, 
              com uma equipe de profissionais dedicados e uma estrutura que proporciona experiências únicas e resultados excepcionais.
            </p>
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

        {/* Propósito */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-h1 text-primary mb-8">Nosso Propósito</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Capacitar pessoas a alcançarem suas metas através de treinamento personalizado de excelência, 
            proporcionando não apenas transformação física, mas também mental e emocional. 
            Acreditamos que cada conquista no estúdio se reflete em todas as áreas da vida.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ajudar e inspirar pessoas através do exercício físico enriquecendo todas as áreas da sua vida, 
                nos aspectos mental, social e físico, transformando vidas e realizando sonhos.
              </p>
            </div>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fazer com que o Life Personal Estúdio seja reconhecido positivamente por todos 
                como uma grande empresa que oferece a melhor experiência no ramo de Wellness.
              </p>
            </div>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excelência no serviço de atendimento, transparência e confiança nos relacionamentos, 
                respeito pelos clientes e colaboradores, busca constante por aprimoramentos e inovações.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;