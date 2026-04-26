import { useEffect } from 'react';
import GradientMesh from '@/components/birthday/GradientMesh';
import Hero from '@/components/birthday/Hero';
import Countdown from '@/components/birthday/Countdown';
import PhotoCarousel from '@/components/birthday/PhotoCarousel';
import VideoCarousel from '@/components/birthday/VideoCarousel';
import Testimonials from '@/components/birthday/Testimonials';
import WishesForm from '@/components/birthday/WishesForm';
import Footer from '@/components/birthday/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Happy Birthday, Aurora — A Celebration';
    const desc = 'A modern, dark-and-gradient birthday celebration page with photos, videos, heartfelt quotes and wishes for someone special.';
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement('meta');
      m.setAttribute('name', 'description');
      document.head.appendChild(m);
    }
    m.setAttribute('content', desc);
  }, []);

  return (
    <main className="relative min-h-screen text-foreground">
      <GradientMesh />
      <Hero />
      <Countdown />
      <PhotoCarousel />
      <VideoCarousel />
      <Testimonials />
      <WishesForm />
      <Footer />
    </main>
  );
};

export default Index;
