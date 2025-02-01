import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardDisplay from "@/components/DashboardDisplay";
import { FaDiscord } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import OmnitrixInterface from "@/components/OmnitrixInterface";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-4">
        <motion.div 
          className="min-h-screen bg-background text-foreground overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
                  NightCityAlpha Trading Hub
                </motion.h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                  Access powerful trading tools through our Omnitrix-inspired interface
                </p>
              </motion.div>

              {/* Add Omnitrix Interface */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16"
              >
                <OmnitrixInterface />
              </motion.div>

              <DashboardDisplay />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}