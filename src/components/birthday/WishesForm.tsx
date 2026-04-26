import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Send, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

type Wish = { id: string; name: string; message: string; createdAt: number };

const STORAGE_KEY = 'birthday-wishes';

const WishesForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setWishes(JSON.parse(raw));
    } catch {}
  }, []);

  const fireConfetti = () => {
    const colors = ['#E11D74', '#FFB6C1', '#F7E7B4', '#D4A574'];
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 }, colors });
    setTimeout(() => confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors }), 200);
    setTimeout(() => confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors }), 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast({ title: 'Please fill in both fields', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    const newWish: Wish = {
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      createdAt: Date.now(),
    };
    const next = [newWish, ...wishes].slice(0, 50);
    setWishes(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
    setName('');
    setMessage('');
    fireConfetti();
    toast({ title: 'Wish sent! 💖', description: 'Thank you for the kind words.' });
    setSubmitting(false);
  };

  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-3"
          >
            Leave your mark
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-gradient italic"
          >
            Send Your Wishes
          </motion.h2>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-card gradient-border rounded-3xl p-6 sm:p-8 space-y-5"
        >
          <div className="space-y-2">
            <label className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">Your name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="How shall we call you?"
              maxLength={40}
              className="bg-background/50 border-border/60 focus-visible:ring-primary/60 h-12 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">Your wish</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Pour your heart out..."
              maxLength={300}
              rows={4}
              className="bg-background/50 border-border/60 focus-visible:ring-primary/60 rounded-xl resize-none"
            />
            <p className="text-right text-xs text-muted-foreground">{message.length}/300</p>
          </div>
          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="w-full h-14 rounded-xl bg-gradient-rose-gold text-background hover:opacity-90 hover:scale-[1.02] transition-all font-semibold tracking-wide shadow-[var(--shadow-rose)] border-0"
          >
            <Send className="mr-2 h-4 w-4" />
            Send the love
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </motion.form>

        <AnimatePresence>
          {wishes.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12"
            >
              <h3 className="font-serif italic text-2xl sm:text-3xl text-center text-gradient mb-6">
                Wishes wall
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence>
                  {wishes.map((w) => (
                    <motion.div
                      key={w.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="glass-card rounded-2xl p-5 border border-border/60"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="h-3.5 w-3.5 text-primary fill-primary" />
                        <p className="font-medium text-sm text-foreground">{w.name}</p>
                      </div>
                      <p className="text-sm text-foreground/85 leading-relaxed font-serif italic">"{w.message}"</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WishesForm;
