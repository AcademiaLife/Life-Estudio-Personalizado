import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: 'faq' | 'service' | 'review' | 'breadcrumb';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    switch (type) {
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Life Personal Estúdio",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Pedro Pasa, 1158",
              "addressLocality": "Campina Grande do Sul",
              "addressRegion": "PR",
              "postalCode": "83430-282",
              "addressCountry": "BR"
            },
            "telephone": "(41) 3679-0618"
          },
          "areaServed": {
            "@type": "City",
            "name": "Campina Grande do Sul"
          },
          "serviceType": "Fitness Training",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data.name,
            "itemListElement": data.features?.map((feature: string) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Life Personal Estúdio"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.rating,
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": data.name
          },
          "reviewBody": data.text
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;