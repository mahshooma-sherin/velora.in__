import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Sparkles, Quote, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EFE5D8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Heart className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Loved by Couples
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Customer Testimonials
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Real stories from couples who trusted Velora to share their big day with family and friends across the globe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C6A16B]/25 shadow-luxury flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#C6A16B]/30" />
                <p className="font-serif text-base sm:text-lg text-[#34251D] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#C6A16B]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#34251D]">
                    {t.couple}
                  </h4>
                  <p className="text-xs text-[#7E6F64]">
                    {t.weddingLocation} • <span className="text-[#C6A16B] font-medium">{t.templateChosen}</span>
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F8F3EC] border border-[#C6A16B]/30 flex items-center justify-center text-[#C6A16B]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
