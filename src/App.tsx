import { useState } from 'react';
import { useRelationship } from './hooks/useRelationship';
import { HeartBackground } from './components/HeartBackground';
import { FloatingHearts } from './components/FloatingHearts';
import { Header } from './components/Header';
import { DayCounter } from './components/DayCounter';
import { DistanceApart } from './components/DistanceApart';
import { SetupModal } from './components/SetupModal';

function App() {
  const { data, isSetup, save, reset } = useRelationship();
  const [showSetup, setShowSetup] = useState(false);

  const handleSettings = () => setShowSetup(true);
  const handleCancel = () => setShowSetup(false);
  const handleReset = () => {
    reset();
    setShowSetup(false);
  };

  if (!isSetup) {
    return (
      <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        <HeartBackground />
        <FloatingHearts />
        <SetupModal onSave={save} />
      </main>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <HeartBackground />
      <FloatingHearts />
      <div className="relative z-10 max-w-lg mx-auto px-4 py-8 flex flex-col gap-6 items-center">
        <Header coupleNames={data!.coupleNames} onSettings={handleSettings} />
        <DayCounter startDate={data!.startDate} />
        <DistanceApart
          partnerLocation={data!.partnerLocation}
          userName={data!.coupleNames[0]}
        />
        <button
          onClick={handleReset}
          className="mt-4 text-rose-300 hover:text-rose-400 text-xs font-sans transition-colors cursor-pointer"
        >
          Reset everything
        </button>
      </div>
      {showSetup && (
        <SetupModal
          initialData={data}
          onSave={(newData) => {
            save(newData);
            setShowSetup(false);
          }}
          onCancel={handleCancel}
        />
      )}
    </main>
  );
}

export default App;
