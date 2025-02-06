import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import IdeaNC from "@/components/sections/IdeaNC";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <IdeaNC /> {/* Add the book section here */}
    </motion.div>
  );
}