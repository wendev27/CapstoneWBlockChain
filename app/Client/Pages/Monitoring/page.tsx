"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Area A", water: 1.2 },
  { name: "Area B", water: 2.4 },
  { name: "Area C", water: 3.1 },
  { name: "Area D", water: 1.9 },
];

export default function MonitoringPage() {
  return (
    <main className="min-h-screen flex flex-col bg-blue-50">
      <section className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-blue-600 mb-2"
        >
          Flood Monitoring Dashboard
        </motion.h1>
        <p className="text-gray-600 mb-8">
          Real-time overview of flood-affected areas and water level changes.
        </p>

        {/* --- Statistic Cards --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-gray-500 text-sm">Current Alerts</h3>
              <p className="text-2xl font-bold text-red-500 mt-2">5 Active</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-gray-500 text-sm">Affected Areas</h3>
              <p className="text-2xl font-bold text-orange-500 mt-2">12</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-gray-500 text-sm">Evacuees</h3>
              <p className="text-2xl font-bold text-blue-500 mt-2">2,340</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-gray-500 text-sm">Relief Centers</h3>
              <p className="text-2xl font-bold text-green-500 mt-2">8 Active</p>
            </CardContent>
          </Card>
        </div>

        {/* --- Chart --- */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Water Level per Area (in meters)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="water"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
}
