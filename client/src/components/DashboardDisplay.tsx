import { motion } from "framer-motion";
import CryptoTicker from "./CryptoTicker";
import { useEffect, useRef } from "react";


const signals = [
  { pair: "PEPE/USD", signal: "LONG", entry: "0.00000789", target: "0.0000150" },
  { pair: "BONK/USD", signal: "SHORT", entry: "0.00000234", target: "0.00000180" }
];

const activities = [
  "🚀 $WIF just pumped 150% in 24h",
  "💎 New memecoin signal posted in #alpha",
  "🎯 Last signal: +420% profit booked"
];

export default function DashboardDisplay() {
  return (
    <motion.div 
      className="relative rounded-lg overflow-hidden bg-black/20 backdrop-blur-md p-6 border border-purple-500/20
                hover:border-purple-500/40 transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <CryptoTicker />

        {/* Trading Signals */}
        <div className="bg-black/30 p-4 rounded-lg border border-blue-500/20">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Latest Alpha Calls</h3>
          <div className="space-y-2">
            {signals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-blue-500/10
                         hover:border-blue-500/30 transition-all duration-300"
              >
                <span className="text-white font-mono">{signal.pair}</span>
                <div className="flex flex-col items-end">
                  <span className={`font-bold ${
                    signal.signal === "LONG" ? "text-green-500" : "text-red-500"
                  }`}>
                    {signal.signal} @ {signal.entry}
                  </span>
                  <span className="text-sm text-gray-400">Target: {signal.target}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-black/30 p-4 rounded-lg border border-orange-500/20">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">Live Alpha Feed</h3>
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-300 text-sm bg-black/40 p-3 rounded-lg border border-orange-500/10
                         hover:border-orange-500/30 transition-all duration-300"
              >
                {activity}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Holographic Effects */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
    </motion.div>
  );
}