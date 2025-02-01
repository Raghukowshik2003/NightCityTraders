import { motion } from "framer-motion";
import CryptoTicker from "./CryptoTicker";

export default function DashboardDisplay() {
  return (
    <motion.div 
      className="relative rounded-lg overflow-hidden bg-black/20 backdrop-blur-md p-6 border border-purple-500/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <CryptoTicker />
        
        {/* Trading Signals */}
        <div className="bg-black/30 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Latest Signals</h3>
          <div className="space-y-2">
            {[
              { pair: "BTC/USD", signal: "LONG", entry: "44,500" },
              { pair: "ETH/USD", signal: "SHORT", entry: "2,900" }
            ].map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex justify-between items-center bg-black/20 p-2 rounded"
              >
                <span className="text-white">{signal.pair}</span>
                <span className={`font-bold ${
                  signal.signal === "LONG" ? "text-green-500" : "text-red-500"
                }`}>
                  {signal.signal} @ {signal.entry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-black/30 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Discord Activity</h3>
          <div className="space-y-2">
            {[
              "New member joined the community",
              "Trading workshop starting in 1 hour",
              "Market analysis posted in #signals"
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-300 text-sm bg-black/20 p-2 rounded"
              >
                {activity}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Glowing Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
    </motion.div>
  );
}
