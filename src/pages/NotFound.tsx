import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="Página Não Encontrada - Life Personal Estúdio"
        description="A página que você procura não foi encontrada. Volte para a página inicial do Life Personal Estúdio e encontre o que precisa."
        path="/404"
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-12">
              <div className="text-8xl md:text-9xl font-bold text-accent/20 mb-4">404</div>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            </div>

            {/* Error Message */}
            <h1 className="font-h1 text-primary mb-6">
              Oops! Página não encontrada
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A página que você está procurando pode ter sido movida, renomeada ou não existe mais. 
              Mas não se preocupe, podemos ajudá-lo a encontrar o que precisa!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  <Home className="mr-2 h-5 w-5" />
                  Voltar ao Início
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.history.back()}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Página Anterior
              </Button>
            </div>

            {/* Quick Links */}
            <div className="bg-background/50 backdrop-blur rounded-2xl p-8 shadow-card">
              <h2 className="font-h3 text-primary mb-6">Links Úteis</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link 
                  to="/servicos"
                  className="p-4 rounded-lg border border-border hover:bg-accent hover:text-primary transition-all text-center"
                >
                  <div className="font-medium">Serviços</div>
                </Link>
                
                <Link 
                  to="/planos"
                  className="p-4 rounded-lg border border-border hover:bg-accent hover:text-primary transition-all text-center"
                >
                  <div className="font-medium">Planos</div>
                </Link>
                
                <Link 
                  to="/sobre"
                  className="p-4 rounded-lg border border-border hover:bg-accent hover:text-primary transition-all text-center"
                >
                  <div className="font-medium">Sobre Nós</div>
                </Link>
                
                <Link 
                  to="/contato"
                  className="p-4 rounded-lg border border-border hover:bg-accent hover:text-primary transition-all text-center"
                >
                  <div className="font-medium">Contato</div>
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-6 bg-gradient-hero rounded-2xl text-center">
              <h3 className="text-white font-semibold mb-3">
                Precisa de ajuda? Entre em contato!
              </h3>
              <Button 
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Preciso de ajuda para navegar no site.&type=phone_number&app_absent=0", "_blank")}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
