import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SEOHead from "@/components/SEOHead";
import { Check, Star, ArrowRight, Heart, Users, Smartphone, Calendar, TrendingUp, Zap, Target, Music, Dumbbell, Flame, User, Clock, Award } from "lucide-react";
const Plans = () => {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${planName}.`);
    window.open(`https://api.whatsapp.com/send/?phone=554136790618&text=${message}&type=phone_number&app_absent=0`, "_blank");
  };
  const plans = [{
    name: "Meta Personal",
    price: "439",
    color: "border-border",
    description: "Seu ponto de partida ideal",
    paymentInfo: "1 entrada de R$ 439 + 11x de R$ 439",
    features: ["Personal 3x1 (1 professor para até 3 alunos, 3x na semana)", "Acesso livre nos demais dias para cárdio e extras", "Monitoramento cardíaco durante o treino", "Aulas coletivas, como pilates, metabolic e mais"],
    popular: false,
    bestValue: false
  }, {
    name: "Meta Full",
    price: "599",
    color: "border-border",
    description: "Experiência completa",
    paymentInfo: "1 entrada de R$ 599 + 11x de R$ 599",
    features: ["Personal 3x1 (1 professor para até 3 alunos, 3x na semana)", "Acesso livre nos demais dias para cárdio, aulas ou treinos extras", "Monitoramento cardíaco durante o treino", "Aulas coletivas, como pilates, metabolic e mais", "Cadeira de massagem", "Avaliação física", "Avaliação de movimento", "Ficha de bebidas quente (Chocolate, capuccino, mocaccino)", "Pré treino e pós treino", "Acesso a sala recovery"],
    popular: false,
    bestValue: true
  }];
  const highlights = [{
    icon: Heart,
    title: "Acompanhamento personalizado",
    description: "Cada treino é único e pensado especialmente para você"
  }, {
    icon: Users,
    title: "Atendimento de qualidade",
    description: "Profissionais especializados sempre prontos para ajudar"
  }, {
    icon: Smartphone,
    title: "Check-in fácil via app",
    description: "Praticidade total na palma da sua mão"
  }, {
    icon: Calendar,
    title: "Aulas coletivas inclusas",
    description: "Variedade e motivação em grupo"
  }, {
    icon: TrendingUp,
    title: "Resultados reais",
    description: "Acompanhamento contínuo da sua evolução"
  }];
  const classes = [{
    icon: Target,
    name: "D'GYM TRAINING",
    description: "Mix completo criado pelo Profº Dodô, combinando dança, ginástica calistênica, funcional e relaxamento.",
    instructor: "Dodô",
    schedule: "Seg, Qua e Sex, 19h00"
  }, {
    icon: Flame,
    name: "METABOLIC TRAINING",
    description: "Aula intensa para queimar calorias e acelerar metabolismo com exercícios dinâmicos.",
    instructor: "Evandro",
    schedule: "Seg, Qua e Sex, 6h00 / Ter, Qui, 19h00"
  }, {
    icon: Dumbbell,
    name: "PILATES SOLO",
    description: "Fortalece postura, equilíbrio e flexibilidade com exercícios controlados e respiração.",
    instructor: "Ana",
    schedule: "Ter e Qui, 07h00 e 18h00"
  }, {
    icon: User,
    name: "ALONGAMENTO",
    description: "Melhora flexibilidade, reduz tensões e previne lesões com movimentos guiados.",
    instructor: "Maicow",
    schedule: "Ter e Qui, 10h00"
  }];
  const comparisonData = [{
    service: "Personal Trainer 3x/semana",
    separate: "R$ 600+"
  }, {
    service: "Nutricionista parceira (pago à parte)",
    separate: "Consultar valores"

  }, {
    service: "Avaliação Física",
    separate: "R$ 50"
  }, {
    service: "Pilates + Coletivas",
    separate: "R$ 250+"
  }, {
    service: "Recovery",
    separate: "R$ 150"
  }, {
    service: "Bebidas Funcionais",
    separate: "Média de R$ 150"
  }];
  return <div className="min-h-screen bg-background pt-16">
      <SEOHead title="Planos - Life Personal Estúdio | Academia Premium em Campina Grande do Sul" description="Escolha o plano ideal para você no Life Personal Estúdio. Planos a partir de R$439/mês. Treinamento, nutrição e bem-estar em Campina Grande do Sul - PR." path="/planos" />
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

            <Button onClick={() => document.getElementById("plans")?.scrollIntoView({
            behavior: "smooth"
          })} size="lg" className="btn-premium bg-gradient-gold text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-gold hover:shadow-xl group">
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
            {highlights.map((highlight, index) => <Card key={highlight.title} className="p-4 md:p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in h-full flex flex-col" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="space-y-3 md:space-y-4 p-0 flex flex-col h-full">
                  <div className="mx-auto w-12 md:w-16 h-12 md:h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                    <highlight.icon className="h-6 md:h-8 w-6 md:w-8 text-primary" />
                  </div>
                  <h3 className="font-h3 text-primary text-xs md:text-sm font-semibold min-h-[2.5rem] flex items-center justify-center">{highlight.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-grow flex items-center justify-center text-center">{highlight.description}</p>
                </CardContent>
              </Card>)}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => <Card key={plan.name} className={`relative p-4 md:p-6 text-center ${plan.color} hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in flex flex-col h-full`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {plan.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary font-semibold px-3 md:px-4 py-1 text-xs">
                    <Star className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                    Mais Popular
                  </Badge>}
                
                {plan.bestValue && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary font-semibold px-3 md:px-4 py-1 text-xs">
                    <Award className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                    Melhor Custo Benefício
                  </Badge>}

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl md:text-2xl font-h2 text-primary mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">A partir de</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-h1 text-primary">
                      <span className="text-base md:text-lg">R$</span> {plan.price}
                      <span className="text-sm md:text-base font-normal text-muted-foreground">/mês</span>
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow flex flex-col">
                  <ul className="space-y-3 text-left flex-grow">
                    {plan.features.map((feature, idx) => <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-4 md:h-5 w-4 md:w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>

                  <div className="space-y-3 pt-4 py-px mt-auto">
                    <Button variant="outline" className="w-full group hover:bg-accent hover:text-primary transition-all">
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button onClick={() => handleWhatsApp(plan.name)} className={`w-full font-semibold text-sm md:text-base ${plan.popular || plan.bestValue ? 'btn-premium bg-gradient-gold text-primary shadow-gold hover:shadow-xl' : 'bg-primary hover:bg-primary/90'}`}>
                      Comece sua transformação
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
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
            {classes.map((classItem, index) => <Card key={classItem.name} className="p-4 md:p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in h-full flex flex-col" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <classItem.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base md:text-lg font-h3 text-primary min-h-[2.5rem] flex items-center">{classItem.name}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3 p-0 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow min-h-[4rem] flex items-start">
                    {classItem.description}
                  </p>
                  <div className="space-y-1 flex-shrink-0 mt-auto">
                    <p className="text-sm font-semibold text-primary">
                      Professor: {classItem.instructor}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{classItem.schedule}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
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
                  {comparisonData.map((item, index) => <TableRow key={index} className="hover:bg-muted/20">
                      <TableCell className="font-medium text-sm md:text-base">{item.service}</TableCell>
                      <TableCell className="text-center font-semibold text-primary text-sm md:text-base">{item.separate}</TableCell>
                    </TableRow>)}
                  <TableRow className="border-t-2 bg-red-50 font-bold">
                    <TableCell className="font-bold text-primary text-sm md:text-base">Total isolado:</TableCell>
                    <TableCell className="text-center font-bold text-red-600 text-base md:text-lg">R$ 1.400+</TableCell>
                  </TableRow>
                  <TableRow className="bg-gradient-gold font-bold">
                    <TableCell className="font-bold text-primary text-sm md:text-base">Plano Meta Full:</TableCell>
                    <TableCell className="text-center font-bold text-primary text-lg md:text-xl">R$ 599/mês</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <div className="text-center mt-6 md:mt-8 p-4 md:p-6 bg-gradient-gold rounded-lg">
              <p className="font-bold text-primary text-lg md:text-xl mb-2">
                💰 Economize mais de R$ 800/mês
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
            <Button size="lg" onClick={() => handleWhatsApp("Life Personal Estúdio")} className="btn-premium bg-gradient-gold text-primary font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-gold hover:shadow-2xl group w-full sm:w-auto">
              <span className="whitespace-nowrap">Falar com uma atendente agora</span>
              <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Plans;