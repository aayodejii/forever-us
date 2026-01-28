import { useState, useEffect, useCallback } from 'react';
import type { GeolocationState } from '../types';

export function useGeolocation(): GeolocationState & { refresh: () => void } {
  const [state, setState] = useState<GeolocationState>({
    coords: null,
    error: null,
    loading: true,
  });

  const fetchPosition = useCallback(() => {
    if (!navigator.geolocation) {
      setState({ coords: null, error: 'Geolocation is not supported by your browser.', loading: false });
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          error: null,
          loading: false,
        });
      },
      (error) => {
        setState({
          coords: null,
          error: error.message,
          loading: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  useEffect(() => {
    fetchPosition();
  }, [fetchPosition]);

  return { ...state, refresh: fetchPosition };
}
