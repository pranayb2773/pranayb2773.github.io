export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-300">
      {/* Gradient Orbs */}
      <div
        className="orb-element absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'var(--orb-color)' }}
      />
      <div
        className="orb-element absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'var(--orb-color)', animationDelay: '1000ms' }}
      />
      <div
        className="orb-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-morph"
        style={{ background: 'radial-gradient(circle, var(--orb-glow), transparent)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-1/4 w-4 h-4 border border-accent/30 rotate-45 animate-float" />
      <div className="absolute top-1/3 left-1/4 w-6 h-6 border border-accent/20 rounded-full animate-float-delayed" />
      <div
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent/20 rotate-45 animate-float"
        style={{ animationDelay: '500ms' }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float-delayed"
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
}
