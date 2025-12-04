"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardItem } from "./CardItem";
import { Card } from "./ui/card";
import { Dock } from "lucide-react";

export default function Detail() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-16">
      {/* Image + Donation Box */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* IMAGE */}
        <motion.img
          src="bg.png"
          alt="Campaign Banner"
          className="rounded-3xl w-full lg:w-[750px] h-[250px] sm:h-[350px] lg:h-[430px] object-cover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* CARD ITEM (Progress + Raised) */}
        <motion.div
          className="w-full lg:w-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CardItem raised={850000} goal={1200000} />
        </motion.div>
      </div>

      {/* Category Tag */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="px-3 py-1 bg-blue-500 rounded-3xl text-[13px] text-white mt-6 hover:bg-blue-600 transition"
      >
        Medical Emergency
      </motion.button>

      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Help 8-Year-Old Fatima Fight Cancer
      </motion.h2>

      {/* Author + Location */}
      <motion.div
        className="text-gray-500 flex flex-wrap gap-3 text-sm mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <p>By Ahmed Khan</p>
        <p>• Lahore, Pakistan</p>
      </motion.div>

      {/* STORY SECTION */}
      <div className="border-t border-gray-300 mt-10 pt-6">
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Story
        </motion.h3>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Fatima is a bright, cheerful 8-year-old who loves drawing and playing
          with her younger brother. Three months ago, her world turned upside
          down when she was diagnosed with acute lymphoblastic leukemia.
          <br />
          <br />
          Her father works as a taxi driver, and her mother is a homemaker. The
          family has already spent their life savings on initial tests and
          consultations. The cost of chemotherapy, medications, and hospital
          care is far beyond what they can afford.
          <br />
          <br />
          Every day counts in Fatima's battle. Your contribution brings her one
          step closer to recovery. With proper treatment at Shaukat Khanum,
          Fatima has an excellent chance of full recovery.
          <br />
          <br />
          Please help us give Fatima the childhood she deserves.
        </motion.p>
      </div>

      {/* VERIFICATION SECTION */}
      <div className="border-t border-gray-300 mt-12 pt-6 mb-20">
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Verification & Documents
        </motion.h3>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-green-100 p-5 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold">This Campaign has been Verified</h2>
            <p className="text-sm text-gray-600 mb-4">
              All medical documents and identity proofs have been authenticated.
            </p>

            <div className="space-y-2">
              {[
                "Medical Reports - Shaukat Khanum Hospital",
                "Doctor's Treatment Plan",
                "Cost Estimate Letter",
                "Financial Income Certificate",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Dock className="text-green-700" />
                  <p className="text-sm text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
