import { useEffect, useRef, useState } from 'react';
import { calculateDayBreakdown } from '../utils/date';
import { GlassCard } from './GlassCard';

interface DayCounterProps {
  startDate: string;
}

export function DayCounter({ startDate }: DayCounterProps) {
  const breakdown = calculateDayBreakdown(startDate);
  const [displayCount, setDisplayCount] = useState(0);
  const targetRef = useRef(breakdown.totalDays);

  useEffect(() => {
    targetRef.current = breakdown.totalDays;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.floor(eased * targetRef.current));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [breakdown.totalDays]);

  const parts: string[] = [];
  if (breakdown.years > 0) parts.push(`${breakdown.years} ${breakdown.years === 1 ? 'year' : 'years'}`);
  if (breakdown.months > 0) parts.push(`${breakdown.months} ${breakdown.months === 1 ? 'month' : 'months'}`);
  if (breakdown.days > 0) parts.push(`${breakdown.days} ${breakdown.days === 1 ? 'day' : 'days'}`);

  return (
    <GlassCard className="text-center animate-slide-up w-full">
      <p className="text-rose-400 font-sans text-sm uppercase tracking-widest mb-2">
        Together for
      </p>
      <p className="font-serif text-6xl md:text-7xl font-bold text-rose-600 tabular-nums leading-none">
        {displayCount.toLocaleString()}
      </p>
      <p className="font-sans text-rose-400 mt-2 text-lg">
        days
      </p>
      {parts.length > 0 && (
        <p className="font-sans text-rose-300 mt-3 text-sm">
          {parts.join(', ')}
        </p>
      )}
    </GlassCard>
  );
}
