"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import campaignsData from "@/campaignsdata";
import { CardItem } from "@/components/CardItem";
import Nav from "@/components/Nav";

const categories = [
  "All",
  "Medical Emergency",
  "Surgery",
  "Cancer Treatment",
  "Accident Care",
  "Children",
  "Disaster Relief",
  "Water & Sanitation",
  "Education",
];

const quickFilters = ["All", "Urgent", "Verified", "Almost Funded", "New"];

export default function Campaigns() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedQuickFilter, setSelectedQuickFilter] = useState("All");

  const filteredCampaigns = useMemo(() => {
    let filtered = campaignsData;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.category.toLowerCase().includes(query)
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
  }, [searchQuery, selectedCategory, selectedQuickFilter]);

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center mb-12 animate-fadeUp">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              All Campaigns
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Browse all verified fundraising campaigns. Every rupee makes a difference.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="max-w-2xl mx-auto mb-10 animate-fadeUp delay-100">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-xl 
                focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all 
                shadow-sm group-hover:shadow-md"
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="mb-10 space-y-10">

            {/* CATEGORIES */}
            <div className="animate-fadeUp delay-200">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-800">Categories</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all
                      hover:scale-105 active:scale-95
                      ${
                        selectedCategory === cat
                          ? "bg-[var(--color-primary)] text-white shadow-md shadow-blue-200"
                          : "bg-white text-gray-700 border border-gray-300 hover:border-[var(--color-primary)]"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* QUICK FILTERS */}
            <div className="animate-fadeUp delay-300">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Filters</h3>
              <div className="flex flex-wrap gap-3">
                {quickFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedQuickFilter(filter)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all 
                      hover:scale-105 active:scale-95
                      ${
                        selectedQuickFilter === filter
                          ? "bg-[var(--color-primary)] text-white shadow-md shadow-blue-200"
                          : "bg-white text-gray-700 border border-gray-300 hover:border-[var(--color-primary)]"
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RESULTS COUNT */}
          <p className="text-gray-600 mb-8 animate-fadeUp delay-400">
            Showing{" "}
            <span className="font-bold text-[var(--color-primary)]">
              {filteredCampaigns.length}
            </span>{" "}
            campaign{filteredCampaigns.length !== 1 && "s"}
          </p>

          {/* CAMPAIGN CARDS */}
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className="animate-fadeUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardItem {...campaign} />
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredCampaigns.length === 0 && (
            <div className="text-center py-20 animate-fadeUp">
              <p className="text-2xl text-gray-500 mb-6">
                No campaigns found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedQuickFilter("All");
                }}
                className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full 
                font-medium hover:bg-[var(--color-primary)]/90 transition-all hover:scale-105"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
