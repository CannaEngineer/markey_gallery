import { venueDetails, eventTypes } from '@/lib/constants';

export function StructuredData() {
  const baseUrl = 'https://markeygallery.com';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // LocalBusiness Schema (EventVenue + LocalBusiness for maximum visibility)
      {
        '@type': ['EventVenue', 'LocalBusiness', 'Place'],
        '@id': 'https://markeygallery.com/#venue',
        name: 'Markey Gallery',
        alternateName: 'Markey Gallery NYC',
        description: 'Exclusive event venue in Hell\'s Kitchen for corporate events, milestone celebrations, and private gatherings. BYOB allowed. 70-guest capacity. Premium space near Times Square.',
        url: 'https://markeygallery.com',
        telephone: '+1-XXX-XXX-XXXX', // TODO: Add real phone number
        email: 'info@markeygallery.com', // TODO: Add real email
        priceRange: '$$-$$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, Debit Card',
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
        // NOTE: aggregateRating removed until real reviews exist (violates Google guidelines if fake)
        // Add back when you have 3+ verified Google reviews
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Event Venue Services',
          itemListElement: eventTypes.map((eventType) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `${eventType.title} Event Venue`,
              description: eventType.description,
              provider: {
                '@id': `${baseUrl}/#organization`,
              },
              areaServed: {
                '@type': 'City',
                name: 'New York',
              },
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '200',
              priceCurrency: 'USD',
              unitText: 'HOUR',
              description: 'Starting price per hour',
            },
            availability: 'https://schema.org/InStock',
            validFrom: new Date().toISOString().split('T')[0],
          })),
        },
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Maximum Occupancy',
            value: venueDetails.capacity,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'BYOB Allowed',
            value: 'Yes',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Floor',
            value: '2nd Floor',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'WiFi',
            value: 'Yes',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Sound System',
            value: 'Yes',
          },
        ],
        areaServed: [
          {
            '@type': 'City',
            name: 'New York',
          },
          {
            '@type': 'Place',
            name: 'Manhattan',
          },
          {
            '@type': 'Place',
            name: 'Hell\'s Kitchen',
          },
          {
            '@type': 'Place',
            name: 'Midtown West',
          },
        ],
        keywords: 'event venue, Hell\'s Kitchen, NYC, corporate events, birthday party, BYOB venue, private event space, Manhattan event venue, Midtown West, Times Square area',
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
          {
            '@type': 'Question',
            name: 'Is BYOB allowed at Markey Gallery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! BYOB (Bring Your Own Beverage) is allowed at Markey Gallery for private events, making it a cost-effective option for your celebration in Hell\'s Kitchen.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I book Markey Gallery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fill out our contact form with your event details, and we\'ll respond within 24 hours with availability and pricing. We\'re located in Hell\'s Kitchen, Manhattan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Markey Gallery near public transportation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Markey Gallery is easily accessible via subway (A, C, E trains at 42nd St-Port Authority) and is within walking distance of Penn Station and Times Square in Hell\'s Kitchen.',
            },
          },
        ],
      },
      // BreadcrumbList Schema (helps with site structure in search results)
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Event Space',
            item: `${baseUrl}#space`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Event Types',
            item: `${baseUrl}#events`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Contact',
            item: `${baseUrl}#contact`,
          },
        ],
      },
      // Service Schema (primary venue rental service)
      {
        '@type': 'Service',
        '@id': `${baseUrl}/#service`,
        serviceType: 'Event Venue Rental',
        name: 'Event Venue Rental - Hell\'s Kitchen NYC',
        description: 'Premium event space rental for corporate events, celebrations, and private gatherings in Hell\'s Kitchen, Manhattan.',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'New York',
          },
          {
            '@type': 'Place',
            name: 'Manhattan',
          },
        ],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '200',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '200',
            priceCurrency: 'USD',
            unitText: 'per hour',
          },
          availability: 'https://schema.org/InStock',
          validFrom: new Date().toISOString().split('T')[0],
          url: `${baseUrl}#contact`,
        },
        category: 'Event Venue',
        termsOfService: `${baseUrl}#contact`,
      },
      // NOTE: ItemList with Product removed - triggered merchant listing validation
      // Event types are already covered in hasOfferCatalog within EventVenue schema
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
