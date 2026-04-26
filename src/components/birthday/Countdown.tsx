import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Birthday: next May 15. Adjust as needed.
const getNextBirthday = () => {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, 4, 15, 0, 0, 0); // May 15
  if (target.getTime() < now.getTime()) target = new Date(year + 1, 4, 15, 0, 0, 0);
  return target;
};

const target = getNextBirthday();

const calc = () => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

const Unit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative glass-card gradient-border rounded-2xl px-3 sm:px-5 py-3 sm:py-4 min-w-[64px] sm:min-w-[88px] overflow-hidden">
      <motion.div
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-3xl sm:text-5xl text-gradient tabular-nums text-center"
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
    </div>
    <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">{label}</span>
  </div>
);

const Countdown = () => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-4"
        >
          The big day arrives in
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl mb-10 text-gradient italic"
        >
          Counting every moment
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-end justify-center gap-2 sm:gap-4 flex-wrap"
        >
          <Unit value={t.d} label="Days" />
          <Unit value={t.h} label="Hours" />
          <Unit value={t.m} label="Minutes" />
          <Unit value={t.s} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
