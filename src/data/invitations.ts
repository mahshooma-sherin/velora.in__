import { DigitalInvitation } from '../types';

export const INITIAL_INVITATIONS: DigitalInvitation[] = [
  // Wedding Invitations
  {
    id: 'INV-W1',
    title: 'Royal Ivory & Champagne Crest',
    category: 'Wedding Invitations',
    style: 'Royal Regal Gold Foil',
    format: 'Vertical Video (Reels/Stories)',
    price: 699,
    description: 'An enchanting 40-second animated story invitation with regal gold dust particle effects, custom family crest monogram, and sacred sitar music.',
    previewImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Custom Monogram Seal', 'Multi-Language Script', 'Custom Background Music', '3 Slide Scene Layout'],
    isPopular: true
  },
  {
    id: 'INV-W2',
    title: 'Botanical Watercolor Romance',
    category: 'Wedding Invitations',
    style: 'Floral Botanical Minimal',
    format: 'Interactive PDF',
    price: 499,
    description: 'Hand-painted watercolor roses and eucalyptus vines with clickable venue navigation link, add-to-calendar button, and gift registry link.',
    previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Clickable Map Links', 'Event Timeline Icons', 'Custom Color Palette', 'High-Res Print Ready PDF'],
  },
  {
    id: 'INV-W3',
    title: 'Gilded Temple Heritage',
    category: 'Wedding Invitations',
    style: 'Traditional South Indian Heritage',
    format: 'Animated E-Card',
    price: 599,
    description: 'Traditional brass lamp motifs, lotus blooms, auspicious muhurtham time banner, and Vedic mantra calligraphy.',
    previewImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Vedic Shloka / Mantra', 'Muhurtham Highlight Card', 'Family Name Lineage', 'WhatsApp Friendly Format'],
    isPopular: true
  },

  // Engagement Invitations
  {
    id: 'INV-E1',
    title: 'Solitaire Ring Reveal',
    category: 'Engagement Invitations',
    style: 'Modern Luxury Minimal',
    format: 'Vertical Video (Reels/Stories)',
    price: 599,
    description: 'A cinematic teaser featuring the couple’s photoshoot moments, sparkling solitaire ring transition, and dreamy instrumental piano soundtrack.',
    previewImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Couple Photo Integration', 'Custom Song Track', 'Dress Code / Palette Note', 'Instagram Story Format'],
    isPopular: true
  },
  {
    id: 'INV-E2',
    title: 'Champagne Flutes & Stars',
    category: 'Engagement Invitations',
    style: 'Contemporary Chic',
    format: 'Interactive PDF',
    price: 449,
    description: 'Celebratory golden bubbles and modern typography celebrating the official ring exchange party with location pin.',
    previewImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Venue Directions Link', 'Cocktail / Dress Code Note', 'Couple Portrait Placement', 'Direct RSVP Link']
  },

  // Save the Date
  {
    id: 'INV-S1',
    title: 'Cinematic Film Roll Save The Date',
    category: 'Save the Date',
    style: 'Editorial Vintage Film',
    format: 'Vertical Video (Reels/Stories)',
    price: 499,
    description: 'A trendy aesthetic animated video simulating a vintage 35mm film strip revealing the couple’s favourite pictures and key wedding dates.',
    previewImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Up to 6 Couple Photos', 'Custom Soundtrack', 'Calendar Grid Highlight', 'Social Media Sizing'],
    isPopular: true
  },
  {
    id: 'INV-S2',
    title: 'Minimalist Ivory Calendar Card',
    category: 'Save the Date',
    style: 'Clean Editorial Luxe',
    format: 'Luxury Image',
    price: 349,
    description: 'A timeless ivory card with gold foil date circling, couple initials monogram, and destination airport note.',
    previewImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Circled Wedding Date', 'Custom Monogram Stamp', 'High Resolution JPEG/PNG', 'Double Sided Layout Option']
  },

  // Reception Invitations
  {
    id: 'INV-R1',
    title: 'Starlit Evening Gala',
    category: 'Reception Invitations',
    style: 'Modern Glamour Black Tie',
    format: 'Vertical Video (Reels/Stories)',
    price: 649,
    description: 'Sophisticated midnight navy and gold glitter animation designed for dinner banquets, live band performances, and dance floor announcements.',
    previewImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Dinner Menu Preview', 'DJ / Live Band Announce', 'Dress Code Specification', 'VIP Table Seating Card']
  },
  {
    id: 'INV-R2',
    title: 'Champagne Terrace Banquet',
    category: 'Reception Invitations',
    style: 'Editorial Luxury Sand',
    format: 'Interactive PDF',
    price: 499,
    description: 'An architectural layout with soft sand tones, embossed borders, dinner timings, and valet parking directions.',
    previewImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Valet & Parking Map Pin', 'Event Schedule Timeline', 'Family Host Contacts', 'Clickable RSVP']
  },

  // Nikah Invitations
  {
    id: 'INV-N1',
    title: 'Bismillah Arabesque Arch',
    category: 'Nikah Invitations',
    style: 'Royal Islamic Calligraphy',
    format: 'Vertical Video (Reels/Stories)',
    price: 699,
    description: 'Sacred Bismillah calligraphy in shimmering gold foil, blooming moroccan jasmine, du’a for the bride & groom, and walima details.',
    previewImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Custom Arabic Du’a Choice', 'Walima & Nikah Separate Slides', 'Spiritual Instrumental Oud Music', 'Family Elders Blessing'],
    isPopular: true
  },
  {
    id: 'INV-N2',
    title: 'Emerald Palace Nikah Card',
    category: 'Nikah Invitations',
    style: 'Classic Islamic Emerald & Gold',
    format: 'Interactive PDF',
    price: 499,
    description: 'Emerald green border with delicate geometric jali latticework, Quranic verse on marriage, and clear banquet venue locator.',
    previewImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Surah Ar-Rum Verse (30:21)', 'English / Malayalam / Urdu Script', 'Google Maps Link', 'WhatsApp Instant Share']
  },

  // Birthday Invitations
  {
    id: 'INV-B1',
    title: 'Golden Jubilee Celebration (50th / 60th / 1st)',
    category: 'Birthday Invitations',
    style: 'Champagne Glitter Elegance',
    format: 'Vertical Video (Reels/Stories)',
    price: 499,
    description: 'A cheerful yet luxurious milestone birthday celebration video with photo montage of cherished years, party venue details, and RSVP.',
    previewImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Milestone Year Customisation', 'Photo Memories Slides', 'Theme Party Note', 'Music Selection']
  },
  {
    id: 'INV-B2',
    title: 'Little Star First Birthday Pastel',
    category: 'Birthday Invitations',
    style: 'Soft Cloud Pastel Elegance',
    format: 'Interactive PDF',
    price: 399,
    description: 'Charming warm sand and pastel gold accents for baby’s first birthday celebration, cake cutting schedule, and baby milestone stats.',
    previewImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    customisationOptions: ['Baby Photo Highlight', 'Party Theme Palette', 'Venue Navigation Pin', 'WhatsApp RSVP Link']
  }
];

