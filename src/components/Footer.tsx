import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Heart } from "lucide-react";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Vim através do site do Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };
  return <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-accent">Life Personal Estúdio</h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transformando vidas através do treinamento personalizado de alta performance. 
              Mais que uma academia, somos seu parceiro na jornada para uma vida mais saudável e plena.
            </p>
            
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary transition-all" onClick={() => window.open("https://www.instagram.com/lifeestudiopersonalizado", "_blank")}>
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary transition-all" onClick={() => window.open("https://www.facebook.com/academialifenaweb?mibextid=wwXIfr&rdid=jNh4ZcsIXIcubgKN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15uMXmvJEP%2F%3Fmibextid%3DwwXIfr", "_blank")}>
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-primary transition-all" onClick={handleWhatsApp}>
                <WhatsAppIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contato Rápido */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <WhatsAppIcon className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">(41) 3679-0618</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">academia-life@hotmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>R. Pedro Pasa, 1158 - Jardim Paulista</p>
                  <p>Campina Grande do Sul - PR, 83430-282</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Horários</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Segunda à Sexta</p>
                  <p>6h às 12h | 13h às 21h</p>
                </div>
              </div>
              <div className="text-gray-300 text-sm pl-8">
                <p className="font-medium">Sábado</p>
                <p>8h às 12h</p>
              </div>
              <div className="text-gray-300 text-sm pl-8">
                <p className="font-medium">Domingo</p>
                <p>Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center space-y-4">
            <h4 className="text-xl font-semibold text-accent">
              Pronto para Transformar sua Vida?
            </h4>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Agende sua avaliação gratuita hoje mesmo e descubra como podemos ajudar você a alcançar seus objetivos.
            </p>
            <Button size="lg" onClick={handleWhatsApp} className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-3 shadow-gold hover:shadow-xl">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Agende Sua Aula Experimental
            </Button>
          </div>
        </div>

        {/* Legal Information Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="text-center">
            <h5 className="text-sm font-medium text-accent mb-3">Informações Legais</h5>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/termos-de-servico" className="text-gray-400 hover:text-accent transition-colors hover:underline">
                Termos de Serviço
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-accent transition-colors hover:underline">
                Política de Privacidade
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/politica-de-cookies" className="text-gray-400 hover:text-accent transition-colors hover:underline">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© 2025 Life Personal Estúdio. Todos os direitos reservados.</p>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>para sua transformação</span>
            </div>
            <a 
              href="https://www.instagram.com/luisdantas.studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 text-xs hover:text-accent transition-colors"
            >
              Desenvolvido por Luis Dantas
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;