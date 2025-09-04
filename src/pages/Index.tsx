import Hero from "@/components/Hero";
import ChooseUsSection from "@/components/ChooseUsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import GallerySection from "@/components/GallerySection";
import PlansSection from "@/components/PlansSection";
import Testimonials from "@/components/Testimonials";
import ServicesSection from "@/components/ServicesSection";
import PrioritySection from "@/components/PrioritySection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de agendar uma avaliação gratuita no Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };
  return <div className="min-h-screen bg-background">
      <SEOHead title="Life Personal Estúdio - Academia Premium | Treinamento Personalizado" description="Transforme sua vida com acompanhamento personalizado no Life Personal Estúdio em Campina Grande do Sul - PR. Agende sua avaliação e alcance seus objetivos fitness." path="/" />
      {/* Hero Section */}
      <Hero />
      
      {/* Why Choose Us Section */}
      <ChooseUsSection />

      {/* Value Proposition Section */}
      <ValuePropositionSection />

      {/* Gallery Section - Auto Banner */}
      <GallerySection />

      {/* Plans Section */}
      <PlansSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Section */}
      <ServicesSection />

      {/* Priority Section */}
      <PrioritySection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="font-h2 text-primary mb-6">
              Pronto para investir em você?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">Venha viver a experiência Life Personal Estúdio e veja como podemos ajudar você a alcançar seus objetivos.</p>
            <Button size="lg" onClick={handleWhatsApp} className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group">
              Agende sua avaliação agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;