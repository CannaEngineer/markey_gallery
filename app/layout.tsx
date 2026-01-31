import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import { StructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Event Space Hell's Kitchen NYC | Markey Gallery - From $200/hr",
  description: "Exclusive event venue in Hell's Kitchen for corporate events, milestone celebrations & private gatherings. 70-guest capacity. Premium space near Times Square. Book your 2026 event today.",
  keywords: [
    "event space Hell's Kitchen",
    "private event venue Midtown West",
    "corporate event space NYC",
    "birthday party venue Manhattan",
    "intimate celebration space",
    "event venue near Times Square",
    "premium event space NYC",
    "Hell's Kitchen event venue",
    "private party space Manhattan",
    "corporate venue Midtown"
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
