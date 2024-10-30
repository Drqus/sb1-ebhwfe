import { useState, useCallback } from 'react';

export function useGameState() {
  const [balance, setBalance] = useState({
    btc: 0.00000123,
    usdt: 0.50,
    ton: 1.25,
    sol: 0.75
  });

  const [spins, setSpins] = useState(5);
  const [level, setLevel] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWin, setLastWin] = useState<{ amount: number; currency: string } | null>(null);
  const [multiplier, setMultiplier] = useState(1);

  const handleSpin = useCallback(() => {
    if (spins === 0 || isSpinning) return;

    setIsSpinning(true);
    setSpins(prev => prev - 1);

    // Simulate spin result
    setTimeout(() => {
      const currencies = ['BTC', 'USDT', 'TON', 'SOL'];
      const randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];
      const randomAmount = Math.random() * (randomCurrency === 'BTC' ? 0.0001 : 1);

      setLastWin({
        amount: randomAmount,
        currency: randomCurrency
      });

      setBalance(prev => ({
        ...prev,
        [randomCurrency.toLowerCase()]: prev[randomCurrency.toLowerCase() as keyof typeof prev] + randomAmount
      }));

      setIsSpinning(false);
    }, 3000);
  }, [spins, isSpinning]);

  return {
    balance,
    spins,
    level,
    handleSpin,
    isSpinning,
    lastWin,
    multiplier
  };
}