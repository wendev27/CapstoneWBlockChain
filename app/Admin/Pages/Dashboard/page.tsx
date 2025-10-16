"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Users,
  HandHeart,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-500">
            Monitor and manage SmartFlood Relief operations
          </p>
        </div>
        <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
          Generate Report <ArrowUpRight size={16} />
        </Button>
      </div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        <Card className="p-6 shadow-md border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-700 font-medium">Active Donors</h3>
            <Users className="text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">1,248</p>
          <p className="text-sm text-green-600 mt-2">+8% from last week</p>
        </Card>

        <Card className="p-6 shadow-md border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-700 font-medium">Total Donations</h3>
            <HandHeart className="text-pink-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">₱512,430</p>
          <p className="text-sm text-green-600 mt-2">+₱25,100 this month</p>
        </Card>

        <Card className="p-6 shadow-md border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-700 font-medium">Ongoing Reliefs</h3>
            <AlertTriangle className="text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800">6</p>
          <p className="text-sm text-gray-500 mt-2">2 pending approvals</p>
        </Card>

        <Card className="p-6 shadow-md border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-700 font-medium">System Uptime</h3>
            <BarChart3 className="text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">99.98%</p>
          <p className="text-sm text-gray-500 mt-2">Stable</p>
        </Card>
      </motion.div>

      {/* Graph Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card className="p-6 shadow-md border-blue-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Donation Growth Overview
          </h3>
          <div className="bg-blue-100 h-56 rounded-md flex items-center justify-center text-blue-500 font-semibold">
            📊 Donation Chart Placeholder
          </div>
        </Card>

        <Card className="p-6 shadow-md border-blue-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex justify-between items-center">
              <span>💰 John donated ₱1,000</span>
              <span className="text-sm text-gray-400">2h ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>🚚 Relief goods sent to Cebu</span>
              <span className="text-sm text-gray-400">5h ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>🧾 Monthly report generated</span>
              <span className="text-sm text-gray-400">1d ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>🌊 Flood alert issued in Pampanga</span>
              <span className="text-sm text-gray-400">2d ago</span>
            </li>
          </ul>
        </Card>
      </motion.div>
    </main>
  );
}
