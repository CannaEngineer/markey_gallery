export interface EventType {
  id: string;
  value: string;
  label: string;
  title: string;
  description: string;
}

export interface VenueDetails {
  capacity: number;
  location: string;
  priceRange: string;
  byob: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export const eventTypes: EventType[] = [
  {
    id: 'celebrations',
    value: 'birthday',
    label: 'Birthday/Celebration',
    title: 'Celebrations',
    description: 'Milestone birthdays. Engagement parties. The moments worth remembering.',
  },
  {
    id: 'corporate',
    value: 'corporate',
    label: 'Corporate Event',
    title: 'Corporate',
    description: "Team gatherings that don't feel corporate. Mixers with actual mixing.",
  },
  {
    id: 'creative',
    value: 'creative',
    label: 'Creative/Art Event',
    title: 'Creative',
    description: 'Art openings. Workshops. Film screenings. If you can dream it, we can host it.',
  },
  {
    id: 'private',
    value: 'private',
    label: 'Private Gathering',
    title: 'Private',
    description: 'Intimate dinners. Anniversary celebrations. Moments meant just for you.',
  },
];

export const venueDetails: VenueDetails = {
  capacity: 70,
  location: 'Hell\'s Kitchen, NYC',
  priceRange: '$200-400/hour',
  byob: true,
};

export const galleryImages: GalleryImage[] = [
  { src: '/images/space-main.jpg', alt: 'Markey Gallery main space' },
  { src: '/images/space-setup.jpg', alt: 'Event setup and seating arrangement' },
  { src: '/images/space-details.jpg', alt: 'Architectural details and ambiance' },
  { src: '/images/space-event.jpg', alt: 'Gallery during an event' },
  { src: '/images/space-angle.jpg', alt: 'Alternative perspective of the space' },
  { src: '/images/markey1.jpeg', alt: 'Markey Gallery interior view' },
  { src: '/images/markey3.jpeg', alt: 'Gallery space detail' },
  { src: '/images/markey4.jpeg', alt: 'Venue atmosphere' },
  { src: '/images/markey6.jpeg', alt: 'Event space setup' },
  { src: '/images/markey8.jpeg', alt: 'Gallery interior' },
  { src: '/images/markey9.jpeg', alt: 'Space configuration' },
  { src: '/images/markey11.jpeg', alt: 'Venue detail shot' },
  { src: '/images/markey12.jpeg', alt: 'Gallery ambiance' },
];
