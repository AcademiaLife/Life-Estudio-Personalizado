
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, TrendingUp, Award, Heart } from "lucide-react";

const TestimonialsPage = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de saber mais sobre o Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };

  const testimonials = [
    {
      name: "Marina Silva",
      age: "32 anos",
      profession: "Executiva",
      rating: 5,
      text: "O Life Personal Estúdio transformou completamente minha relação com o exercício. Em 6 meses, não apenas perdi 15kg, mas ganhei uma confiança que refletiu em todas as áreas da minha vida profissional e pessoal. A equipe entende exatamente o que eu preciso e me motiva todos os dias.",
      result: "15kg perdidos em 6 meses",
      story: "Marina chegou até nós com uma rotina executiva intensa e pouco tempo para exercícios. Desenvolvemos um programa de 45 minutos, 3x por semana, focado em queima de gordura e fortalecimento. Hoje ela é uma das nossas maiores entusiastas!"
    },
    {
      name: "Carlos Mendes",
      age: "45 anos", 
      profession: "Empresário",
      rating: 5,
      text: "Depois de uma lesão no joelho, achei que não conseguiria mais me exercitar. A equipe desenvolveu um programa específico que não só me reabilitou, como me deixou mais forte do que antes da lesão. A atenção aos detalhes e o cuidado individual fazem toda a diferença.",
      result: "Recuperação completa de lesão",
      story: "Carlos passou por cirurgia no joelho e veio até nós desacreditado. Com fisioterapia especializada e fortalecimento progressivo, não apenas recuperou os movimentos como ganhou força e confiança para voltar aos esportes que ama."
    },
    {
      name: "Ana Beatriz",
      age: "28 anos",
      profession: "Designer",
      rating: 5,
      text: "O atendimento personalizado faz toda a diferença. Cada treino é pensado para mim, respeitando meu ritmo e desafios. Em 4 meses, já sinto uma mudança incrível na minha força e disposição. É muito mais que uma academia, é um espaço de cuidado pessoal.",
      result: "Ganho significativo de força",
      story: "Ana buscava um espaço que respeitasse seu perfil mais reservado. Criamos treinos que desenvolveram sua confiança gradualmente, e hoje ela é uma das alunas mais dedicadas e evolui constantemente."
    },
    {
      name: "Roberto Costa",
      age: "38 anos",
      profession: "Médico",
      rating: 5,
      text: "Como médico, sei a importância do exercício para a saúde. O Life Personal oferece exatamente o que prescrevo para meus pacientes: treinamento científico, seguro e eficaz. A abordagem holística considerando nutrição, sono e estresse é exemplar. Recomendo sem hesitar.",
      result: "Melhoria na saúde geral",
      story: "Roberto queria um local que entendesse a ciência por trás do exercício. Nossa abordagem baseada em evidências e cuidado integral com a saúde o conquistou desde o primeiro dia."
    },
    {
      name: "Juliana Oliveira",
      age: "35 anos",
      profession: "Professora",
      rating: 5,
      text: "Sempre tive dificuldade para manter a regularidade nos exercícios. Aqui encontrei não apenas um treino, mas um acompanhamento que me motiva todos os dias. A flexibilidade de horários e a atenção pessoal tornaram o exercício parte natural da minha rotina.",
      result: "Consistência e motivação",
      story: "Juliana tinha tentado várias modalidades sem sucesso. Nossa abordagem flexível e motivacional a ajudou a criar o hábito que ela tanto buscava, transformando exercício em prazer."
    },
    {
      name: "Fernando Santos",
      age: "41 anos",
      profession: "Engenheiro",
      rating: 5,
      text: "Procurava algo diferente das academias convencionais. No Life Personal encontrei um ambiente exclusivo onde cada detalhe é pensado no meu bem-estar. Os resultados aparecem rápido porque o foco é total. Vale cada centavo investido.",
      result: "Transformação corporal completa",
      story: "Fernando queria sair do ambiente de academia tradicional. Nossa estrutura premium e atendimento exclusivo proporcionaram a ele a experiência que buscava, com resultados que superaram suas expectativas."
    }
  ];

  const stats = [
    { number: "98%", label: "Satisfação dos Alunos", icon: Heart },
    { number: "85%", label: "Alcançam Objetivos", icon: TrendingUp },
    { number: "92%", label: "Recomendam o Estúdio", icon: Award },
    { number: "3+", label: "Anos Média de Permanência", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-hero text-white mb-6">
              Histórias Reais de 
              <span className="bg-gradient-gold bg-clip-text text-transparent"> Transformação</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Cada depoimento representa uma jornada única de superação, conquista e transformação. 
              Essas são as histórias que nos inspiram todos os dias.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 md:p-12 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Quote Section */}
                  <div className="lg:col-span-2 space-y-6">
                    <Quote className="h-8 w-8 text-accent opacity-50" />
                    
                    {/* Rating */}
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-current" />
                      ))}
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
                      <p className="text-muted-foreground text-sm">
                        {testimonial.age} • {testimonial.profession}
                      </p>
                    </div>
                  </div>

                  {/* Result & Story Section */}
                  <div className="space-y-6">
                    {/* Result highlight */}
                    <div className="bg-gradient-gold p-4 rounded-xl text-center">
                      <h5 className="font-semibold text-primary text-sm mb-2">Resultado Alcançado</h5>
                      <p className="font-bold text-primary">
                        {testimonial.result}
                      </p>
                    </div>

                    {/* Story */}
                    <div className="bg-gradient-subtle p-6 rounded-xl">
                      <h5 className="font-semibold text-primary text-sm mb-3">Nossa Jornada Juntos</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {testimonial.story}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="font-h2 text-white mb-6">
              Sua História de Transformação Começa Agora
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Junte-se a centenas de pessoas que já transformaram suas vidas conosco. 
              Agende sua avaliação gratuita e descubra seu potencial.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
            >
              Começar Minha Transformação
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
