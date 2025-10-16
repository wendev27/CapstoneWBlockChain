"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-blue-100">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
        >
          Support SmartFlood Relief
        </motion.h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-8">
          Every donation helps us deliver real-time flood response, emergency
          aid, and transparent financial allocation through blockchain auditing.
        </p>
      </section>

      {/* Donation Options */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { amount: 0, label: "Barangay 1" },
          { amount: 0, label: "Barangay 2" },
          { amount: 0, label: "Barangay 3" },
          // { amount: 0, label: "Fund IoT monitoring sensors in a community" },
          // { amount: 0, label: "Support full-scale flood relief operations" },
        ].map((donation, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <Card className="p-6 text-center shadow-md border-blue-100 rounded-2xl hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">
                ${donation.amount}
              </h3>
              <p className="text-gray-600 mb-6">{donation.label}</p>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Donate ${donation.amount}
              </Button>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Blockchain Transparency Section */}
      <section className="text-center py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          Blockchain Transparency
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          All donations are recorded on our blockchain ledger, ensuring full
          transparency and traceability of every transaction.
        </p>
        <Button variant="outline" size="lg">
          View Blockchain Ledger
        </Button>
      </section>
    </main>
  );
}
