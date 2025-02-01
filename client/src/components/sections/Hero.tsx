import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardDisplay from "@/components/DashboardDisplay";
import { FaDiscord } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Animated Data Stream Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="rain-animation" />
      </div>

      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 cyberpunk-gradient-text glitch-text"
              whileHover={{ scale: 1.02 }}
            >
              The Ultimate Memecoin Trading Community
            </motion.h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Join a thriving network of top traders and newcomers, and level up your memecoin game.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg
                          shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]
                          transition-all duration-300 relative overflow-hidden group"
                onClick={() => window.open('https://discord.gg/nightcityalpha', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                <FaDiscord className="mr-2 h-5 w-5" />
                Join the Discord
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl relative"
          >
            {/* Data Stream Overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent" />
              <div className="data-stream-overlay" />
            </div>

            <DashboardDisplay />
          </motion.div>
        </div>
      </div>

      {/* Cyberpunk City Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}