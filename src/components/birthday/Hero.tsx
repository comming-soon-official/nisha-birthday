import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const NAME = 'Nisha';

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.4 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = () => {
  const letters = NAME.split('');

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center px-6 pt-28 pb-20 sm:pt-32">
      <FloatingParticles count={52} />

      {/* Decorative 3D-feel rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[-20%] top-[10%] h-[60vw] w-[60vw] max-h-[600px] max-w-[600px] rounded-full border border-primary/20 animate-spin-slow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[40vw] w-[40vw] max-h-[400px] max-w-[400px] rounded-full border border-accent/30"
        style={{ animation: 'spin-slow 30s linear infinite reverse' }}
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="pointer-events-none absolute left-[-15%] bottom-[5%] h-[45vw] w-[45vw] max-h-[450px] max-w-[450px] rounded-full border border-primary/15"
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card text-xs sm:text-sm tracking-[0.3em] uppercase text-accent"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>HAPPY BIRTHDAY</span>
          <Sparkles className="h-3.5 w-3.5" />
        </motion.div>

        <h1 className="pt-3 sm:pt-4 font-serif font-bold leading-[1.16] tracking-tight overflow-visible">
          <span className="block text-sm sm:text-base md:text-lg tracking-normal text-muted-foreground mb-6 font-sans font-light">
            हाम्रो प्यारी
          </span>
          <span className="flex justify-center flex-wrap [perspective:800px] overflow-visible">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block pt-[0.08em] text-gradient text-[18vw] sm:text-[14vw] md:text-[10rem] lg:text-[12rem] leading-[1.16]"
                style={{
                  textShadow: '0 0 60px hsl(338 80% 60% / 0.5)',
                  paddingRight: char === ' ' ? '0.4em' : '0.02em',
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-accent/70" />
          <span className="font-serif italic text-2xl sm:text-3xl text-accent">अहिले</span>
          <span className="hero-age-glow font-serif font-bold text-5xl sm:text-6xl text-gradient">
            २०
          </span>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-accent/70" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-4 text-[10px] sm:text-xs tracking-normal text-muted-foreground/85"
        >
          तिम्रो लागि, हिमाल ले बनाएको
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 -ml-6"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[10px] sm:text-xs tracking-normal">तल हेर्नुहोस्</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;