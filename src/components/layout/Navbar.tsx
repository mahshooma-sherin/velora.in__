import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { useStore } from '../../context/StoreContext';
import { Menu, X, MessageCircle, Instagram, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { getWhatsAppLink, settings } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'templates', label: 'Templates' },
    { id: 'invitations', label: 'Digital Invitations' },
    { id: 'pricing', label: 'Packages' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-[#F8F3EC]/95 backdrop-blur-md shadow-sm border-b border-[#C6A16B]/20 py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A16B]"
              aria-label="Velora Home"
            >
              <BrandLogo size="md" variant="dark" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1 text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                      isActive
                        ? 'text-[#34251D] font-semibold'
                        : 'text-[#7E6F64] hover:text-[#34251D]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A16B] rounded-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Instagram & WhatsApp Enquiry CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={`https://instagram.com/${settings.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#514338] hover:text-[#C6A16B] transition-colors rounded-full hover:bg-[#EFE5D8]/50"
                title={`Follow ${settings.instagramHandle} on Instagram`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={getWhatsAppLink('Hi Velora! I would love to explore your wedding website and digital invitation collections.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium bg-[#34251D] text-[#F8F3EC] hover:bg-[#C6A16B] transition-all duration-300 shadow-sm hover:shadow group"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C6A16B] group-hover:text-white transition-colors" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#34251D] hover:text-[#C6A16B]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#C6A16B]" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#34251D] hover:bg-[#EFE5D8]/60 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#34251D]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#F8F3EC] shadow-2xl p-6 flex flex-col justify-between border-l border-[#C6A16B]/30 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C6A16B]/20">
                <BrandLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#514338] hover:text-[#34251D]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-left py-2 px-3 rounded-lg text-base font-serif tracking-wider transition-all ${
                        isActive
                          ? 'bg-[#EFE5D8] text-[#34251D] font-semibold border-l-4 border-[#C6A16B]'
                          : 'text-[#514338] hover:text-[#34251D] hover:bg-[#EFE5D8]/40'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#C6A16B]/20 space-y-4">
              <a
                href={getWhatsAppLink('Hi Velora! I would like to create a wedding website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#34251D] text-[#F8F3EC] text-sm uppercase tracking-wider font-medium hover:bg-[#C6A16B] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A16B]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`https://instagram.com/${settings.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#C6A16B]/40 text-[#34251D] text-xs uppercase tracking-wider font-medium hover:bg-[#EFE5D8]/50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C6A16B]" />
                <span>{settings.instagramHandle}</span>
              </a>

              <p className="text-center text-[11px] text-[#7E6F64] font-serif italic pt-2">
                "Every love story deserves its own design."
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

