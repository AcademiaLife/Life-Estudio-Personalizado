import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de agendar uma avaliação gratuita.&type=phone_number&app_absent=0", "_blank");
  };
  const handleSchedule = () => {
    document.getElementById("plans")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Life Personal Estúdio em Campina Grande do Sul - Academia premium com equipamentos modernos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-hero text-white leading-tight text-lg my-[20px]">
            Transforme sua jornada fitness no
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Life Estúdio Personalizado
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Transforme sua vida com acompanhamento próximo, resultados reais e um treinamento que respeita o seu ritmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 max-w-md sm:max-w-none mx-auto">
            <Button onClick={handleWhatsApp} size="lg" className="btn-premium bg-gradient-gold text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-gold hover:shadow-xl group w-full sm:w-auto">
              Transforme sua vida agora
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button onClick={handleSchedule} variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg btn-premium w-full sm:w-auto">
              Conhecer Planos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 text-center my-[20px]">
            <div className="space-y-2 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <h3 className="text-3xl font-bold text-accent">+500</h3>
              <p className="text-gray-300 my-[20px]">Alunos Transformados</p>
            </div>
            <div className="space-y-2 animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="text-3xl font-bold text-accent px-0 mx-0">10+</h3>
              <p className="text-gray-300 my-[20px]">Anos de Experiência</p>
            </div>
            <div className="space-y-2 animate-slide-up" style={{
            animationDelay: '0.6s'
          }}>
              <h3 className="text-3xl font-bold text-accent">R$ 399</h3>
              <p className="text-gray-300 my-[20px]">A partir de</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;