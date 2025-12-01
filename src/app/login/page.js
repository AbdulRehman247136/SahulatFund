"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
    console.log("Client ID:", process.env.GOOGLE_CLIENT_ID);
console.log("Client Secret:", process.env.GOOGLE_CLIENT_SECRET);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login with Google</h1>
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
