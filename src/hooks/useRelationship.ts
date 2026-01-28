import { useState, useEffect, useCallback } from 'react';
import type { RelationshipData } from '../types';
import { saveRelationshipData, loadRelationshipData, clearRelationshipData } from '../utils/storage';

export function useRelationship() {
  const [data, setData] = useState<RelationshipData | null>(null);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    const saved = loadRelationshipData();
    if (saved) {
      setData(saved);
      setIsSetup(true);
    }
  }, []);

  const save = useCallback((newData: RelationshipData) => {
    saveRelationshipData(newData);
    setData(newData);
    setIsSetup(true);
  }, []);

  const reset = useCallback(() => {
    clearRelationshipData();
    setData(null);
    setIsSetup(false);
  }, []);

  return { data, isSetup, save, reset };
}
