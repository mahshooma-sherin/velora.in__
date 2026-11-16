import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { Sparkles, Heart, MapPin, Calendar, Clock, Volume2, ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onCreateClick: () => void;
  onPreviewSample: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onCreateClick,
  onPreviewSample,
}) => {
  const { templates, openPreview } = useStore();
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [mockRsvpCount, setMockRsvpCount] = useState(148);
  const [hasRsvpd, setHasRsvpd] = useState(false);

  // Sample countdown timer state for mockup
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { ...prev, days: Math.max(0, prev.days - 1), hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMockRsvp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasRsvpd) {
      setHasRsvpd(true);
      setMockRsvpCount((prev) => prev + 1);
    }
  };

  const sampleTemplate = templates[0]; // Erfana & Sukail (A1)

  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen pt-28 pb-16 sm:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#F8F3EC] via-[#F8F3EC] to-[#EFE5D8]/40">
      {/* Background Soft Lighting & Champagne Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A16B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#EFE5D8]/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Decorative Petals & Sparkles */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 left-[8%] hidden xl:block opacity-60 pointer-events-none"
      >
        <div className="w-12 h-12 rounded-full border border-[#C6A16B]/30 flex items-center justify-center bg-[#F8F3EC]/80 shadow-sm">
          <Sparkles className="w-5 h-5 text-[#C6A16B]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-28 left-[14%] hidden xl:block opacity-60 pointer-events-none"
      >
        <div className="w-10 h-10 rounded-full border border-[#C6A16B]/25 flex items-center justify-center bg-[#F8F3EC]/80 shadow-sm">
          <Heart className="w-4 h-4 text-[#C6A16B]" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Brand Headline, Description, CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C6A16B]/40 bg-[#EFE5D8]/50 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C6A16B] animate-pulse" />
              <span className="text-xs font-serif uppercase tracking-[0.22em] text-[#34251D] font-medium">
                Bespoke Digital Invitations & Wedding Sites
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal text-[#34251D] leading-[1.12] tracking-tight"
            >
              Your Love Story,{' '}
              <span className="italic font-light text-[#C6A16B] block sm:inline">
                Beautifully Told.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-[#514338]/90 max-w-2xl mx-auto lg:mx-0 font-sans font-normal leading-relaxed"
            >
              Discover elegant wedding websites and digital invitations, thoughtfully designed to celebrate your special moments. With live Google Maps directions, instant guest RSVP, and romantic music.
            </motion.p>

            {/* Highlights row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs uppercase tracking-wider text-[#7E6F64]"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Ready in 24 - 48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Starting from ₹499</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A16B]" />
                <span>Instant WhatsApp RSVP</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#34251D] text-[#F8F3EC] text-sm uppercase tracking-[0.16em] font-medium hover:bg-[#C6A16B] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group"
              >
                <span>Explore Templates</span>
                <ArrowRight className="w-4 h-4 text-[#C6A16B] group-hover:text-[#F8F3EC] group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={onCreateClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C6A16B] text-[#34251D] hover:bg-[#EFE5D8]/70 text-sm uppercase tracking-[0.16em] font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C6A16B]" />
                <span>Create Your Invitation</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Realistic Smartphone Mockup Displaying Live Wedding Invitation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[340px]"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C6A16B]/30 to-[#EFE5D8]/50 rounded-[50px] blur-2xl opacity-70 -z-10" />

              {/* Realistic Smartphone Chassis */}
              <div className="relative rounded-[46px] p-3.5 bg-gradient-to-b from-[#4A3B32] via-[#2A1E17] to-[#1E140E] shadow-2xl ring-1 ring-white/10">
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-white/10 mr-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* Smartphone Screen Glass */}
                <div className="relative rounded-[36px] overflow-hidden bg-[#F8F3EC] aspect-[9/19] flex flex-col text-[#34251D] select-none shadow-inner border border-white/20">
                  
                  {/* Top Bar inside Screen */}
                  <div className="pt-7 px-5 pb-2 flex justify-between items-center text-[11px] text-[#7E6F64] tracking-wider z-20">
                    <span className="font-medium text-[#34251D]">VELORA LIVE</span>
                    <button
                      onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                      className="p-1 rounded-full bg-white/80 shadow-sm border border-[#C6A16B]/30 flex items-center gap-1 px-2 text-[10px] text-[#C6A16B]"
                    >
                      <Volume2 className={`w-3 h-3 ${isPlayingMusic ? 'text-[#C6A16B] animate-bounce' : 'text-[#7E6F64]'}`} />
                      <span>{isPlayingMusic ? 'Playing' : 'Music'}</span>
                    </button>
                  </div>

                  {/* Wedding Invitation Hero inside phone */}
                  <div className="relative flex-1 flex flex-col items-center justify-between p-5 pt-2 text-center bg-cover bg-center overflow-y-auto no-scrollbar"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(248, 243, 236, 0.88), rgba(248, 243, 236, 0.94)), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80')`
                    }}
                  >
                    {/* Monogram Seal */}
                    <div className="mt-2 flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full border border-[#C6A16B] flex items-center justify-center bg-white/70 shadow-sm">
                        <span className="font-serif italic text-base text-[#C6A16B] font-semibold">E & S</span>
                      </div>
                      <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-[#7E6F64] mt-1.5">
                        Together with their families
                      </span>
                    </div>

                    {/* Couple Names */}
                    <div className="my-2">
                      <h3 className="font-serif text-2xl font-normal text-[#34251D] tracking-wide">
                        Erfana & Sukail
                      </h3>
                      <div className="w-12 h-[1px] bg-[#C6A16B] mx-auto my-1.5" />
                      <p className="text-[11px] font-serif italic text-[#C6A16B] tracking-wider">
                        Request the honour of your presence
                      </p>
                    </div>

                    {/* Event Date & Location */}
                    <div className="w-full bg-white/75 backdrop-blur-sm rounded-2xl p-3 border border-[#C6A16B]/20 shadow-sm space-y-1.5 text-left text-[11px]">
                      <div className="flex items-center gap-2 text-[#514338]">
                        <Calendar className="w-3.5 h-3.5 text-[#C6A16B] flex-shrink-0" />
                        <span>Sunday, December 28, 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#514338]">
                        <Clock className="w-3.5 h-3.5 text-[#C6A16B] flex-shrink-0" />
                        <span>11:00 AM • Nikah & Walima</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#514338]">
                        <MapPin className="w-3.5 h-3.5 text-[#C6A16B] flex-shrink-0" />
                        <span className="truncate">The Leela Palace, Kovalam</span>
                      </div>
                    </div>

                    {/* Live Countdown in Phone */}
                    <div className="w-full my-2">
                      <div className="text-[9px] uppercase tracking-widest text-[#7E6F64] font-serif mb-1">
                        Celebrating In
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 text-center">
                        <div className="bg-white/80 rounded-lg p-1.5 shadow-sm border border-[#C6A16B]/15">
                          <span className="block text-xs font-serif font-bold text-[#34251D]">{timeLeft.days}</span>
                          <span className="text-[8px] uppercase tracking-wider text-[#7E6F64]">Days</span>
                        </div>
                        <div className="bg-white/80 rounded-lg p-1.5 shadow-sm border border-[#C6A16B]/15">
                          <span className="block text-xs font-serif font-bold text-[#34251D]">{timeLeft.hours}</span>
                          <span className="text-[8px] uppercase tracking-wider text-[#7E6F64]">Hrs</span>
                        </div>
                        <div className="bg-white/80 rounded-lg p-1.5 shadow-sm border border-[#C6A16B]/15">
                          <span className="block text-xs font-serif font-bold text-[#34251D]">{timeLeft.minutes}</span>
                          <span className="text-[8px] uppercase tracking-wider text-[#7E6F64]">Mins</span>
                        </div>
                        <div className="bg-white/80 rounded-lg p-1.5 shadow-sm border border-[#C6A16B]/15">
                          <span className="block text-xs font-serif font-bold text-[#C6A16B]">{timeLeft.seconds}</span>
                          <span className="text-[8px] uppercase tracking-wider text-[#7E6F64]">Sec</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive RSVP Action in Phone */}
                    <div className="w-full space-y-2 mt-1">
                      <button
                        onClick={handleMockRsvp}
                        className={`w-full py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-1.5 ${
                          hasRsvpd
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#34251D] text-[#F8F3EC] hover:bg-[#C6A16B]'
                        }`}
                      >
                        <Heart className="w-3 h-3 fill-current text-[#C6A16B]" />
                        <span>{hasRsvpd ? 'RSVP Confirmed!' : `Tap to RSVP (${mockRsvpCount} Attending)`}</span>
                      </button>

                      <div className="text-[9px] text-[#7E6F64] flex items-center justify-center gap-1">
                        <span>✨ Google Maps & Guestbook Enabled</span>
                      </div>
                    </div>

                  </div>

                  {/* Home Bar */}
                  <div className="py-2 flex justify-center bg-[#F8F3EC]/90 border-t border-[#C6A16B]/10">
                    <div className="w-28 h-1 bg-[#34251D]/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating "Live Demo" Pill Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-[#C6A16B]/30 flex items-center gap-3 cursor-pointer"
                onClick={() => openPreview(sampleTemplate)}
              >
                <div className="w-9 h-9 rounded-full bg-[#C6A16B]/15 flex items-center justify-center text-[#C6A16B]">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#34251D]">
                    Live Interactive Demo
                  </div>
                  <div className="text-[10px] text-[#7E6F64]">
                    Tap to test on mobile & desktop
                  </div>
                </div>
              </motion.div>

              {/* Floating Review Badge */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-2xl shadow-lg border border-[#C6A16B]/30 flex items-center gap-2">
                <span className="text-[#C6A16B] text-xs">★★★★★</span>
                <span className="text-[10px] font-medium text-[#34251D] tracking-wide">
                  Verified Designs
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
