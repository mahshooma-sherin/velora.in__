import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { DigitalInvitation } from '../../types';
import { Sparkles, MessageCircle, Check, Film, FileText, Image as ImageIcon } from 'lucide-react';

interface InvitationGalleryProps {
  onSelectForOrder?: (invitationId: string) => void;
}

export const InvitationGallery: React.FC<InvitationGalleryProps> = ({ onSelectForOrder }) => {
  const { invitations, getWhatsAppLink } = useStore();

  const handleEnquiry = (inv: DigitalInvitation) => {
    const msg = `Hi Velora! I am interested in your digital invitation design: *${inv.title}* (${inv.category} - ${inv.style} - ₹${inv.price}). Could you share customization details?`;
    window.open(getWhatsAppLink(msg), '_blank');
    if (onSelectForOrder) {
      onSelectForOrder(inv.id);
    }
  };

  const getFormatIcon = (format: DigitalInvitation['format']) => {
    if (format.includes('Video')) return <Film className="w-3.5 h-3.5 text-[#C6A16B]" />;
    if (format.includes('PDF')) return <FileText className="w-3.5 h-3.5 text-[#C6A16B]" />;
    return <ImageIcon className="w-3.5 h-3.5 text-[#C6A16B]" />;
  };

  return (
    <section id="invitations" className="py-20 sm:py-24 bg-[#EFE5D8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Motion Video & E-Cards
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            6 Signature Digital Invitations
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            From vertical WhatsApp video reels to gold-foil digital stationery. Crafted for weddings, engagements, nikahs, and milestones.
          </p>
        </div>

        {/* 6 Invitations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {invitations.map((inv) => (
            <motion.div
              key={inv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#C6A16B]/25 hover:border-[#C6A16B] transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex flex-col justify-between"
            >
              {/* Media Preview */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE5D8]">
                <img
                  src={inv.previewImage}
                  alt={inv.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231812]/80 via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#34251D]/90 text-white backdrop-blur-md">
                    {inv.category}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-serif font-semibold bg-white/95 text-[#34251D] shadow-sm border border-[#C6A16B]/30">
                    ₹{inv.price}
                  </span>
                </div>

                {/* Title and Format at Bottom of Media */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#C6A16B] font-medium tracking-wider uppercase mb-0.5">
                    {getFormatIcon(inv.format)}
                    <span>{inv.format}</span>
                  </div>
                  <h3 className="font-serif text-xl font-normal drop-shadow-sm truncate">
                    {inv.title}
                  </h3>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-[11px] font-serif italic text-[#C6A16B] mb-1.5 font-medium">
                    Style: {inv.style}
                  </div>
                  <p className="text-xs text-[#514338]/90 font-sans leading-relaxed">
                    {inv.description}
                  </p>
                </div>

                {/* Customisation Options */}
                <div className="pt-3 border-t border-[#C6A16B]/15 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7E6F64] block">
                    Inclusions:
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {inv.customisationOptions.slice(0, 3).map((opt, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#514338]">
                        <Check className="w-3 h-3 text-[#C6A16B] flex-shrink-0" />
                        <span className="truncate">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleEnquiry(inv)}
                    className="w-full py-2.5 px-4 rounded-full bg-[#34251D] hover:bg-[#C6A16B] text-[#F8F3EC] text-xs uppercase tracking-wider font-medium transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C6A16B] group-hover:text-white" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
