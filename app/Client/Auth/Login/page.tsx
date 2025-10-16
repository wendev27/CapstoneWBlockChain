"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Basic hardcoded login
    if (email === "root" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true"); // store session flag
      router.push("/Admin"); // redirect after login
    } else {
      setError("Invalid username or password");
    }
  };

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
            Log in to access your dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Username
              </label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="root"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin"
                required
                className="border-blue-200 focus-visible:ring-blue-400"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              Log In
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              href="/Client/Auth/SignUp"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign up
            </Link>
          </p>
        </Card>
      </motion.div>
    </main>
  );
}
