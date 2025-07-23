
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Star, ArrowRight, Heart, Users, Smartphone, Calendar, TrendingUp, Zap, Target, Music, Dumbbell, Flame, User, Clock } from "lucide-react";

const Plans = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de conhecer os planos do Life Elite Studio e agendar uma avaliação.", "_blank");
  };

  const plans = [
    {
      name: "Meta Personal",
      price: "399",
      color: "border-green-400",
      description: "Seu ponto de partida ideal",
      paymentInfo: "1 entrada de R$ 399 + 11x de R$ 399",
      features: [
        "Personal 3x por semana (turmas até 3 alunos)",
        "Acesso livre para cardio e extras nos demais dias",
        "Monitoramento cardíaco durante o treino",
        "Aulas coletivas (pilates, metabolic e mais)"
      ]
    },
    {
      name: "Meta Slim",
      price: "449",
      color: "border-blue-400",
      description: "Equilíbrio perfeito",
      paymentInfo: "1 entrada de R$ 399 + 11x de R$ 449",
      features: [
        "Tudo do Meta Personal",
        "Nutricionista especializada",
        "Avaliação física e acompanhamento de resultados"
      ]
    },
    {
      name: "Meta Full",
      price: "599",
      color: "border-accent shadow-gold",
      description: "Experiência completa",
      paymentInfo: "1 entrada de R$ 599 + 11x de R$ 599",
      popular: true,
      features: [
        "Tudo dos planos anteriores",
        "Avaliação de movimento",
        "Bebidas quentes: chocolate, cappuccino, mocaccino",
        "Pré e pós-treino inclusos",
        "Acesso à sala recovery"
      ]
    }
  ];

  const highlights = [
    {
      icon: Heart,
      title: "Acompanhamento personalizado",
      description: "Cada treino é único e pensado especialmente para você"
    },
    {
      icon: Users,
      title: "Atendimento de qualidade",
      description: "Profissionais especializados sempre prontos para ajudar"
    },
    {
      icon: Smartphone,
      title: "Check-in fácil via app",
      description: "Praticidade total na palma da sua mão"
    },
    {
      icon: Calendar,
      title: "Aulas coletivas inclusas",
      description: "Variedade e motivação em grupo"
    },
    {
      icon: TrendingUp,
      title: "Resultados reais",
      description: "Acompanhamento contínuo da sua evolução"
    }
  ];

  const classes = [
    {
      icon: Music,
      name: "ZUMBA",
      description: "Aula de fitness com ritmos latinos e coreografias, divertida e queima calorias.",
      instructor: "Gil",
      schedule: "Terça e quinta, 16h00"
    },
    {
      icon: Target,
      name: "D'GYM TRAINING",
      description: "Mix completo criado pelo Profº Dodô, combinando dança, ginástica calistênica, funcional e relaxamento.",
      instructor: "Dodô",
      schedule: "Seg, Qua e Sex, 19h00"
    },
    {
      icon: Flame,
      name: "METABOLIC TRAINING",
      description: "Aula intensa para queimar calorias e acelerar metabolismo com exercícios dinâmicos.",
      instructor: "Evandro",
      schedule: "Seg, Qua e Sex, 6h00 / Ter, Qui, 19h00"
    },
    {
      icon: Dumbbell,
      name: "PILATES SOLO",
      description: "Fortalece postura, equilíbrio e flexibilidade com exercícios controlados e respiração.",
      instructor: "Ana",
      schedule: "Ter e Qui, 07h00 e 18h00"
    },
    {
      icon: User,
      name: "ALONGAMENTO",
      description: "Melhora flexibilidade, reduz tensões e previne lesões com movimentos guiados.",
      instructor: "Maicow",
      schedule: "Ter e Qui, 10h00"
    }
  ];

  const comparisonData = [
    { service: "Personal Trainer 3x/semana", separate: "R$ 600+" },
    { service: "Nutricionista", separate: "R$ 300" },
    { service: "Avaliações físicas e suporte", separate: "R$ 150" },
    { service: "Pilates + Coletivas", separate: "R$ 250+" },
    { service: "Recovery", separate: "R$ 150" },
    { service: "Bebidas funcionais", separate: "R$ 100" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-hero text-primary leading-tight">
              Seu treino, seu ritmo,
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                seu espaço
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              No nosso estúdio personalizado, cada detalhe foi pensado para que você se sinta 
              acolhido, respeitado e acompanhado em cada etapa da sua jornada.
            </p>

            <Button 
              onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              className="btn-premium bg-gradient-gold text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-gold hover:shadow-xl group"
            >
              Conheça nossos planos
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="p-4 md:p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-3 md:space-y-4 p-0">
                  <div className="mx-auto w-12 md:w-16 h-12 md:h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                    <highlight.icon className="h-6 md:h-8 w-6 md:w-8 text-primary" />
                  </div>
                  <h3 className="font-h3 text-primary text-xs md:text-sm font-semibold">{highlight.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-h1 text-primary mb-4 md:mb-6">Escolha Seu Plano Ideal</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Planos anuais com mais vantagens e economia. Invista na sua saúde com inteligência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative p-4 md:p-6 text-center ${plan.color} hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in flex flex-col h-full`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary font-semibold px-3 md:px-4 py-1 text-xs">
                    <Star className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                    Mais Completo
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl md:text-2xl font-h2 text-primary mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="space-y-2">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-h1 text-primary">
                      <span className="text-base md:text-lg">R$</span> {plan.price}
                      <span className="text-sm md:text-base font-normal text-muted-foreground">/mês</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{plan.paymentInfo}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow flex flex-col">
                  <ul className="space-y-3 text-left flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-4 md:h-5 w-4 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={handleWhatsApp}
                    className={`w-full font-semibold text-sm md:text-base mt-auto ${
                      plan.popular 
                        ? 'btn-premium bg-gradient-gold text-primary shadow-gold hover:shadow-xl' 
                        : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                  >
                    {plan.popular ? 'Quero o plano mais completo' : 'Quero este plano'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-h2 text-primary mb-4">Aulas Coletivas Inclusas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4">
              Variedade, motivação e diversão. Todas as modalidades estão incluídas nos seus planos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {classes.map((classItem, index) => (
              <Card 
                key={classItem.name}
                className="p-4 md:p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <classItem.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base md:text-lg font-h3 text-primary">{classItem.name}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3 p-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {classItem.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-primary">
                      Professor: {classItem.instructor}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <p className="text-xs text-muted-foreground">{classItem.schedule}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Comparison */}
      <section className="py-12 md:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-h2 text-primary mb-4">Veja Quanto Você Economiza</h2>
              <p className="text-muted-foreground px-4">
                Compare os valores de cada serviço contratado separadamente com nosso plano completo.
              </p>
            </div>

            <Card className="overflow-hidden shadow-elegant">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="font-semibold text-primary text-sm md:text-base">Serviço</TableHead>
                    <TableHead className="text-center font-semibold text-primary text-sm md:text-base">Valor Médio Mensal Separado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-muted/20">
                      <TableCell className="font-medium text-sm md:text-base">{item.service}</TableCell>
                      <TableCell className="text-center font-semibold text-primary text-sm md:text-base">{item.separate}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="border-t-2 bg-red-50 font-bold">
                    <TableCell className="font-bold text-primary text-sm md:text-base">Total isolado:</TableCell>
                    <TableCell className="text-center font-bold text-red-600 text-base md:text-lg">R$ 1.550+</TableCell>
                  </TableRow>
                  <TableRow className="bg-gradient-gold font-bold">
                    <TableCell className="font-bold text-primary text-sm md:text-base">Plano FULL Life Elite:</TableCell>
                    <TableCell className="text-center font-bold text-primary text-lg md:text-xl">R$ 599/mês</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <div className="text-center mt-6 md:mt-8 p-4 md:p-6 bg-gradient-gold rounded-lg">
              <p className="font-bold text-primary text-lg md:text-xl mb-2">
                💰 Economize mais de R$ 950/mês
              </p>
              <p className="text-primary text-sm md:text-base">
                Tenha tudo em um só lugar com conforto, praticidade e resultados reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-h2 text-white mb-4 md:mb-6 leading-tight">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 px-4">
              Comece sua transformação com a gente! Nossa equipe está pronta para 
              criar o plano perfeito para seus objetivos.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-gold hover:shadow-2xl group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">Falar com um especialista agora</span>
              <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
