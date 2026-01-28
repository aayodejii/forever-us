export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface PartnerLocation {
  coords: Coordinates;
  label: string;
}

export interface RelationshipData {
  startDate: string;
  coupleNames: [string, string];
  partnerLocation: PartnerLocation;
}

export interface GeolocationState {
  coords: Coordinates | null;
  error: string | null;
  loading: boolean;
}

export interface DayBreakdown {
  totalDays: number;
  years: number;
  months: number;
  days: number;
}
