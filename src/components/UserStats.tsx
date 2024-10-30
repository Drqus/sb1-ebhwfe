import React from 'react';
import { Trophy, Star, Zap } from 'lucide-react';

export function UserStats({ 
  level, 
  spins,
  multiplier 
}: { 
  level: number;
  spins: number;
  multiplier: number;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
      <div className="space-y-6">
        <div className="flex items-center">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <div className="ml-3">
            <p className="text-sm text-white/60">Level</p>
            <p className="text-xl font-bold">{level}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Star className="w-8 h-8 text-blue-500" />
          <div className="ml-3">
            <p className="text-sm text-white/60">Spins Available</p>
            <p className="text-xl font-bold">{spins}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Zap className="w-8 h-8 text-purple-500" />
          <div className="ml-3">
            <p className="text-sm text-white/60">Multiplier</p>
            <p className="text-xl font-bold">{multiplier}x</p>
          </div>
        </div>
      </div>
    </div>
  );
}