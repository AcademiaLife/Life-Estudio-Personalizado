
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Heart, 
  Trophy, 
  Users, 
  Star, 
  Award, 
  ArrowRight,
  Brain,
  Dumbbell,
  Leaf,
  Lightbulb,
  FlaskConical,
  CheckCircle,
  Shield,
  UserCheck,
  Zap,
  Recycle,
  Sparkles
} from "lucide-react";
import trainingImage from "@/assets/training-image.jpg";
import studioImage from "@/assets/studio-interior.jpg";

const About = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de conhecer mais sobre o Life Estúdio Personalizado e agendar minha avaliação gratuita.&type=phone_number&app_absent=0", "_blank");
  };

  const valores = [
    {
      icon: Star,
      title: "Excelência no serviço de atendimento",
      description: "Buscamos sempre superar expectativas em cada interação"
    },
    {
      icon: Shield,
      title: "Transparência e confiança nos relacionamentos",
      description: "Construímos vínculos baseados na honestidade e clareza"
    },
    {
      icon: UserCheck,
      title: "Respeito por clientes e colaboradores",
      description: "Tratamos todos com dignidade, empatia e consideração"
    },
    {
      icon: Zap,
      title: "Busca constante por aprimoramentos e inovações",
      description: "Evoluímos continuamente para oferecer o melhor"
    },
    {
      icon: Recycle,
      title: "Comprometimento com a sustentabilidade",
      description: "Cuidamos do planeta enquanto cuidamos de você"
    },
    {
      icon: Sparkles,
      title: "Paixão por transformar vidas com propósito",
      description: "Cada conquista nossa é uma vida transformada"
    }
  ];

  const pilares = [
    {
      icon: Brain,
      title: "Atendimento exclusivo e humanizado",
      description: "Cada pessoa é única e merece atenção personalizada"
    },
    {
      icon: Dumbbell,
      title: "Treinos personalizados e eficazes",
      description: "Metodologia adaptada aos seus objetivos específicos"
    },
    {
      icon: Leaf,
      title: "Compromisso com o meio ambiente",
      description: "Práticas sustentáveis em todas as nossas ações"
    },
    {
      icon: FlaskConical,
      title: "Inovação em equipamentos",
      description: "Tecnologia de ponta para resultados superiores"
    },
    {
      icon: Lightbulb,
      title: "Equilíbrio entre corpo e mente",
      description: "Bem-estar integral para uma vida plena"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-hero text-primary leading-tight">
              Sobre o 
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Life Personal Estúdio
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Onde cada treino é uma experiência única, pensada especialmente para você. 
              Descubra um novo conceito de bem-estar e transformação pessoal.
            </p>

            <Button 
              onClick={() => document.getElementById("about-content")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              className="btn-premium bg-gradient-gold text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-gold hover:shadow-xl group"
            >
              Conheça Nossa História
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="about-content" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="font-h1 text-primary mb-6">Nossa História</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O <strong>Life Estúdio Personalizado</strong> nasceu de um sonho: criar um espaço onde cada pessoa 
                pudesse encontrar não apenas um treino, mas uma jornada de autodescoberta e transformação. 
                Acreditamos que o exercício físico vai muito além da estética - é sobre despertar o seu potencial, 
                fortalecer sua confiança e enriquecer todas as dimensões da sua vida.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desde o primeiro dia, nossa filosofia é simples: <strong>você é único, e seu treino também deve ser</strong>. 
                Por isso, dedicamos tempo para conhecer sua história, seus objetivos e seus desafios, 
                criando uma experiência verdadeiramente personalizada que respeita seu ritmo e celebra suas conquistas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, somos mais que um estúdio - somos um parceiro na sua jornada de bem-estar, 
                comprometidos em proporcionar não apenas resultados excepcionais, mas também momentos 
                de alegria, superação e crescimento pessoal.
              </p>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src={trainingImage} 
                alt="Atendimento personalizado no Life Estúdio" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-2xl shadow-gold">
                <Heart className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Missão */}
            <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 border-2 border-accent/20 animate-fade-in">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-full mb-6">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-h2 text-primary mb-6">Nossa Missão</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                <strong>Ajudar e inspirar pessoas através do exercício físico, enriquecendo todas as áreas da sua vida</strong> 
                — nos aspectos mental, social e físico — transformando vidas e realizando sonhos com acolhimento, 
                propósito e excelência.
              </p>
            </Card>

            {/* Visão */}
            <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 border-2 border-accent/20 animate-fade-in">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-full mb-6">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-h2 text-primary mb-6">Nossa Visão</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                <strong>Ser referência no mercado de Wellness como um estúdio inovador, confiável e transformador</strong>, 
                reconhecido pela excelência na experiência oferecida e pelo impacto positivo na vida de cada aluno.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-6">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Os princípios que orientam cada decisão e cada relacionamento que construímos no nosso estúdio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full group-hover:scale-110 transition-transform flex-shrink-0">
                    <valor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-h3 text-primary mb-3 text-base">{valor.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{valor.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Pilares */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-6">Nossos Pilares</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As bases sólidas que sustentam nossa excelência e garantem sua experiência única.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pilares.map((pilar, index) => (
              <Card 
                key={index} 
                className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <pilar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary mb-4 min-h-[3.5rem] flex items-center justify-center">{pilar.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{pilar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sua experiência, do seu jeito */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-scale-in order-2 lg:order-1">
              <img 
                src={studioImage} 
                alt="Experiência personalizada no Life Estúdio" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-gold p-6 rounded-2xl shadow-gold">
                <Users className="h-12 w-12 text-primary" />
              </div>
            </div>

            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <h2 className="font-h1 text-primary mb-6">Sua experiência, do seu jeito</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entendemos que cada pessoa tem uma história única, objetivos específicos e um ritmo próprio. 
                Por isso, no <strong>Life Estúdio Personalizado</strong>, não existe receita pronta ou programa padronizado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desde o primeiro encontro, dedicamos tempo para conhecer você: suas preferências, limitações, 
                sonhos e desafios. <strong>Seu treino é desenhado especialmente para você</strong>, respeitando seu corpo, 
                sua agenda e seu estilo de vida.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aqui, você não é apenas mais um aluno - você é o protagonista de uma jornada de transformação 
                que celebra suas conquistas, supera obstáculos e constrói uma versão mais forte e confiante de si mesmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Você é nossa prioridade */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-h1 text-white mb-12">Você é nossa prioridade</h2>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-gray-100">
              "Aqui, sua jornada é única. E é tratada com a atenção que você merece."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-gold text-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="font-h1 text-primary mb-8">
              Venha viver essa experiência
            </h2>
            <p className="text-xl text-primary/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              <strong>Quer descobrir como é treinar em um estúdio onde você realmente é prioridade?</strong>
              <br />
              Agende sua avaliação gratuita e conheça uma nova forma de cuidar de si mesmo.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-primary text-white font-semibold px-12 py-6 text-xl shadow-elegant hover:shadow-xl group hover:bg-primary/90"
            >
              Agende sua avaliação
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-h2 text-white mb-4 md:mb-6 leading-tight">
              Transforme sua vida com quem realmente entende do assunto
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 px-4">
              Venha conhecer nosso espaço e descobrir como podemos ajudar você a alcançar seus objetivos de forma sustentável e prazerosa.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-gold hover:shadow-2xl group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">Agendar Visita</span>
              <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
