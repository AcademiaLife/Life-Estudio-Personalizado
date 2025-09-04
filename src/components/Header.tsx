import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Início",
    href: "/"
  }, {
    name: "Sobre",
    href: "/sobre"
  }, {
    name: "Serviços",
    href: "/servicos"
  }, {
    name: "Planos",
    href: "/planos"
  }, {
    name: "Equipe",
    href: "/equipe"
  }, {
    name: "Depoimentos",
    href: "/depoimentos"
  }, {
    name: "Contato",
    href: "/contato"
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de saber mais sobre o Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-card' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'} border-b border-border`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/lovable-uploads/9aa3ac8b-18d2-496e-ba64-3e7cee37f613.png" alt="Life Personal Estúdio" className="h-10 sm:h-12 w-auto max-w-[220px] sm:max-w-[280px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-accent relative ${location.pathname === item.href ? "text-accent" : "text-muted-foreground"}`}>
                {item.name}
                {location.pathname === item.href && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"></span>}
              </Link>)}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {isScrolled && <Button onClick={handleWhatsApp} className="btn-premium bg-gradient-gold text-primary font-semibold px-6 py-2 shadow-gold hover:shadow-xl animate-fade-in">Aula experimental</Button>}
            <Button variant="outline" size="sm" onClick={handleWhatsApp} className="border-accent text-accent hover:bg-accent hover:text-primary">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-accent px-2 py-1 ${location.pathname === item.href ? "text-accent bg-accent/10 rounded" : "text-muted-foreground"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-4 space-y-3">
                <Button onClick={handleWhatsApp} className="w-full btn-premium bg-gradient-gold text-primary font-semibold shadow-gold">
                  Avaliação Gratuita
                </Button>
                <Button variant="outline" size="sm" onClick={handleWhatsApp} className="w-full border-accent text-accent hover:bg-accent hover:text-primary">
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;