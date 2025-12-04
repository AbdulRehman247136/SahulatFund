"use client";
import React from "react";
import campaignsData from "@/campaignsdata";
import { CardItem } from "./CardItem";
import { motion } from "framer-motion";

function Featured() {
  const featuredCampaigns = campaignsData.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col gap-6 items-center justify-center mt-16 px-6 md:px-16 lg:px-24"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-1 items-center justify-center text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent py-2">
          Featured Campaigns
        </h1>

        <p className="text-gray-500 max-w-2xl text-sm md:text-base">
          Every campaign is verified and every rupee goes directly to those who
          need it most.
        </p>
      </motion.header>

      {/* Cards Grid */}
      <motion.div
        className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {featuredCampaigns.map((campaign) => (
          <motion.div
            key={campaign.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <CardItem
              id={campaign.id}
              imageUrl={campaign.imageUrl}
              title={campaign.title}
              description={campaign.description}
              raised={campaign.raised}
              goal={campaign.goal}
              donors={campaign.donors}
              daysLeft={campaign.daysLeft}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Featured;
