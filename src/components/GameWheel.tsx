import React, { useEffect, useRef } from 'react';
import { RotateCw } from 'lucide-react';

const SEGMENTS = [
  { color: 'from-yellow-500 to-yellow-600', prize: { amount: 0.00001, currency: 'BTC' } },
  { color: 'from-green-500 to-green-600', prize: { amount: 5, currency: 'USDT' } },
  { color: 'from-blue-500 to-blue-600', prize: { amount: 2, currency: 'TON' } },
  { color: 'from-purple-500 to-purple-600', prize: { amount: 1, currency: 'SOL' } },
  { color: 'from-yellow-500 to-yellow-600', prize: { amount: 0.00002, currency: 'BTC' } },
  { color: 'from-green-500 to-green-600', prize: { amount: 10, currency: 'USDT' } },
  { color: 'from-blue-500 to-blue-600', prize: { amount: 4, currency: 'TON' } },
  { color: 'from-purple-500 to-purple-600', prize: { amount: 2, currency: 'SOL' } },
];

export function GameWheel({ 
  onSpin, 
  isSpinning, 
  lastWin,
  spinsLeft 
}: { 
  onSpin: () => void;
  isSpinning: boolean;
  lastWin: { amount: number; currency: string } | null;
  spinsLeft: number;
}) {
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSpinning && wheelRef.current) {
      const rotations = 5; // Number of full rotations
      const randomSegment = Math.floor(Math.random() * SEGMENTS.length);
      const segmentAngle = 360 / SEGMENTS.length;
      const targetAngle = -(rotations * 360 + (randomSegment * segmentAngle));
      
      wheelRef.current.style.transform = `rotate(${targetAngle}deg)`;
    } else if (!isSpinning && wheelRef.current) {
      const currentRotation = wheelRef.current.style.transform;
      wheelRef.current.style.transform = currentRotation || 'rotate(0deg)';
    }
  }, [isSpinning]);

  return (
    <div className="text-center">
      <div className="relative aspect-square max-w-[500px] mx-auto mb-8">
        {/* Wheel Container */}
        <div className="absolute inset-0 rounded-full border-8 border-yellow-500 overflow-hidden">
          {/* Spinning Wheel */}
          <div 
            ref={wheelRef}
            className="absolute inset-0 transition-transform duration-[3000ms] ease-out"
            style={{ transformOrigin: 'center' }}
          >
            {SEGMENTS.map((segment, index) => {
              const rotation = (index * (360 / SEGMENTS.length));
              return (
                <div
                  key={index}
                  className={`absolute inset-0 bg-gradient-to-r ${segment.color}`}
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0, ${50 + 50 * Math.cos((360 / SEGMENTS.length) * Math.PI / 180)}% ${50 - 50 * Math.sin((360 / SEGMENTS.length) * Math.PI / 180)}%)`,
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <div 
                    className="absolute top-[15%] left-1/2 -translate-x-1/2 text-white font-bold text-sm whitespace-nowrap"
                    style={{ transform: `rotate(${90 + rotation}deg)` }}
                  >
                    <span className="bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                      {segment.prize.amount} {segment.prize.currency}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Display */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
            {lastWin ? (
              <div className="text-center">
                <p className="text-lg font-bold text-yellow-400">
                  +{lastWin.amount.toFixed(lastWin.currency === 'BTC' ? 8 : 2)}
                </p>
                <p className="text-sm text-yellow-400">{lastWin.currency}</p>
              </div>
            ) : (
              <p className="text-white font-bold">Spin!</p>
            )}
          </div>
        </div>

        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 z-20">
          <div className="w-4 h-8 bg-yellow-500 mx-auto clip-triangle shadow-lg"></div>
        </div>
      </div>

      <button
        onClick={onSpin}
        disabled={isSpinning || spinsLeft === 0}
        className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-white font-bold text-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
      >
        <span className="flex items-center justify-center">
          <RotateCw className={`w-5 h-5 mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
          {isSpinning ? 'Spinning...' : `Spin (${spinsLeft} left)`}
        </span>
      </button>
    </div>
  );
}