import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import nisha2 from '@/assets/nisha2.jpg';
import nisha3 from '@/assets/nisha3.jpg';
import nisha4 from '@/assets/nisha4.jpg';
import nisha5 from '@/assets/nisha5.jpg';
import nisha7 from '@/assets/nisha7.jpg';
import nisha8 from '@/assets/nisha8.jpg';
import nisha9 from '@/assets/nisha9.png';
import nisha10 from '@/assets/nisha10.png';
import nisha11 from '@/assets/nisha11.png';
import nisha12 from '@/assets/nisha12.png';
import nisha13 from '@/assets/nisha13.jpeg';

const photos = [
  { src: nisha2, caption: 'एउटा मिठो चाहना' },
  { src: nisha3, caption: 'सधैं रहिरहने हाँसो' },
  { src: nisha4, caption: 'खुसीका रङ्गहरू' },
  { src: nisha5, caption: 'रङ्गीन यादहरू' },
  { src: nisha7, caption: 'सधैं यसरी नै चम्किरहनु' },
  { src: nisha8, caption: 'मुस्कानले भरिएको संसार' },
  { src: nisha9, caption: 'प्यारा साना पलहरू' },
  { src: nisha10, caption: 'न्यानो मुस्कान' },
  { src: nisha11, caption: 'उमङ्ग र उत्साह' },
  { src: nisha12, caption: 'खुसीको एउटा झलक' },
  { src: nisha13, caption: 'साँचेर राखेका सम्झनाहरू' },
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
          फोटो ग्यालरी
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
        >
          कहिल्यै नमेटिने पलहरू
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