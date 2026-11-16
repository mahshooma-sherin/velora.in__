import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  const { getWhatsAppLink, settings } = useStore();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini Tooltip / Invitation Prompt */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 max-w-xs bg-white rounded-2xl p-4 shadow-2xl border border-[#C6A16B]/30 relative text-left"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="font-serif text-sm font-medium text-[#34251D]">
              Planning your wedding?
            </p>
            <p className="text-[11px] text-[#7E6F64] mt-1 leading-snug">
              Chat with our designers to see real demos and customize your invitation.
            </p>
            <a
              href={getWhatsAppLink('Hi Velora! I need assistance choosing a wedding website design.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#C6A16B] font-semibold hover:underline"
            >
              <span>Chat now</span>
              <span>&rarr;</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Luxury Floating Action Button */}
      <a
        href={getWhatsAppLink('Hi Velora! I am looking for wedding websites and digital invitations.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group p-3.5 rounded-full bg-[#34251D] hover:bg-[#C6A16B] text-white shadow-2xl border border-[#C6A16B]/40 hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat with Velora on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-6 h-6 text-[#C6A16B] group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};
