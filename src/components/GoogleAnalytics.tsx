import { Helmet } from "react-helmet-async";

const GoogleAnalytics = () => {
  // Replace with your actual Google Analytics 4 Measurement ID
  const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script 
        async 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });

          // Enhanced ecommerce and custom events
          gtag('config', '${GA_MEASUREMENT_ID}', {
            custom_map: {
              'custom_parameter_1': 'plan_interest',
              'custom_parameter_2': 'whatsapp_click'
            }
          });

          // Track WhatsApp clicks
          function trackWhatsAppClick(planName = '') {
            gtag('event', 'whatsapp_click', {
              event_category: 'engagement',
              event_label: planName || 'general_contact',
              value: 1
            });
          }

          // Track plan interest
          function trackPlanInterest(planName) {
            gtag('event', 'plan_interest', {
              event_category: 'conversion',
              event_label: planName,
              value: 1
            });
          }

          // Track form submissions
          function trackFormSubmission(formType) {
            gtag('event', 'form_submission', {
              event_category: 'lead_generation',
              event_label: formType,
              value: 1
            });
          }

          // Track page scroll depth
          let scrollDepth = 0;
          window.addEventListener('scroll', function() {
            const currentScroll = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
              scrollDepth = currentScroll;
              gtag('event', 'scroll', {
                event_category: 'engagement',
                event_label: scrollDepth + '%',
                value: scrollDepth
              });
            }
          });

          // Make tracking functions available globally
          window.trackWhatsAppClick = trackWhatsAppClick;
          window.trackPlanInterest = trackPlanInterest;
          window.trackFormSubmission = trackFormSubmission;
        `}
      </script>

      {/* Google Tag Manager (optional - if you prefer GTM over direct GA4) */}
      {/* 
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </script>
      */}

      {/* Meta Pixel (Facebook) for remarketing */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID'); // Replace with your actual Pixel ID
          fbq('track', 'PageView');

          // Track WhatsApp clicks for Facebook
          window.trackFacebookWhatsApp = function(planName = '') {
            fbq('track', 'Contact', {
              content_name: 'WhatsApp Contact',
              content_category: planName || 'general'
            });
          };

          // Track plan views for Facebook
          window.trackFacebookPlanView = function(planName, value) {
            fbq('track', 'ViewContent', {
              content_name: planName,
              content_type: 'fitness_plan',
              value: value,
              currency: 'BRL'
            });
          };
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;