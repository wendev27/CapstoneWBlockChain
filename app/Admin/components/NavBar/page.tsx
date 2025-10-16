"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/Client/Auth/Login");
  };

  return (
    <main className="flex flex-col bg-gradient-to-br from-blue-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left Section */}
          <Link href="/Admin">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-700">
                SmartFlood Admin
              </h1>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/Admin/Pages/Dashboard"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/Admin/Pages/Users"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Users
            </Link>
            <Link
              href="/Admin/Pages/Donations"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Donations
            </Link>
            <Link
              href="/Admin/Pages/Barangays"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Barangays
            </Link>
            <Link
              href="/Admin/Pages/Logs"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Logs
            </Link>
            <Button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-blue-100 px-6 py-4 space-y-4"
          >
            <Link
              href="/Admin/Pages/Dashboard"
              className="block text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/Admin/Pages/Users"
              className="block text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Users
            </Link>
            <Link
              href="/Admin/Pages/Donations"
              className="block text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Donations
            </Link>
            <Link
              href="/Admin/Pages/Barangays"
              className="block text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Barangays
            </Link>
            <Link
              href="/Admin/Pages/Logs"
              className="block text-gray-700 hover:text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Logs
            </Link>

            <Button
              onClick={handleLogout}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </motion.div>
        )}
      </nav>
    </main>
  );
}
