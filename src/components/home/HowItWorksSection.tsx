import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MousePointerClick, MessageSquare, Palette, Send, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Design',
      description: 'Browse our collection and select your favourite wedding website or digital invitation template.',
      icon: <MousePointerClick className="w-5 h-5 text-[#C6A16B]" />,
      detail: 'Filter by style, culture, and price point.'
    },
    {
      number: '02',
      title: 'Share Your Details',
      description: 'Send your event information, dates, venue location, photos and personal music preferences.',
      icon: <MessageSquare className="w-5 h-5 text-[#C6A16B]" />,
      detail: 'Quick submission via WhatsApp or our online form.'
    },
    {
      number: '03',
      title: 'Personalise Your Website',
      description: 'We customise the design according to your requirements, colors, and cultural traditions.',
      icon: <Palette className="w-5 h-5 text-[#C6A16B]" />,
      detail: 'Includes free preview review and revisions.'
    },
    {
      number: '04',
      title: 'Share Your Invitation',
      description: 'Receive your completed digital invitation and share it effortlessly with your guests.',
      icon: <Send className="w-5 h-5 text-[#C6A16B]" />,
      detail: 'One-click WhatsApp, Instagram & QR sharing.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#EFE5D8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Simple & Seamless
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            How It Works
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            From design selection to your guests’ first impression in four effortless steps.
          </p>
        </div>

        {/* 4-Step Connected Timeline Design */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-[#C6A16B]/20 via-[#C6A16B]/60 to-[#C6A16B]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white rounded-3xl p-7 border border-[#C6A16B]/20 shadow-luxury hover:shadow-luxury-hover hover:border-[#C6A16B]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#C6A16B] tracking-wider">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#F8F3EC] border border-[#C6A16B]/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-xl text-[#34251D] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#514338]/90 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub Detail */}
                <div className="pt-4 mt-6 border-t border-[#C6A16B]/15 text-[11px] text-[#7E6F64] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                  <span>{step.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#templates"
            className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] hover:text-[#C6A16B] transition-colors border-b border-[#C6A16B]/40 pb-1"
          >
            <span>Start by choosing a template</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
