import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import PlanValuePopup from "./PlanValuePopup";
const PlansSection = () => {
  const [showValuePopup, setShowValuePopup] = useState(false);
  const plans = [{
    name: "Meta Personal",
    price: "399",
    description: "Seu ponto de partida ideal",
    benefits: ["Personal 3x por semana (turmas até 3 alunos)", "Acesso livre para cardio e extras nos demais dias", "Monitoramento cardíaco durante o treino", "Aulas coletivas (pilates, metabolic e mais)"],
    popular: false,
    color: "border-border"
  }, {
    name: "Meta Slim",
    price: "449",
    description: "Equilíbrio perfeito",
    benefits: ["Tudo do Meta Personal", "Nutricionista especializada", "Avaliação física e acompanhamento de resultados"],
    popular: true,
    color: "border-accent shadow-gold"
  }, {
    name: "Meta Full",
    price: "599",
    description: "Experiência completa",
    benefits: ["Tudo dos planos anteriores", "Avaliação de movimento", "Bebidas quentes: chocolate, cappuccino, mocaccino", "Pré e pós-treino inclusos", "Acesso à sala recovery"],
    popular: false,
    color: "border-border"
  }];
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de saber mais sobre os planos do Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };
  return <>
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-6">Escolha o plano ideal para você</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Investir em seu bem-estar nunca foi tão acessível. Conheça nossos planos feitos para transformar sua vida, não só seu corpo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => <Card key={plan.name} className={`relative p-6 text-center ${plan.color} hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in flex flex-col h-full`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {plan.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary font-semibold px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>}

                <CardHeader className="pb-4">
                  <CardTitle className="font-h3 text-primary mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">A partir de</p>
                    <p className="font-h2 text-primary">
                      <span className="text-lg">R$</span> {plan.price}
                      <span className="text-base font-normal text-muted-foreground">/mês</span>
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow flex flex-col">
                  <ul className="space-y-3 text-left flex-grow">
                    {plan.benefits.map((benefit, idx) => <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>)}
                  </ul>

                  <div className="space-y-3 pt-4 py-px mt-auto">
                    <Link to="/planos">
                      <Button variant="outline" className="w-full group hover:bg-accent hover:text-primary transition-all">
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    
                    <Button onClick={handleWhatsApp} className={`w-full font-semibold text-sm sm:text-base ${plan.popular ? 'btn-premium bg-gradient-gold text-primary shadow-gold hover:shadow-xl' : 'bg-primary hover:bg-primary/90'}`}>
                      <WhatsAppIcon className="mr-2 h-4 w-4" />
                      <span className="sm:hidden">Comece agora</span>
                      <span className="hidden sm:inline">ReComece sua transformação</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Percepção de Valor */}
          <div className="text-center bg-gradient-hero rounded-3xl p-12 shadow-elegant animate-fade-in">
            <h3 className="font-h2 text-white mb-4">
              Invista no seu bem-estar com um plano que oferece muito mais por menos
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ao contratar o Life Estúdio Personalizado, você tem acesso a treinamento exclusivo, nutrição personalizada, 
              monitoramento cardíaco e acompanhamento contínuo, tudo isso por um preço muito mais acessível do que 
              contratar esses serviços individualmente.
            </p>
            <Button size="lg" onClick={() => setShowValuePopup(true)} className="btn-premium bg-gradient-gold text-primary font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg shadow-gold hover:shadow-xl group w-full max-w-sm sm:max-w-md mx-auto">
              <span className="text-center">
                <span className="sm:hidden">Veja os benefícios</span>
                <span className="hidden sm:inline">Qualidade, economia e resultados</span>
              </span>
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>

      <PlanValuePopup open={showValuePopup} onOpenChange={setShowValuePopup} />
    </>;
};
export default PlansSection;