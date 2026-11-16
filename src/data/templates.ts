import { WeddingTemplate } from '../types';

export const INITIAL_TEMPLATES: WeddingTemplate[] = [
  // ==========================================
  // COLLECTION A — ₹499 (Starter)
  // ==========================================
  {
    id: 'A1',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Erfana & Sukail',
    price: 499,
    category: ['Muslim Wedding', 'Minimal', 'Modern'],
    description: 'An elegant minimal aesthetic with warm ivory tones, soft gold borders, countdown timer, and WhatsApp RSVP integration.',
    demoUrl: 'https://erfana-sukail.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    isFeatured: true,
    features: ['Live Event Countdown', 'Interactive Google Maps', 'WhatsApp RSVP', 'Digital Blessings Wall'],
    themeColor: '#C6A16B',
    sampleDetails: {
      brideName: 'Erfana',
      groomName: 'Sukail',
      weddingDate: 'December 28, 2026',
      venueName: 'The Leela Kovalam Palace',
      city: 'Trivandrum, Kerala',
      storySnippet: 'Two souls brought together by destiny, celebrating the beginning of forever under golden sunset skies.',
      events: [
        { title: 'Nikah Ceremony', time: '11:00 AM', location: 'Grand Ballroom, The Leela' },
        { title: 'Grand Walima Reception', time: '07:00 PM', location: 'Beachfront Lawn' }
      ]
    }
  },
  {
    id: 'A2',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Vandana & Sharan',
    price: 499,
    category: ['Hindu Wedding', 'Traditional', 'Floral'],
    description: 'Subtle temple floral motifs with warm marigold accents, sacred muhurtham schedule, and gift registry details.',
    demoUrl: 'https://vandana-sharan.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    features: ['Muhurtham Schedule', 'Traditional Floral Motifs', 'One-Click Navigation', 'Photo Highlights'],
    themeColor: '#D97706',
    sampleDetails: {
      brideName: 'Vandana',
      groomName: 'Sharan',
      weddingDate: 'January 14, 2027',
      venueName: 'Sri Raghavendra Kalyana Mandapam',
      city: 'Bengaluru, Karnataka',
      storySnippet: 'From college library corridors to seven sacred vows around the holy agni.',
      events: [
        { title: 'Muhurtham', time: '09:15 AM - 10:30 AM', location: 'Main Mandapam' },
        { title: 'Traditional Feast (Sadhya)', time: '12:30 PM', location: 'Dining Hall' }
      ]
    }
  },
  {
    id: 'A3',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Madhav & Vaishnavi',
    price: 499,
    category: ['Hindu Wedding', 'Minimal', 'Modern'],
    description: 'Crisp editorial typography, serene sand background, and refined modern Hindu celebration details.',
    demoUrl: 'https://madhav-vaishnavi-pi.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    features: ['Minimalist Editorial Design', 'Countdown Timer', 'Mobile-First Layout', 'Venue Guide'],
    themeColor: '#A16207',
    sampleDetails: {
      brideName: 'Vaishnavi',
      groomName: 'Madhav',
      weddingDate: 'February 10, 2027',
      venueName: 'ITC Grand Chola',
      city: 'Chennai, Tamil Nadu',
      storySnippet: 'A modern romance celebrated with classic grace and lifelong devotion.',
      events: [
        { title: 'Kalyanam', time: '07:30 AM', location: 'Rajendra Hall' },
        { title: 'Evening Sangeet', time: '06:30 PM', location: 'Poolside Pavilion' }
      ]
    }
  },
  {
    id: 'A4',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Surya & Jayesh',
    price: 499,
    category: ['Hindu Wedding', 'Floral', 'Traditional'],
    description: 'Delicate watercolor eucalyptus leaves, champagne accents, and an intimate two-event program timeline.',
    demoUrl: 'https://surya-jayesh-nu.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    features: ['Watercolor Florals', 'Google Maps Pin', 'Guest RSVP Button', 'Contact Family CTA'],
    themeColor: '#4D7C0F'
  },
  {
    id: 'A5',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Shamil & Kamarunnisa',
    price: 499,
    category: ['Muslim Wedding', 'Traditional', 'Luxury'],
    description: 'Rich arabesque archways, emerald and champagne tones, welcoming family and friends to a joyful union.',
    demoUrl: 'https://shamil-kamarunnisa.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80',
    features: ['Arabesque Borders', 'Arabic Calligraphy Accents', 'Direct RSVP', 'Event Timetable'],
    themeColor: '#047857'
  },
  {
    id: 'A6',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Sruthy & Ashwin',
    price: 499,
    category: ['Hindu Wedding', 'Floral', 'Modern'],
    description: 'Fresh blush peach and jasmine aesthetics, tailored for intimate ceremonies and vibrant celebrations.',
    demoUrl: 'https://sruthy-ashwin-wedding.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    features: ['Soft Pastel Palette', 'Live Weather Forecast', 'Interactive RSVP', 'Social Hashtag Widget'],
    themeColor: '#BE185D'
  },

  // ==========================================
  // COLLECTION B — ₹799 (Classic)
  // ==========================================
  {
    id: 'B1',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Umesh & Neethu',
    price: 799,
    category: ['Hindu Wedding', 'Traditional', 'Modern'],
    description: 'A harmonious blend of Kerala heritage aesthetics, gold thread borders, and interactive ceremony schedule.',
    demoUrl: 'https://umesh-neethu-seven.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    features: ['Music Autoplay Background', 'Couple Story Timeline', 'Venue Directions Map', 'Guest Counter'],
    themeColor: '#B45309'
  },
  {
    id: 'B2',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Askar & Sufair',
    price: 799,
    category: ['Muslim Wedding', 'Luxury', 'Modern'],
    description: 'Opulent ivory and rose gold design with smooth animated entrances, couple gallery, and instant WhatsApp booking.',
    demoUrl: 'https://askar-sufair.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
    isFeatured: true,
    features: ['Smooth Scroll Animations', 'Curated Photo Gallery', 'Instant WhatsApp RSVP', 'Dress Code Guide'],
    themeColor: '#C6A16B'
  },
  {
    id: 'B3',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Alex & Jamie (Iris)',
    price: 799,
    category: ['Christian Wedding', 'Minimal', 'Modern'],
    description: 'Serene contemporary church wedding invitation with soft lilac & slate tones, order of service, and hymns list.',
    demoUrl: 'https://alex-jamie-iris.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
    features: ['Order of Holy Matrimony', 'Pastel Florals', 'Bridal Party Introductions', 'Gift Wishes'],
    themeColor: '#6366F1'
  },
  {
    id: 'B4',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Riza & Nizamudheen',
    price: 799,
    category: ['Muslim Wedding', 'Floral', 'Luxury'],
    description: 'Champagne gold botanical vines, elegant Islamic blessings, Walima feast details, and guest accommodations list.',
    demoUrl: 'https://riza-nizamudheen.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    features: ['Champagne Foliage', 'Hotel & Stay Guide', 'Interactive RSVP', 'Audio Player'],
    themeColor: '#C6A16B'
  },
  {
    id: 'B5',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Simran & Shubham',
    price: 799,
    category: ['Hindu Wedding', 'Floral', 'Luxury'],
    description: 'Vibrant marigold and royal ruby accents crafted for big fat North Indian weddings, Haldi, Mehndi, and Sangeet.',
    demoUrl: 'https://simran-shubham.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
    features: ['Multi-day Event Cards', 'Sangeet Playlist Link', 'Dress Code Per Event', 'Interactive RSVP'],
    themeColor: '#DC2626'
  },
  {
    id: 'B6',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Mridu & Mon',
    price: 799,
    category: ['Modern', 'Minimal', 'Traditional'],
    description: 'Warm clay and sandalwood palette with clean editorial grid, romantic quote carousel, and seamless location pins.',
    demoUrl: 'https://mridu-mon.vercel.app/',
    coverImage: 'https://images.unsplash.com/photo-1609151162377-794fa68b02f1?auto=format&fit=crop&w=1000&q=80',
    features: ['Sandalwood Aesthetic', 'Interactive Quote Carousel', 'Photo Masonry Grid', 'Direct Call Host'],
    themeColor: '#B45309'
  },

  // ==========================================
  // COLLECTION C — ₹999 (Royal / Premium)
  // ==========================================
  {
    id: 'C1',
    collection: 'C',
    collectionName: 'Royal Collection',
    name: 'Alex & Jamie (Magnolia)',
    price: 999,
    category: ['Christian Wedding', 'Floral', 'Luxury'],
    description: 'High-fashion editorial wedding design with French magnolia botanicals, RSVP confirmation email, and couple timeline.',
    demoUrl: 'https://alex-jamie-magnolia.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    isFeatured: true,
    features: ['High-Fashion Editorial Typography', 'Magnolia Botanical Illustrations', 'Interactive Love Journey', 'Direct RSVP Sync'],
    themeColor: '#059669'
  },
  {
    id: 'C2',
    collection: 'C',
    collectionName: 'Royal Collection',
    name: 'Bestin & Mareena',
    price: 999,
    category: ['Christian Wedding', 'Luxury', 'Modern'],
    description: 'Cathedral arches with refined gold foil accents, choir audio background, and elegant banquet reception guide.',
    demoUrl: 'https://bestin-mareena-nine.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80',
    features: ['Gold Foil Accents', 'Background Hymn Audio', 'Cathedral Ceremony Map', 'Guest Seating Info'],
    themeColor: '#D97706'
  },
  {
    id: 'C3',
    collection: 'C',
    collectionName: 'Royal Collection',
    name: 'Nibin & Asha',
    price: 999,
    category: ['Christian Wedding', 'Floral', 'Modern'],
    description: 'Gleaming topaz and ivory palette, gentle parallax scroll effects, high-res engagement gallery, and countdown.',
    demoUrl: 'https://nibin-asha-topaz.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80',
    features: ['Parallax Floral Scrolling', 'High-Res Photo Reel', 'Instant WhatsApp Share', 'Digital Guestbook'],
    themeColor: '#0284C7'
  },
  {
    id: 'C4',
    collection: 'C',
    collectionName: 'Royal Collection',
    name: 'Sivaroshan & Kirushika',
    price: 999,
    category: ['Hindu Wedding', 'Traditional', 'Luxury'],
    description: 'Majestic South Indian temple wedding suite with lotus motifs, brass lamp accents, and Vedic ceremony guide.',
    demoUrl: 'https://sivaroshan-kirushika-kappa.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    features: ['Temple Arch Motif', 'Vedic Ceremony Explanation', 'One-Tap Map Route', 'Custom Audio Track'],
    themeColor: '#B91C1C'
  },
  {
    id: 'C5',
    collection: 'C',
    collectionName: 'Royal Collection',
    name: 'Gokul & Greshma',
    price: 999,
    category: ['Hindu Wedding', 'Modern', 'Floral'],
    description: 'Contemporary tropical foliage, pastel peach textures, interactive itinerary with calendar reminders (.ics).',
    demoUrl: 'https://gokul-greshma-pied.vercel.app/',
    coverImage: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=1000&q=80',
    features: ['Add to Google Calendar', 'Tropical Foliage Aesthetics', 'Couple Photo Carousel', 'Countdown Clock'],
    themeColor: '#0D9488'
  },
  {
    id: 'C6',
    collection: 'C',
    collectionName: 'Royal Collection',
    name: 'Sudharshan & Shrisha',
    price: 999,
    category: ['Hindu Wedding', 'Luxury', 'Traditional'],
    description: 'Royal peacock crest, deep gold embellishments, multi-ceremony cards with dress codes and gift registry.',
    demoUrl: 'https://sudharshan-shrisha.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    features: ['Royal Peacock Emblems', 'Live Countdown Banner', 'Venue Navigation & Parking Info', 'WhatsApp RSVP'],
    themeColor: '#D97706'
  },

  // ==========================================
  // COLLECTION D — ₹1,499 (Luxury Haute)
  // ==========================================
  {
    id: 'D1',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Imthiyas & Rinshi',
    price: 1499,
    category: ['Muslim Wedding', 'Luxury', 'Modern'],
    description: 'Cinematic destination wedding template with full-bleed video banner, luxury typography, and bespoke animations.',
    demoUrl: 'https://imthiyas-rinshi-tau.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    isFeatured: true,
    features: ['Full-Screen Video Hero', 'Cinematic Photo Gallery', 'Multi-Language Support', 'Live RSVP Tracker'],
    themeColor: '#C6A16B'
  },
  {
    id: 'D2',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Sajjadali & Ayisha',
    price: 1499,
    category: ['Muslim Wedding', 'Luxury', 'Floral'],
    description: 'Silk textures and subtle champagne shimmers, royal Islamic typography, guest hospitality & hotel travel guide.',
    demoUrl: 'https://sajjadali-ayisha-silk.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    features: ['Silk Texture Animations', 'Hospitality & Flight Guidance', 'Interactive Seating Map', 'Live Guestbook'],
    themeColor: '#9333EA'
  },
  {
    id: 'D3',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Aarav & Ananya',
    price: 1499,
    category: ['Hindu Wedding', 'Luxury', 'Modern'],
    description: 'Udaipur palace-inspired grand digital suite with gold foil borders, royal sangeet playlist, and personalized guest greeting.',
    demoUrl: 'https://aarav-ananya-seven.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    features: ['Palace Gold Embellishments', 'Personalized Guest Name URL', 'Sangeet Video Embed', 'Custom Domain Ready'],
    themeColor: '#C6A16B'
  },
  {
    id: 'D4',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Mahera & Arman',
    price: 1499,
    category: ['Muslim Wedding', 'Luxury', 'Modern'],
    description: 'Opulent Dubai palace aesthetic with black and gold contrast, glowing lanterns, and high-fashion couple portfolio.',
    demoUrl: 'https://mahera-arman.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
    features: ['Black & Gold Luxury Contrast', 'Music Player with Playlist', 'Interactive RSVP + Food Preferences', 'Live Countdown'],
    themeColor: '#D4AF37'
  },
  {
    id: 'D5',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Ritika & Rohit',
    price: 1499,
    category: ['Hindu Wedding', 'Luxury', 'Floral'],
    description: 'Sun-drenched royal haveli vibes with marigold arches, bespoke couple timeline, and digital shagun gift options.',
    demoUrl: 'https://ritika-rohit.vercel.app/',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
    features: ['Royal Haveli Motif', 'Digital Shagun / UPI QR code', 'Instagram Live Link Integration', 'Guest Gallery Upload'],
    themeColor: '#EA580C'
  },
  {
    id: 'D6',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Rohit & Tania',
    price: 1499,
    category: ['Modern', 'Luxury', 'Minimal'],
    description: 'Clean Scandinavian luxury with warm sand textures, subtle cursor effects, and high-fashion editorial photo album.',
    demoUrl: 'https://rohit-tania.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
    features: ['Scandinavian Minimalism', 'Custom Serif Monogram', 'Interactive Story Carousel', 'Calendar Sync'],
    themeColor: '#52525B'
  },

  // ==========================================
  // COLLECTION E — ₹1,999 (Bespoke Exclusive)
  // ==========================================
  {
    id: 'E1',
    collection: 'E',
    collectionName: 'Bespoke Exclusive Collection',
    name: 'Ramkumar & Priyadarshini',
    price: 1999,
    category: ['Hindu Wedding', 'Traditional', 'Luxury'],
    description: 'The pinnacle of regal heritage. Hand-drawn South Indian brass lamps, nadaswaram instrumental intro, and custom domain.',
    demoUrl: 'https://ramkumar-priyadarshini.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    isFeatured: true,
    isNew: true,
    features: ['Custom Domain Included', 'Nadaswaram Audio Intro', 'Hand-Crafted Heritage Crest', 'VIP Guest Table RSVP'],
    themeColor: '#991B1B'
  },
  {
    id: 'E2',
    collection: 'E',
    collectionName: 'Bespoke Exclusive Collection',
    name: 'Nithin & Daya',
    price: 1999,
    category: ['Hindu Wedding', 'Luxury', 'Modern'],
    description: 'Modern Mediterranean villa wedding theme with olive branches, animated couple envelope opening, and guest music requests.',
    demoUrl: 'https://nithin-daya-sigma.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    isNew: true,
    features: ['Interactive Envelope Opening Effect', 'Guest Song Request Box', 'Bespoke Monogram Seal', 'Multi-day Itinerary'],
    themeColor: '#15803D'
  },
  {
    id: 'E3',
    collection: 'E',
    collectionName: 'Bespoke Exclusive Collection',
    name: 'Esvaran & Ashwieni',
    price: 1999,
    category: ['Traditional', 'Luxury', 'Modern'],
    description: 'Bespoke luxury wedding portal designed for international cross-cultural weddings, multi-currency gifts, and live streaming.',
    demoUrl: 'https://esvaran-ashwieni.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    isNew: true,
    features: ['YouTube Live Stream Embed', 'Multi-Timezone Event Clocks', 'Bespoke Animations', 'Unlimited Photos & Videos'],
    themeColor: '#C6A16B'
  },
  {
    id: 'E4',
    collection: 'E',
    collectionName: 'Bespoke Exclusive Collection',
    name: 'Akash & Sukanya',
    price: 1999,
    category: ['Hindu Wedding', 'Luxury', 'Floral'],
    description: 'Enchanting enchanted forest aesthetic with illuminated lanterns, floral archway animations, and full guest concierge.',
    demoUrl: 'https://akash-sukanya-flame.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    features: ['Enchanted Floral Animations', 'Guest Concierge Contact', 'Bespoke Audio Experience', 'High-Res Love Story Reel'],
    themeColor: '#BE185D'
  },
  {
    id: 'E5',
    collection: 'E',
    collectionName: 'Bespoke Exclusive Collection',
    name: 'Nafeesa & Sofian',
    price: 1999,
    category: ['Muslim Wedding', 'Luxury', 'Floral'],
    description: 'Rose-gold royal Islamic nikah invitation with bespoke du’a calligraphy, animated floral shower, and VIP guest management.',
    demoUrl: 'https://nafeesa-sofian-rosy.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    isNew: true,
    features: ['Bespoke Islamic Calligraphy Crest', 'Gold Foil Particle Shimmer', 'Automated WhatsApp Reminders', 'VIP Guest Access'],
    themeColor: '#BE123C'
  },
  {
    id: 'E6',
    collection: 'E',
    collectionName: 'Bespoke Exclusive Collection',
    name: 'Naadham & Rishi',
    price: 1999,
    category: ['Traditional', 'Modern', 'Luxury'],
    description: 'Contemporary classical symphony theme celebrating music, heritage and lifelong love with custom soundtrack and audio guestbook.',
    demoUrl: 'https://naadham-rishi-two.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80',
    features: ['Audio Voice Guestbook', 'Custom Curated Soundtrack', 'Interactive Memory Wall', 'Priority 12-Hour Express Delivery'],
    themeColor: '#C6A16B'
  }
];

