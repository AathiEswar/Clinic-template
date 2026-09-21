import Hero from '@/sections/Hero';
import TrustStats from '@/sections/TrustStats';
import Services from '@/sections/Services';
import Process from '@/sections/Process';
import Faq from '@/sections/Faq';
import CtaBanner from '@/sections/CtaBanner';
import Contact from '@/sections/Contact';

export default function HomeView() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <Process />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}
