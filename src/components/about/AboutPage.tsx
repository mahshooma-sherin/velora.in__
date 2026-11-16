import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, Eye, ShieldCheck, Palette } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              About Velora
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Creating Beautiful Digital Memories.
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Velora creates beautiful digital wedding experiences through personalised wedding websites and digital invitations. Our goal is to make every celebration memorable with elegant designs and modern digital experiences.
          </p>
        </div>

        {/* Editorial Layout: Dual Story & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Story Editorial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs font-serif italic text-[#C6A16B] uppercase tracking-[0.2em]">
                Why We Started Velora
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#34251D] font-normal leading-snug">
                Every love story deserves its own design.
              </h3>
            </div>

            <p className="text-sm text-[#514338] leading-relaxed">
              In a world where wedding planning is both exhilarating and fast-paced, traditional paper invitations often get misplaced, cannot provide real-time Google Maps directions, and lack the emotional touch of couple storytelling.
            </p>

            <p className="text-sm text-[#514338] leading-relaxed">
              We started Velora to bring refined artistry and effortless digital convenience together. Whether it is an intimate beachside nikah, a traditional temple muhurtham, or a cathedral ceremony, we design invitations that honor your rituals while giving your guests an unforgettable digital experience right inside WhatsApp.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#C6A16B]/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#EFE5D8] flex items-center justify-center text-[#C6A16B] mb-2">
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#34251D] mb-1">Tailored Aesthetics</h4>
                <p className="text-xs text-[#7E6F64] leading-relaxed">
                  Carefully chosen champagne tones, warm ivories, and curated serif fonts that convey real luxury.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#C6A16B]/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#EFE5D8] flex items-center justify-center text-[#C6A16B] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#34251D] mb-1">Dedicated Care</h4>
                <p className="text-xs text-[#7E6F64] leading-relaxed">
                  Direct personal communication on WhatsApp for every revision and detail update.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Wedding Imagery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Backing Gold Border Frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#C6A16B]/40 -rotate-2 -z-10" />
              
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#EFE5D8]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Velora Wedding Aesthetic"
                  className="w-full h-[460px] object-cover object-center"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#C6A16B]/30 max-w-[240px]">
                <p className="font-serif italic text-xs text-[#34251D]">
                  "A wedding invitation is the very first glimpse your loved ones have into your forever."
                </p>
                <span className="block mt-1 text-[10px] text-[#C6A16B] uppercase tracking-wider font-semibold">
                  — The Velora Studio
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-[#C6A16B]/20 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFE5D8] flex items-center justify-center text-[#C6A16B]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#34251D]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-[#514338]/90 leading-relaxed font-sans">
              To be the premier digital wedding studio, redefining how celebrations are announced across cultures and borders—blending timeless romance with effortless, modern digital hospitality.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#C6A16B]/20 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFE5D8] flex items-center justify-center text-[#C6A16B]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#34251D]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-[#514338]/90 leading-relaxed font-sans">
              To craft personalized digital wedding experiences that couples feel genuinely proud to share with their families—delivered with warmth, rapid turnaround, and unmatched elegance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
