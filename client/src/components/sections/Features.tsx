import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wallet, Twitter, Bot, Wrench, BookOpen, Mic } from "lucide-react";

const features = [
  {
    icon: <Wallet className="h-8 w-8 text-green-500" />,
    title: "Wallet Tracker",
    description: "Track top traders, influencers, and whale wallets in real-time."
  },
  {
    icon: <Twitter className="h-8 w-8 text-blue-500" />,
    title: "Tweet Tracker",
    description: "Instantly view tweets from influential crypto accounts."
  },
  {
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    title: "Alpha Bot",
    description: "A specialized Discord bot that detects coins with massive potential."
  },
  {
    icon: <Wrench className="h-8 w-8 text-orange-500" />,
    title: "Valuable Extensions",
    description: "Includes Phocaine, Domain Age Checker, and other premium tools to gain an edge in trading."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-pink-500" />,
    title: "Trading Lessons",
    description: "Beginner-friendly lessons to help new traders improve their skills."
  },
  {
    icon: <Mic className="h-8 w-8 text-red-500" />,
    title: "24/7 Active VC Community",
    description: "Join live voice chats where top traders discuss market trends, new projects, and launches."
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Data Rain Animation */}
      <video
        src="/gradientbg.mp4" // Replace with the actual path to your video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="data-stream-overlay opacity-30" />
      </div>

      <div className="container mx-auto px-44 text-center">
        {/* Section Heading */}
        <h2 className="relative text-6xl font-extrabold text-white mb-16 z-10">
          Core Features
        </h2>


        <div className="grid md:grid-cols-3 gap-x-1 gap-y-20 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}  // Set delay to 0 or adjust based on preference
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Card className="group relative h-[350px] p-10 bg-black/40 backdrop-blur-md border-2 border-transparent
                hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-500
                overflow-hidden before:absolute before:inset-0 before:border-2 before:border-silver-500
                before:animate-neon-border">
              
          
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="p-6 rounded-full bg-black/50 group-hover:scale-110 transition-transform
                              shadow-[0_0_15px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white-400 group-hover:text-gray-300 transition-colors">
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