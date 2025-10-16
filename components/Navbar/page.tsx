"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-600"
        >
          <Link href="/">
            SmartFlood <span className="text-gray-800">Relief</span>
          </Link>
        </motion.h1>

        {/* Desktop Nav Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex space-x-4"
        >
          <Link href="/Pages/About">
            <Button variant="outline">About</Button>
          </Link>
          <Link href="/Pages/Donate">
            <Button variant="outline">Donate</Button>
          </Link>
          <Link href="/Pages/Monitoring">
            <Button variant="outline">Monitoring</Button>
          </Link>
          <Link href="/Pages/DashBoard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <Link href="/Client/Auth/Login">
            <Button>Get Started</Button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center md:hidden space-y-3 pb-4 bg-white shadow-md"
          >
            <Link href="/Pages/About" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-40">
                About
              </Button>
            </Link>
            <Link href="/Pages/Donate" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-40">
                Donate
              </Button>
            </Link>
            <Link href="/Pages/Monitoring" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-40">
                Monitoring
              </Button>
            </Link>
            <Link href="/Pages/DashBoard" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-40">
                Dashboard
              </Button>
            </Link>
            <Link href="/Auth/Login" onClick={() => setIsOpen(false)}>
              <Button className="w-40">Get Started</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
