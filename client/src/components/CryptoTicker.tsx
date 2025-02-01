import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const memecoins = [
  { symbol: "PEPE", price: "0.00000123", change: "+420%" },
  { symbol: "BONK", price: "0.00000789", change: "+69%" },
  { symbol: "WIF", price: "0.456", change: "+169%" },
  { symbol: "FLOKI", price: "0.000345", change: "+89%" },
];

export default function CryptoTicker() {
  const [prices, setPrices] = useState(memecoins);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(coin => ({
        ...coin,
        price: (parseFloat(coin.price) * (1 + (Math.random() * 0.1 - 0.05))).toFixed(8),
        change: `${(Math.random() * 500).toFixed(1)}%`
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-purple-500/20">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-purple-400 font-bold">Today's Top Degen Picks</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {prices.map((coin, index) => (
          <motion.div
            key={coin.symbol}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 p-3 rounded-lg hover:bg-purple-900/20 transition-all duration-300
                     border border-purple-500/10 hover:border-purple-500/30"
          >
            <div className="flex flex-col">
              <span className="text-white font-bold mb-1">{coin.symbol}</span>
              <motion.span 
                key={coin.price}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-gray-300 font-mono"
              >
                ${coin.price}
              </motion.span>
              <span className={coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {coin.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}