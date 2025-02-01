import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const tiers = [
  {
    name: "@Runner",
    level: "Basic Member",
    color: "from-blue-500 to-cyan-500",
    features: ["Market Analysis Access", "Community Chat", "Basic Signals"]
  },
  {
    name: "@Seeker",
    level: "Advanced Trader",
    color: "from-purple-500 to-pink-500",
    features: ["Premium Signals", "Trading Workshops", "Priority Support"]
  },
  {
    name: "@Hunter",
    level: "Elite Trader",
    color: "from-orange-500 to-red-500",
    features: ["VIP Trading Calls", "1-on-1 Mentoring", "Expert Network Access"]
  }
];

export default function Membership() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
        >
          Tiered Membership System
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative h-full p-6 bg-black/50 backdrop-blur-sm border-purple-500/20
                             hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                    {tier.name}
                  </div>
                  <div className="text-lg text-gray-400">{tier.level}</div>
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
