import Hero from '@/sections/Hero';
import TrustStats from '@/sections/TrustStats';
import Services from '@/sections/Services';
import ProcedureGuide from '@/sections/ProcedureGuide';
import Brochures from '@/sections/Brochures';
import Doctors from '@/sections/Doctors';
import Process from '@/sections/Process';
import Testimonials from '@/sections/Testimonials';
import Faq from '@/sections/Faq';
import CtaBanner from '@/sections/CtaBanner';
import Contact from '@/sections/Contact';

export default function HomeView() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <ProcedureGuide />
      <Brochures />
      <Doctors />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}
