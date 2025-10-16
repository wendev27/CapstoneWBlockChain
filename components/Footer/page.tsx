"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Logo / Brand */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl font-semibold text-blue-400 mb-4 md:mb-0"
        >
          SmartFlood <span className="text-white">Relief</span>
        </motion.h2>

        {/* Center - Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex space-x-6 text-sm"
        >
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link
            href="/Pages/About"
            className="hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/Pages/Donate"
            className="hover:text-blue-400 transition-colors"
          >
            Donate
          </Link>
          <Link
            href="/Pages/Monitoring"
            className="hover:text-blue-400 transition-colors"
          >
            Monitoring
          </Link>
        </motion.div>

        {/* Right side - Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm mt-4 md:mt-0"
        >
          &copy; {new Date().getFullYear()} SmartFlood Relief. All rights
          reserved.
        </motion.p>
      </div>
      {/* 🧭 Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SmartFlood AI. All rights
            reserved.
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </footer>
  );
}
