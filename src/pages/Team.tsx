
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
      name: "Carlos Evandro Collere",
      cref: "010039-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - PUCPR (2006)",
      specializations: "",
      experience: "19 anos",
      differential: "Treinamento funcional, performance atlética e emagrecimento.",
      image: "/lovable-uploads/86e8ea06-b77e-418f-9754-1743a70bf9fe.png"
    },
    {
      name: "Matheus Lima",
      cref: "036847-G/PR",
      specialty: "Personal Trainer Especializado",
      education: "Educação Física - Certificado em IHP (Institute of Human Performance)",
      specializations: "Especialista em Lesões | Simpósio de Sarcopenia pelo Hospital Cardiológico Costantini | Certificado em Potência e Pliometria Rafael Winick",
      experience: "3 anos",
      differential: "Atendimento humanizado, alto desempenho e reabilitação de lesões.",
      image: "/lovable-uploads/d0e4aced-cd4f-40ca-9b4a-c899f67d97d6.png"
    },
    {
      name: "Maxmuller Allebrandt da Luz",
      cref: "036068-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - Unibrasil Centro Universitário (2020)",
      specializations: "Personal Trainer | Pesquisa no Esporte",
      experience: "5 anos",
      differential: "Treinamento personalizado e acompanhamento de performance.",
      image: "/lovable-uploads/06df3d44-5396-467d-98e3-98020ef05125.png"
    },
    {
      name: "Karen Cristina Basso dos Santos",
      cref: "045902-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - Centro Universitário Unidombosco (2025)",
      specializations: "",
      experience: "2 anos",
      differential: "Foco em treinos funcionais e acompanhamento individualizado.",
      image: "/lovable-uploads/fe940964-a328-437f-bd3d-1e2da424d8d6.png"
    },
    {
      name: "Rhuan Mateus de Araujo",
      cref: "047336-G/PR",
      specialty: "Personal Trainer",
      education: "Educação Física - Unicesumar (2024)",
      specializations: "Metabolic Training",
      experience: "1 ano",
      differential: "Treinos de alta intensidade e emagrecimento.",
      image: "/lovable-uploads/2be62f36-f655-4c07-a731-79ed6665affd.png"
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
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section - Fixed height */}
              <div className="aspect-square bg-gradient-subtle overflow-hidden relative flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => {
                    console.error(`Failed to load image for ${member.name}:`, member.image);
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  onLoad={(e) => {
                    console.log(`Successfully loaded image for ${member.name}:`, member.image);
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'none';
                  }}
                />
                {/* Fallback content - shows when image fails to load */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center text-primary" style={{ display: 'flex' }}>
                  <div className="text-6xl mb-2">👤</div>
                  <div className="text-sm font-medium opacity-75 text-center px-2">{member.name}</div>
                </div>
              </div>
              
              {/* Content Section - Flexible height with consistent structure */}
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Header Section - Fixed height */}
                <div className="text-center mb-4 flex-shrink-0">
                  <h3 className="font-h3 text-primary mb-1 line-clamp-2 min-h-[3rem] flex items-center justify-center">{member.name}</h3>
                  <Badge variant="outline" className="mb-2">{member.specialty}</Badge>
                </div>

                {/* CREF Badge - Fixed height */}
                <div className="flex items-center justify-center mb-4 flex-shrink-0">
                  <Badge variant="default" className="bg-accent text-accent-foreground font-semibold">
                    CREF: {member.cref}
                  </Badge>
                </div>

                {/* Info Section - Flexible height but structured */}
                <div className="space-y-3 text-sm flex-grow">
                  {/* Education - Always present */}
                  <div>
                    <span className="text-muted-foreground text-xs">FORMAÇÃO:</span>
                    <p className="font-medium text-sm line-clamp-2">{member.education}</p>
                  </div>
                  
                  {/* Specializations - Fixed minimum height */}
                  <div className="min-h-[3rem]">
                    <span className="text-muted-foreground text-xs">ESPECIALIZAÇÕES:</span>
                    {member.specializations ? (
                      <p className="font-medium text-sm line-clamp-2">{member.specializations}</p>
                    ) : (
                      <p className="font-medium text-sm text-muted-foreground/60 italic">Em desenvolvimento</p>
                    )}
                  </div>
                  
                  {/* Experience - Fixed height */}
                  <div className="pt-1 border-t border-border">
                    <span className="text-muted-foreground text-xs">EXPERIÊNCIA:</span>
                    <p className="font-medium text-sm">{member.experience}</p>
                  </div>
                </div>

                {/* Differential Section - Fixed height */}
                <div className="mt-4 pt-3 border-t border-border flex-shrink-0">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 min-h-[4rem] flex items-start">
                    {member.differential}
                  </p>
                </div>
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
