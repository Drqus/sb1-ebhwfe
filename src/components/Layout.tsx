import React from 'react';
import { Bitcoin, Wallet2 } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Bitcoin className="w-8 h-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-white">CryptoSpin</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">
                <Wallet2 className="w-4 h-4 mr-2" />
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}