import React, { useState } from "react";
import Logo from "@/assets/nightcity.jpg"; // Ensure this path is correct
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [isCornerHovered, setIsCornerHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
    setIsCornerHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCornerHovered(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About Server", href: "#aboutserver" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Me", href: "#aboutme" },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with rounded and glowing effect */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 rounded-full animate-pulse [animation-duration:3s] shadow-[0_0_15px_5px_rgba(255,102,0,0.8)]"
          />
        </div>

        {/* Navigation items and Discord button */}
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-semibold px-3 py-2 rounded-full border border-transparent hover:border-yellow-300"
            >
              {item.label}
            </a>
          ))}

          {/* Discord Button */}
          <button
            className="bg-white text-brown font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,102,0,0.8)] transition-all duration-300 relative overflow-hidden group flex items-center justify-center"
            style={{ padding: "10px 20px", fontSize: "16px" }} // Adjust padding and font size
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
          </button>
        </div>
      </div>
    </nav>
  );
}