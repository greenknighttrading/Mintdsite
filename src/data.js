export const TICKET_URL = 'https://www.ontreasure.com/events/mintd-card-show-09202026';
export const ONTREASURE_URL = 'https://www.ontreasure.com/organizers/mintd-card-show';
export const INSTAGRAM_URL = 'https://www.instagram.com/mintdcardshow/';
export const TIKTOK_URL = 'https://www.tiktok.com/@mintdcardshow';

// Next show: September 20, 2026, 10:00 AM EDT
export const NEXT_SHOW = new Date('2026-09-20T10:00:00-04:00');

// Placeholder imagery — swap these paths for real photos/logos.
export const IMAGES = {
  logo: '/images/logo-mintd.svg',
  heroCrowd: '/images/hero-crowd.svg',
  videoPoster: '/images/video-poster.svg',
  eventCrowd: '/images/event-crowd.svg',
  eventCommunity: '/images/event-community.svg',
  collectr: '/images/logo-collectr.svg',
};

// Highlight reel source. Leave empty to show the poster with native controls.
export const HIGHLIGHT_VIDEO = '';

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Vendors', href: '#vendors' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Shows', href: '#shows' },
  { label: 'Contact', href: '/contact', route: true },
];

export const STATS = [
  { value: '10,000+', label: 'Attendees' },
  { value: '800+', label: 'Packs given away' },
  { value: '$4,000+', label: 'Donated' },
  { value: '15+', label: 'Shows' },
];

export const EXPECT = [
  { icon: 'trophy', title: 'Challenges & Games', text: 'Fun games and challenges for all ages.' },
  { icon: 'gift', title: 'Giveaways & Prizes', text: 'Free packs, promos, and exclusive prizes.' },
  { icon: 'users', title: 'Community & Family', text: 'A welcoming space for collectors and families.' },
  { icon: 'heart', title: 'Giving Back', text: "A share of every show's profits supports local nonprofits." },
];

export const EVENTS = [
  {
    type: 'Pop-up event',
    title: 'Continental Popup x MINTD',
    date: 'September 5, 2026',
    location: 'Continental Cards — Ashburn, VA',
    href: 'https://www.mintdcardshow.com/copy-of-sep-12-aslin-brewery-popup',
    cta: 'Details',
    poster: '/images/poster-continental.svg',
  },
  {
    type: 'Pop-up event',
    title: "Gotta Drink 'Em All Pop-Up",
    date: 'September 12, 2026',
    location: 'Aslin Beer Company — Alexandria, VA',
    href: 'https://www.mintdcardshow.com/sep12brewerypopup',
    cta: 'Free entry',
    poster: '/images/poster-gotta-drink.svg',
  },
  {
    type: 'Card show',
    title: 'MINTD Card Show: Back to School',
    date: 'September 20, 2026',
    location: 'Gaithersburg Marriott, MD',
    href: TICKET_URL,
    cta: 'Buy tickets',
    poster: '/images/poster-back-to-school.svg',
  },
];

export const PARTNERS = [
  { name: 'Continental Cards', logo: '/images/logo-continental.svg' },
  { name: 'Decade Footwear', logo: '/images/logo-decade.svg' },
  { name: 'DC Central Kitchen', logo: '/images/logo-dc-central-kitchen.svg' },
  { name: 'So Kids SOAR', logo: '/images/logo-so-kids-soar.svg' },
];
