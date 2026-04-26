import { motion } from 'framer-motion';
import { Cake, Heart, Sparkles, Star } from 'lucide-react';

const milestones = [
  { icon: Cake, value: '२०', label: 'वर्ष पुग्यौ', sub: 'जीवनको एउटा नयाँ अध्याय' },
  { icon: Heart, value: '∞', label: 'पाएको माया', sub: 'तिमीलाई चिन्ने सबैको तर्फबाट' },
  { icon: Star, value: '७,३०५', label: 'जादुमय दिनहरू', sub: 'र हरेक दिनको आफ्नै महत्व छ' },
  { icon: Sparkles, value: 'आज', label: 'विशेष दिन', sub: 'अन्ततः यो दिन आयो' },
];

const TodayBanner = () => {
  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative glass-card gradient-border rounded-3xl p-8 sm:p-12 text-center overflow-hidden mb-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-rose-gold mb-5 shadow-[var(--shadow-rose)]"
          >
            <Cake className="h-8 w-8 sm:h-10 sm:w-10 text-background" strokeWidth={2} />
          </motion.div>
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent mb-3 relative">
            अप्रिल २६ · २०२६
          </p>
          <h2 className="font-serif italic text-4xl sm:text-6xl md:text-7xl text-gradient mb-4 relative">
            आजको दिन विशेष छ
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-foreground/80 max-w-2xl mx-auto relative">
            बीस वटा मैनबत्ती, एउटा अद्भुत आत्मा। यसलाई अविस्मरणीय बनाऔं, निशा। 🎂
          </p>
        </motion.div>

        {/* Milestone tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group glass-card gradient-border rounded-2xl p-5 sm:p-6 text-center"
            >
              <m.icon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-3 text-accent group-hover:text-primary transition-colors" />
              <p className="font-serif text-3xl sm:text-4xl text-gradient mb-1">{m.value}</p>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-foreground/90 font-medium">
                {m.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1.5 italic">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodayBanner;