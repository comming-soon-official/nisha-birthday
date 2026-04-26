import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

const BirthdayFinale = () => {
  const [opened, setOpened] = useState(false);

  const celebrate = () => {
    setOpened(true);

    const colors = ['#E11D74', '#F59E0B', '#FDE68A', '#FB7185'];
    confetti({ particleCount: 90, spread: 72, origin: { y: 0.7 }, colors });
    setTimeout(() => {
      confetti({ particleCount: 55, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors });
      confetti({ particleCount: 55, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors });
    }, 200);
  };

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <section className="relative py-20 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-3"
          >
            One Last Gift
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
          >
            A Sweet Surprise
          </motion.h2>
            <p className="mt-4 text-sm sm:text-base text-foreground/75">Tap this gift and turn up the celebration.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="mt-8 sm:mt-10 glass-card gradient-border rounded-3xl p-8 sm:p-10 text-center"
          >
            <Button
              onClick={celebrate}
              size="lg"
              className="mx-auto flex w-full max-w-md h-16 sm:h-20 rounded-2xl bg-gradient-rose-gold text-background hover:opacity-90 hover:scale-[1.03] transition-all font-semibold text-base sm:text-xl tracking-wide shadow-[var(--shadow-rose)] border-0"
            >
              <Gift className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Open the Surprise
            </Button>
          </motion.div>
        </div>
      </section>

      <DialogContent className="max-w-2xl sm:max-w-3xl border-border/60 bg-transparent p-0 shadow-none">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[linear-gradient(145deg,hsl(340_20%_8%/_0.94),hsl(0_0%_4%/_0.82))] p-6 sm:p-10 text-center backdrop-blur-xl">
          <div className="pointer-events-none absolute -top-24 -left-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

          <DialogTitle className="sr-only">Birthday Surprise</DialogTitle>
          <DialogDescription className="sr-only">A birthday wish message with cake and sparkles.</DialogDescription>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-5xl sm:text-7xl mb-4">🎂</div>
            <h3 className="birthday-3d-title font-serif text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight text-gradient">
              Happy Birthday!
            </h3>
            <p className="mt-3 text-base sm:text-lg text-foreground/85 font-serif italic">
              May your coming year be filled with joy, excitement, and beautiful moments.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-accent">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm sm:text-base tracking-wide">Keep shining like this, always</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BirthdayFinale;