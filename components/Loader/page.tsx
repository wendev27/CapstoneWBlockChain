"use client";

import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500); // 2.5s loader
    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50"
    >
      {/* Animated Drop Icon */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: [0, -10, 0],
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center"
      >
        <Droplets className="w-14 h-14 text-blue-600 drop-shadow-md" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xl sm:text-2xl font-semibold text-blue-700 tracking-wide"
      >
        SmartFlood Admin
      </motion.h1>

      {/* Loading bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="mt-6 h-1 w-2/3 bg-blue-300 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-blue-600 rounded-full"
        />
      </motion.div>

      {/* Wave animation (bottom) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-200 via-blue-100 to-transparent rounded-t-[50%]"
      ></motion.div>
    </motion.div>
  );
}
