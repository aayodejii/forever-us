import { useState } from "react";
import type { RelationshipData } from "../types";

interface SetupModalProps {
  initialData?: RelationshipData | null;
  onSave: (data: RelationshipData) => void;
  onCancel?: () => void;
}

export function SetupModal({ initialData, onSave, onCancel }: SetupModalProps) {
  const [yourName, setYourName] = useState(initialData?.coupleNames[0] ?? "");
  const [partnerName, setPartnerName] = useState(
    initialData?.coupleNames[1] ?? ""
  );
  const [startDate, setStartDate] = useState(initialData?.startDate ?? "");
  const [partnerCity, setPartnerCity] = useState(
    initialData?.partnerLocation.label ?? ""
  );
  const [latitude, setLatitude] = useState(
    initialData?.partnerLocation.coords.latitude?.toString() ?? ""
  );
  const [longitude, setLongitude] = useState(
    initialData?.partnerLocation.coords.longitude?.toString() ?? ""
  );

  const today = new Date().toISOString().split("T")[0];

  const isValid =
    yourName.trim() &&
    partnerName.trim() &&
    startDate &&
    partnerCity.trim() &&
    latitude &&
    longitude &&
    !isNaN(Number(latitude)) &&
    !isNaN(Number(longitude));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    onSave({
      startDate,
      coupleNames: [yourName.trim(), partnerName.trim()],
      partnerLocation: {
        label: partnerCity.trim(),
        coords: {
          latitude: Number(latitude),
          longitude: Number(longitude),
        },
      },
    });
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white/70 font-sans text-rose-700 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-900/20 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-white/85 backdrop-blur-md rounded-3xl shadow-xl max-w-md w-full p-8 animate-fade-in"
      >
        <div className="text-center mb-6">
          <svg
            className="w-10 h-10 text-rose-400 mx-auto mb-3 animate-heartbeat"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <h2 className="font-serif text-2xl font-bold text-rose-600">
            {initialData ? "Edit Details" : "Welcome to Forever Us"}
          </h2>
          <p className="font-sans text-rose-400 text-sm mt-1">
            {initialData
              ? "Update your details below"
              : "Tell us about your love story"}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-sans font-medium text-rose-500 mb-1">
                Your name
              </label>
              <input
                type="text"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-rose-500 mb-1">
                Partner's name
              </label>
              <input
                type="text"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                placeholder="Their name"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans font-medium text-rose-500 mb-1">
              When did it all begin?
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              max={today}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-sans font-medium text-rose-500 mb-1">
              Partner's city
            </label>
            <input
              type="text"
              value={partnerCity}
              onChange={(e) => setPartnerCity(e.target.value)}
              placeholder="e.g. Lagos, Nigeria"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-sans font-medium text-rose-500 mb-1">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="e.g. 51.5074"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-rose-500 mb-1">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="e.g. -0.1278"
                className={inputClass}
              />
            </div>
          </div>

          <p className="text-rose-300 text-xs font-sans text-center">
            Ask your partner to share their coordinates from Google Maps
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-2.5 rounded-full border border-rose-200 text-rose-400 font-sans font-medium hover:bg-rose-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={!isValid}
            className="flex-1 py-2.5 rounded-full bg-rose-500 text-white font-sans font-medium shadow-lg shadow-rose-200/50 hover:bg-rose-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {initialData ? "Save Changes" : "Begin Our Journey"}
          </button>
        </div>
      </form>
    </div>
  );
}
