declare global {
  interface Window {
    trackWhatsAppClick?: (planName?: string) => void;
    trackPlanInterest?: (planName: string) => void;
    trackFormSubmission?: (formType: string) => void;
    trackFacebookWhatsApp?: (planName?: string) => void;
    trackFacebookPlanView?: (planName: string, value: number) => void;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export {};