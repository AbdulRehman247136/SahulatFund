"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { CardItem } from "@/components/CardItem";
import Nav from "@/components/Nav";

const categories = [
  "All",
  "Medical Emergency",
  "Surgery",
  "Cancer Treatment",
  "Accident Recovery",
  "Heart Disease",
  "Education",
  "Other"
];

const quickFilters = ["All", "Urgent", "Verified", "Almost Funded", "New"];

export default function Campaigns() {
  const [campaignsData, setCampaignsData] = useState([]);

  // 🔥 DIRECT API CALL HERE
  useEffect(() => {
    async function loadCampaigns() {
      try {
        const res = await fetch("http://localhost:3001/campaigns");

        if (!res.ok) {
          console.error("Failed to fetch campaigns:", res.status);
          return;
        }

        const data = await res.json();
        setCampaignsData(data);
      } catch (err) {
        console.error("Error loading campaigns:", err);
      }
    }

    loadCampaigns();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedQuickFilter, setSelectedQuickFilter] = useState("All");

  const filteredCampaigns = useMemo(() => {
    let filtered = campaignsData;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title?.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.category?.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((c) => c.category === selectedCategory);
    }

    if (selectedQuickFilter === "Urgent") {
      filtered = filtered.filter((c) => c.daysLeft <= 10);
    } else if (selectedQuickFilter === "Almost Funded") {
      filtered = filtered.filter((c) => c.raised / c.goal >= 0.8);
    } else if (selectedQuickFilter === "New") {
      filtered = [...filtered].sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedQuickFilter, campaignsData]);

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">All Campaigns</h1>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-xl"
              />
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Showing <b>{filteredCampaigns.length}</b> campaigns
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((c) => (
              <CardItem key={c.id} {...c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
