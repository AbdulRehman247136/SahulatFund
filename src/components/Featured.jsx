// components/Featured.jsx
import React from "react";
import campaignsData from "@/campaignsdata"; // adjust path as needed
import { CardItem } from "./CardItem";

function Featured() {
  // Take only the first 3 campaigns for the featured section
  const featuredCampaigns = campaignsData.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center mt-16 px-10 md:px-20">
      {/* Header */}
      <header className="flex flex-col gap-1 items-center justify-center text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent py-2">
          Featured Campaigns
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Every campaign is verified and every rupee goes directly to those who need it most.
        </p>
      </header>

      {/* Dynamic Cards Grid */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {featuredCampaigns.map((campaign) => (
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
          />
        ))}
      </div>
    </div>
  );
}

export default Featured;