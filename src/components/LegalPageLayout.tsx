
import { ReactNode } from "react";
import { ArrowUp, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
  sections?: { id: string; title: string }[];
}

const LegalPageLayout = ({ title, lastUpdated, children, sections }: LegalPageLayoutProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="flex items-center hover:text-foreground transition-colors">
              <Home className="h-4 w-4 mr-1" />
              Início
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar - Desktop */}
          {sections && (
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Última atualização: {lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className={`${sections ? 'lg:col-span-3' : 'lg:col-span-4'} max-w-4xl`}>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
              <p className="text-sm text-muted-foreground">
                Última atualização: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <div className="space-y-8 text-foreground leading-relaxed">
                {children}
              </div>
            </div>

            {/* Back to top button */}
            <div className="mt-16 flex justify-center">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <ArrowUp className="h-4 w-4" />
                <span>Voltar ao topo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
