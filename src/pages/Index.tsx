
import Hero from "@/components/Hero";
import PlansSection from "@/components/PlansSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Trophy, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação gratuita no Life Personal Estúdio.", "_blank");
  };

  const quickLinks = [
    {
      title: "Nossa História",
      description: "Conheça nossa jornada e propósito",
      link: "/sobre",
      icon: Target
    },
    {
      title: "Nossos Serviços", 
      description: "Descubra como podemos ajudar você",
      link: "/servicos",
      icon: Trophy
    },
    {
      title: "Nossa Equipe",
      description: "Conheça nossos especialistas",
      link: "/equipe", 
      icon: Users
    },
    {
      title: "Depoimentos",
      description: "Veja histórias de transformação",
      link: "/depoimentos", 
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Quick Navigation */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-6">Explore Nosso Universo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubra tudo o que o Life Personal Estúdio pode oferecer para sua transformação. 
              Cada seção foi criada pensando em você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>
                <Link to={item.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-primary transition-all"
                  >
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <PlansSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="font-h2 text-white mb-6">
              Pronto Para Transformar Sua Vida?
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Não espere mais. Sua transformação começa com o primeiro passo. 
              Agende sua avaliação gratuita hoje mesmo e descubra o que é possível alcançar.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
              >
                Agendar Avaliação Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/planos">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold px-8 py-4 text-lg btn-premium"
                >
                  Ver Nossos Planos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
