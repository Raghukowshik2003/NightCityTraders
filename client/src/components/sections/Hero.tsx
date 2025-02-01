import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardDisplay from "@/components/DashboardDisplay";
import { FaDiscord } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${
          'https://images.unsplash.com/photo-1551771685-c367c9127a03'
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500">
              The Ultimate Crypto Trading Community
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Join a thriving network of top traders and newcomers, and level up your trading game.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg
                          shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]
                          transition-all duration-300"
                onClick={() => window.open('https://discord.gg/nightcityalpha', '_blank')}
              >
                <FaDiscord className="mr-2 h-5 w-5" />
                Join the Discord
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <DashboardDisplay />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
