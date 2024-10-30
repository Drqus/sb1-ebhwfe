import React from 'react';
import { PlayCircle, Gift, Users } from 'lucide-react';

export function MiniGames() {
  return (
    <div className="space-y-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white cursor-pointer hover:bg-white/20 transition-colors">
        <div className="flex items-center">
          <PlayCircle className="w-8 h-8 text-green-500" />
          <div className="ml-3">
            <p className="font-bold">Daily Challenge</p>
            <p className="text-sm text-white/60">Complete for 2x spins</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white cursor-pointer hover:bg-white/20 transition-colors">
        <div className="flex items-center">
          <Gift className="w-8 h-8 text-pink-500" />
          <div className="ml-3">
            <p className="font-bold">Daily Bonus</p>
            <p className="text-sm text-white/60">Claim your free spins</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white cursor-pointer hover:bg-white/20 transition-colors">
        <div className="flex items-center">
          <Users className="w-8 h-8 text-blue-500" />
          <div className="ml-3">
            <p className="font-bold">Refer Friends</p>
            <p className="text-sm text-white/60">Earn 5 spins per referral</p>
          </div>
        </div>
      </div>
    </div>
  );
}