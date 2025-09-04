import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import StructuredData from "@/components/StructuredData";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbNavProps {
  className?: string;
  customItems?: BreadcrumbItem[];
}

const BreadcrumbNav = ({ className, customItems }: BreadcrumbNavProps) => {
  const location = useLocation();

  // Map of route paths to their display names
  const routeNames: Record<string, string> = {
    "/": "Home",
    "/sobre": "Sobre Nós",
    "/servicos": "Serviços", 
    "/planos": "Planos",
    "/equipe": "Nossa Equipe",
    "/depoimentos": "Depoimentos",
    "/contato": "Contato",
    "/politica-privacidade": "Política de Privacidade",
    "/termos-servico": "Termos de Serviço",
    "/politica-cookies": "Política de Cookies"
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: "Home", href: "/" }
    ];

    if (pathSegments.length === 0) return breadcrumbs;

    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const name = routeNames[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        name,
        href: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (location.pathname === "/" && !customItems) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const structuredBreadcrumbs = breadcrumbs.map(item => ({
    name: item.name,
    url: `${window.location.origin}${item.href}`
  }));

  return (
    <>
      <StructuredData type="breadcrumb" data={structuredBreadcrumbs} />
      <nav 
        aria-label="Breadcrumb"
        className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}
      >
        <ol className="flex items-center space-x-2">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground/50 mx-2" />
              )}
              
              {index === 0 && (
                <Home className="h-4 w-4 mr-1" />
              )}

              {index === breadcrumbs.length - 1 ? (
                <span 
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-accent transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNav;