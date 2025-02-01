import { motion } from "framer-motion";
import { MessageCircle, Mic, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  {
    author: "Alpha Hunter",
    content: "🚀 MEMECOIN ALERT: $PEPE looking bullish on the 4H",
    time: "Just now",
    avatar: "AH"
  },
  {
    author: "Signal Master",
    content: "⚡ ENTRY ZONE: 0.00000789 - 0.00000820",
    time: "2m ago",
    avatar: "SM"
  },
  {
    author: "Degen Trader",
    content: "Target hit! +150% on that last call 🎯",
    time: "5m ago",
    avatar: "DT"
  }
];

const voiceChannels = [
  { name: "🎯 Live Trading", users: 12 },
  { name: "📊 Market Analysis", users: 8 },
  { name: "💡 Strategy Room", users: 5 }
];

export default function DiscordSection() {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev.length >= messages.length) return prev;
        return [...prev, messages[prev.length]];
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Work Together. Build Wealth.
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Join our thriving community of traders in real-time discussions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Discord Chat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 rounded-lg backdrop-blur-sm border border-purple-500/20 p-4"
          >
            <div className="flex items-center mb-4 border-b border-purple-500/20 pb-2">
              <MessageCircle className="w-5 h-5 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold text-white"># alpha-signals</h3>
            </div>

            <div className="space-y-4">
              {visibleMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold">
                    {message.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-purple-400">{message.author}</span>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                    <p className="text-gray-300">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Voice Channels */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 rounded-lg backdrop-blur-sm border border-purple-500/20 p-4"
          >
            <div className="flex items-center mb-4 border-b border-purple-500/20 pb-2">
              <Volume2 className="w-5 h-5 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold text-white">Voice Channels</h3>
            </div>

            <div className="space-y-4">
              {voiceChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-500/10
                           border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-green-500"
                    >
                      <Mic className="w-4 h-4" />
                    </motion.div>
                    <span className="text-gray-300">{channel.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{channel.users} users</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
