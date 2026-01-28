interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg shadow-rose-100/30 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
