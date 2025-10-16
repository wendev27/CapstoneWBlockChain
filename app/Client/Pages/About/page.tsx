"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import FloodHeroes from "@/public/PMS.jpg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        {/* Left: Text */}
        <motion.div
          className="flex-1 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900 leading-tight">
            AI-Optimized Relief Allocation
            <br /> with Real-Time Monitoring
          </h2>
          <p className="text-lg text-blue-700 max-w-xl mb-8">
            SmartFlood integrates IoT sensors, AI analytics, and blockchain
            transparency to predict floods, allocate aid efficiently, and ensure
            every donation is verifiable and impactful.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Learn More
          </Button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[340px] h-[340px] md:w-[520px] md:h-[520px]">
            <Image
              src={FloodHeroes}
              alt="SmartFlood System Overview"
              fill
              className="object-contain rounded-2xl shadow-xl"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              title: "AI-Based Relief Optimization",
              desc: "Automatically analyze disaster data to prioritize resource distribution efficiently and fairly.",
            },
            {
              title: "Real-Time Flood Monitoring",
              desc: "Monitor rainfall, water levels, and alerts from IoT sensors across affected regions instantly.",
            },
            {
              title: "Blockchain Donation Tracking",
              desc: "Every donation is logged on-chain, ensuring transparency, traceability, and trust.",
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

      {/* About Section */}
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
          SmartFlood is a next-generation disaster management system that uses
          predictive AI, IoT-based flood detection, and blockchain-audited
          relief funding. It empowers authorities and NGOs to act faster,
          allocate smarter, and restore communities transparently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="outline" size="lg">
            Discover More
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SmartFlood. All rights reserved.
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 text-sm">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
