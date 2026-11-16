import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Video, MapPin, Music, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Bespoke Wedding Websites',
      description: 'Fully responsive personal wedding portals with couple story, live countdown, ceremonies schedule, venue maps, and instant guest RSVP.',
      tags: ['Live Link', 'Mobile & Desktop', 'Custom Colors']
    },
    {
      icon: <Video className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Animated Video Invitations',
      description: 'Cinematic 30-45s vertical story videos formatted for WhatsApp and Instagram Reels with gold-foil shimmers and background music.',
      tags: ['4K MP4 Video', 'Instagram Story Size', 'Audio Sync']
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#C6A16B]" />,
      title: 'One-Tap Map Navigation',
      description: 'Never let guests get lost. Direct Google Maps pins embedded into your link so outstation guests reach the venue with one tap.',
      tags: ['Google Maps', 'Parking Guide', 'Hotel Directions']
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Instant Guest RSVP Tracker',
      description: 'Collect confirmations, headcount, and dietary preferences directly through WhatsApp or private digital spreadsheets.',
      tags: ['Headcount Tracking', 'WhatsApp Alerts', 'Food Preferences']
    },
    {
      icon: <Music className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Curated Romantic Soundtrack',
      description: 'Set the emotional tone with gentle romantic melodies, nadaswaram instrumental, or spiritual hymns playing seamlessly.',
      tags: ['Play/Pause Control', 'Custom Audio Upload', 'Mute Friendly']
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#C6A16B]" />,
      title: 'Multi-Ceremony Timelines',
      description: 'Organize multi-day wedding festivities—from Haldi, Mehendi, Sangeet, and Nikah to the Grand Reception—with clear dress codes.',
      tags: ['Dress Code Notes', 'Multi-day Schedules', 'Calendar Alerts']
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
              What We Offer
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Our Services
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Thoughtfully engineered digital wedding products designed to elevate your celebration and give your loved ones an unforgettable experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#C6A16B]/20 shadow-luxury hover:shadow-luxury-hover hover:border-[#C6A16B]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EFE5D8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {srv.icon}
                </div>

                <h3 className="font-serif text-2xl text-[#34251D] mb-3 leading-snug">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#514338]/85 font-sans leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#C6A16B]/15 flex flex-wrap gap-1.5">
                {srv.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] uppercase tracking-wider text-[#7E6F64] bg-[#F8F3EC] px-2.5 py-1 rounded-full border border-[#C6A16B]/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
