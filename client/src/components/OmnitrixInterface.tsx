import { motion } from "framer-motion";
import { useState } from "react";
import { Wallet, Signal, Bot, ChartBar, Shield, Zap } from "lucide-react";

const features = [
  { icon: <Wallet className="w-6 h-6" />, name: "Wallet Tracker" },
  { icon: <Signal className="w-6 h-6" />, name: "Signal Scanner" },
  { icon: <Bot className="w-6 h-6" />, name: "Trading Bot" },
  { icon: <ChartBar className="w-6 h-6" />, name: "Market Analysis" },
  { icon: <Shield className="w-6 h-6" />, name: "Risk Manager" },
  { icon: <Zap className="w-6 h-6" />, name: "Quick Trade" }
];

export default function OmnitrixInterface() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isActivated, setIsActivated] = useState(false);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {/* Main Omnitrix Circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-black/80 border-4 border-green-500
                   shadow-[0_0_30px_rgba(34,197,94,0.5)] overflow-hidden"
        animate={{
          boxShadow: isActivated 
            ? [
                "0 0 30px rgba(34,197,94,0.5)",
                "0 0 50px rgba(34,197,94,0.7)",
                "0 0 30px rgba(34,197,94,0.5)"
              ]
            : "0 0 30px rgba(34,197,94,0.5)"
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent" />
        
        {/* Center Button */}
        <motion.button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20
                     rounded-full bg-black border-4 border-green-500 z-20 cursor-pointer
                     shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsActivated(!isActivated)}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600
                         flex items-center justify-center text-white font-bold text-xl
                         shadow-inner">
            {isActivated ? "ON" : "OFF"}
          </div>
        </motion.button>

        {/* Feature Icons Circle */}
        <div className="absolute inset-0">
          {features.map((feature, index) => {
            const angle = (index * 60) * (Math.PI / 180);
            const radius = 100;
            const x = Math.cos(angle) * radius + 150;
            const y = Math.sin(angle) * radius + 150;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: x - 20,
                  top: y - 20,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isActivated ? 1 : 0,
                  scale: isActivated ? 1 : 0,
                  filter: `drop-shadow(0 0 ${activeFeature === index ? "10px" : "5px"} rgb(34 197 94))`
                }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                            ${activeFeature === index ? 'bg-green-500' : 'bg-black'}
                            border-2 border-green-500 text-white
                            hover:bg-green-600 transition-colors`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveFeature(index)}
                >
                  {feature.icon}
                </motion.button>
                
                {/* Feature Name */}
                <motion.div
                  className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                            text-green-500 text-sm font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeFeature === index ? 1 : 0 }}
                >
                  {feature.name}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Scanning Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-green-500/20 to-transparent"
          initial={{ y: 300 }}
          animate={isActivated ? {
            y: [-300, 300],
          } : { y: 300 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Outer Ring Glow */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-lg -z-10" />
    </div>
  );
}
