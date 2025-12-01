// app/campaigns/page.jsx or pages/Campaigns.jsx
"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import campaignsData from "@/campaignsdata"; // adjust path if needed
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

  // Filtered campaigns
  const filteredCampaigns = useMemo(() => {
    let filtered = campaignsData;

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.category.toLowerCase().includes(query)
      );
    }

    // Category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((c) => c.category === selectedCategory);
    }

    // Quick Filters
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

      <div className="min-h-screen bg-gray-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">All Campaigns</h1>
            <p className="text-xl text-gray-600 mt-4">
              Browse all verified fundraising campaigns. Every rupee makes a difference.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-10 space-y-8">
            {/* Categories */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-800">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-[var(--color-primary)] text-white shadow-md"
                        : "bg-white text-gray-600 border border-gray-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Quick Filters</h3>
              <div className="flex flex-wrap gap-3">
                {quickFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedQuickFilter(filter)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedQuickFilter === filter
                        ? "bg-[var(--color-primary)] text-white shadow-md"
                        : "bg-white text-gray-600 border border-gray-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-8">
            Showing{" "}
            <span className="font-bold text-[var(--color-primary)]">
              {filteredCampaigns.length}
            </span>{" "}
            campaign{filteredCampaigns.length !== 1 && "s"}
          </p>

          {/* Cards Grid - SAME AS FEATURED SECTION */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {filteredCampaigns.map((campaign) => (
              <CardItem
                key={campaign.id}
                id={campaign.id}
                imageUrl={campaign.imageUrl}
                title={campaign.title}
                description={campaign.description}
                raised={campaign.raised}
                goal={campaign.goal}
                donors={campaign.donors}
                daysLeft={campaign.daysLeft}
                category={campaign.category}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredCampaigns.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500 mb-6">
                No campaigns found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedQuickFilter("All");
                }}
                className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary)]/90 transition"
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