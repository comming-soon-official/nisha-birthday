import { useEffect } from 'react';
import GradientMesh from '@/components/birthday/GradientMesh';
import Hero from '@/components/birthday/Hero';
import TodayBanner from '@/components/birthday/TodayBanner';
import PhotoCarousel from '@/components/birthday/PhotoCarousel';
import VideoCarousel from '@/components/birthday/VideoCarousel';
import Testimonials from '@/components/birthday/Testimonials';
import BirthdayFinale from '@/components/birthday/BirthdayFinale';
import Footer from '@/components/birthday/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Happy 20th Birthday, Nisha 🎂';
    const desc = 'A modern dark-and-gradient celebration page for Nisha\u2019s 20th birthday \u2014 photos, videos, heartfelt quotes and wishes.';
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
      <TodayBanner />
      <PhotoCarousel />
      <VideoCarousel />
      <Testimonials />
      <BirthdayFinale />
      <Footer />
    </main>
  );
};

export default Index;
