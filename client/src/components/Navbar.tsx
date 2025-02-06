import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.png"; // Adjust path to your logo image

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Buy", href: "/#buy" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm z-50 border-b border-purple-500/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logos" className="h-8" />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <motion.a whileHover={{ scale: 1.1 }} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  {item.label}
                </motion.a>
              </Link>
            ))}
          </div>

          {/* Join Discord Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-8"  // Added margin-left to move the button to the right
          >
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_10px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all duration-300"
              onClick={() => window.open("https://discord.gg/nightcityalpha", "_blank")}
            >
              <FaDiscord className="mr-2 h-4 w-4" />
              Join Discord
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
