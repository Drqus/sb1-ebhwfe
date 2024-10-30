import React from 'react';
import { Layout } from './components/Layout';
import { GameWheel } from './components/GameWheel';
import { Wallet } from './components/Wallet';
import { UserStats } from './components/UserStats';
import { MiniGames } from './components/MiniGames';
import { useGameState } from './hooks/useGameState';

function App() {
  const { 
    balance, 
    spins, 
    level,
    handleSpin,
    isSpinning,
    lastWin,
    multiplier
  } = useGameState();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3">
            <UserStats level={level} spins={spins} multiplier={multiplier} />
            <Wallet balance={balance} />
          </div>

          {/* Center Column - Game Wheel */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <GameWheel 
                onSpin={handleSpin} 
                isSpinning={isSpinning}
                lastWin={lastWin}
                spinsLeft={spins}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3">
            <MiniGames />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;