import React, { useState, useEffect } from 'react';
import { StoreProvider } from './context/StoreContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { ServicesSection } from './components/home/ServicesSection';
import { FeaturedTemplatesSection } from './components/home/FeaturedTemplatesSection';
import { HowItWorksSection } from './components/home/HowItWorksSection';
import { WhyChooseVeloraSection } from './components/home/WhyChooseVeloraSection';
import { TemplateGallery } from './components/templates/TemplateGallery';
import { InvitationGallery } from './components/invitations/InvitationGallery';
import { PricingSection } from './components/pricing/PricingSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { AboutPage } from './components/about/AboutPage';
import { FaqSection } from './components/home/FaqSection';
import { ContactSection } from './components/contact/ContactSection';
import { CtaBanner } from './components/home/CtaBanner';
import { Footer } from './components/layout/Footer';
import { LivePreviewModal } from './components/preview/LivePreviewModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { PageLoader } from './components/common/PageLoader';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preselectedTemplateId, setPreselectedTemplateId] = useState<string | undefined>(undefined);

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'templates', 'invitations', 'pricing', 'how-it-works', 'about', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectForOrder = (templateId: string) => {
    setPreselectedTemplateId(templateId);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#F8F3EC] text-[#514338] selection:bg-[#C6A16B]/30 selection:text-[#34251D] flex flex-col font-sans">
      {/* Initial Minimal Brand Introduction */}
      <PageLoader onLoaded={() => {}} />

      {/* Sticky Luxury Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* PAGE 1: HERO */}
        <Hero
          onExploreClick={() => handleNavigate('templates')}
          onCreateClick={() => handleNavigate('contact')}
          onPreviewSample={() => handleNavigate('templates')}
        />

        {/* 1. OUR SERVICES */}
        <ServicesSection />

        {/* 2. FEATURED WEDDING TEMPLATES */}
        <FeaturedTemplatesSection
          onExploreAll={() => handleNavigate('templates')}
          onSelectForOrder={handleSelectForOrder}
        />

        {/* PAGE 6: HOW IT WORKS (Connected 4-step timeline) */}
        <HowItWorksSection />

        {/* 4. WHY CHOOSE VELORA */}
        <WhyChooseVeloraSection />

        {/* PAGE 3: WEDDING WEBSITE TEMPLATES (All 30 vercel templates with filters) */}
        <TemplateGallery onSelectForOrder={handleSelectForOrder} />

        {/* PAGE 4: DIGITAL INVITATIONS (Gallery across all categories) */}
        <InvitationGallery onSelectForOrder={handleSelectForOrder} />

        {/* PAGE 5: PACKAGES & PRICING (Starter ₹499, Classic ₹799, Royal ₹999 + expandable) */}
        <PricingSection onSelectPackage={() => handleNavigate('contact')} />

        {/* 5. CUSTOMER TESTIMONIALS */}
        <TestimonialsSection />

        {/* PAGE 2: ABOUT VELORA */}
        <AboutPage />

        {/* 6. FREQUENTLY ASKED QUESTIONS */}
        <FaqSection />

        {/* 7. CONTACT / WHATSAPP CTA BANNER */}
        <CtaBanner onExploreTemplates={() => handleNavigate('templates')} />

        {/* PAGE 7: CONTACT US (Functional form + WhatsApp button + confirmation) */}
        <ContactSection preselectedTemplateId={preselectedTemplateId} />
      </main>

      {/* SECTION 9: FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* SECTION 4: INTERACTIVE LIVE PREVIEW MODAL */}
      <LivePreviewModal onSelectForOrder={handleSelectForOrder} />

      {/* SECTION 6: ADMIN & CONTENT MANAGEMENT DASHBOARD */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />
    </div>
  );
};

export function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;
