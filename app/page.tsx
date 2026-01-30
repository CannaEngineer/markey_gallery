import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Space } from '@/components/sections/Space';
import { Events } from '@/components/sections/Events';
import { Details } from '@/components/sections/Details';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Space />
        <Events />
        <Details />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
