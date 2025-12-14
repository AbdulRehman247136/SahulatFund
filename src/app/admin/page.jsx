// src/app/admin/page.jsx
"use client";

import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function AdminPanel() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/campaigns")
      .then((res) => res.json())
      .then((data) => {
        // Force it to be an array — no matter what backend sends
        const list = Array.isArray(data)
          ? data
          : data?.data || data?.campaigns || data?.results || [];
        setCampaigns(list);
        setLoading(false);
      })
      .catch(() => {
        alert("Can't connect to backend");
        setLoading(false);
      });
  }, []);

  const deleteCampaign = async (id) => {
    if (!confirm("Delete this campaign?")) return;
    await fetch(`http://localhost:3001/campaigns/${id}`, { method: "DELETE" });
    setCampaigns(campaigns.filter((c) => c._id !== id));
  };

  if (loading) {
    return (
      <>
        <Nav />
        <div className="p-10 text-center">Loading...</div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">All Campaigns</h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((camp) => (
              <div
                key={camp._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={`http://localhost:3001${camp.coverImage}`}
                  alt={camp.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = "/fallback.jpg")} // in case image missing
                />

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{camp.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                    {camp.story?.substring(0, 100)}...
                  </p>

                  <Button
                    variant="destructive"
                    size="sm"
                    className="w-full"
                    onClick={() => deleteCampaign(camp._id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {campaigns.length === 0 && (
            <p className="text-center text-xl text-gray-500 mt-20">
              No campaigns found
            </p>
          )}

          <div className="text-center mt-12">
            <Link href="/create-campaign">
              <Button className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white px-10 py-6 text-lg font-bold">
                + New Campaign
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}