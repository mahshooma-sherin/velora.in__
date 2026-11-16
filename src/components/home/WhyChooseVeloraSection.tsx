import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Zap, Smartphone, RefreshCw, HeartHandshake, Eye } from 'lucide-react';

export const WhyChooseVeloraSection: React.FC = () => {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Express 24 - 48 Hour Turnaround',
      description: 'Wedding dates wait for no one. We craft your live link swiftly so you can start inviting relatives without delay.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Zero App Downloads for Guests',
      description: 'Your wedding link opens instantly inside WhatsApp, Safari, Chrome, and Instagram on every smartphone and laptop.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Editorial Luxury Aesthetics',
      description: 'Designed like a luxury bridal publication with rich serif typography, champagne accents, and generous whitespace.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Free Revision Peace of Mind',
      description: 'Venue timing shifted? Hotel address updated? We update your live website instantly without changing your link.'
    },
    {
      icon: <Eye className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Interactive Guest Features',
      description: 'Countdown clocks, Google Maps directions, background romantic tunes, and one-click WhatsApp RSVP.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Personalized WhatsApp Support',
      description: 'No complicated dashboards or ticket queues. Talk directly to our designers on WhatsApp from start to finish.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              The Velora Distinction
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Why Choose Velora
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            We understand how deeply special your wedding is. Here is our promise to you for an effortless, prestigious digital experience.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-[#C6A16B]/20 shadow-luxury hover:shadow-luxury-hover hover:border-[#C6A16B]/40 transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EFE5D8] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-[#34251D]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#514338]/85 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

