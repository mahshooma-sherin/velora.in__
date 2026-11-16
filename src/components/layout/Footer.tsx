import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { useStore } from '../../context/StoreContext';
import { Instagram, MessageCircle, Heart, Lock, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  const { settings, getWhatsAppLink } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#34251D] text-[#F8F3EC] pt-20 pb-12 relative overflow-hidden border-t border-[#C6A16B]/30">
      {/* Background ambient gold shimmer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C6A16B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-5 text-center md:text-left">
            <BrandLogo variant="light" size="lg" />

            <p className="font-serif italic text-base text-[#C6A16B] tracking-wide">
              "{settings.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-[#EFE5D8]/80 max-w-sm leading-relaxed font-sans">
              Velora crafts personalised digital wedding experiences and elegant invitations. Designed to celebrate your special moments across WhatsApp, mobile, and web.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={`https://instagram.com/${settings.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-[#C6A16B]/30 flex items-center justify-center text-[#C6A16B] hover:bg-[#C6A16B] hover:text-[#34251D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-[#C6A16B]/30 flex items-center justify-center text-[#C6A16B] hover:bg-[#C6A16B] hover:text-[#34251D] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-lg uppercase tracking-[0.2em] text-[#C6A16B]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#EFE5D8]/80 font-sans tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C6A16B] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C6A16B] transition-colors"
                >
                  About Velora
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('templates')}
                  className="hover:text-[#C6A16B] transition-colors"
                >
                  Wedding Templates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('invitations')}
                  className="hover:text-[#C6A16B] transition-colors"
                >
                  Digital Invitations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#C6A16B] transition-colors"
                >
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#C6A16B] transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C6A16B] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Collections & Contact */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-lg uppercase tracking-[0.2em] text-[#C6A16B]">
              Wedding Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#EFE5D8]/80 font-sans">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Collection A – Starter (₹499)</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Collection B – Classic (₹799)</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Collection C – Royal Premium (₹999)</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Collection D – Luxury Haute (₹1,499)</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Collection E – Bespoke (₹1,999)</span>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6A16B] text-[#34251D] text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE5D8]/60">
          
          <div className="flex items-center gap-2">
            <span>© 2026 VELORA. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="hover:text-[#C6A16B] transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            {/* Admin Management Link */}
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#C6A16B] transition-colors flex items-center gap-1 text-[11px] opacity-70 hover:opacity-100"
              title="Content Management Dashboard"
            >
              <Lock className="w-3 h-3 text-[#C6A16B]" />
              <span>Owner CMS</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
