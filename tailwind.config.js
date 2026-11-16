/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velora: {
          cream: '#F8F3EC',
          sand: '#EFE5D8',
          sandLight: '#F3ECE3',
          gold: {
            DEFAULT: '#C6A16B',
            50: '#FBF8F3',
            100: '#F5EFE4',
            200: '#EBDDC7',
            300: '#DFC7A5',
            400: '#D4B483',
            500: '#C6A16B',
            600: '#B48E55',
            700: '#94723E',
            800: '#735832',
            900: '#533F25',
          },
          dark: '#34251D',
          espresso: '#231812',
          text: '#514338',
          muted: '#7E6F64',
          border: 'rgba(198, 161, 107, 0.22)',
          borderDark: 'rgba(52, 37, 29, 0.12)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(52, 37, 29, 0.08), 0 0 2px 1px rgba(198, 161, 107, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(52, 37, 29, 0.16), 0 0 0 1px rgba(198, 161, 107, 0.35)',
        'gold-glow': '0 0 25px rgba(198, 161, 107, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        pulseSubtle: 'pulseSubtle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

