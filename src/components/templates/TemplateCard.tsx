import React from 'react';
import { motion } from 'framer-motion';
import { WeddingTemplate } from '../../types';
import { useStore } from '../../context/StoreContext';
import { Eye, MessageCircle, ExternalLink, Sparkles, Check } from 'lucide-react';

interface TemplateCardProps {
  template: WeddingTemplate;
  onSelectForOrder?: (templateId: string) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template, onSelectForOrder }) => {
  const { openPreview, getWhatsAppLink, setSelectedOrderTemplate } = useStore();

  const handleChoose = () => {
    setSelectedOrderTemplate(template);
    const msg = `Hi Velora! I would like to choose the template *${template.id} - ${template.name}* (${template.collectionName} - ₹${template.price}). Please share the details needed to begin!`;
    window.open(getWhatsAppLink(msg), '_blank');
    if (onSelectForOrder) {
      onSelectForOrder(template.id);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C6A16B]/25 hover:border-[#C6A16B] transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex flex-col h-full"
    >
      {/* Top Image Preview Container */}
      <div className="relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden bg-[#EFE5D8]">
        <img
          src={template.coverImage}
          alt={template.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#231812]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Collection & ID Badge */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-serif uppercase tracking-wider font-semibold bg-[#34251D]/90 text-[#F8F3EC] backdrop-blur-md border border-white/20 shadow-sm">
            {template.id}
          </span>
          {template.isPopular && (
            <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#C6A16B] text-white backdrop-blur-md shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Popular</span>
            </span>
          )}
        </div>

        {/* Price Tag in Image */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-3 py-1 rounded-full text-xs font-serif font-semibold bg-white/95 text-[#34251D] backdrop-blur-md shadow-sm border border-[#C6A16B]/30">
            ₹{template.price}
          </span>
        </div>

        {/* Quick Preview Hover Overlay (Desktop) */}
        <div className="absolute inset-0 bg-[#34251D]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 p-4">
          <button
            onClick={() => openPreview(template)}
            className="px-4 py-2.5 rounded-full bg-white text-[#34251D] text-xs uppercase tracking-wider font-medium shadow-lg hover:bg-[#F8F3EC] hover:scale-105 transition-all flex items-center gap-2"
          >
            <Eye className="w-4 h-4 text-[#C6A16B]" />
            <span>Interactive Demo</span>
          </button>
        </div>

        {/* Couple Name Overlay at Bottom of Image */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="font-serif text-xl sm:text-2xl font-normal drop-shadow-sm truncate">
            {template.name}
          </h3>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Category Pills & Collection Tier */}
        <div>
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C6A16B] bg-[#C6A16B]/10 px-2 py-0.5 rounded-md">
              {template.collectionName}
            </span>
            {template.category.slice(0, 2).map((cat, i) => (
              <span
                key={i}
                className="text-[10px] tracking-wider text-[#7E6F64] bg-[#F8F3EC] px-2 py-0.5 rounded-md border border-[#C6A16B]/15"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs text-[#514338]/90 font-sans leading-relaxed line-clamp-2">
            {template.description}
          </p>
        </div>

        {/* Features preview bullets */}
        <div className="space-y-1.5 pt-2 border-t border-[#C6A16B]/15 text-[11px] text-[#7E6F64]">
          {template.features.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#C6A16B] flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Card Action Buttons (Consistent Heights & Layout) */}
        <div className="pt-2 grid grid-cols-2 gap-2.5">
          <button
            onClick={() => openPreview(template)}
            className="w-full py-2.5 px-3 rounded-full border border-[#C6A16B] text-[#34251D] hover:bg-[#EFE5D8]/60 text-xs uppercase tracking-wider font-medium transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span>Live Preview</span>
          </button>

          <button
            onClick={handleChoose}
            className="w-full py-2.5 px-3 rounded-full bg-[#34251D] hover:bg-[#C6A16B] text-[#F8F3EC] text-xs uppercase tracking-wider font-medium transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 group/btn"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C6A16B] group-hover/btn:text-white" />
            <span>Choose This</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
};
