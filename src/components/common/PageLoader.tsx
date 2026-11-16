import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

interface PageLoaderProps {
  onLoaded: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onLoaded }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onLoaded();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#F8F3EC] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-80 h-80 bg-[#C6A16B]/15 rounded-full blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-4 relative z-10"
          >
            <BrandLogo size="lg" showTagline={false} />

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
              className="h-[1px] bg-[#C6A16B]"
            />

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="font-serif italic text-xs tracking-[0.22em] uppercase text-[#7E6F64]"
            >
              Every love story deserves its own design.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
