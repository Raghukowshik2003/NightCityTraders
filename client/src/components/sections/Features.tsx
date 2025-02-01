import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wallet, Twitter, Bot, Wrench, BookOpen, Mic } from "lucide-react";

const features = [
  {
    icon: <Wallet className="h-8 w-8 text-green-500" />,
    title: "Top Wallet Tracker",
    description: "Track top traders, influencers, and whale wallets in real-time. Stay ahead by monitoring the biggest moves in memecoins."
  },
  {
    icon: <Twitter className="h-8 w-8 text-blue-500" />,
    title: "Tweet Tracker",
    description: "Instantly view tweets from influential crypto accounts. Get early alerts on potential 100x coins before the market reacts."
  },
  {
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    title: "Alpha Bot",
    description: "A specialized Discord bot that detects coins with massive potential. Get early insights on the next memecoin explosion."
  },
  {
    icon: <Wrench className="h-8 w-8 text-orange-500" />,
    title: "Valuable Extensions",
    description: "Includes Phocaine, Domain Age Checker, and other premium tools to gain an edge in trading."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-pink-500" />,
    title: "Trading Lessons",
    description: "Beginner-friendly lessons to help new traders improve their skills. Master entry-exit strategies and risk management."
  },
  {
    icon: <Mic className="h-8 w-8 text-red-500" />,
    title: "24/7 Active VC Community",
    description: "Join live voice chats where top traders discuss market trends, new projects, and launches."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Data Rain Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="data-stream-overlay opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
        >
          Core Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="group relative h-full p-6 bg-black/40 backdrop-blur-md border-purple-500/20
                            hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-500
                            hover:border-purple-500/40 overflow-hidden">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />

                {/* Neon Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-black/50 group-hover:scale-110 transition-transform
                                shadow-[0_0_15px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}