import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import StructuredData from "@/components/StructuredData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Marcos Correia",
      rating: 5,
      text: "A experiência está sendo satisfatória. Metodologia de trabalho com os alunos diferenciados mesmo. Ambiente e Equipe excelentes. Assim os resultados aparecem. Obrigado!!!"
    },
    {
      name: "Daniela Rocio Santos",
      rating: 5,
      text: "Melhor local para cuidar do corpo com uma equipe professores atenciosos e com método totalmente focado em treino funcional com resultados. Realmente um estúdio além do treino."
    },
    {
      name: "Diarles Araujo",
      rating: 5,
      text: "Está completando um ano de umas das melhores escolhas da minha vida. Fui para Life pela dor (depressão, ansiedade e crise de Pânico) e permaneci pelo amor, respeito e carinho que recebi desde o primeiro dia que pisei nesse lugar. Tratamento profissional e acima de tudo humanizado. Amoooo cada dia mais ❤"
    },
    {
      name: "Valquiria Bochnia",
      rating: 5,
      text: "A Life Estúdio é simplesmente incrível! Se você está em busca de saúde e bem-estar, esse é o lugar certo. O espaço é amplo e bem organizado, com uma estrutura moderna e equipamentos de alta qualidade. O atendimento é sempre impecável, com profissionais atenciosos e altamente qualificados."
    },
    {
      name: "Vera Regina Ruppel",
      rating: 5,
      text: "Life é minha segunda casa, todos dias treinando na melhor da região e com os melhores professores. Na verdade todos que fazem parte da Life são excelentes."
    },
    {
      name: "Juliana Moresco",
      rating: 5,
      text: "Treinando a 9 anos no estúdio e amo o atendimento, e o cuidado como é direcionado aos alunos. Sempre de uma maneira que me sinto acolhida! 🙌"
    },
    {
      name: "Franciele Bio Grupo",
      rating: 5,
      text: "A equipe é extremamente profissional e atenciosa, o ambiente é super acolhedor e motivador. As aulas são dinâmicas, desafiadoras e bem estruturadas, sempre com foco no melhor desempenho de cada aluno. Foi a primeira vez na vida que treinar não foi um sacrifício. Super recomendo!"
    },
    {
      name: "Kamila Zanin",
      rating: 5,
      text: "Estúdio excelente, trabalho personalizado e adequado a necessidade de cada aluno. As técnicas de treino são pensadas tanto para ganho e manutenção de massa muscular, força, e também reabilitação quando há necessidade. Ah sem contar todo acompanhamento nutricional que o estúdio também oferece."
    },
    {
      name: "Karina Bruno",
      rating: 5,
      text: "A melhor experiência em Estúdio Personalizado para atividades físicas de Campina Grande do Sul e toda região. Limpeza, organização, atendimento, cuidado, carinho, muitos outros diferenciais que fazem da Life um lugar único e de excelência no segmento."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Add structured data for each testimonial */}
      {testimonials.map((testimonial, index) => (
        <StructuredData 
          key={index}
          type="review" 
          data={testimonial}
        />
      ))}
      
      <section id="testimonials" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-6">O Que Nossos Alunos Dizem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Histórias reais de transformação que inspiram e motivam. 
              Cada depoimento representa uma jornada única de superação e conquista.
            </p>
          </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 md:p-12 shadow-card hover:shadow-elegant transition-all duration-300 relative">
                    {/* Quote icon */}
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-accent opacity-50" />
                    
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-current" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-lg md:text-xl text-center text-muted-foreground mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author info */}
                    <div className="text-center">
                      <h4 className="font-semibold text-primary text-lg mb-1">
                        {testimonial.name}
                      </h4>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-elegant hover:bg-accent hover:text-primary"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-elegant hover:bg-accent hover:text-primary"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-accent scale-125" 
                  : "bg-border hover:bg-accent/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</h3>
            <p className="text-muted-foreground">Satisfação dos Alunos</p>
          </div>
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">85%</h3>
            <p className="text-muted-foreground">Alcançam Objetivos</p>
          </div>
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">92%</h3>
            <p className="text-muted-foreground">Recomendam o Estúdio</p>
          </div>
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">3+</h3>
            <p className="text-muted-foreground">Anos Média de Permanência</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;