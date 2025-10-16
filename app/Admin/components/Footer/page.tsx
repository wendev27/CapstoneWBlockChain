"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Construction, Clock } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-md"
      >
        {/* Icon / Illustration */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6 flex justify-center"
        >
          <div className="bg-blue-100 text-blue-700 p-6 rounded-full shadow-inner">
            <Construction size={48} />
          </div>
        </motion.div>

        {/* Text */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Feature in Progress
        </h1>
        <p className="text-gray-500 mb-6">
          {`We're`} currently working hard to bring this feature to life. Please
          check back again soon!
        </p>

        {/* Timer / Progress */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="h-1.5 bg-blue-200 rounded-full overflow-hidden mb-6"
        >
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h-full bg-blue-500 rounded-full"
          />
        </motion.div>

        {/* Go Back Button */}
        <Link href="/Admin/Dashboard">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2">
            <Clock size={16} className="mr-2" />
            Go Back
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
