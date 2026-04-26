import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  { text: 'Nisha, you light up every room you walk into. Wishing you a twentieth year as radiant as your soul.', name: 'Mom', role: 'Forever your biggest fan' },
  { text: 'Twenty already? Somehow you keep getting cooler every year. Cheers, legend.', name: 'Arjun', role: 'Best friend since kindergarten' },
  { text: 'Your laugh is the soundtrack of my favorite memories. Happy 20th, behen.', name: 'Riya', role: 'Sister' },
  { text: 'Watching you grow into the woman you are today has been my greatest joy. Proud of you, beta.', name: 'Papa', role: 'Dad' },
  { text: 'Kindest, funniest, most unhinged human I know. Never change. Happy birthday, Nish!', name: 'Priya', role: 'College roomie' },
  { text: 'You make ordinary days feel like something worth celebrating. Today, you take center stage.', name: 'Aanya', role: 'Soul sister' },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-3"
          >
            From the people who love you
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
          >
            Words from the Heart
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {quotes.map((q, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative glass-card gradient-border rounded-3xl p-7 sm:p-8 group"
            >
              <Quote
                className="absolute top-5 right-5 h-10 w-10 text-accent/30 group-hover:text-accent/60 transition-colors"
                strokeWidth={1.5}
              />
              <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-foreground/90 mb-6">
                "{q.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="h-10 w-10 rounded-full bg-gradient-rose-gold flex items-center justify-center font-serif text-background font-bold">
                  {q.name[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
