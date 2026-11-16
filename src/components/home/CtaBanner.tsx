import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { MessageCircle, Sparkles, ArrowRight, Heart } from 'lucide-react';

interface CtaBannerProps {
  onExploreTemplates: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onExploreTemplates }) => {
  const { getWhatsAppLink } = useStore();

  return (
    <section className="py-20 sm:py-24 bg-[#F8F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#34251D] via-[#2A1E17] to-[#1E140E] p-8 sm:p-14 lg:p-16 text-center text-[#F8F3EC] shadow-2xl border border-[#C6A16B]/40 overflow-hidden">
          
          {/* Ambient Lighting Circles inside Banner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A16B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A16B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C6A16B]/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
              <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#EFE5D8] font-medium">
                Make Every Celebration Memorable
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
              Let's Design Your Dream Wedding Digital Suite.
            </h2>

            <p className="text-sm sm:text-base text-[#EFE5D8]/85 font-sans max-w-xl mx-auto leading-relaxed">
              Ready within 24 to 48 hours. Live Google Maps navigation, romantic background melodies, and instant guest RSVPs that your loved ones will cherish.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink('Hi Velora! I would love to begin creating our wedding digital invitation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C6A16B] hover:bg-white text-[#34251D] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 group"
              >
                <MessageCircle className="w-4 h-4 text-[#34251D]" />
                <span>Enquire on WhatsApp Now</span>
              </a>

              <button
                onClick={onExploreTemplates}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2"
              >
                <span>Browse Collections (from ₹499)</span>
                <ArrowRight className="w-4 h-4 text-[#C6A16B]" />
              </button>
            </div>

            <p className="pt-3 text-[11px] font-serif italic text-[#C6A16B] tracking-wider">
              "Every love story deserves its own design."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

