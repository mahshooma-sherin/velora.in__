import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { TemplateCategory, CollectionTier } from '../../types';
import { TemplateCard } from './TemplateCard';
import { Search, Sparkles, Filter, SlidersHorizontal, Check } from 'lucide-react';

const CATEGORIES: { label: string; value: TemplateCategory }[] = [
  { label: 'All Designs', value: 'All' },
  { label: 'Traditional', value: 'Traditional' },
  { label: 'Minimal', value: 'Minimal' },
  { label: 'Floral', value: 'Floral' },
  { label: 'Luxury', value: 'Luxury' },
  { label: 'Modern', value: 'Modern' },
  { label: 'Muslim Wedding', value: 'Muslim Wedding' },
  { label: 'Christian Wedding', value: 'Christian Wedding' },
  { label: 'Hindu Wedding', value: 'Hindu Wedding' },
];

const COLLECTIONS: { code: 'ALL' | CollectionTier; label: string; price: string }[] = [
  { code: 'ALL', label: 'All Collections', price: 'All' },
  { code: 'A', label: 'A Collection', price: '₹499' },
  { code: 'B', label: 'B Collection', price: '₹799' },
  { code: 'C', label: 'C Collection', price: '₹999' },
  { code: 'D', label: 'D Collection', price: '₹1,499' },
  { code: 'E', label: 'E Collection', price: '₹1,999' },
];

interface TemplateGalleryProps {
  onSelectForOrder?: (templateId: string) => void;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onSelectForOrder }) => {
  const { templates } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('All');
  const [selectedCollection, setSelectedCollection] = useState<'ALL' | CollectionTier>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || template.category.includes(selectedCategory);

      // Collection filter
      const matchesCollection =
        selectedCollection === 'ALL' || template.collection === selectedCollection;

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        template.name.toLowerCase().includes(query) ||
        template.id.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.category.some((c) => c.toLowerCase().includes(query));

      return matchesCategory && matchesCollection && matchesSearch;
    });
  }, [templates, selectedCategory, selectedCollection, searchQuery]);

  return (
    <section id="templates" className="py-20 sm:py-28 bg-[#F8F3EC] relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE5D8]/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A16B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Curated Masterpieces
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Wedding Website Templates
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Every celebration has its own soul. Browse our interactive live collections crafted with love, countdown clocks, photo highlights, and instant RSVP navigation.
          </p>
        </div>

        {/* Collection Tier Switcher (A, B, C, D, E) */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {COLLECTIONS.map((col) => {
            const isActive = selectedCollection === col.code;
            return (
              <button
                key={col.code}
                onClick={() => setSelectedCollection(col.code)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#34251D] text-[#F8F3EC] shadow-md scale-105'
                    : 'bg-[#EFE5D8]/70 text-[#514338] hover:bg-[#EFE5D8] border border-[#C6A16B]/20'
                }`}
              >
                <span>{col.label}</span>
                {col.price !== 'All' && (
                  <span className={`text-[11px] font-serif ${isActive ? 'text-[#C6A16B]' : 'text-[#7E6F64]'}`}>
                    ({col.price})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Pills & Search Bar */}
        <div className="mb-10 space-y-4">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#C6A16B] text-white border-[#C6A16B] font-medium shadow-sm'
                      : 'bg-white text-[#514338] border-[#C6A16B]/20 hover:border-[#C6A16B]/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Result Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#C6A16B]/15">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#7E6F64] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search couple name or style (e.g. Erfana, Floral)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full text-xs bg-white border border-[#C6A16B]/30 text-[#34251D] placeholder:text-[#7E6F64]/70 focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7E6F64] hover:text-[#34251D]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-[#7E6F64] font-medium">
              Showing <span className="text-[#34251D] font-semibold">{filteredTemplates.length}</span> of {templates.length} templates
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelectForOrder={onSelectForOrder}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-dashed border-[#C6A16B]/40 max-w-lg mx-auto p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EFE5D8] flex items-center justify-center mx-auto text-[#C6A16B]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#34251D]">
              No matching templates found
            </h3>
            <p className="text-xs text-[#7E6F64]">
              Try adjusting your category filters or search query to see other wedding templates.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedCollection('ALL');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs font-medium uppercase tracking-wider hover:bg-[#C6A16B] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Template Assistance CTA */}
        <div className="mt-16 text-center bg-[#EFE5D8]/70 rounded-3xl p-8 border border-[#C6A16B]/30 max-w-3xl mx-auto space-y-3">
          <h4 className="font-serif text-2xl text-[#34251D]">
            Have a specific theme or custom vision in mind?
          </h4>
          <p className="text-xs sm:text-sm text-[#514338]/90 max-w-xl mx-auto">
            From palace aesthetics to minimal Mediterranean villas, we tailor custom color palettes, background tunes, and layouts for your wedding.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs uppercase tracking-widest font-medium hover:bg-[#C6A16B] transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#C6A16B]" />
              <span>Request Custom Design</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

