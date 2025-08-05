import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, ArrowRight, Instagram, Facebook, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const ContactPage = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Vim através do site do Life Personal Estúdio.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Interesse: ${formData.interest}

Mensagem: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=554136790618&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp. Aguarde nosso contato!"
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  };
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de agendar uma avaliação gratuita no Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };
  const handleSchedule = () => {
    window.open("https://calendly.com/lifepersonalestudio", "_blank");
  };
  const contactReasons = ["Melhorar a Performance e Condicionamento", "Ganho de Massa e Emagrecimento", "Saúde e Bem-Estar", "Indicação Médica", "Informação sobre planos", "Outros"];
  const benefits = ["Resposta em até 2 horas", "Avaliação gratuita garantida", "Sem compromisso inicial", "Atendimento personalizado"];
  return <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-hero text-primary leading-tight">
              Vamos Conversar Sobre 
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Sua Transformação
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Estamos aqui para responder suas dúvidas, conhecer seus objetivos e 
              criar o caminho perfeito para sua jornada de transformação.
            </p>

            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              className="btn-premium bg-gradient-gold text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-gold hover:shadow-xl group"
            >
              Entrar em contato
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section id="contact" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp CTA */}
            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Fale Conosco Agora</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Resposta imediata no WhatsApp. Tire suas dúvidas e agende sua visita em poucos minutos.
              </p>
              <Button onClick={handleWhatsApp} className="w-full btn-premium bg-green-600 hover:bg-green-700 text-white shadow-elegant group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>

            {/* Schedule CTA */}
            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-h3 text-primary mb-4">Agende Online</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Escolha o melhor horário para sua avaliação gratuita através da nossa agenda online.
              </p>
              <Button onClick={handleSchedule} variant="outline" className="w-full btn-premium border-2 border-accent text-accent hover:bg-accent hover:text-primary group">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Horário
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-scale-in">
              <div className="mb-8">
                <h2 className="font-h2 text-primary mb-4">Envie sua Mensagem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Preencha o formulário abaixo e entraremos em contato rapidamente para 
                  agendar sua avaliação gratuita e responder todas suas dúvidas.
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    {benefit}
                  </div>)}
              </div>

              <Card className="p-8 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" required className="transition-all duration-300 focus:shadow-gold" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(11) 99999-9999" required className="transition-all duration-300 focus:shadow-gold" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" required className="transition-all duration-300 focus:shadow-gold" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Principal Interesse</Label>
                    <select id="interest" name="interest" value={formData.interest} onChange={handleInputChange} className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Selecione uma opção</option>
                      {contactReasons.map((reason, index) => <option key={index} value={reason}>{reason}</option>)}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Conte-nos sobre seus objetivos, dúvidas ou como podemos ajudar..." rows={4} className="transition-all duration-300 focus:shadow-gold" />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full btn-premium bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-xl">
                    Enviar Mensagem
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-h2 text-primary mb-6">Informações de Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Estamos localizados em Campina Grande do Sul - PR, em um espaço exclusivo 
                  projetado para sua comodidade e bem-estar.
                </p>
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
                      <p className="text-xs text-muted-foreground">Atendemos de seg à sex, 6h às 21h sáb, 8h às 12h </p>
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
                      <p className="text-muted-foreground">academia-life@hotmail.com</p>
                      <p className="text-xs text-muted-foreground">Resposta em até 2 horas úteis</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
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
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Horário de Funcionamento</h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p><strong>Segunda à Sexta:</strong> 6h às 12h | 13h às 21h</p>
                        <p><strong>Sábado:</strong> 8h às 12h</p>
                        <p><strong>Domingo:</strong> Fechado</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Social Media */}
              <Card className="p-6 shadow-card">
                <h4 className="font-semibold text-primary mb-4">Siga-nos nas Redes Sociais</h4>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="hover:bg-accent hover:text-primary transition-all" onClick={() => window.open("https://www.instagram.com/lifeestudiopersonalizado", "_blank")}>
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-accent hover:text-primary transition-all" onClick={() => window.open("https://www.facebook.com/academialifenaweb?mibextid=wwXIfr&rdid=jNh4ZcsIXIcubgKN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15uMXmvJEP%2F%3Fmibextid%3DwwXIfr", "_blank")}>
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ContactPage;