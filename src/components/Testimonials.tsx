import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Marina Silva",
      age: "32 anos",
      profession: "Executiva",
      rating: 5,
      text: "O Life Personal Estúdio transformou completamente minha relação com o exercício. Em 6 meses, não apenas perdi 15kg, mas ganhei uma confiança que refletiu em todas as áreas da minha vida profissional e pessoal.",
      result: "15kg perdidos em 6 meses"
    },
    {
      name: "Carlos Mendes",
      age: "45 anos", 
      profession: "Empresário",
      rating: 5,
      text: "Depois de uma lesão no joelho, achei que não conseguiria mais me exercitar. A equipe desenvolveu um programa específico que não só me reabilitou, como me deixou mais forte do que antes da lesão.",
      result: "Recuperação completa de lesão"
    },
    {
      name: "Ana Beatriz",
      age: "28 anos",
      profession: "Designer",
      rating: 5,
      text: "O atendimento personalizado faz toda a diferença. Cada treino é pensado para mim, respeitando meu ritmo e desafios. Em 4 meses, já sinto uma mudança incrível na minha força e disposição.",
      result: "Ganho significativo de força"
    },
    {
      name: "Roberto Costa",
      age: "38 anos",
      profession: "Médico",
      rating: 5,
      text: "Como médico, sei a importância do exercício para a saúde. O Life Personal oferece exatamente o que prescrevo para meus pacientes: treinamento científico, seguro e eficaz. Recomendo sem hesitar.",
      result: "Melhoria na saúde geral"
    },
    {
      name: "Juliana Oliveira",
      age: "35 anos",
      profession: "Professora",
      rating: 5,
      text: "Sempre tive dificuldade para manter a regularidade nos exercícios. Aqui encontrei não apenas um treino, mas um acompanhamento que me motiva todos os dias. É muito mais que uma academia!",
      result: "Consistência e motivação"
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

                    {/* Result highlight */}
                    <div className="text-center mb-6">
                      <span className="inline-block bg-gradient-gold text-primary px-4 py-2 rounded-full font-semibold text-sm">
                        {testimonial.result}
                      </span>
                    </div>

                    {/* Author info */}
                    <div className="text-center">
                      <h4 className="font-semibold text-primary text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonial.age} • {testimonial.profession}
                      </p>
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
  );
};

export default Testimonials;