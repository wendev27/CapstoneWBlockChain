"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative min-h-svw flex flex-col  justify-center overflow-hidden bg-gradient-to-b from-blue-100 via-white to-blue-50 text-gray-800">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-cover bg-center blur-3xl"
      />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
          SmartFlood Relief
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Empowering communities through smart flood monitoring and relief
          management. Experience the next generation of disaster response
          technology.
        </p>

        <Link href="/Client">
          <Button className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            Explore →
          </Button>
        </Link>
      </motion.div>

      {/* Teaser / Features section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-12 w-full flex flex-col items-center"
      >
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
          What you can expect
        </p>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl">
          <div className="bg-white shadow-md rounded-xl p-5 w-64 text-center border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2">
              Real-Time Flood Updates
            </h3>
            <p className="text-sm text-gray-600">
              Get instant information on flood conditions powered by smart
              sensors.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-5 w-64 text-center border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2">
              Relief Resource Tracking
            </h3>
            <p className="text-sm text-gray-600">
              Monitor relief efforts, donations, and resource distribution
              efficiently.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-5 w-64 text-center border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2">
              Community Support
            </h3>
            <p className="text-sm text-gray-600">
              Connect with your local community to collaborate on disaster
              recovery.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
