import type { Coordinates } from '../types';

const EARTH_RADIUS_KM = 6371;

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function calculateDistance(pointA: Coordinates, pointB: Coordinates): number {
  const dLat = toRadians(pointB.latitude - pointA.latitude);
  const dLon = toRadians(pointB.longitude - pointA.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(pointA.latitude)) *
      Math.cos(toRadians(pointB.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_KM * c;
}

export function formatDistance(km: number): { km: string; miles: string } {
  const miles = km * 0.621371;

  const formatKm = km < 1
    ? `${Math.round(km * 1000)} m`
    : km < 100
      ? `${km.toFixed(1)} km`
      : `${Math.round(km).toLocaleString()} km`;

  const formatMiles = miles < 1
    ? `${Math.round(miles * 5280)} ft`
    : miles < 100
      ? `${miles.toFixed(1)} mi`
      : `${Math.round(miles).toLocaleString()} mi`;

  return { km: formatKm, miles: formatMiles };
}
