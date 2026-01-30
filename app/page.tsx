import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Space } from '@/components/sections/Space';
import { Events } from '@/components/sections/Events';
import { Details } from '@/components/sections/Details';
import { Contact } from '@/components/sections/Contact';
import { getGalleryImages } from '@/lib/getGalleryImages';

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
