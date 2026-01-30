import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markey Gallery | Intimate Event Space in Hell's Kitchen, NYC",
  description: "Premium event space in Hell's Kitchen. 70 guests. BYOB allowed. Perfect for milestone celebrations, corporate events, and creative gatherings.",
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
