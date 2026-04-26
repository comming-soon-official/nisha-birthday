/**
 * Animated 3D-feel gradient mesh background.
 * Lightweight blurred blobs that drift in space.
 * Renders fixed behind all content.
 */
const GradientMesh = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Rose blob */}
      <div
        className="absolute top-[-15%] left-[-10%] h-[55vw] w-[55vw] min-h-[400px] min-w-[400px] rounded-full opacity-60 mix-blend-screen animate-blob-1"
        style={{
          background: 'radial-gradient(circle, hsl(338 85% 50% / 0.7) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Champagne blob */}
      <div
        className="absolute bottom-[-15%] right-[-10%] h-[55vw] w-[55vw] min-h-[400px] min-w-[400px] rounded-full opacity-50 mix-blend-screen animate-blob-2"
        style={{
          background: 'radial-gradient(circle, hsl(38 80% 55% / 0.6) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Deep wine accent */}
      <div
        className="absolute top-[40%] left-[30%] h-[40vw] w-[40vw] min-h-[300px] min-w-[300px] rounded-full opacity-40 mix-blend-screen animate-blob-3"
        style={{
          background: 'radial-gradient(circle, hsl(15 75% 50% / 0.5) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Subtle vignette + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_0%_0%/0.6)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default GradientMesh;
