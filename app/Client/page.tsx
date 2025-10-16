"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import FloodHeroes from "@/public/PMS.jpg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 overflow-hidden">
      {/* 🌊 Navbar */}

      {/* 🤖 Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-14 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        {/* Left - Text */}
        <motion.div
          className="flex-1 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
            AI-Optimized Relief <br /> & Transparent Donations
          </h2>
          <p className="text-lg text-blue-700 max-w-xl mb-8">
            SmartFlood uses AI to prioritize flood-affected communities, IoT
            sensors for real-time monitoring, and blockchain for transparent
            relief fund auditing.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Explore Platform
          </Button>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="flex-1 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
            <Image
              src={FloodHeroes}
              alt="AI Flood Relief System"
              fill
              className="object-contain rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* 💡 Features Section */}
      <section className="py-20 bg-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Core Capabilities
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Driven Relief Allocation",
              desc: "Analyzes real-time data to distribute food, funds, and resources where they’re needed most.",
            },
            {
              title: "Real-Time Flood Monitoring",
              desc: "Leverages IoT sensors to track rainfall, water levels, and early warning alerts in real-time.",
            },
            {
              title: "Blockchain Transparency",
              desc: "Audits every donation using blockchain to ensure accountability and build donor trust.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition rounded-2xl border-blue-100">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌍 About Section */}
      <section className="py-20 bg-blue-50 text-center px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-4"
        >
          About SmartFlood
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 max-w-3xl mx-auto mb-8"
        >
          SmartFlood integrates artificial intelligence, Internet of Things
          (IoT), and blockchain technology to revolutionize disaster management.
          It not only predicts and monitors flood conditions but also ensures
          that relief distribution and donations are handled with full
          transparency and trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
