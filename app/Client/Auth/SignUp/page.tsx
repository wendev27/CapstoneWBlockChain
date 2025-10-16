"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 shadow-lg border-blue-100 rounded-2xl">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
            SmartFlood Relief
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Create your account to start contributing
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                required
                className="border-blue-200 focus-visible:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                required
                className="border-blue-200 focus-visible:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                placeholder="********"
                required
                className="border-blue-200 focus-visible:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="********"
                required
                className="border-blue-200 focus-visible:ring-blue-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/Client/Auth/Login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Log in
            </Link>
          </p>
        </Card>
      </motion.div>
    </main>
  );
}
