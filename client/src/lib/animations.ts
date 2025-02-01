import { TargetAndTransition, Variants } from "framer-motion";

export const fadeIn = (delay: number = 0): TargetAndTransition => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.5, delay }
});

export const fadeOut: TargetAndTransition = {
  opacity: 0,
  y: 20,
  transition: { duration: 0.5 }
};

export const cardHover: Variants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

export const glowPulse: Variants = {
  initial: {
    boxShadow: "0 0 10px rgba(147,51,234,0.3)"
  },
  animate: {
    boxShadow: "0 0 20px rgba(147,51,234,0.6)",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};
