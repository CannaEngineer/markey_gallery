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
  priceRange: 'from $200',
  byob: true,
};
