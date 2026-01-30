import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markey Gallery | Event Space in Hell's Kitchen, NYC",
  description: "Intimate event space in Hell's Kitchen. 70 guests. BYOB welcome. Perfect for celebrations, corporate events, and creative gatherings.",
  keywords: ["event space", "NYC", "Hell's Kitchen", "private events", "BYOB venue", "Manhattan"],
  authors: [{ name: "Markey Gallery" }],
  openGraph: {
    title: "Markey Gallery | Event Space in Hell's Kitchen, NYC",
    description: "Intimate event space in Hell's Kitchen. 70 guests. BYOB welcome.",
    url: "https://markeygallery.com",
    siteName: "Markey Gallery",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markey Gallery | Event Space in Hell's Kitchen, NYC",
    description: "Intimate event space in Hell's Kitchen. 70 guests. BYOB welcome.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
