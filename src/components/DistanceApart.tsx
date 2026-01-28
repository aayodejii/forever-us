import { useGeolocation } from '../hooks/useGeolocation';
import { calculateDistance, formatDistance } from '../utils/haversine';
import type { PartnerLocation } from '../types';
import { GlassCard } from './GlassCard';
import { LocationDisplay } from './LocationDisplay';

interface DistanceApartProps {
  partnerLocation: PartnerLocation;
  userName: string;
}

export function DistanceApart({ partnerLocation, userName }: DistanceApartProps) {
  const { coords, loading, error, refresh } = useGeolocation();

  const distance = coords ? calculateDistance(coords, partnerLocation.coords) : null;
  const formatted = distance !== null ? formatDistance(distance) : null;

  return (
    <GlassCard className="text-center animate-slide-up w-full" >
      <p className="text-rose-400 font-sans text-sm uppercase tracking-widest mb-4">
        Distance Apart
      </p>

      {loading && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-rose-200 border-t-rose-400 rounded-full animate-spin" />
          <p className="text-rose-300 text-sm font-sans">Detecting your location...</p>
        </div>
      )}

      {error && !loading && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-rose-400 text-sm font-sans">
            Could not detect your location.
          </p>
          <p className="text-rose-300 text-xs font-sans">{error}</p>
          <button
            onClick={refresh}
            className="mt-2 px-4 py-1.5 bg-rose-100 text-rose-500 rounded-full text-sm font-sans font-medium hover:bg-rose-200 transition-colors cursor-pointer"
          >
            Try Again
          </button>
        </div>
      )}

      {formatted && coords && !loading && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-4 w-full">
            <LocationDisplay label={userName} sublabel="Your location" icon="pin" />

            <div className="flex-1 flex items-center justify-center">
              <div className="h-px flex-1 border-t border-dashed border-rose-200" />
              <svg className="w-5 h-5 text-rose-400 mx-2 animate-pulse-soft" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="h-px flex-1 border-t border-dashed border-rose-200" />
            </div>

            <LocationDisplay label={partnerLocation.label} sublabel="Partner" icon="heart" />
          </div>

          <div>
            <p className="font-serif text-4xl md:text-5xl font-bold text-rose-600">
              ~{formatted.km}
            </p>
            <p className="text-rose-300 text-sm font-sans mt-1">
              ({formatted.miles})
            </p>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
