import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "Life Personal Estúdio - Academia Premium | Treinamento Personalizado", 
  description = "Transforme sua vida com acompanhamento personalizado no Life Estúdio Personalizado em Campina Grande do Sul - PR. Agende sua avaliação e alcance seus objetivos fitness.",
  path = "/",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png"
}: SEOHeadProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${siteUrl}${path}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    "name": "Life Estúdio Personalizado",
    "alternateName": "Life Personal Estúdio",
    "description": "Academia premium com foco em performance, exclusividade e resultados. Treinamento personalizado e estrutura diferenciada em Campina Grande do Sul.",
    "url": siteUrl,
    "telephone": "(41) 3679-0618",
    "email": "academia-life@hotmail.com",
    "priceRange": "$$",
    "paymentAccepted": "Credit Card, Debit Card, Cash, PIX",
    "currenciesAccepted": "BRL",
    "openingHours": [
      "Mo-Fr 06:00-22:00",
      "Sa 08:00-18:00", 
      "Su 08:00-12:00"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.3035,
      "longitude": -49.0530
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Pedro Pasa, 1158",
      "addressLocality": "Campina Grande do Sul",
      "addressRegion": "PR",
      "postalCode": "83430-282",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Campina Grande do Sul",
      "containedInPlace": {
        "@type": "State",
        "name": "Paraná"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Fitness",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Treinamento Personalizado"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Nutrição Funcional"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Avaliação Física"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/lifepersonalestudio",
      "https://www.facebook.com/lifepersonalestudio"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Life Estúdio Personalizado" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Life Estúdio Personalizado" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Campina Grande do Sul, Jardim Paulista" />
      <meta name="geo.position" content="-25.3035;-49.0530" />
      <meta name="ICBM" content="-25.3035,-49.0530" />

      {/* Local Business Tags */}
      <meta name="business:contact_data:street_address" content="R. Pedro Pasa, 1158" />
      <meta name="business:contact_data:locality" content="Campina Grande do Sul" />
      <meta name="business:contact_data:region" content="PR" />
      <meta name="business:contact_data:postal_code" content="83430-282" />
      <meta name="business:contact_data:country_name" content="Brasil" />
      <meta name="business:contact_data:phone_number" content="(41) 3679-0618" />
      <meta name="business:contact_data:email" content="academia-life@hotmail.com" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;