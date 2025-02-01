import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChartBar, Signal, Trophy } from "lucide-react";

const features = [
  {
    icon: <ChartBar className="h-8 w-8 text-blue-500" />,
    title: "Daily Market Insights",
    description: "Get expert analysis and daily market updates to stay ahead of the curve"
  },
  {
    icon: <Signal className="h-8 w-8 text-purple-500" />,
    title: "Profitable Trade Calls",
    description: "Access verified trading signals with proven track records"
  },
  {
    icon: <Trophy className="h-8 w-8 text-orange-500" />,
    title: "Exclusive Tiered Access",
    description: "Unlock premium features as you progress through our ranking system"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
        >
          Why Join NightCityAlpha?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative h-full p-6 bg-black/50 backdrop-blur-sm border-purple-500/20
                             hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300
                             hover:scale-105 cursor-pointer group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gray-900 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
