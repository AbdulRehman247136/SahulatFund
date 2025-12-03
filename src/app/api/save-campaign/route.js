import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    // Path to data folder and file
    const dataFolder = path.join(process.cwd(), "data");
    const filePath = path.join(dataFolder, "campaigns.json");

    // 1️⃣ Create data folder if it doesn't exist
    if (!fs.existsSync(dataFolder)) {
      fs.mkdirSync(dataFolder, { recursive: true });
      console.log("Created data folder:", dataFolder);
    }

    // 2️⃣ Create campaigns.json if it doesn't exist
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]", "utf-8");
      console.log("Created campaigns.json file:", filePath);
    }

    // 3️⃣ Read existing data
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const fileData = JSON.parse(jsonData);

    // 4️⃣ Append new data
    fileData.push(body);

    // 5️⃣ Write back to file
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
    console.log("Saved successfully!");

    return NextResponse.json(
      { message: "Campaign saved successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      { error: "Failed to save campaign" },
      { status: 500 }
      
    );
  }
}
