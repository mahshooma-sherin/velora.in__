import { DigitalInvitation } from '../types';

export const INITIAL_INVITATIONS: DigitalInvitation[] = [
  // 1. Wedding Invitations
  {
    id: 'INV-1',
    title: 'Royal Ivory & Champagne Crest',
    category: 'Wedding Invitations',
    style: 'Royal Gold Foil Video',
    format: 'Vertical Video (Reels/Stories)',
    price: 699,
    description: 'Enchanting animated story video with regal gold dust particle shimmers, custom family crest monogram, and sacred sitar melodies.',
    previewImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Custom Monogram Crest', 'Background Song Choice', 'Multi-Language Script', 'WhatsApp & Story Format'],
    isPopular: true
  },

  // 2. Engagement Invitations
  {
    id: 'INV-2',
    title: 'Solitaire Ring Reveal',
    category: 'Engagement Invitations',
    style: 'Modern Minimal Luxury',
    format: 'Vertical Video (Reels/Stories)',
    price: 599,
    description: 'A cinematic teaser featuring couple photoshoot highlights, sparkling diamond ring transition, and dreamy instrumental piano soundtrack.',
    previewImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Couple Photos Integration', 'Custom Song Track', 'Dress Code / Palette Note', 'Instagram Story Size'],
    isPopular: true
  },

  // 3. Save the Date
  {
    id: 'INV-3',
    title: 'Cinematic Film Strip',
    category: 'Save the Date',
    style: 'Vintage 35mm Aesthetic',
    format: 'Vertical Video (Reels/Stories)',
    price: 499,
    description: 'Trendy aesthetic animated video simulating a vintage 35mm film roll revealing couple moments and key celebration dates.',
    previewImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Up to 6 Couple Photos', 'Calendar Date Circle', 'Custom Audio Melody', 'WhatsApp & Social Ready'],
    isPopular: true
  },

  // 4. Nikah Invitations
  {
    id: 'INV-4',
    title: 'Bismillah Arabesque Arch',
    category: 'Nikah Invitations',
    style: 'Royal Islamic Calligraphy',
    format: 'Vertical Video (Reels/Stories)',
    price: 699,
    description: 'Sacred Bismillah calligraphy in shimmering gold foil, moroccan jasmine florals, Quranic du’a for the bride & groom, and walima details.',
    previewImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Arabic Du’a Options', 'Walima & Nikah Timings', 'Instrumental Oud / Nasheed', 'Elders Blessing Slide'],
    isPopular: true
  },

  // 5. Reception Invitations
  {
    id: 'INV-5',
    title: 'Starlit Champagne Banquet',
    category: 'Reception Invitations',
    style: 'Black Tie Modern Luxury',
    format: 'Interactive PDF',
    price: 499,
    description: 'Sophisticated midnight navy & champagne layout with dinner banquet timings, Google Maps location pin, and valet parking guide.',
    previewImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Clickable Google Maps Pin', 'Dinner Schedule', 'Dress Code Specification', 'High-Res PDF & Image']
  },

  // 6. Birthday Invitations
  {
    id: 'INV-6',
    title: 'Milestone Golden Celebration',
    category: 'Birthday Invitations',
    style: 'Champagne Glitter Elegance',
    format: 'Vertical Video (Reels/Stories)',
    price: 499,
    description: 'Cheerful yet luxurious milestone celebration video with photo montage of cherished years, party venue details, and RSVP.',
    previewImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Any Milestone (1st / 25th / 50th / 60th)', 'Photo Memories Slides', 'Theme Party Note', 'Music Selection']
  }
];
