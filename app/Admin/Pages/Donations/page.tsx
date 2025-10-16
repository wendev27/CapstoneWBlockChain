"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Eye, Download } from "lucide-react";

export default function DonationsPage() {
  const donations = [
    {
      id: 1,
      donor: "Maria Santos",
      email: "maria.santos@example.com",
      amount: 500,
      type: "Cash",
      date: "2025-10-10",
      status: "Completed",
    },
    {
      id: 2,
      donor: "John Dela Cruz",
      email: "john.delacruz@example.com",
      amount: 1200,
      type: "GCash",
      date: "2025-10-11",
      status: "Pending",
    },
    {
      id: 3,
      donor: "Barangay Zone 4",
      email: "zone4.admin@example.com",
      amount: 800,
      type: "Bank Transfer",
      date: "2025-10-09",
      status: "Completed",
    },
    {
      id: 4,
      donor: "Anonymous",
      email: "—",
      amount: 300,
      type: "Cash",
      date: "2025-10-12",
      status: "Cancelled",
    },
  ];

  const totalDonations = donations
    .filter((d) => d.status === "Completed")
    .reduce((sum, d) => sum + d.amount, 0);

  const pendingDonations = donations.filter(
    (d) => d.status === "Pending"
  ).length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Donations</h1>
            <p className="text-gray-500">
              Monitor and manage all received donations
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search donations..."
                className="border border-blue-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download size={16} className="mr-2" /> Export
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card className="p-5 border-blue-100 shadow-sm">
            <h2 className="text-sm text-gray-500">Total Donations</h2>
            <p className="text-2xl font-semibold text-blue-700 mt-1">
              ₱{totalDonations.toLocaleString()}
            </p>
          </Card>

          <Card className="p-5 border-blue-100 shadow-sm">
            <h2 className="text-sm text-gray-500">Pending Donations</h2>
            <p className="text-2xl font-semibold text-yellow-600 mt-1">
              {pendingDonations}
            </p>
          </Card>

          <Card className="p-5 border-blue-100 shadow-sm">
            <h2 className="text-sm text-gray-500">Total Records</h2>
            <p className="text-2xl font-semibold text-gray-800 mt-1">
              {donations.length}
            </p>
          </Card>
        </div>

        {/* Table Section */}
        <Card className="p-6 shadow-md border-blue-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Donor</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {donations.map((donation, index) => (
                  <motion.tr
                    key={donation.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b hover:bg-blue-50/60 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {donation.donor}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {donation.email}
                    </td>
                    <td className="py-3 px-4 font-semibold text-blue-700">
                      ₱{donation.amount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">{donation.type}</td>
                    <td className="py-3 px-4 text-gray-600">{donation.date}</td>

                    {/* Status Badge */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          donation.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : donation.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {donation.status}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border"
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </main>
  );
}
