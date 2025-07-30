
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Dumbbell, 
  Apple,
  Users, 
  Activity, 
  Heart, 
  Zap, 
  Brain, 
  Smartphone,
  Target,
  Leaf,
  ArrowRight, 
  CheckCircle,
  Clock,
  User
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de saber mais sobre os serviços do Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };

  const services = [
    {
      id: "treinamento-personalizado",
      icon: Dumbbell,
      title: "Treinamento Personalizado",
      description: "Programa individual desenvolvido especificamente para seus objetivos, limitações e preferências.",
      features: ["Avaliação física completa", "Programa exclusivo", "Acompanhamento constante", "Ajustes semanais"],
      process: "Você começa com uma avaliação física personalizada, criamos um plano exclusivo que respeita seu ritmo e suas metas, e acompanhamos cada progresso com ajustes semanais para garantir seu máximo desempenho.",
      duration: "Sessões individuais de 60 minutos.",
      ideal: "Quem busca atenção total, resultados reais e a certeza de ter um plano pensado especialmente para você.",
      differentials: [
        "Turmas reduzidas para máxima atenção",
        "Profissionais certificados e humanizados",
        "Acesso prático via app",
        "Ambiente sofisticado e acolhedor"
      ]
    },
    {
      id: "nutricao-funcional",
      icon: Apple,
      title: "Nutrição Funcional",
      description: "Orientação nutricional integrada ao treino para potencializar resultados e melhorar a saúde.",
      features: ["Avaliação nutricional individual", "Plano alimentar personalizado", "Acompanhamento com nutricionista parceiro", "Sinergia com seus objetivos físicos"],
      process: "Compreendemos seus hábitos e preferências em uma avaliação nutricional completa, para criar um plano alimentar prático e eficaz. Ajustamos regularmente para que você alcance seus objetivos com tranquilidade e compromisso.",
      duration: "Consultorias semanais ou mensais.",
      ideal: "Quem quer transformar hábitos alimentares com suporte real e resultados consistentes.",
      differentials: [
        "Plano personalizado e funcional",
        "Apoio direto de profissionais dedicados",
        "Integração com seu treino para maior performance"
      ]
    },
    {
      id: "aulas-coletivas",
      icon: Users,
      title: "Aulas Coletivas Exclusivas",
      description: "Turmas pequenas, focadas e com acompanhamento técnico, promovendo motivação e resultado.",
      features: ["Variedade de modalidades", "Grupos reduzidos", "Instrutores especializados", "Acompanhamento técnico personalizado"],
      process: "Participe de aulas como pilates, metabolic training e zumba, em grupos selecionados. Cada aula foi pensada para ser motivadora e eficaz, com apoio constante dos nossos profissionais.",
      duration: "Programação variada com horários flexíveis.",
      ideal: "Quem busca treinar com energia, socializar e evoluir em grupo com atenção e segurança.",
      differentials: [
        "Grupos pequenos e acolhedores",
        "Instrutores experientes e atenciosos",
        "Vibração positiva e foco em resultado"
      ]
    },
    {
      id: "avaliacao-fisica",
      icon: Activity,
      title: "Avaliação Física e de Movimento",
      description: "Análise completa do seu corpo, mobilidade e limitações para prescrição precisa do treino.",
      features: ["Testes físicos e posturais", "Análise de composição corporal", "Avaliação de mobilidade articular", "Relatório detalhado"],
      process: "Realizamos testes completos para entender sua postura, flexibilidade e força. Com esses dados, apresentamos um plano claro para você evoluir com segurança e consciência.",
      duration: "Avaliações periódicas conforme seu ritmo.",
      ideal: "Quem valoriza autoconhecimento corporal e deseja treinar com mais consciência.",
      differentials: [
        "Tecnologia moderna para avaliação",
        "Profissionais capacitados",
        "Relatórios que orientam seu desenvolvimento"
      ]
    },
    {
      id: "monitoramento-cardiaco",
      icon: Heart,
      title: "Monitoramento Cardíaco Durante o Treino",
      description: "Acompanhe sua frequência cardíaca em tempo real para otimizar o desempenho.",
      features: ["Monitoramento com tecnologia de ponta", "Feedback em tempo real", "Análise pós-treino", "Maior segurança e precisão"],
      process: "Utilizamos tecnologia avançada para acompanhar sua frequência cardíaca em tempo real. Isso garante segurança e o máximo de eficiência em cada treino.",
      duration: "Monitoramento ativo durante todas as sessões.",
      ideal: "Quem busca performance com responsabilidade e com a certeza de estar no seu limite ideal.",
      differentials: [
        "Equipamentos de ponta",
        "Feedback instantâneo da equipe",
        "Ajustes fiéis a cada batimento"
      ]
    },
    {
      id: "recuperacao-bem-estar",
      icon: Zap,
      title: "Programa de Recuperação e Bem-Estar",
      description: "Protocolo para relaxamento, recuperação muscular e melhora do sono e da disposição.",
      features: ["Técnicas de liberação miofascial", "Rotinas de mobilidade", "Estratégias para melhorar o sono", "Redução de estresse"],
      process: "Relaxe e recupere-se com sessões de alongamento, relaxamento e acesso à nossa sala recovery. Cuide do corpo antes e depois do treino para evitar lesões e aumentar sua performance.",
      duration: "Conforme recomendação ou após os treinos.",
      ideal: "Quem entende que a recuperação é parte essencial da evolução física.",
      differentials: [
        "Ambiente relaxante",
        "Técnicas que prolongam seus resultados",
        "Suporte especializado"
      ]
    },
    {
      id: "consultoria-estilo-vida",
      icon: Brain,
      title: "Consultoria para Estilo de Vida Saudável",
      description: "Mudanças práticas para sua rotina: sono, alimentação, produtividade e bem-estar.",
      features: ["Estratégias personalizadas", "Orientações de rotina saudável", "Acompanhamento comportamental", "Integração corpo-mente"],
      process: "Criamos um plano de vida que contempla seu corpo, mente e emoções. Com suporte motivacional contínuo, ajudamos você a adotar hábitos positivos de forma duradoura.",
      duration: "Consultorias adaptáveis conforme seu objetivo.",
      ideal: "Quem quer mudar de verdade e ser acompanhado em cada passo.",
      differentials: [
        "Acompanhamento multidisciplinar",
        "Estratégias eficazes e personalizadas",
        "Foco no equilíbrio físico e emocional"
      ]
    },
    {
      id: "app-exclusivo",
      icon: Smartphone,
      title: "Acompanhamento via App Exclusivo",
      description: "Tenha seu plano de treino, evolução e feedbacks na palma da mão, com suporte contínuo.",
      features: ["App com login pessoal", "Treinos atualizados", "Registro de evolução", "Suporte direto ao profissional"],
      process: "Tenha todo o controle do seu treino na palma da mão. Nosso app permite check-in rápido, registro de sessões, metas e comunicação direta com os profissionais.",
      duration: "Acesso completo durante seu contrato.",
      ideal: "Quem busca praticidade aliada a suporte constante.",
      differentials: [
        "Interface intuitiva",
        "Feedback e acompanhamento automático",
        "Interação ágil com a equipe"
      ]
    },
    {
      id: "funcional-metabolic",
      icon: Target,
      title: "Treinamento Funcional e Metabolic Training",
      description: "Treinos dinâmicos e de alta intensidade que trabalham força, agilidade e resistência.",
      features: ["Circuitos de força e cardio", "Exercícios com peso corporal e acessórios", "Evolução progressiva", "Gasto calórico elevado"],
      process: "Participe de sessões intensas, com séries diversas e em grupos reduzidos. A metodologia combina funcionalidade e queima calórica para resultados rápidos e duradouros.",
      duration: "Aulas dinâmicas com programação variada.",
      ideal: "Quem busca treinos divertidos, motivadores e eficientes.",
      differentials: [
        "Instrutores especializados",
        "Programação embasada em ciência",
        "Ambiente de pura energia"
      ]
    },
    {
      id: "pilates-alongamento",
      icon: Leaf,
      title: "Pilates Solo e Alongamento",
      description: "Desenvolva consciência corporal, postura e flexibilidade com práticas suaves e eficazes.",
      features: ["Sessões focadas em mobilidade e postura", "Técnicas de respiração e concentração", "Alongamentos ativos e passivos", "Prevenção de dores e lesões"],
      process: "Aposte em aulas focadas em postura, mobilidade e força do core. Técnicas que ajudam a prevenir lesões e proporcionar bem-estar desde o primeiro movimento.",
      duration: "Sessões regulares ou sugeridas conforme sua necessidade.",
      ideal: "Quem busca equilíbrio, consciência corporal e qualidade de vida.",
      differentials: [
        "Instrutores com formação e sensibilidade",
        "Ambiente calmo e acolhedor",
        "Abordagem individualizada"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-hero text-primary leading-tight">
              Serviços Que 
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Transformam Vidas
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Cada serviço foi cuidadosamente desenvolvido para atender suas necessidades específicas, 
              garantindo resultados sustentáveis e uma experiência única de transformação.
            </p>

            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              className="btn-premium bg-gradient-gold text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-gold hover:shadow-xl group"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6 flex flex-col h-full">
                  <div className="flex items-start space-x-4 flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-xl flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary text-lg leading-tight min-h-[3rem] flex items-center">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow min-h-[4.5rem] flex items-start">
                    {service.description}
                  </p>

                  <div className="space-y-3 flex-shrink-0">
                    <h4 className="font-semibold text-primary text-sm">O que está incluído:</h4>
                    <ul className="space-y-2 min-h-[8rem] flex flex-col justify-start">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-muted-foreground text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Dialog open={openDialog === service.id} onOpenChange={(open) => setOpenDialog(open ? service.id : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-xl group mt-auto"
                      >
                        Saiba Mais
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-gold rounded-lg">
                            <service.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span>{service.title}</span>
                        </DialogTitle>
                        <DialogDescription>
                          {service.description}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Target className="h-5 w-5 mr-2" />
                            Como Funciona
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.process}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-primary mb-2 flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              Duração
                            </h5>
                            <p className="text-muted-foreground text-sm">{service.duration}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold text-primary mb-2 flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              Ideal Para
                            </h5>
                            <p className="text-muted-foreground text-sm">{service.ideal}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3">
                            Diferenciais do Life Estúdio
                          </h4>
                          <ul className="space-y-2">
                            {service.differentials.map((differential, index) => (
                              <li key={index} className="flex items-center text-muted-foreground text-sm">
                                <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                                {differential}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t">
                          <Button 
                            onClick={handleWhatsApp}
                            className="w-full bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-xl group"
                            size="lg"
                          >
                            Saber Mais Sobre Este Serviço
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-h2 text-white mb-4 md:mb-6 leading-tight">
              Pronto Para Começar Sua Transformação?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 px-4">
              Agende sua avaliação gratuita e vamos criar juntos o programa perfeito para seus objetivos.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-gold hover:shadow-2xl group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">Agendar Avaliação Gratuita</span>
              <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
