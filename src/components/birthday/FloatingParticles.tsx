import { useMemo } from 'react';

/**
 * Champagne shimmer particles drifting upward.
 * Pure CSS keyframe animation — no JS per-frame work.
 */
const FloatingParticles = ({ count = 24 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 200,
        gold: Math.random() > 0.4,
      })),
    [count],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.gold
              ? 'radial-gradient(circle, hsl(42 90% 80%) 0%, hsl(38 80% 60% / 0.3) 70%, transparent 100%)'
              : 'radial-gradient(circle, hsl(338 90% 75%) 0%, hsl(338 75% 55% / 0.3) 70%, transparent 100%)',
            boxShadow: p.gold
              ? '0 0 10px hsl(42 90% 70% / 0.8)'
              : '0 0 10px hsl(338 80% 60% / 0.7)',
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            ['--drift' as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
