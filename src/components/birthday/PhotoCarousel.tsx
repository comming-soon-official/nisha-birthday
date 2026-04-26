import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import photo3 from '@/assets/photo-3.jpg';
import photo4 from '@/assets/photo-4.jpg';
import photo5 from '@/assets/photo-5.jpg';
import photo6 from '@/assets/photo-6.jpg';

const photos = [
  { src: photo1, caption: 'Cheers to you' },
  { src: photo2, caption: 'Make a wish' },
  { src: photo3, caption: 'Laughter that lasts' },
  { src: photo4, caption: 'Sparkles & toasts' },
  { src: photo5, caption: 'Petals in the air' },
  { src: photo6, caption: 'Wrapped with love' },
];

const PhotoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: false, dragFree: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  useEffect(() => {
    if (!emblaApi) return;
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
          The Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
        >
          Moments to Remember
        </motion.h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {photos.map((p, i) => (
            <div
              key={i}
              className="relative shrink-0 grow-0 basis-[80%] sm:basis-[55%] md:basis-[40%] lg:basis-[32%] px-3 sm:px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="group relative rounded-3xl overflow-hidden glow-rose"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="font-serif italic text-xl sm:text-2xl text-gradient">{p.caption}</p>
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

export default PhotoCarousel;
