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
  { src: '/images/space-main.jpg', alt: 'Markey Gallery main space - wide view' },
  { src: '/images/space-setup.jpg', alt: 'Event setup with tables and seating' },
  { src: '/images/space-details.jpg', alt: 'Architectural details and lighting' },
  { src: '/images/space-event.jpg', alt: 'Event in progress with guests' },
  { src: '/images/space-angle.jpg', alt: 'Alternative angle of the venue' },
  { src: '/images/space-bar.jpg', alt: 'Bar area and beverage station' },
  { src: '/images/space-stage.jpg', alt: 'Stage or presentation area' },
  { src: '/images/space-entrance.jpg', alt: 'Entrance and reception area' },
  { src: '/images/space-lounge.jpg', alt: 'Lounge seating area' },
  { src: '/images/space-ceiling.jpg', alt: 'Ceiling and overhead lighting' },
  { src: '/images/space-wall.jpg', alt: 'Gallery wall and artwork display' },
  { src: '/images/space-corner.jpg', alt: 'Corner view showcasing versatility' },
  { src: '/images/space-night.jpg', alt: 'Evening ambiance with mood lighting' },
];
