export async function getCampaigns() {
  try {
    const res = await fetch("http://localhost:3001/campaigns");

    if (!res.ok) {
      console.error("Failed to fetch campaigns:", res.status);
      return [];
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    return [];
  }
}
