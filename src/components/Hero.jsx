"use client";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row px-6 md:px-16 lg:px-24 py-10 overflow-hidden">

      {/* LEFT SIDE */}
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center rounded-full gap-2 py-1 px-4 w-fit bg-[#27ffa515] border border-[var(--color-primary)]"
          >
            <FaHeart className="text-md fill-[var(--color-primary)] animate-pulse" />
            <p className="text-sm text-[var(--color-primary)]">
              Every Rupee Counts. Everyone Matters.
            </p>
          </motion.div>

          {/* Titles */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
              Hope & Healing
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-gray-900">
              For Those Who Need It Most
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed max-w-xl"
          >
            SahulatFund connects generous hearts with people in urgent needs
            across Pakistan. Support verified campaigns, track your impact in
            real-time, and help save lives with trusted local payments.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/campaigns">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
                >
                  Browse Campaigns
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/create-campaign">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white hover:opacity-90 transition"
                >
                  Start Campaign
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="stats grid grid-cols-3 gap-3 md:gap-6 py-6 border border-gray-300 shadow-lg rounded-lg w-full md:w-[80%]"
          >
            {[
              { amount: "₨50M+", label: "Funds Raised", color: "#28BD78" },
              { amount: "12K+", label: "Lives Helped", color: "#EEBA38" },
              { amount: "98%", label: "Verified", color: "#2081DE" },
            ].map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.06 }}
                key={index}
                className="flex flex-col text-center"
              >
                <p className="text-2xl md:text-3xl font-bold" style={{ color: item.color }}>
                  {item.amount}
                </p>
                <h2 className="text-sm text-gray-600">{item.label}</h2>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex items-center justify-center mt-10 md:mt-0"
      >
        <img
          src="/bg4.png"
          alt=""
          className="w-full max-w-lg md:max-w-xl lg:max-w-3xl rounded-2xl shadow-xl object-cover"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
