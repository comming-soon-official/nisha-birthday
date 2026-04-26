import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';
import video1 from '@/assets/video/ssstik.io_@luriktma06_1777183433048.mp4';
import video2 from '@/assets/video/ssstik.io_1777183544364.mp4';
import video3 from '@/assets/video/ssstik.io_@luriktma06_1777183670889.mp4';
import video4 from '@/assets/video/ssstik.io_@luriktma06_1777183733405.mp4';
import video5 from '@/assets/video/ssstik.io_@luriktma06_1777183861709.mp4';
import video7 from '@/assets/video/ssstik.io_@luriktma06_1777184603026.mp4';
import video8 from '@/assets/video/ssstik.io_@luriktma06_1777184767261.mp4';

const videos = [
  { src: video3, title: 'मैनबत्तीको त्यो उज्यालो' },
  { src: video2, title: 'खुसीको उत्सव' },
  { src: video5, title: 'जन्मदिनको उमङ्ग' },
  { src: video1, title: 'रङ्गीन रौनकता' },
  { src: video4, title: 'रमाइला रातहरू' },
  { src: video7, title: 'मिठो सरप्राइज' },
  { src: video8, title: 'फेरि त्यही रमाइलो' },
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // User preference only: default is unmuted and changes only via speaker button.
  const [isMuted, setIsMuted] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: false },
    [Autoplay({ delay: 10000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const syncActiveVideo = (index: number, muted: boolean) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.muted = muted;
        if (muted) {
          v.play().catch(() => {});
        } else {
          v.play().catch(() => {
            // Browser may block autoplay with audio until user interaction.
            // Keep user preference unchanged and temporarily fall back for playback.
            v.muted = true;
            v.play().catch(() => {});
          });
        }
      } else {
        v.pause();
      }
    });
  };

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      setActiveIndex(idx);
      syncActiveVideo(idx, isMuted);
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, isMuted]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    syncActiveVideo(activeIndex, nextMuted);
  };

  useEffect(() => {
    if (!sectionRef.current || isMuted) return;

    const tryUnmuteActive = () => {
      const activeVideo = videoRefs.current[activeIndex];
      if (!activeVideo) return;
      activeVideo.muted = false;
      activeVideo.play().catch(() => {
        // Keep playback going if browser still blocks audio for now.
        activeVideo.muted = true;
        activeVideo.play().catch(() => {});
      });
    };

    const section = sectionRef.current;
    section.addEventListener('mouseenter', tryUnmuteActive);
    section.addEventListener('touchstart', tryUnmuteActive, { passive: true });
    section.addEventListener('wheel', tryUnmuteActive, { passive: true });
    window.addEventListener('keydown', tryUnmuteActive);

    return () => {
      section.removeEventListener('mouseenter', tryUnmuteActive);
      section.removeEventListener('touchstart', tryUnmuteActive);
      section.removeEventListener('wheel', tryUnmuteActive);
      window.removeEventListener('keydown', tryUnmuteActive);
    };
  }, [activeIndex, isMuted]);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      <style>{`
        .video-no-controls::-webkit-media-controls {
          display: none !important;
        }
        .video-no-controls::-webkit-media-controls-enclosure {
          display: none !important;
        }
      `}</style>
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-3"
        >
          भिडियोको झल्को
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
        >
          हाम्रा प्यारा सम्झनाहरू
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
                    autoPlay
                    muted={i === activeIndex ? isMuted : true}
                    loop
                    playsInline
                    preload="metadata"
                    className="video-no-controls absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="absolute top-4 right-4 h-10 w-10 rounded-full glass-card flex items-center justify-center text-accent"
                    aria-label={isMuted ? 'Turn on video sound' : 'Mute video sound'}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <div className="absolute top-4 left-4 h-10 w-10 rounded-full glass-card flex items-center justify-center">
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