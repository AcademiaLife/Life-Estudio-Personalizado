
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface PlanValuePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PlanValuePopup = ({ open, onOpenChange }: PlanValuePopupProps) => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de saber mais sobre os planos do Life Personal Estúdio e a economia que posso ter.&type=phone_number&app_absent=0", "_blank");
    onOpenChange(false);
  };

  const services = [
    "Personal trainer dedicado",
    "Nutricionista parceira (pago à parte)", 
    "Avaliações físicas completas",
    "Monitoramento cardíaco",
    "App exclusivo de acompanhamento",
    "Aulas coletivas premium",
    "Consultoria de estilo de vida",
    "Programa de recuperação"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-h2 text-primary text-center mb-4">
            Por que escolher o Life Personal Estúdio?
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Comparativo de preços */}
          <div className="bg-gradient-subtle p-6 rounded-xl">
            <div className="text-center mb-6">
              <p className="text-lg text-muted-foreground mb-2">Contratando separadamente, você pagaria:</p>
              <p className="font-h2 text-destructive line-through">R$ 1.550/mês</p>
              <p className="text-lg text-muted-foreground mb-4">Com nossos planos:</p>
              <p className="font-h2 text-accent">A partir de R$ 439/mês</p>
              <div className="inline-block bg-gradient-gold text-primary px-4 py-2 rounded-full font-semibold text-sm mt-2">
                Economia de até 71%
              </div>
            </div>
          </div>

          {/* Lista de serviços inclusos */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Tudo isso incluído em um único pacote:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Texto explicativo */}
          <div className="bg-background p-6 rounded-xl border">
            <DialogDescription className="text-muted-foreground leading-relaxed">
              Imagine pagar mais de R$ 1.550 por mês contratando cada serviço separadamente. Com nossos planos a partir de R$ 439/mês, 
              você tem todos esses serviços premium inclusos em um único pacote. Aqui, você não só economiza, mas também tem acesso a 
              serviços de alta qualidade, pensados para se adaptar ao seu ritmo, às suas necessidades e aos seus objetivos.
              <br /><br />
              Ao contrário dos pacotes tradicionais, que cobram por cada serviço de forma isolada, aqui no Life Estúdio você tem tudo incluído. 
              Seu treino, seu ritmo, seu espaço. Escolher o Life Estúdio significa investir em resultados reais, com atendimento próximo e 
              personalizado que vai além do físico, cuidando de todas as suas necessidades para garantir que você alcance seus objetivos 
              de forma saudável e sustentável.
            </DialogDescription>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-xl group"
            >
              Escolha qualidade, economia e resultados
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlanValuePopup;
