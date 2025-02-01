import { motion } from "framer-motion";

const cryptoData = [
  { symbol: "BTC", price: "45,230.50", change: "+2.5%" },
  { symbol: "ETH", price: "2,890.75", change: "+1.8%" },
  { symbol: "SOL", price: "98.45", change: "+4.2%" },
  { symbol: "DOT", price: "15.30", change: "-0.5%" },
];

export default function CryptoTicker() {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm p-2 rounded-lg">
      <div className="flex space-x-4 overflow-hidden">
        {cryptoData.map((crypto, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-2"
          >
            <span className="text-white font-bold">{crypto.symbol}</span>
            <span className="text-gray-300">${crypto.price}</span>
            <span className={crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
              {crypto.change}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
