import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import { StructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Event Space Hell's Kitchen NYC | Markey Gallery - From $200/hr",
  description: "Exclusive event venue in Hell's Kitchen for corporate events, milestone celebrations & private gatherings. 70-guest capacity. Premium space near Times Square. Book your 2026 event today.",
  keywords: [
    // Primary location keywords
    "event space Hell's Kitchen",
    "event venue Hell's Kitchen NYC",
    "Hell's Kitchen event space",

    // Neighborhood variants
    "event venue Midtown West",
    "private event space near Times Square",
    "Manhattan event venue",
    "event space 10018",
    "NYC event venue",

    // Event type + location
    "corporate event space Hell's Kitchen",
    "birthday party venue Hell's Kitchen",
    "private party venue Midtown Manhattan",
    "corporate venue near Times Square",
    "celebration venue NYC",

    // Capacity-specific
    "small event venue NYC",
    "intimate event space Manhattan",
    "70 person venue NYC",
    "intimate celebration space",

    // Feature-specific
    "BYOB event venue NYC",
    "BYOB party space Manhattan",
    "affordable event space NYC",
    "premium event space NYC",

    // Long-tail local
    "event space walking distance Times Square",
    "private event venue Penn Station area",
    "corporate event space Midtown",
    "birthday venue Manhattan"
  ],
  authors: [{ name: "Markey Gallery" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://markeygallery.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Event Space in Hell's Kitchen | Markey Gallery",
    description: "Exclusive 70-guest event venue in Hell's Kitchen. Perfect for corporate events, milestone celebrations & creative gatherings. From $200/hour.",
    url: "https://markeygallery.com",
    siteName: "Markey Gallery",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Markey Gallery Event Space Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Event Space Hell's Kitchen | Markey Gallery",
    description: "Exclusive event venue for corporate events & celebrations. 70 guests. Hell's Kitchen, NYC.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "add-your-google-search-console-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
