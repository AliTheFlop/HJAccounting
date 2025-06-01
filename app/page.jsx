import Hero from '@/components/home/Hero';
import AboutUs from '@/components/home/AboutUs';
import FeaturedServices from '@/components/home/FeaturedServices';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedServices />
      <Testimonials />
      <CTASection />
    </>
  );
}