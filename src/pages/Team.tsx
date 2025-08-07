
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Award, Users, Heart } from "lucide-react";

const Team = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=554136790618&text=Olá! Gostaria de conhecer melhor a equipe do Life Personal Estúdio.&type=phone_number&app_absent=0", "_blank");
  };

  const personalTrainers = [
    {
      name: "Maxmuller Allebrandt da Luz",
      cref: "036068-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - Unibrasil Centro Universitário (2020)",
      specializations: "Personal Trainer | Pesquisa no Esporte",
      experience: "5 anos",
      differential: "Treinamento personalizado e acompanhamento de performance.",
      image: "/lovable-uploads/09ab6a5a-af45-4f74-b666-372770dd585c.png"
    },
    {
      name: "Karen Cristina Basso dos Santos",
      cref: "045902-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - Centro Universitário Unidombosco (2025)",
      specializations: "",
      experience: "2 anos",
      differential: "Foco em treinos funcionais e acompanhamento individualizado.",
      image: "/lovable-uploads/737f59c0-95c3-4726-8b12-528464d848fc.png"
    },
    {
      name: "Matheus Lima Espetacular",
      cref: "036847-G/PR",
      specialty: "Personal Trainer Especializado",
      education: "Educação Física - Certificado em IHP (Institute of Human Performance)",
      specializations: "Especialista em Lesões | Simpósio de Sarcopenia pelo Hospital Cardiológico Costantini | Certificado em Potência e Pliometria Rafael Winick",
      experience: "5 anos",
      differential: "Atendimento humanizado, alto desempenho e reabilitação de lesões.",
      image: "/lovable-uploads/7c472fe2-5965-45c9-9f97-f44c1a869a9d.png"
    },
    {
      name: "Carlos Evandro Collere",
      cref: "010039-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - PUCPR (2006)",
      specializations: "",
      experience: "19 anos",
      differential: "Treinamento funcional, performance atlética e emagrecimento.",
      image: "/lovable-uploads/df299fa5-998e-4275-a504-8b7bd7041eb0.png"
    },
    {
      name: "Rhuan Mateus de Araujo",
      cref: "047336-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - Unicesumar (2024)",
      specializations: "Metabolic Training",
      experience: "1 ano",
      differential: "Treinos de alta intensidade e emagrecimento.",
      image: "/lovable-uploads/f3ca01d3-c68f-47ae-a3bf-1eef554ef9be.png"
    }
  ];

  const TeamSection = ({ title, icon: Icon, members, bgColor = "bg-background" }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-accent mr-3" />
            <h2 className="font-h2 text-primary">{title}</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-subtle overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="font-h3 text-primary mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-2">{member.specialty}</Badge>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center">
                    <Badge variant="default" className="bg-accent text-accent-foreground font-semibold">
                      CREF: {member.cref}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-muted-foreground text-xs">FORMAÇÃO:</span>
                      <p className="font-medium text-sm">{member.education}</p>
                    </div>
                    
                    {member.specializations && (
                      <div>
                        <span className="text-muted-foreground text-xs">ESPECIALIZAÇÕES:</span>
                        <p className="font-medium text-sm">{member.specializations}</p>
                      </div>
                    )}
                    
                    <div className="flex justify-between pt-1">
                      <span className="text-muted-foreground">Experiência:</span>
                      <span className="font-medium">{member.experience}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.differential}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background pt-16">
      <SEOHead 
        title="Equipe - Life Personal Estúdio | Profissionais Especializados"
        description="Conheça a equipe de profissionais especializados do Life Estúdio Personalizado em Campina Grande do Sul - PR. Personal trainers e nutricionistas qualificados."
        path="/equipe"
      />
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-hero text-primary leading-tight">
              Nossa Equipe de 
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Personal Trainers
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Profissionais registrados no CREF, altamente qualificados e dedicados à sua transformação. 
              Cada personal trainer da nossa equipe possui formação sólida e experiência comprovada.
            </p>

            <Button 
              onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              className="btn-premium bg-gradient-gold text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-gold hover:shadow-xl group"
            >
              Conheça nossa equipe
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Trainers */}
      <div id="team">
        <TeamSection 
          title="Nossa Equipe de Personal Trainers" 
          icon={Users}
          members={personalTrainers}
        />
      </div>

      {/* Team Philosophy */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-h2 text-primary mb-8">Nossa Filosofia de Atendimento</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary">Cuidado Individual</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cada cliente é único. Desenvolvemos estratégias personalizadas baseadas em suas necessidades, objetivos e estilo de vida.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary">Excelência Técnica</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Formação continuada e certificações internacionais. Nossa equipe está sempre atualizada com as melhores práticas do mercado.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-h3 text-primary">Metodologia Personalizada</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cada personal trainer aplica metodologias específicas baseadas em evidências científicas e experiência prática comprovada.
                </p>
              </div>
            </div>

            <Card className="p-8 bg-background border-accent shadow-gold">
              <div className="space-y-4">
                <h3 className="font-h3 text-primary">Comprometimento com Resultados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos personal trainers não são apenas profissionais, são seus parceiros na jornada de transformação. 
                  Cada membro da equipe possui registro ativo no CREF e está genuinamente investido no seu sucesso e bem-estar.
                </p>
                <p className="text-sm text-accent font-semibold">
                  "Seu sucesso é o nosso maior indicador de qualidade."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-h2 text-white mb-4 md:mb-6 leading-tight">
              Conheça Nossa Equipe Pessoalmente
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 px-4">
              Agende uma visita e converse com nossos profissionais. 
              Queremos entender seus objetivos e mostrar como podemos ajudar.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="btn-premium bg-gradient-gold text-primary font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-gold hover:shadow-2xl group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">Agendar Visita</span>
              <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
