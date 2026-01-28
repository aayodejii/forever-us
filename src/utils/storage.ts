import type { RelationshipData } from '../types';

const STORAGE_KEY = 'forever-us-data';

export function saveRelationshipData(data: RelationshipData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadRelationshipData(): RelationshipData | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as RelationshipData;
  } catch {
    return null;
  }
}

export function clearRelationshipData(): void {
  localStorage.removeItem(STORAGE_KEY);
}
