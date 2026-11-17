import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  ArrowRight,
  Instagram,
  Facebook
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Olá! Vim através do site do Life Personal Estúdio.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=554136790618&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp. Aguarde nosso contato!",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de agendar uma avaliação gratuita no Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };

  const handleSchedule = () => {
    window.open("https://calendly.com/lifepersonalestudio", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-h1 text-primary mb-6">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para começar sua jornada de transformação. 
            Entre em contato conosco e agende sua avaliação gratuita hoje mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in">
            <h3 className="font-h3 text-primary mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className="transition-all duration-300 focus:shadow-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(41) 99999-9999"
                    required
                    className="transition-all duration-300 focus:shadow-gold"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                  className="transition-all duration-300 focus:shadow-gold"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos sobre seus objetivos e como podemos ajudar..."
                  rows={4}
                  required
                  className="transition-all duration-300 focus:shadow-gold"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full btn-premium bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-xl"
              >
                Enviar Mensagem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            {/* Quick Actions */}
            <div className="grid gap-4">
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="btn-premium bg-green-600 hover:bg-green-700 text-white shadow-elegant group"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleSchedule}
                className="btn-premium border-2 border-accent text-accent hover:bg-accent hover:text-primary group"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Agendar Online
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Telefone</h4>
                    <p className="text-muted-foreground">(41) 3679-0618</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">E-mail</h4>
                    <p className="text-muted-foreground">contato@lifepersonalestudio.com.br</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Endereço</h4>
                    <p className="text-muted-foreground">
                      R. Pedro Pasa, 1158 - Jardim Paulista<br />
                      Campina Grande do Sul - PR, 83430-282
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Horário de Funcionamento</h4>
                    <div className="text-muted-foreground text-sm">
                      <p>Segunda à Sexta: 6h às 22h</p>
                      <p>Sábado: 8h às 18h</p>
                      <p>Domingo: 8h às 16h</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="p-6 shadow-card">
              <h4 className="font-semibold text-primary mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button 
                  size="icon" 
                  variant="outline"
                  className="hover:bg-accent hover:text-primary transition-all"
                  onClick={() => window.open("https://www.instagram.com/lifeestudiopersonalizado", "_blank")}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  className="hover:bg-accent hover:text-primary transition-all"
                  onClick={() => window.open("https://www.facebook.com/academialifenaweb?mibextid=wwXIfr&rdid=jNh4ZcsIXIcubgKN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15uMXmvJEP%2F%3Fmibextid%3DwwXIfr", "_blank")}
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;