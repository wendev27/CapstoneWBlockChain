"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Database, Settings } from "lucide-react";

export default function AdminLandingPage() {
  return (
    <main className=" bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Welcome Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-800 mb-3"
        >
          Welcome back, Admin 👋
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 max-w-md mb-10"
        >
          Manage flood relief donations, monitor active users, and oversee
          funding progress all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Card className="p-6 w-64 text-center shadow-md hover:shadow-lg transition">
            <BarChart3 className="mx-auto text-blue-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">Analytics</h3>
            <p className="text-sm text-gray-500 mb-3">
              Track donations, relief fund progress, and event performance.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              View
            </Button>
          </Card>

          <Card className="p-6 w-64 text-center shadow-md hover:shadow-lg transition">
            <Users className="mx-auto text-blue-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">
              User Management
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Manage volunteers, donors, and affected communities.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Manage
            </Button>
          </Card>

          <Card className="p-6 w-64 text-center shadow-md hover:shadow-lg transition">
            <Database className="mx-auto text-blue-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">Relief Records</h3>
            <p className="text-sm text-gray-500 mb-3">
              Access and update flood data and relief status.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Open
            </Button>
          </Card>

          <Card className="p-6 w-64 text-center shadow-md hover:shadow-lg transition">
            <Settings className="mx-auto text-blue-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-gray-700 mb-2">Settings</h3>
            <p className="text-sm text-gray-500 mb-3">
              Configure admin preferences and blockchain settings.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Configure
            </Button>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-500 text-center py-4 border-t mt-auto">
        © {new Date().getFullYear()} SmartFlood Relief Admin. All rights
        reserved.
      </footer>
    </main>
  );
}
