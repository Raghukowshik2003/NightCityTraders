import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define the alien silhouettes for each tier
const aliens = {
  runners: (
    <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10C30 10 20 30 20 50C20 70 30 90 50 90C70 90 80 70 80 50C80 30 70 10 50 10Z" 
            fill="url(#runner-gradient)" className="hologram-pulse" />
      <defs>
        <linearGradient id="runner-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  ),
  seekers: (
    <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 80L50 20L80 80L50 60L20 80Z" 
            fill="url(#seeker-gradient)" className="hologram-pulse" />
      <defs>
        <linearGradient id="seeker-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  ),
  hunters: (
    <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50C10 30 30 10 50 10C70 10 90 30 90 50C90 70 70 90 50 90C30 90 10 70 10 50Z" 
            fill="url(#hunter-gradient)" className="hologram-pulse" />
      <defs>
        <linearGradient id="hunter-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>
    </svg>
  )
};

const tiers = [
  {
    id: 'runners',
    name: '@Runner',
    level: 'Basic Member',
    color: 'from-blue-500 to-cyan-500',
    features: ['Market Analysis Access', 'Community Chat', 'Basic Signals']
  },
  {
    id: 'seekers',
    name: '@Seeker',
    level: 'Advanced Trader',
    color: 'from-purple-500 to-pink-500',
    features: ['Premium Signals', 'Trading Workshops', 'Priority Support']
  },
  {
    id: 'hunters',
    name: '@Hunter',
    level: 'Elite Trader',
    color: 'from-green-500 to-emerald-500',
    features: ['VIP Trading Calls', '1-on-1 Mentoring', 'Expert Network Access']
  }
];

export default function UltimatrixMembership() {
  const [isActivated, setIsActivated] = useState(false);
  const [currentTier, setCurrentTier] = useState(-1);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    if (autoScrollEnabled && isActivated && currentTier >= 0) {
      const timer = setInterval(() => {
        setCurrentTier((prev) => (prev + 1) % tiers.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoScrollEnabled, isActivated, currentTier]);

  const handleActivate = () => {
    setIsActivated(true);
    setCurrentTier(0);
  };

  const handleTierChange = (direction: 'prev' | 'next') => {
    setAutoScrollEnabled(false);
    const newTier = direction === 'next' 
      ? (currentTier + 1) % tiers.length
      : (currentTier - 1 + tiers.length) % tiers.length;
    setCurrentTier(newTier);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="circuit-board-bg absolute inset-0 opacity-20" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
                   bg-gradient-to-r from-green-500 to-emerald-500"
        >
          Choose Your Power Level
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Alien Hologram */}
          {isActivated && currentTier >= 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full alien-hologram z-10"
            >
              {aliens[tiers[currentTier].id as keyof typeof aliens]}
            </motion.div>
          )}

          {/* Central Ultimatrix Button */}
          {!isActivated && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <Button
                onClick={handleActivate}
                className="w-32 h-32 rounded-full bg-black border-4 border-green-500
                         ultimatrix-glow hover:scale-110 transition-all duration-300"
              >
                <span className="text-green-500 font-bold">Click Here</span>
              </Button>
            </motion.div>
          )}

          {/* Tier Display */}
          {isActivated && (
            <div className="relative flex items-center justify-center min-h-[400px]">
              {/* Navigation Buttons */}
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-0 z-10"
                onClick={() => handleTierChange('prev')}
              >
                <ChevronLeft className="w-10 h-10 text-green-500 hover:text-green-400
                                    ultimatrix-glow rounded-full p-2" />
              </motion.button>

              {/* Current Tier Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTier}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-lg mx-auto"
                >
                  {currentTier >= 0 && (
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8
                                border border-green-500/30 hover:border-green-500/60
                                transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10
                                  to-transparent opacity-50 rounded-lg" />

                      <motion.div
                        className="relative z-10 text-center space-y-6 tier-float"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${tiers[currentTier].color}
                                    bg-clip-text text-transparent`}>
                          {tiers[currentTier].name}
                        </h3>
                        <p className="text-xl text-gray-400">{tiers[currentTier].level}</p>
                        <ul className="space-y-3">
                          {tiers[currentTier].features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="text-gray-300"
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>

                        {currentTier === tiers.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <Button
                              className="mt-6 bg-green-500 hover:bg-green-600 text-white
                                      ultimatrix-glow font-bold py-3 px-8"
                              onClick={() => window.location.href = '/signup'}
                            >
                              Join Now
                            </Button>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-0 z-10"
                onClick={() => handleTierChange('next')}
              >
                <ChevronRight className="w-10 h-10 text-green-500 hover:text-green-400
                                     ultimatrix-glow rounded-full p-2" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}