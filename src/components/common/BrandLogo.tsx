import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false,
  size = 'md'
}) => {
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13 md:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-28',
  };

  const subColor =
    variant === 'light'
      ? 'text-[#EFE5D8]/80'
      : variant === 'gold'
      ? 'text-[#C6A16B]'
      : 'text-[#7E6F64]';

  return (
    <div className={`inline-flex flex-col items-center select-none group ${className}`}>
      {!imgError ? (
        <div className="flex flex-col items-center">
          <img
            src={variant === 'light' ? '/logo-white.png' : '/logo.png'}
            alt="VÉLORA — Wedding Digitals"
            className={`${heights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Fallback: Luxury SVG Emblem & Wordmark */
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#C6A16B] flex items-center justify-center text-[#C6A16B]">
            <span className="font-serif italic text-lg font-medium">V</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif text-2xl tracking-[0.3em] uppercase ${
                variant === 'light' ? 'text-white' : 'text-[#34251D]'
              }`}
            >
              VÉLORA
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C6A16B] font-sans">
              Wedding Digitals
            </span>
          </div>
        </div>
      )}

      {showTagline && (
        <span
          className={`mt-1 font-serif italic text-xs tracking-[0.2em] uppercase transition-opacity duration-300 ${subColor}`}
        >
          Every love story deserves its own design
        </span>
      )}
    </div>
  );
};
