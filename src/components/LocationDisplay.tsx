interface LocationDisplayProps {
  label: string;
  sublabel?: string;
  icon: 'pin' | 'heart';
}

export function LocationDisplay({ label, sublabel, icon }: LocationDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      {icon === 'pin' ? (
        <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )}
      <span className="font-sans font-medium text-rose-600 text-sm">{label}</span>
      {sublabel && (
        <span className="font-sans text-rose-300 text-xs">{sublabel}</span>
      )}
    </div>
  );
}
