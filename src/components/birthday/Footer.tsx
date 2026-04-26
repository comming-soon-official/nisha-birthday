import { Heart } from 'lucide-react';

const Footer = () => (
  <footer className="relative py-12 px-6 border-t border-border/40">
    <div className="max-w-3xl mx-auto text-center space-y-4">
      <div className="flex items-center justify-center gap-2 text-accent font-serif italic text-lg">
        <span>For you,</span>
        <Heart className="h-4 w-4 fill-primary text-primary animate-pulse-glow" />
        <span>Made by Himal</span>
      </div>
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
        May your twenties be truly magnificent ✨
      </p>
    </div>
  </footer>
);

export default Footer;