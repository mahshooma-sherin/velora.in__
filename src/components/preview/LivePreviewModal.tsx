import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import {
  X,
  Smartphone,
  Tablet,
  Laptop,
  ExternalLink,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Heart,
  CheckCircle,
  Sparkles,
  Info,
  Layers,
  ChevronRight
} from 'lucide-react';

interface LivePreviewModalProps {
  onSelectForOrder?: (templateId: string) => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({ onSelectForOrder }) => {
  const { selectedPreviewTemplate, closePreview, getWhatsAppLink, setSelectedOrderTemplate } = useStore();
  
  // Device view modes: mobile | tablet | desktop
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [activeTab, setActiveTab] = useState<'live' | 'details'>('live');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [sampleRsvpSubmitted, setSampleRsvpSubmitted] = useState(false);
  const [sampleRsvpName, setSampleRsvpName] = useState('');
  const [sampleGuestCount, setSampleGuestCount] = useState('2');

  if (!selectedPreviewTemplate) return null;

  const t = selectedPreviewTemplate;

  const handleOrder = () => {
    setSelectedOrderTemplate(t);
    const orderMsg = `Hi Velora! I love the wedding website template *${t.id} - ${t.name}* (${t.collectionName} - ₹${t.price}). I'd like to customize this for our celebration.`;
    window.open(getWhatsAppLink(orderMsg), '_blank');
    if (onSelectForOrder) {
      onSelectForOrder(t.id);
    }
    closePreview();
  };

  const handleSampleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleRsvpSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePreview}
          className="fixed inset-0 bg-[#231812]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-7xl h-[94vh] bg-[#F8F3EC] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#C6A16B]/30 z-10"
        >
          {/* Top Bar Header */}
          <div className="bg-[#EFE5D8] border-b border-[#C6A16B]/25 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
            
            {/* Template Info */}
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#34251D] text-[#F8F3EC] tracking-wider uppercase">
                {t.id}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#34251D] leading-tight">
                    {t.name}
                  </h3>
                  <span className="text-xs font-serif italic text-[#C6A16B]">
                    ₹{t.price}
                  </span>
                </div>
                <p className="text-[11px] text-[#7E6F64] tracking-wide">
                  {t.collectionName} • {t.category.join(' • ')}
                </p>
              </div>
            </div>

