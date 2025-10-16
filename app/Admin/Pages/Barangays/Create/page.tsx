"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Upload, Save } from "lucide-react";

import PageLoader from "@/components/Loader/page";

export default function CreateBarangay() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState("true");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file.name }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Barangay Created:", form);
    alert("Barangay created successfully!");
    setForm({
      name: "",
      title: "",
      description: "",
      target: "",
      deadline: "",
      image: "",
    });
    setPreview(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl border border-blue-100"
      >
        <h1 className="text-2xl font-bold text-blue-700 mb-6">
          Create New Barangay
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Barangay Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Barangay Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Barangay San Isidro"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Clean Water Project"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the barangay or project..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
          </div>

          {/* Target & Deadline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Target Amount
              </label>
              <input
                type="number"
                name="target"
                value={form.target}
                onChange={handleChange}
                placeholder="e.g. 10000"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <div className="flex items-center space-x-3">
              <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Choose File</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {form.image && (
                <span className="text-gray-600 text-sm">{form.image}</span>
              )}
            </div>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-full h-64 object-cover rounded-lg border border-blue-100"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Barangay</span>
            </Button>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
