import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { Check, Sparkles, MessageCircle, ChevronDown, ChevronUp, Clock, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage?: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const { packages, getWhatsAppLink } = useStore();
  const [showAllTiers, setShowAllTiers] = useState(false);

  // By default, display the 3 main packages requested: Starter, Classic, Royal Premium
  const mainPackages = packages.slice(0, 3);
  const extendedPackages = packages.slice(3);

  const handleSelectPackage = (pkgName: string, price: number) => {
    const msg = `Hi Velora! I would like to book the *${pkgName}* (₹${price}). Please share the steps to proceed.`;
    window.open(getWhatsAppLink(msg), '_blank');
    if (onSelectPackage) {
      onSelectPackage(pkgName);
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F8F3EC] relative overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C6A16B]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Transparent & Thoughtful
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Packages & Pricing
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Choose the perfect package for your celebration. Every tier is crafted with meticulous attention to detail, fast delivery, and seamless WhatsApp integration.
          </p>
        </div>

        {/* 3 Main Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {mainPackages.map((pkg, idx) => {
            const isHighlight = pkg.isPopular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-[#34251D] text-[#F8F3EC] shadow-2xl ring-2 ring-[#C6A16B] md:-translate-y-3'
                    : 'bg-white text-[#514338] border border-[#C6A16B]/25 shadow-luxury hover:border-[#C6A16B]/50'
                }`}
              >
                {/* Popular Ribbon */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest font-semibold shadow-md ${
                        isHighlight
                          ? 'bg-[#C6A16B] text-[#34251D]'
                          : 'bg-[#34251D] text-white'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Package Title & Price */}
                <div>
                  <div className="text-center pb-6 border-b border-[#C6A16B]/20">
                    <h3 className={`font-serif text-2xl font-normal ${isHighlight ? 'text-[#F8F3EC]' : 'text-[#34251D]'}`}>
                      {pkg.name}
                    </h3>
                    
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className="text-sm font-serif italic text-[#C6A16B]">₹</span>
                      <span className={`font-serif text-5xl font-medium tracking-tight ${isHighlight ? 'text-white' : 'text-[#34251D]'}`}>
                        {pkg.price}
                      </span>
                      <span className={`text-xs ${isHighlight ? 'text-[#EFE5D8]/70' : 'text-[#7E6F64]'}`}>
                        / one-time
                      </span>
                    </div>

                    <p className={`text-xs mt-3 line-clamp-2 ${isHighlight ? 'text-[#EFE5D8]/80' : 'text-[#7E6F64]'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Delivery & Assurance */}
                  <div className="py-4 flex items-center justify-between text-xs border-b border-[#C6A16B]/20">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C6A16B]" />
                      <span className={isHighlight ? 'text-[#EFE5D8]' : 'text-[#514338]'}>
                        {pkg.deliveryTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C6A16B]" />
                      <span className={isHighlight ? 'text-[#EFE5D8]' : 'text-[#514338]'}>
                        Free Revisions
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider block ${isHighlight ? 'text-[#C6A16B]' : 'text-[#7E6F64]'}`}>
                      What's Included:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlight ? 'text-[#C6A16B]' : 'text-[#C6A16B]'}`} />
                          <span className={isHighlight ? 'text-[#F8F3EC]/90' : 'text-[#514338]'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4">
                  <button
                    onClick={() => handleSelectPackage(pkg.name, pkg.price)}
                    className={`w-full py-3.5 px-4 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                      isHighlight
                        ? 'bg-[#C6A16B] text-[#34251D] hover:bg-white hover:text-[#34251D]'
                        : 'bg-[#34251D] text-[#F8F3EC] hover:bg-[#C6A16B]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Select {pkg.name.split(' ')[0]}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extended Collections Toggle (D Collection ₹1,499 & E Collection ₹1,999) */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllTiers(!showAllTiers)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C6A16B]/40 bg-white/60 hover:bg-white text-xs uppercase tracking-wider text-[#34251D] font-medium transition-all"
          >
            <span>{showAllTiers ? 'Hide' : 'View'} Haute & Bespoke Collections (₹1,499 & ₹1,999)</span>
            {showAllTiers ? <ChevronUp className="w-4 h-4 text-[#C6A16B]" /> : <ChevronDown className="w-4 h-4 text-[#C6A16B]" />}
          </button>
        </div>

        {/* Extended Tiers */}
        {showAllTiers && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {extendedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl p-7 border border-[#C6A16B]/40 shadow-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#C6A16B]/20">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C6A16B]">
                        {pkg.badge}
                      </span>
                      <h4 className="font-serif text-2xl text-[#34251D]">{pkg.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-serif text-[#C6A16B]">₹</span>
                      <span className="font-serif text-3xl font-medium text-[#34251D]">{pkg.price}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#7E6F64] mt-3">
                    {pkg.description}
                  </p>

                  <div className="py-4 space-y-2">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#514338]">
                        <Check className="w-3.5 h-3.5 text-[#C6A16B] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleSelectPackage(pkg.name, pkg.price)}
                  className="mt-4 w-full py-3 rounded-full bg-[#34251D] hover:bg-[#C6A16B] text-[#F8F3EC] text-xs uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C6A16B]" />
                  <span>Choose {pkg.name}</span>
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Custom Package Callout */}
        <div className="mt-16 text-center bg-[#EFE5D8]/70 rounded-3xl p-8 border border-[#C6A16B]/30 max-w-2xl mx-auto space-y-3">
          <p className="font-serif text-2xl text-[#34251D]">
            Need something special? Contact us for a customised package.
          </p>
          <p className="text-xs text-[#7E6F64] max-w-lg mx-auto">
            Whether you want multiple wedding events, custom international language translations, physical QR print cards, or a personalized web domain (.in/.com), our studio is ready to build it.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs uppercase tracking-widest font-medium hover:bg-[#C6A16B] transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C6A16B]" />
              <span>Contact Us for Bespoke Package</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

