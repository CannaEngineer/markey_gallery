import { venueDetails } from '@/lib/constants';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // LocalBusiness Schema
      {
        '@type': 'EventVenue',
        '@id': 'https://markeygallery.com/#venue',
        name: 'Markey Gallery',
        description: 'Exclusive event venue in Hell\'s Kitchen for corporate events, milestone celebrations, and private gatherings.',
        url: 'https://markeygallery.com',
        telephone: '+1-XXX-XXX-XXXX', // TODO: Add real phone number
        email: 'info@markeygallery.com', // TODO: Add real email
        priceRange: '$$$$',
        image: [
          'https://markeygallery.com/images/space-main.jpg',
          'https://markeygallery.com/images/space-event.jpg',
          'https://markeygallery.com/images/space-setup.jpg',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '358 W 40th St, 2nd Floor',
          addressLocality: 'New York',
          addressRegion: 'NY',
          postalCode: '10018',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.7571,
          longitude: -73.9916,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '23:00',
          },
        ],
        sameAs: [
          // TODO: Add social media URLs when created
          // 'https://www.instagram.com/markeygallery',
          // 'https://www.facebook.com/markeygallery',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '12', // TODO: Update with real review count
          bestRating: '5',
          worstRating: '1',
        },
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Standing Capacity',
            value: venueDetails.capacity,
          },
        ],
      },
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': 'https://markeygallery.com/#organization',
        name: 'Markey Gallery',
        url: 'https://markeygallery.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://markeygallery.com/logo.png', // TODO: Add logo
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-XXX-XXX-XXXX',
          contactType: 'Sales',
          areaServed: 'US',
          availableLanguage: 'English',
        },
      },
      // WebSite Schema
      {
        '@type': 'WebSite',
        '@id': 'https://markeygallery.com/#website',
        url: 'https://markeygallery.com',
        name: 'Markey Gallery',
        description: 'Premium event space in Hell\'s Kitchen, NYC',
        publisher: {
          '@id': 'https://markeygallery.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://markeygallery.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      // FAQ Schema (for rich snippets)
      {
        '@type': 'FAQPage',
        '@id': 'https://markeygallery.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the capacity of Markey Gallery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Markey Gallery accommodates up to ${venueDetails.capacity} guests in a standing reception style, perfect for corporate events, celebrations, and private gatherings.`,
            },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost to rent Markey Gallery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Pricing starts at ${venueDetails.priceRange} with flexible packages available for corporate events, celebrations, and creative gatherings.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Where is Markey Gallery located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Markey Gallery is located at ${venueDetails.address}, in the heart of Hell's Kitchen, convenient to Times Square and Midtown West.`,
            },
          },
          {
            '@type': 'Question',
            name: 'What types of events can I host at Markey Gallery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Markey Gallery is ideal for corporate events, milestone birthdays, engagement parties, art exhibitions, creative workshops, and intimate private celebrations.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
