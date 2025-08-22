import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SEOHead from "@/components/SEOHead";
import { Star, Quote, ArrowRight, TrendingUp, Award, Heart, Play, Shield } from "lucide-react";
import sebraeVideoThumbnail from "@/assets/sebrae-video-thumbnail.jpg";
const TestimonialsPage = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de saber mais sobre o Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };
  const testimonials = [{
    name: "Marcos Correia",
    rating: 5,
    text: "A experiência está sendo satisfatória. Metodologia de trabalho com os alunos diferenciados mesmo. Ambiente e Equipe excelentes. Assim os resultados aparecem. Obrigado!!!"
  }, {
    name: "Daniela Rocio Santos",
    rating: 5,
    text: "Melhor local para cuidar do corpo com uma equipe professores atenciosos e com método totalmente focado em treino funcional com resultados. Realmente um estúdio além do treino."
  }, {
    name: "Diarles Araujo",
    rating: 5,
    text: "Está completando um ano de umas das melhores escolhas da minha vida. Fui para Life pela dor (depressão, ansiedade e crise de Pânico) e permaneci pelo amor, respeito e carinho que recebi desde o primeiro dia que pisei nesse lugar. Tratamento profissional e acima de tudo humanizado. Amoooo cada dia mais ❤"
  }, {
    name: "Valquiria Bochnia",
    rating: 5,
    text: "A Life Estúdio é simplesmente incrível! Se você está em busca de saúde e bem-estar, esse é o lugar certo. O espaço é amplo e bem organizado, com uma estrutura moderna e equipamentos de alta qualidade. O atendimento é sempre impecável, com profissionais atenciosos e altamente qualificados."
  }, {
    name: "Vera Regina Ruppel",
    rating: 5,
    text: "Life é minha segunda casa, todos dias treinando na melhor da região e com os melhores professores. Na verdade todos que fazem parte da Life são excelentes."
  }, {
    name: "Juliana Moresco",
    rating: 5,
    text: "Treinando a 9 anos no estúdio e amo o atendimento, e o cuidado como é direcionado aos alunos. Sempre de uma maneira que me sinto acolhida! 🙌"
  }, {
    name: "Franciele Bio Grupo",
    rating: 5,
    text: "A equipe é extremamente profissional e atenciosa, o ambiente é super acolhedor e motivador. As aulas são dinâmicas, desafiadoras e bem estruturadas, sempre com foco no melhor desempenho de cada aluno. Foi a primeira vez na vida que treinar não foi um sacrifício. Super recomendo!"
  }, {
    name: "Kamila Zanin",
    rating: 5,
    text: "Estúdio excelente, trabalho personalizado e adequado a necessidade de cada aluno. As técnicas de treino são pensadas tanto para ganho e manutenção de massa muscular, força, e também reabilitação quando há necessidade. Ah sem contar todo acompanhamento nutricional que o estúdio também oferece."
  }, {
    name: "Karina Bruno",
    rating: 5,
    text: "A melhor experiência em Estúdio Personalizado para atividades físicas de Campina Grande do Sul e toda região. Limpeza, organização, atendimento, cuidado, carinho, muitos outros diferenciais que fazem da Life um lugar único e de excelência no segmento."
  }];
  const stats = [{
    number: "98%",
    label: "Satisfação dos Alunos",
    icon: Heart
  }, {
    number: "85%",
    label: "Alcançam Objetivos",
    icon: TrendingUp
  }, {
    number: "92%",
    label: "Recomendam o Estúdio",
    icon: Award
  }, {
    number: "3+",
    label: "Anos Média de Permanência",
    icon: Star
  }];
  return <div className="min-h-screen bg-background pt-16">
      <SEOHead title="Depoimentos - Life Personal Estúdio | Histórias de Transformação" description="Veja os resultados reais dos nossos clientes e como o Life Estúdio Personalizado pode transformar sua jornada fitness." path="/depoimentos" />
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-hero text-primary leading-tight">
              Histórias Reais de 
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Transformação
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Cada depoimento representa uma jornada única de superação, conquista e transformação. 
              Essas são as histórias que nos inspiram todos os dias.
            </p>

            <Button onClick={() => document.getElementById("testimonials")?.scrollIntoView({
            behavior: "smooth"
          })} size="lg" className="btn-premium bg-gradient-gold text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-gold hover:shadow-xl group">
              Ver depoimentos
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>


      {/* Statistics */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Excellence Seal Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center animate-scale-in">
            <div className="relative bg-gradient-to-br from-primary via-primary-glow to-accent p-8 md:p-10 lg:p-12 rounded-2xl shadow-elegant border border-white/30 max-w-md mx-auto hover-scale transition-all duration-500">
              {/* Decorative corners */}
              
              
              
              
              
              {/* Award Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              
              {/* Main Title */}
              <div className="text-center mb-6">
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-tight">
                  Excelência em
                </h3>
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                  Experiência do Cliente
                </h3>
              </div>
              
              {/* NPS Section */}
              <div className="text-center border-t border-white/20 pt-6">
                <div className="text-white/90 text-sm md:text-base font-medium mb-1">
                  Net Promoter Score
                </div>
                <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  +87.9
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  2023
                </div>
              </div>
              
              {/* Shine overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary-glow/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SEBRAE Recognition Section */}
      <section className="py-12 md:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-h2 text-primary mb-4">
                Reconhecimentos e <span className="bg-gradient-gold bg-clip-text text-transparent">Certificações</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nosso compromisso com a excelência é reconhecido por importantes instituições
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* SEBRAE Seal Column */}
              <div className="animate-scale-in">
                <div className="relative bg-gradient-to-br from-primary via-primary-glow to-accent p-8 md:p-10 rounded-2xl shadow-elegant border border-white/30 hover-scale transition-all duration-500">
                  {/* SEBRAE Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                      Selo SEBRAE
                    </h3>
                    <h4 className="text-white/90 text-lg mb-4">
                      Empresa Certificada
                    </h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      Reconhecimento oficial do SEBRAE pela excelência em gestão, 
                      qualidade de serviços e compromisso com o empreendedorismo responsável.
                    </p>
                  </div>
                  
                  {/* Year */}
                  <div className="text-center border-t border-white/20 pt-6">
                    <div className="text-white text-3xl font-bold">2022 - 2024</div>
                    <div className="text-white/80 text-sm">
                      Certificação Ativa - 3 anos consecutivos
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary-glow/20 to-accent/20 rounded-2xl blur-xl opacity-50 -z-10"></div>
                </div>
              </div>

              {/* Video Column */}
              <div className="animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-sm md:max-w-md p-0 bg-black border-0 overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <video 
                        controls 
                        className="w-full h-full object-cover"
                        poster={sebraeVideoThumbnail}
                      >
                        <source src="/lovable-uploads/Vem pra Life.mp4" type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-8 md:p-12 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="lg:col-span-3">
                  {/* Quote Section */}
                  <div className="space-y-6">
                    <Quote className="h-8 w-8 text-accent opacity-50" />
                    
                    {/* Rating */}
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-current" />)}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author info */}
                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-primary text-lg mb-1">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-h2 text-white mb-4 md:mb-6 leading-tight">
              Sua História de Transformação Começa Agora
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 px-4">
              Junte-se a centenas de pessoas que já transformaram suas vidas conosco. 
              Agende sua avaliação gratuita e descubra seu potencial.
            </p>
            <Button size="lg" onClick={handleWhatsApp} className="btn-premium bg-gradient-gold text-primary font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-gold hover:shadow-2xl group w-full sm:w-auto">
              <span className="whitespace-nowrap">Começar Minha Transformação</span>
              <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default TestimonialsPage;