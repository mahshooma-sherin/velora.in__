import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { TemplateCard } from '../templates/TemplateCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedTemplatesSectionProps {
  onExploreAll: () => void;
  onSelectForOrder?: (templateId: string) => void;
}

export const FeaturedTemplatesSection: React.FC<FeaturedTemplatesSectionProps> = ({
  onExploreAll,
  onSelectForOrder
}) => {
  const { templates } = useStore();

  // Pick top 6 curated templates across collections
  const featured = templates.filter(t => t.isFeatured).slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#EFE5D8]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
              <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
                Signature Portfolio
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
              Featured Wedding Templates
            </h2>

            <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
              Explore our most requested couple designs across Hindu, Muslim, Christian, and Modern ceremonies. Tap Live Preview to experience working countdowns and maps.
            </p>
          </div>

          <div>
            <button
              onClick={onExploreAll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs uppercase tracking-widest font-medium hover:bg-[#C6A16B] transition-colors shadow-sm"
            >
              <span>View All 30 Templates</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A16B]" />
            </button>
          </div>
        </div>

        {/* Featured Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelectForOrder={onSelectForOrder}
            />
          ))}
        </div>

        {/* Bottom banner link */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreAll}
            className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] hover:text-[#C6A16B] transition-colors border-b border-[#C6A16B]/40 pb-1"
          >
            Browse Collections A through E (₹499 — ₹1,999) &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

