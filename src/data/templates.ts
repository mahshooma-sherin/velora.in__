import { WeddingTemplate } from '../types';

export const INITIAL_TEMPLATES: WeddingTemplate[] = [
  // 1. Erfana & Sukail (A1)
  {
    id: 'T1',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Erfana & Sukail',
    price: 499,
    category: ['Muslim Wedding', 'Minimal', 'Modern'],
    description: 'An elegant minimal aesthetic with warm ivory tones, soft gold borders, live countdown timer, and WhatsApp RSVP.',
    demoUrl: 'https://erfana-sukail.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    isFeatured: true,
    features: ['Live Event Countdown', 'Google Maps Navigation', 'WhatsApp RSVP', 'Digital Blessings Wall'],
    sampleDetails: {
      brideName: 'Erfana',
      groomName: 'Sukail',
      weddingDate: 'December 28, 2026',
      venueName: 'The Leela Kovalam Palace',
      city: 'Trivandrum, Kerala',
      storySnippet: 'Two souls brought together by destiny, celebrating the beginning of forever.',
      events: [
        { title: 'Nikah Ceremony', time: '11:00 AM', location: 'Grand Ballroom, The Leela' },
        { title: 'Grand Walima Reception', time: '07:00 PM', location: 'Beachfront Lawn' }
      ]
    }
  },

  // 2. Vandana & Sharan (A2) - Aesthetic Traditional Hindu Wedding
  {
    id: 'T2',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Vandana & Sharan',
    price: 499,
    category: ['Hindu Wedding', 'Traditional', 'Floral'],
    description: 'Traditional floral motifs with auspicious marigold accents, sacred muhurtham schedule, and direct venue directions.',
    demoUrl: 'https://vandana-sharan.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80',
    features: ['Muhurtham Schedule', 'Traditional Floral Motifs', 'One-Click Navigation', 'Photo Highlights']
  },

  // 3. Madhav & Vaishnavi (A3)
  {
    id: 'T3',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Madhav & Vaishnavi',
    price: 499,
    category: ['Hindu Wedding', 'Minimal', 'Modern'],
    description: 'Crisp editorial serif typography, serene sand background, and refined ceremony details with instant countdown.',
    demoUrl: 'https://madhav-vaishnavi-pi.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    features: ['Minimalist Editorial Design', 'Countdown Timer', 'Mobile-First Layout', 'Venue Guide']
  },

  // 4. Surya & Jayesh (A4)
  {
    id: 'T4',
    collection: 'A',
    collectionName: 'Starter Collection',
    name: 'Surya & Jayesh',
    price: 499,
    category: ['Hindu Wedding', 'Floral', 'Traditional'],
    description: 'Delicate watercolor eucalyptus leaves, champagne accents, and an intimate ceremony timeline.',
    demoUrl: 'https://surya-jayesh-nu.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    features: ['Watercolor Florals', 'Google Maps Pin', 'Guest RSVP Button', 'Contact Family CTA']
  },

  // 5. Umesh & Neethu (B1)
  {
    id: 'T5',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Umesh & Neethu',
    price: 799,
    category: ['Hindu Wedding', 'Traditional', 'Modern'],
    description: 'A harmonious blend of Kerala heritage aesthetics, gold thread borders, and interactive ceremony schedule.',
    demoUrl: 'https://umesh-neethu-seven.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1617059063772-34532796cdb5?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    features: ['Music Autoplay Background', 'Couple Story Timeline', 'Venue Directions Map', 'Guest Counter']
  },

  // 6. Askar & Sufair (B2)
  {
    id: 'T6',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Askar & Sufair',
    price: 799,
    category: ['Muslim Wedding', 'Luxury', 'Modern'],
    description: 'Opulent ivory and rose gold design with smooth animated entrances, couple gallery, and instant WhatsApp booking.',
    demoUrl: 'https://askar-sufair.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80',
    isFeatured: true,
    features: ['Smooth Scroll Animations', 'Curated Photo Gallery', 'Instant WhatsApp RSVP', 'Dress Code Guide']
  },

  // 7. Alex & Jamie - Iris (B3)
  {
    id: 'T7',
    collection: 'B',
    collectionName: 'Classic Collection',
    name: 'Alex & Jamie (Iris)',
    price: 799,
    category: ['Christian Wedding', 'Minimal', 'Modern'],
    description: 'Serene contemporary church wedding invitation with soft lilac & slate tones, order of service, and hymns list.',
    demoUrl: 'https://alex-jamie-iris.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
    features: ['Order of Holy Matrimony', 'Pastel Florals', 'Bridal Party Introductions', 'Gift Wishes']
  },

  // 8. Alex & Jamie - Magnolia (C1)
  {
    id: 'T8',
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
    features: ['High-Fashion Editorial Typography', 'Magnolia Botanical Illustrations', 'Interactive Love Journey', 'Direct RSVP Sync']
  },

  // 9. Bestin & Mareena (C2)
  {
    id: 'T9',
    collection: 'C',
    collectionName: 'Royal Collection',
    name: 'Bestin & Mareena',
    price: 999,
    category: ['Christian Wedding', 'Luxury', 'Modern'],
    description: 'Cathedral arches with refined gold foil accents, choir audio background, and elegant banquet reception guide.',
    demoUrl: 'https://bestin-mareena-nine.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80',
    features: ['Gold Foil Accents', 'Background Hymn Audio', 'Cathedral Ceremony Map', 'Guest Seating Info']
  },

  // 10. Mahera & Arman (D4)
  {
    id: 'T10',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Mahera & Arman',
    price: 1499,
    category: ['Muslim Wedding', 'Luxury', 'Modern'],
    description: 'Opulent Dubai palace aesthetic with black and gold contrast, glowing lanterns, and high-fashion couple portfolio.',
    demoUrl: 'https://mahera-arman.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
    features: ['Black & Gold Luxury Contrast', 'Music Player with Playlist', 'Interactive RSVP + Food Preferences', 'Live Countdown']
  },

  // 11. Rohit & Tania (D6)
  {
    id: 'T11',
    collection: 'D',
    collectionName: 'Luxury Haute Collection',
    name: 'Rohit & Tania',
    price: 1499,
    category: ['Modern', 'Luxury', 'Minimal'],
    description: 'Clean Scandinavian luxury with warm sand textures, subtle cursor effects, and high-fashion editorial photo album.',
    demoUrl: 'https://rohit-tania.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80',
    features: ['Scandinavian Minimalism', 'Custom Serif Monogram', 'Interactive Story Carousel', 'Calendar Sync']
  },

  // 12. Ramkumar & Priyadarshini (E1)
  {
    id: 'T12',
    collection: 'E',
    collectionName: 'Bespoke Exclusive Collection',
    name: 'Ramkumar & Priyadarshini',
    price: 1999,
    category: ['Hindu Wedding', 'Traditional', 'Luxury'],
    description: 'The pinnacle of regal heritage. Hand-drawn brass lamp motifs, nadaswaram instrumental intro, and custom domain ready.',
    demoUrl: 'https://ramkumar-priyadarshini.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    isFeatured: true,
    features: ['Custom Domain Included', 'Nadaswaram Audio Intro', 'Hand-Crafted Heritage Crest', 'VIP Guest Table RSVP']
  }
];
