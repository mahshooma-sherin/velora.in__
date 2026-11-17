import React, { useState, useMemo } from 'react';
import { useStore } from '../../context/StoreContext';
import { TemplateCategory } from '../../types';
import { TemplateCard } from './TemplateCard';
import { Search, Sparkles, Globe, Image } from 'lucide-react';

const CATEGORIES: { label: string; value: TemplateCategory }[] = [
  { label: 'All (12)', value: 'All' },
  { label: 'Muslim Wedding', value: 'Muslim Wedding' },
  { label: 'Hindu Wedding', value: 'Hindu Wedding' },
  { label: 'Christian Wedding', value: 'Christian Wedding' },
  { label: 'Minimal', value: 'Minimal' },
  { label: 'Floral', value: 'Floral' },
  { label: 'Luxury', value: 'Luxury' },
];

interface TemplateGalleryProps {
  onSelectForOrder?: (templateId: string) => void;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onSelectForOrder }) => {
  const { templates } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [allLive, setAllLive] = useState(false);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || template.category.includes(selectedCategory);

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        template.name.toLowerCase().includes(query) ||
        template.id.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.category.some((c) => c.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [templates, selectedCategory, searchQuery]);

  return (
    <section id="templates" className="py-20 sm:py-24 bg-[#F8F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Curated Portfolio
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            12 Unique Wedding Templates
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Handcrafted for modern couples. Tap <strong>Live Preview</strong> to test real countdowns, interactive Google Maps, and WhatsApp RSVP.
          </p>
        </div>

        {/* Category Pills & Search Bar */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#34251D] text-[#F8F3EC] border-[#34251D] font-medium shadow-sm'
                      : 'bg-white text-[#514338] border-[#C6A16B]/20 hover:border-[#C6A16B]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle & Search Bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-white p-1 rounded-full border border-[#C6A16B]/30 shadow-sm text-xs shrink-0">
              <button
                type="button"
                onClick={() => setAllLive(false)}
                className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
                  !allLive
                    ? 'bg-[#34251D] text-[#F8F3EC] shadow-sm font-medium'
                    : 'text-[#514338] hover:text-[#34251D]'
                }`}
              >
                <Image className="w-3.5 h-3.5" />
                <span>Photos</span>
              </button>
              <button
                type="button"
                onClick={() => setAllLive(true)}
                className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
                  allLive
                    ? 'bg-[#34251D] text-[#F8F3EC] shadow-sm font-medium'
                    : 'text-[#514338] hover:text-[#34251D]'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#C6A16B]" />
                <span>Run Live Web</span>
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-60">
              <Search className="w-3.5 h-3.5 text-[#7E6F64] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search style or couple..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs bg-white border border-[#C6A16B]/30 text-[#34251D] placeholder:text-[#7E6F64]/70 focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
              />
            </div>
          </div>
        </div>

        {/* 12 Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelectForOrder={onSelectForOrder}
              forceLive={allLive}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
