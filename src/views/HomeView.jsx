import Hero from '@/sections/Hero';
import TrustStats from '@/sections/TrustStats';
import Services from '@/sections/Services';
import ProcedureGuide from '@/sections/ProcedureGuide';
import Doctors from '@/sections/Doctors';
import PressFeature from '@/sections/PressFeature';
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
      <Doctors />
      <PressFeature />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}
