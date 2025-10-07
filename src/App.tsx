
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import TestimonialsPage from "./pages/Testimonials";
import ContactPage from "./pages/Contact";
import Plans from "./pages/Plans";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/planos" element={<Plans />} />
                <Route path="/equipe" element={<Team />} />
                <Route path="/depoimentos" element={<TestimonialsPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/termos-de-servico" element={<TermsOfService />} />
                <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
                <Route path="/politica-de-cookies" element={<CookiePolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
            <CookieBanner />
          </div>
        </BrowserRouter>
        <Analytics />
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
