import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, Clock, Star, AlertCircle, MessageCircle, Bell } from "lucide-react";

const tradingCalls = [
  {
    id: "CRM-51",
    title: "Store markup as ProseMirror JSON instead of HTML",
    status: "2/3",
    time: "24 hrs",
    date: "12 Mar",
    priority: "MVP"
  },
  {
    id: "CRM-60",
    title: "Feature Request: Document analysis",
    status: "1/3",
    time: "14 hrs",
    date: "12 Mar",
    priority: "PreMVP"
  },
  {
    id: "CRM-94",
    title: "Improve inbox grouping",
    status: "1/3",
    time: "12 hrs",
    date: "13 Mar"
  }
];

export default function DashboardDisplay() {
  const [activeTab, setActiveTab] = useState("progress");

  return (
    <motion.div 
      className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Circulating Neon Border Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_90deg,transparent_180deg)]
                      animate-spin-slow" style={{ animationDuration: '8s' }} />
      </motion.div>

      {/* Main Content */}
      <div className="relative bg-[#0A0A0A]/90 backdrop-blur-md p-6 border border-blue-500/30">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <motion.button
              className={`px-4 py-2 rounded-md ${
                activeTab === "progress" 
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/50" 
                : "text-gray-400 hover:text-blue-400 transition-colors"
              }`}
              onClick={() => setActiveTab("progress")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              IN PROGRESS
              <span className="ml-2 text-xs bg-blue-500/30 px-2 py-0.5 rounded-full">6</span>
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-md ${
                activeTab === "review" 
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/50" 
                : "text-gray-400 hover:text-blue-400 transition-colors"
              }`}
              onClick={() => setActiveTab("review")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              UNDER REVIEW
              <span className="ml-2 text-xs bg-blue-500/30 px-2 py-0.5 rounded-full">3</span>
            </motion.button>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors relative"
              whileHover={{ scale: 1.1 }}
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
            </motion.button>
            <motion.button
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <MessageCircle size={20} />
            </motion.button>
          </div>
        </div>

        {/* Trading Calls List */}
        <div className="space-y-3">
          {tradingCalls.map((call, index) => (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center justify-between p-4 rounded-lg
                       bg-black/40 border border-blue-500/10 hover:border-blue-500/30
                       transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono text-gray-500">{call.id}</span>
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-200 group-hover:text-blue-400 transition-colors">
                    {call.title}
                  </span>
                  <div className="flex items-center space-x-2 mt-1">
                    {call.status && (
                      <span className="text-xs text-gray-500">{call.status}</span>
                    )}
                    {call.priority && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {call.priority}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-400">{call.time}</span>
                  <span className="text-xs text-gray-500">{call.date}</span>
                </div>
                <motion.div 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center
                           hover:bg-blue-500/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <AlertCircle size={16} className="text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
    </motion.div>
  );
}