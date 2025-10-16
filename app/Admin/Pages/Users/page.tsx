"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Edit, Trash2, Eye } from "lucide-react";

export default function AdminUsersPage() {
  // Sample data
  const users = [
    {
      id: 1,
      name: "John Dela Cruz",
      email: "john.delacruz@example.com",
      role: "Resident",
      status: "Active",
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@example.com",
      role: "Donor",
      status: "Active",
    },
    {
      id: 3,
      name: "Barangay Admin - Zone 4",
      email: "zone4.admin@example.com",
      role: "Official",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Carlos Ramirez",
      email: "carlos.ramirez@example.com",
      role: "Resident",
      status: "Active",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              User Management
            </h1>
            <p className="text-gray-500">
              Manage registered users and system access
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="border border-blue-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Add User
            </Button>
          </div>
        </div>

        <Card className="p-6 shadow-md border-blue-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b hover:bg-blue-50/60 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {user.name}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{user.email}</td>

                    {/* Role badge */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === "Donor"
                            ? "bg-yellow-100 text-yellow-700"
                            : user.role === "Official"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    {/* Status badge */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Action buttons */}
                    <td className="py-3 px-4 text-right flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border"
                      >
                        <Eye size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-yellow-600 border"
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border"
                      >
                        <Trash2 size={16} />
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
