
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StructuredData from "@/components/StructuredData";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual a diferença entre estúdio e academia tradicional?",
      answer: "Nosso estúdio oferece atendimento 100% personalizado com personal trainer e avaliações inclusas. Também temos nutricionista parceira, com atendimento pago à parte (consulte valores). Diferente das academias tradicionais, você tem acompanhamento individual e um plano completo de transformação."

    },
    {
      question: "Preciso ter experiência anterior para treinar aqui?",
      answer: "Não! Atendemos desde iniciantes até atletas avançados. Nossos profissionais desenvolvem um programa específico para seu nível atual e objetivos, garantindo evolução segura e eficiente."
    },
    {
      question: "Os planos têm período de fidelidade?",
      answer: "Trabalhamos com mensalidades flexíveis. Alguns planos têm desconto para anuidade, mas sempre oferecemos opções que se adequem ao seu perfil e necessidades financeiras."
    },
    {
      question: "Como funciona a avaliação física?",
      answer: "A avaliação inclui bioimpedância, medidas corporais, testes de força e flexibilidade, além de análise postural. Com base nos resultados, criamos seu programa personalizado de treino e nutrição."
    },
    {
      question: "Posso marcar treinos por aplicativo?",
      answer: "Sim! Temos um sistema online para agendamento de sessões, acompanhamento de evolução e comunicação direta com sua equipe de profissionais."
    },
    {
      question: "Quantas vezes por semana posso treinar?",
      answer: "Isso varia conforme seu plano e objetivos. Geralmente recomendamos de 3 a 5 sessões semanais, mas seu personal trainer definirá a frequência ideal para seus resultados."
    },
    {
      question: "O que está incluso no acompanhamento nutricional?",
      answer: "O acompanhamento é feito por nutricionista parceira e é pago à parte, não está incluso nos planos. Inclui consulta inicial, plano alimentar personalizado, ajustes mensais e orientação para suplementação. Fale com a gente no WhatsApp para consultar valores."

    }
  ];

  return (
    <>
      <StructuredData type="faq" data={faqs} />
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-h1 text-primary mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Esclareça suas dúvidas sobre nossos serviços, planos e metodologia. 
              Caso não encontre sua pergunta, entre em contato conosco.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 py-2 shadow-card hover:shadow-elegant transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
