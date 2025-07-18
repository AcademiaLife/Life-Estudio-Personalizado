
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Star, ArrowRight, Calculator } from "lucide-react";
import { useState } from "react";

const Plans = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação gratuita e conhecer os planos do Life Personal Estúdio.", "_blank");
  };

  const plans = [
    {
      name: "Essencial",
      price: "399",
      description: "Para quem está começando",
      popular: false
    },
    {
      name: "Performance",
      price: "420", 
      description: "Mais escolhido",
      popular: true
    },
    {
      name: "Total",
      price: "549",
      description: "Experiência completa",
      popular: false
    }
  ];

  const features = [
    {
      name: "Personal trainer dedicado",
      essencial: true,
      performance: true,
      total: true
    },
    {
      name: "Avaliação física completa",
      essencial: true,
      performance: true,
      total: true
    },
    {
      name: "Programa de treino personalizado",
      essencial: true,
      performance: true,
      total: true
    },
    {
      name: "Nutricionista especializada",
      essencial: false,
      performance: true,
      total: true
    },
    {
      name: "Plano alimentar personalizado",
      essencial: false,
      performance: true,
      total: true
    },
    {
      name: "Acompanhamento quinzenal",
      essencial: false,
      performance: true,
      total: false
    },
    {
      name: "Acompanhamento semanal",
      essencial: true,
      performance: false,
      total: true
    },
    {
      name: "Reavaliações mensais",
      essencial: false,
      performance: true,
      total: false
    },
    {
      name: "Reavaliações quinzenais",
      essencial: false,
      performance: false,
      total: true
    },
    {
      name: "Suporte via WhatsApp",
      essencial: false,
      performance: false,
      total: true
    },
    {
      name: "Consultoria nutricional completa",
      essencial: false,
      performance: false,
      total: true
    }
  ];

  useState(() => {
    const handleScroll = () => {
      setStickyVisible(window.pageYOffset > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Sticky CTA */}
      <div className={`fixed top-16 left-0 right-0 z-40 bg-gradient-gold py-3 transition-all duration-300 ${
        stickyVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-primary font-semibold">Pronto para transformar sua vida?</span>
          <Button onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90 text-white">
            Agendar Avaliação Gratuita
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="font-h1 mb-6">
              Compare Nossos Planos
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Escolha o plano ideal para seus objetivos. Todos incluem acompanhamento profissional 
              personalizado com muito mais valor do que você imagina.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Plans Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`text-center p-6 hover:shadow-elegant transition-all duration-300 ${
                  plan.popular ? 'border-accent shadow-gold scale-105' : 'hover:-translate-y-1'
                }`}
              >
                {plan.popular && (
                  <Badge className="mb-4 bg-gradient-gold text-primary">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="font-h3 text-primary">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <span className="font-h2 text-primary">R$ {plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleWhatsApp}
                    className={`w-full ${
                      plan.popular 
                        ? 'btn-premium bg-gradient-gold text-primary shadow-gold' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-primary mb-4">Comparação Detalhada</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja tudo o que está incluso em cada plano e escolha o que melhor se adapta aos seus objetivos.
            </p>
          </div>

          <div className="bg-background rounded-lg shadow-card overflow-hidden max-w-6xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2">
                  <TableHead className="w-1/3 text-left font-semibold text-primary">Benefícios</TableHead>
                  <TableHead className="text-center font-semibold text-primary">Essencial</TableHead>
                  <TableHead className="text-center font-semibold text-accent bg-gradient-subtle">
                    Performance
                    <Badge className="ml-2 bg-gradient-gold text-primary text-xs">Popular</Badge>
                  </TableHead>
                  <TableHead className="text-center font-semibold text-primary">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b font-semibold bg-muted/30">
                  <TableCell className="font-semibold text-primary">Preço mensal</TableCell>
                  <TableCell className="text-center font-h3 text-primary">R$ 399</TableCell>
                  <TableCell className="text-center font-h3 text-accent bg-gradient-subtle">R$ 420</TableCell>
                  <TableCell className="text-center font-h3 text-primary">R$ 549</TableCell>
                </TableRow>
                {features.map((feature, index) => (
                  <TableRow key={index} className="hover:bg-muted/20">
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell className="text-center">
                      {feature.essencial ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center bg-gradient-subtle">
                      {feature.performance ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.total ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-subtle border-accent shadow-gold">
            <div className="text-center mb-8">
              <Calculator className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-h2 text-primary mb-4">Economia Real</h3>
              <p className="text-muted-foreground">
                Veja quanto você economiza contratando nossos planos completos:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary mb-4">Contratando Separadamente:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Personal trainer (2x/semana)</span>
                    <span className="font-semibold">R$ 480</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nutricionista consulta mensal</span>
                    <span className="font-semibold">R$ 200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avaliação física mensal</span>
                    <span className="font-semibold">R$ 150</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-primary">
                    <span>Total Mensal:</span>
                    <span>R$ 830</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-accent mb-4">Com Nosso Plano Performance:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Personal trainer dedicado</span>
                    <span>✓ Incluso</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nutricionista especializada</span>
                    <span>✓ Incluso</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avaliações e reavaliações</span>
                    <span>✓ Incluso</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-accent">
                    <span>Seu Investimento:</span>
                    <span>R$ 420</span>
                  </div>
                </div>
                
                <div className="bg-gradient-gold text-primary p-4 rounded-lg text-center mt-4">
                  <p className="font-bold text-lg">Economia de R$ 410/mês!</p>
                  <p className="text-sm">Quase 50% de desconto</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-h2 text-white mb-6">
              Pronto Para Começar Sua Transformação?
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Agende sua avaliação gratuita e conheça nossa metodologia. 
              Sem compromisso, apenas resultados reais.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
            >
              Agendar Avaliação Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
