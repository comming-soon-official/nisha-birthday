import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  { 
    text: 'Your smile is truly different. Even in the noise, it carries its own rhythm. No matter what others say, never lose that playful spark in you.', 
    name: 'Nisha', 
    role: 'Her Own Rhythm' 
  },
  { 
    text: 'Turning twenty can stir so many feelings, a little fear and a little excitement. But remember, you do not have to prove anything. Being exactly who you are is more than enough for this age.', 
    name: 'Identity', 
    role: 'A New Turn' 
  },
  { 
    text: 'There must have been hard nights, and moments when you quietly broke inside. But the light in your eyes today, after coming this far, is your greatest victory.', 
    name: 'Courage', 
    role: 'Victory' 
  },
  { 
    text: 'People come and go in this world, but keep that little stubbornness and big-hearted warmth alive in you. That is exactly what makes you different from everyone else.', 
    name: 'Nature', 
    role: 'The Real You' 
  },
  { 
    text: 'Time runs fast, but pause sometimes. Listen to your own heart. You are a whole world within yourself, where happiness does not need anyone else\'s permission.', 
    name: 'Reflection', 
    role: 'A Free Spirit' 
  },
  { 
    text: 'The world does not always need grand things. Sometimes one person with a gentle heart, like you, is enough. Your presence alone is a great comfort to many.', 
    name: 'Meaning', 
    role: 'A Gift' 
  },
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
            Only for Nisha
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
          >
            A Few Words from the Heart
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
                className="absolute top-5 right-5 h-4 w-4 text-accent/30 group-hover:text-accent/60 transition-colors"
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