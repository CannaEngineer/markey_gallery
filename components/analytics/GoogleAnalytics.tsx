'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });

          // Track form submissions
          gtag('event', 'conversion', {
            'send_to': '${GA_MEASUREMENT_ID}/form_submit'
          });

          // Track phone clicks
          document.addEventListener('click', function(e) {
            if (e.target.href && e.target.href.startsWith('tel:')) {
              gtag('event', 'phone_click', {
                'event_category': 'Contact',
                'event_label': 'Phone Click'
              });
            }
          });

          // Track email clicks
          document.addEventListener('click', function(e) {
            if (e.target.href && e.target.href.startsWith('mailto:')) {
              gtag('event', 'email_click', {
                'event_category': 'Contact',
                'event_label': 'Email Click'
              });
            }
          });

          // Track directions clicks
          document.addEventListener('click', function(e) {
            if (e.target.href && e.target.href.includes('google.com/maps')) {
              gtag('event', 'directions_click', {
                'event_category': 'Contact',
                'event_label': 'Get Directions'
              });
            }
          });
        `}
      </Script>
    </>
  );
}
