import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardDisplay from "@/components/DashboardDisplay";
import { FaDiscord } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { useRef, useState } from "react";

export default function Hero() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isCornerHovered, setIsCornerHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Check if the cursor is near the corners
    const isNearCorner =
      (x < 10 && y < 10) || (x > 90 && y < 10) || (x < 10 && y > 90) || (x > 90 && y > 90);

    setCursorPos({ x, y });
    setIsCornerHovered(isNearCorner);
  };

  const handleMouseLeave = () => {
    // Move the light effect to the left or right when the cursor leaves the button
    setCursorPos({ x: isCornerHovered ? 0 : 100, y: 50 });
  };

  return (
    <section className="relative min-h-screen bg-black text-foreground overflow-hidden flex items-center justify-center">
      <Navbar />
      <div className="container mx-auto px-4">
        <motion.div
          className="min-h-screen bg-black text-foreground overflow-hidden"
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
                className="text-left mt-16"
              >
                <motion.div
                  className="overflow-hidden flex justify-center items-center"
                  style={{
                    width: "800px", // Container width
                    height: "150px", // Adjust container height to match video
                     // Optional: rounded corners for the border
                    transform: "translateX(100px)",
                    paddingTop: "120px", // Adjust top padding
                    paddingBottom: "70px", // Adjust bottom padding
                  }} 
                >
                  <motion.video
                    src="/hero_anim.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg shadow-lg"
                    style={{
                      width: "1000px", // Larger width to allow cropping
                      height: "450px",
                      transform: "translateX(-50px)", // Move it to the left by 50px
                      
                      objectFit: "cover", // Ensure video covers the container
                    }}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
                <p className="text-xl md:text-xl mb-8 text-gray-300 max-w-3xl text-center"
                   style={{transform: "translateX(130px)"}}>
                  Join a community of passionate traders and discover the power of memecoin trading. Whether you're a pro or a beginner, we've got you covered.
                </p>
                <motion.div>
                  <Button
                    ref={buttonRef}
                    size="lg"
                    className="bg-white text-brown font-bold  rounded-full hover:shadow-[0_0_20px_rgba(255,102,0,0.8)]
                              transition-all duration-300 relative overflow-hidden group"
                              style={{transform: "translateX(430px)"}}
                    onClick={() => window.open("https://discord.gg/nightcityalpha", "_blank")}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 opacity-30 group-hover:opacity-20 transition-opacity"
                      style={{
                        background: `radial-gradient(circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(255,102,0,0) 10%, rgba(255,102,0,0.8) 50%)`,
                      }}
                    />
                    {isCornerHovered && (
                      <span
                        className="absolute inset-0 bg-transparent"
                        style={{
                          boxShadow: `0 0 20px 10px radial-gradient(circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(255,102,0,1) 10%, rgba(255,102,0,0) 60%)`,
                        }}
                      />
                    )}
                    <FaDiscord className="mr-2 h-5 w-5" />
                    Join Discord
                  </Button>
                </motion.div>
                {/* Add a div for displaying a video */}
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24" 
                style={{ position: "relative", top: "10px" }}>
                 <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
                  <div className="relative bg-n-8 rounded-2xl overflow-hidden">
                    <video
                      src="/videooutline.mp4"
                      className="w-full h-full object-fill"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                 </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}