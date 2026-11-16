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

  const textColor =
    variant === 'light'
      ? 'text-white'
      : variant === 'gold'
      ? 'text-[#C6A16B]'
      : 'text-[#34251D]';

  const subColor =
    variant === 'light'
      ? 'text-white/70'
      : variant === 'gold'
      ? 'text-[#C6A16B]/80'
      : 'text-[#7E6F64]';

  const sizeClasses = {
    sm: 'text-lg tracking-[0.25em]',
    md: 'text-2xl sm:text-3xl tracking-[0.3em]',
    lg: 'text-4xl sm:text-5xl tracking-[0.35em]',
    xl: 'text-5xl sm:text-6xl tracking-[0.4em]',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none group ${className}`}>
      {/* If the user places an original uploaded logo file in /logo.png or /logo.svg */}
      {!imgError ? (
        <img
          src="/logo.png"
          alt="VELORA"
          className={`h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
            variant === 'light' ? 'brightness-0 invert' : ''
          }`}
          onError={() => setImgError(true)}
          style={{ display: imgError ? 'none' : 'block' }}
        />
      ) : null}

      {/* Luxury Typographic & Emblem Logo (Renders by default or as primary SVG mark) */}
      {imgError && (
        <div className="flex items-center gap-2.5">
          {/* Subtle Champagne Gold Emblem */}
          <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#C6A16B] transition-transform duration-700 ease-out group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              {/* Luxury Diamond Monogram Frame */}
              <polygon points="50,5 95,50 50,95 5,50" stroke="currentColor" strokeWidth="2" strokeDasharray="2 3" />
              <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" />
              <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              <path
                d="M40 38 L50 62 L60 38"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span
              className={`font-serif font-medium uppercase transition-colors duration-300 ${sizeClasses[size]} ${textColor}`}
              style={{ letterSpacing: '0.28em' }}
            >
              VELORA
            </span>
          </div>
        </div>
      )}

      {showTagline && (
        <span
          className={`mt-1 font-serif italic text-xs tracking-widest uppercase transition-opacity duration-300 ${subColor}`}
          style={{ letterSpacing: '0.18em', fontSize: '0.68rem' }}
        >
          Every love story deserves its own design
        </span>
      )}
    </div>
  );
};
