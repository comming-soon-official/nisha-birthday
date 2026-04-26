import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import photo1 from '@/assets/photo-1.jpg';
import photo3 from '@/assets/photo-3.jpg';
import photo5 from '@/assets/photo-5.jpg';
import photo2 from '@/assets/photo-2.jpg';

// Placeholder videos: free CDN sample MP4s.
const videos = [
  { src: 'https://cdn.pixabay.com/video/2023/10/27/186796-878499243_large.mp4', poster: photo5, title: 'Confetti Showers' },
  { src: 'https://cdn.pixabay.com/video/2024/03/13/203358-922675589_large.mp4', poster: photo1, title: 'Toast & Cheers' },
  { src: 'https://cdn.pixabay.com/video/2020/01/05/30887-383571726_large.mp4', poster: photo2, title: 'Candle Glow' },
  { src: 'https://cdn.pixabay.com/video/2022/12/05/142048-778420810_large.mp4', poster: photo3, title: 'Joyful Nights' },
];

const VideoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i === idx) v.play().catch(() => {});
        else v.pause();
      });
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-3"
        >
          In Motion
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
        >
          Our Favorite Memories
        </motion.h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {videos.map((v, i) => (
            <div
              key={i}
              className="relative shrink-0 grow-0 basis-[85%] sm:basis-[65%] md:basis-[50%] lg:basis-[42%] px-3 sm:px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative rounded-3xl overflow-hidden glow-champagne gradient-border"
              >
                <div className="aspect-[9/16] sm:aspect-[4/5] relative bg-card">
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={v.src}
                    poster={v.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-card flex items-center justify-center">
                    <Play className="h-4 w-4 text-accent fill-accent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="font-serif italic text-xl sm:text-2xl text-gradient">{v.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
