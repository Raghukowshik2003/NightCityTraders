import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import IdeaNC from "@/components/sections/IdeaNC";
import Pricing from "@/components/sections/Pricing";
import AboutMe from "@/components/sections/AboutMe";
import styles from "@/styles/Home.module.css"; // Import styles

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Match animation time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {isLoading && <div className={styles.loader}></div>}
      
      <div className={`${styles.content} ${!isLoading ? styles.show : ""}`}>
        <Navbar />
        <section id="home"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="aboutserver"><IdeaNC /></section>
        <section id="pricing"><Pricing /></section>
        <section id="aboutme"><AboutMe /></section>
      </div>
    </div>
  );
}
