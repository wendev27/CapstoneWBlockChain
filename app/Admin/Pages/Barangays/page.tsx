"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

import Link from "next/link";

export default function BarangaysPage() {
  const [barangays, setBarangays] = useState([
    {
      id: 1,
      name: "Barangay San Isidro",
      city: "Quezon City",
      population: 1200,
    },
    { id: 2, name: "Barangay Mabini", city: "Pasig", population: 900 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBarangay, setNewBarangay] = useState({
    name: "",
    city: "",
    population: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBarangay({ ...newBarangay, [name]: value });
  };

  const handleAddBarangay = () => {
    if (!newBarangay.name || !newBarangay.city || !newBarangay.population)
      return;
    setBarangays([
      ...barangays,
      {
        id: barangays.length + 1,
        ...newBarangay,
        population: parseInt(newBarangay.population),
      },
    ]);
    setNewBarangay({ name: "", city: "", population: "" });
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-blue-100">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">
            Barangays Management
          </h1>
          <Button
            // onClick={() => setIsModalOpen(true)}
            onClick={() => {
              <Link href="/Admin/Pages/Barangays/create"></Link>;
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
          >
            <PlusCircle className="w-4 h-4 mr-2" /> Add Barangay
          </Button>
        </div>

        {/* Barangay List Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-blue-100 rounded-lg">
            <thead className="bg-blue-100 text-blue-700 font-semibold">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Barangay Name</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">Population</th>
              </tr>
            </thead>
            <tbody>
              {barangays.map((b) => (
                <tr
                  key={b.id}
                  className="border-b hover:bg-blue-50 transition-colors"
                >
                  <td className="py-3 px-4">{b.id}</td>
                  <td className="py-3 px-4">{b.name}</td>
                  <td className="py-3 px-4">{b.city}</td>
                  <td className="py-3 px-4">{b.population.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding Barangay */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white p-6 rounded-2xl shadow-lg w-96"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Add New Barangay
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Barangay Name"
                value={newBarangay.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={newBarangay.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                name="population"
                placeholder="Population"
                value={newBarangay.population}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="border-blue-600 text-blue-700 hover:bg-blue-50"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddBarangay}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Save
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
