import React from 'react';
import { Bitcoin, Coins } from 'lucide-react';

export function Wallet({ 
  balance 
}: { 
  balance: {
    btc: number;
    usdt: number;
    ton: number;
    sol: number;
  }
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Wallet</h2>
        <Coins className="w-5 h-5 text-yellow-500" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bitcoin className="w-5 h-5 text-yellow-500 mr-2" />
            <span>BTC</span>
          </div>
          <span className="font-mono">{balance.btc.toFixed(8)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-5 h-5 text-green-500 mr-2">$</span>
            <span>USDT</span>
          </div>
          <span className="font-mono">{balance.usdt.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-5 h-5 text-blue-500 mr-2">T</span>
            <span>TON</span>
          </div>
          <span className="font-mono">{balance.ton.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-5 h-5 text-purple-500 mr-2">S</span>
            <span>SOL</span>
          </div>
          <span className="font-mono">{balance.sol.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}