            {/* Device Switcher (Desktop / Tablet / Mobile) */}
            <div className="hidden md:flex items-center bg-[#F8F3EC] p-1 rounded-full border border-[#C6A16B]/30 shadow-inner">
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-[#34251D] text-[#F8F3EC] shadow-sm'
                    : 'text-[#7E6F64] hover:text-[#34251D]'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  deviceMode === 'tablet'
                    ? 'bg-[#34251D] text-[#F8F3EC] shadow-sm'
                    : 'text-[#7E6F64] hover:text-[#34251D]'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet</span>
              </button>
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-[#34251D] text-[#F8F3EC] shadow-sm'
                    : 'text-[#7E6F64] hover:text-[#34251D]'
                }`}
                title="Desktop View"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Direct Link to Deployed Template */}
              <a
                href={t.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#C6A16B]/40 text-[#514338] hover:bg-[#F8F3EC] text-xs font-medium transition-colors"
                title="Open original website in new tab"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C6A16B]" />
              </a>

              {/* Choose This Template CTA */}
              <button
                onClick={handleOrder}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#34251D] hover:bg-[#C6A16B] text-[#F8F3EC] text-xs uppercase tracking-wider font-medium shadow-md transition-all group"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C6A16B] group-hover:text-white" />
                <span>Choose This Template</span>
              </button>

              {/* Close Modal Button */}
              <button
                onClick={closePreview}
                className="p-2 rounded-full text-[#514338] hover:text-[#34251D] hover:bg-[#F8F3EC] transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Sub Navigation Bar: View Live Demo vs Sample Details */}
          <div className="bg-[#F8F3EC] border-b border-[#C6A16B]/15 px-6 py-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab('live')}
                className={`py-1 flex items-center gap-1.5 font-medium transition-colors border-b-2 ${
                  activeTab === 'live'
                    ? 'border-[#C6A16B] text-[#34251D]'
                    : 'border-transparent text-[#7E6F64] hover:text-[#34251D]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#C6A16B]" />
                <span>Live Interactive Demo</span>
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`py-1 flex items-center gap-1.5 font-medium transition-colors border-b-2 ${
                  activeTab === 'details'
                    ? 'border-[#C6A16B] text-[#34251D]'
                    : 'border-transparent text-[#7E6F64] hover:text-[#34251D]'
                }`}
              >
                <Info className="w-3.5 h-3.5 text-[#C6A16B]" />
                <span>Sample Data & Features</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[#7E6F64] text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Deployed: {t.demoUrl.replace('https://', '')}</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-[#ECE4D8] overflow-hidden flex items-center justify-center p-3 sm:p-6 relative">
            
            {activeTab === 'live' ? (
              /* Device Frame Container */
              <div
                className={`transition-all duration-500 h-full flex flex-col items-center justify-center ${
                  deviceMode === 'mobile'
                    ? 'w-full max-w-[390px]'
                    : deviceMode === 'tablet'
                    ? 'w-full max-w-[768px]'
                    : 'w-full max-w-full'
                }`}
              >
                <div
                  className={`w-full h-full bg-[#1A1412] rounded-[32px] sm:rounded-[40px] p-2 sm:p-3 shadow-2xl flex flex-col relative border-4 border-[#34251D] ${
                    deviceMode === 'desktop' ? 'rounded-2xl border-2' : ''
                  }`}
                >
                  {/* Phone Notch/Island */}
                  {deviceMode === 'mobile' && (
                    <div className="w-28 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                  )}

                  {/* Browser Window Bar on Desktop */}
                  {deviceMode === 'desktop' && (
                    <div className="flex items-center gap-2 pb-2 px-2 text-white/50 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex-1 max-w-sm mx-auto bg-black/40 py-1 px-3 rounded-md text-center text-[11px] truncate text-white/70">
                        {t.demoUrl}
                      </div>
                    </div>
                  )}

                  {/* Live Iframe with fallback & loader */}
                  <div className="relative flex-1 w-full bg-white rounded-[24px] sm:rounded-[30px] overflow-hidden">
                    {!iframeLoaded && (
                      <div className="absolute inset-0 bg-[#F8F3EC] flex flex-col items-center justify-center p-6 text-center z-10">
                        <div className="w-10 h-10 border-2 border-[#C6A16B] border-t-transparent rounded-full animate-spin mb-3" />
                        <p className="font-serif text-base text-[#34251D]">
                          Loading {t.name} Live Wedding Preview...
                        </p>
                        <p className="text-xs text-[#7E6F64] mt-1">
                          Connecting to {t.demoUrl}
                        </p>
                      </div>
                    )}

                    <iframe
                      src={t.demoUrl}
                      title={`${t.name} Live Preview`}
                      className="w-full h-full border-0 select-text"
                      onLoad={() => setIframeLoaded(true)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Sample Details & Features Breakdown Tab */
              <div className="w-full max-w-4xl h-full bg-[#F8F3EC] rounded-2xl p-6 sm:p-8 overflow-y-auto space-y-8 shadow-md">
                
                {/* Intro summary */}
                <div className="border-b border-[#C6A16B]/20 pb-6">
                  <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C6A16B] font-semibold">
                    Template Specification
                  </span>
                  <h2 className="font-serif text-3xl text-[#34251D] mt-1">
                    {t.name}
                  </h2>
                  <p className="text-[#514338] text-sm mt-2 leading-relaxed max-w-2xl">
                    {t.description}
                  </p>
                </div>

                {/* Key Inclusions Grid */}
                <div>
                  <h3 className="font-serif text-xl text-[#34251D] mb-4">
                    Standout Features Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#C6A16B]/20 shadow-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-[#C6A16B] flex-shrink-0" />
                        <span className="text-xs font-medium text-[#34251D]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Wedding Story & Details */}
                <div className="bg-[#EFE5D8]/60 rounded-2xl p-6 border border-[#C6A16B]/20 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C6A16B]" />
                    <h4 className="font-serif text-lg text-[#34251D]">
                      Sample Wedding Itinerary & Details
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-3.5 rounded-xl border border-[#C6A16B]/15">
                      <span className="text-[10px] uppercase tracking-wider text-[#7E6F64]">Couple</span>
                      <p className="font-serif text-base font-medium text-[#34251D] mt-1">{t.name}</p>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-[#C6A16B]/15">
                      <span className="text-[10px] uppercase tracking-wider text-[#7E6F64]">Ceremony Date</span>
                      <p className="font-serif text-base font-medium text-[#34251D] mt-1">
                        {t.sampleDetails?.weddingDate || 'December 2026'}
                      </p>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-[#C6A16B]/15">
                      <span className="text-[10px] uppercase tracking-wider text-[#7E6F64]">Venue & City</span>
                      <p className="font-serif text-base font-medium text-[#34251D] mt-1">
                        {t.sampleDetails?.venueName || 'Grand Palace Banquet'}
                      </p>
                    </div>
                  </div>

                  {/* Sample Events */}
                  {t.sampleDetails?.events && (
                    <div className="mt-4 space-y-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#7E6F64] font-medium block">
                        Schedule of Ceremonies:
                      </span>
                      {t.sampleDetails.events.map((ev, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/80 p-2.5 rounded-lg text-xs">
                          <span className="font-medium text-[#34251D]">{ev.title}</span>
                          <span className="text-[#C6A16B]">{ev.time} • {ev.location}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sample RSVP Test Box */}
                <div className="bg-white rounded-2xl p-6 border border-[#C6A16B]/30 shadow-sm space-y-4">
                  <div>
                    <h4 className="font-serif text-lg text-[#34251D]">
                      Interactive Guest RSVP Experience
                    </h4>
                    <p className="text-xs text-[#7E6F64]">
                      This is how your guests will confirm attendance directly from your live link:
                    </p>
                  </div>

                  {sampleRsvpSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">RSVP Received for {sampleRsvpName || 'Guest'}!</p>
                        <p className="text-emerald-700 mt-0.5">
                          In production, this instant confirmation forwards to your WhatsApp with guest count ({sampleGuestCount} guests).
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSampleRsvpSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Guest Name"
                          value={sampleRsvpName}
                          onChange={(e) => setSampleRsvpName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg text-xs border border-[#C6A16B]/30 bg-[#F8F3EC]/50 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        />
                        <select
                          value={sampleGuestCount}
                          onChange={(e) => setSampleGuestCount(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg text-xs border border-[#C6A16B]/30 bg-[#F8F3EC]/50 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        >
                          <option value="1">Attending: 1 Guest</option>
                          <option value="2">Attending: 2 Guests</option>
                          <option value="3">Attending: 3 Guests</option>
                          <option value="4+">Attending: 4+ Family Members</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs font-medium uppercase tracking-wider hover:bg-[#C6A16B] transition-colors"
                      >
                        Submit Test RSVP
                      </button>
                    </form>
                  )}
                </div>

                {/* Footer CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#C6A16B]/20">
                  <div>
                    <p className="text-xs text-[#7E6F64]">
                      Turnaround: 24 to 48 Hours with Free Revisions
                    </p>
                    <p className="text-xs font-semibold text-[#34251D]">
                      Package Price: ₹{t.price} (All Inclusive)
                    </p>
                  </div>
                  <button
                    onClick={handleOrder}
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs uppercase tracking-widest font-medium hover:bg-[#C6A16B] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C6A16B]" />
                    <span>Enquire About {t.name} on WhatsApp</span>
                  </button>
                </div>

              </div>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

