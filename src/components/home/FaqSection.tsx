import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../../data/faq';
import { Sparkles, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const FaqSection: React.FC = () => {
  const { getWhatsAppLink } = useStore();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8F3EC] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Got Questions?
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Everything you need to know about customizing your wedding website, delivery times, and guest RSVP management.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#C6A16B]/20 overflow-hidden shadow-sm hover:border-[#C6A16B]/40 transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#34251D] font-normal leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F8F3EC] border border-[#C6A16B]/30 flex items-center justify-center text-[#C6A16B] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#34251D] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#514338]/90 leading-relaxed font-sans border-t border-[#C6A16B]/10">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#EFE5D8]/50 border border-[#C6A16B]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg text-[#34251D]">Still have a specific question?</h4>
            <p className="text-xs text-[#7E6F64]">We are available on WhatsApp to assist you directly with any query.</p>
          </div>
          <a
            href={getWhatsAppLink('Hi Velora! I have a question about your wedding invitation services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs uppercase tracking-wider font-medium hover:bg-[#C6A16B] transition-colors whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
