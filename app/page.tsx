import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Space } from '@/components/sections/Space';
import { Events } from '@/components/sections/Events';
import { Details } from '@/components/sections/Details';
import { Contact } from '@/components/sections/Contact';
import { getGalleryImages } from '@/lib/getGalleryImages';

// Force dynamic rendering to shuffle images on each visit
export const dynamic = 'force-dynamic';

export default function Home() {
  const galleryImages = getGalleryImages();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Space images={galleryImages} />
        <Events />
        <Details />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
