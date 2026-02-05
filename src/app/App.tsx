import { HeroSection } from '@/app/components/hero-section';
import { AboutSection } from '@/app/components/about-section';
import { PhilosophySection } from '@/app/components/philosophy-section';
import { ValuesSection } from '@/app/components/values-section';
import { ObjectsSection } from '@/app/components/objects-section';
import { TrustSection } from '@/app/components/trust-section';
import { ContactSection } from '@/app/components/contact-section';
import { Footer } from '@/app/components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ValuesSection />
      <ObjectsSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
