"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const floodData = [
  { date: "Oct 1", level: 3.1 },
  { date: "Oct 2", level: 3.5 },
  { date: "Oct 3", level: 4.2 },
  { date: "Oct 4", level: 4.8 },
  { date: "Oct 5", level: 5.3 },
  { date: "Oct 6", level: 6.1 },
];

const donationData = [
  { day: "Mon", amount: 120 },
  { day: "Tue", amount: 230 },
  { day: "Wed", amount: 310 },
  { day: "Thu", amount: 450 },
  { day: "Fri", amount: 380 },
  { day: "Sat", amount: 520 },
];

const transactions = [
  {
    id: "TXN-001",
    donor: "John D.",
    amount: "$50",
    status: "Verified",
    date: "Oct 10",
  },
  {
    id: "TXN-002",
    donor: "Sarah L.",
    amount: "$100",
    status: "Pending",
    date: "Oct 11",
  },
  {
    id: "TXN-003",
    donor: "Mark R.",
    amount: "$75",
    status: "Verified",
    date: "Oct 11",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-10 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-700 mb-10 text-center"
      >
        SmartFlood Dashboard
      </motion.h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { title: "Total Donations", value: "$12,540" },
          { title: "Active Flood Zones", value: "5" },
          { title: "Total Donors", value: "320" },
        ].map((stat, i) => (
          <Card
            key={i}
            className="p-6 text-center shadow-sm hover:shadow-lg transition rounded-2xl border-blue-100"
          >
            <h3 className="text-gray-600 text-sm mb-2">{stat.title}</h3>
            <p className="text-2xl font-semibold text-blue-700">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Flood Activity */}
        <Card className="p-6 shadow-sm rounded-2xl border-blue-100">
          <h2 className="text-lg font-semibold text-blue-700 mb-4">
            Flood Level Monitoring
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={floodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="level"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Donation Flow */}
        <Card className="p-6 shadow-sm rounded-2xl border-blue-100">
          <h2 className="text-lg font-semibold text-blue-700 mb-4">
            Daily Donation Volume
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={donationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Blockchain Transparency Table */}
      <Card className="p-6 shadow-sm rounded-2xl border-blue-100">
        <h2 className="text-lg font-semibold text-blue-700 mb-4">
          Recent Donations (Blockchain Ledger)
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-blue-100">
              <th className="py-2 px-3">Transaction ID</th>
              <th className="py-2 px-3">Donor</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-blue-50/30"
              >
                <td className="py-2 px-3">{txn.id}</td>
                <td className="py-2 px-3">{txn.donor}</td>
                <td className="py-2 px-3">{txn.amount}</td>
                <td
                  className={`py-2 px-3 font-medium ${
                    txn.status === "Verified"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {txn.status}
                </td>
                <td className="py-2 px-3">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </main>
  );
}
