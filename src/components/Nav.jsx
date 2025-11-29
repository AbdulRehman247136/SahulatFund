"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed z-100 top-0 left-0 w-full h-16 bg-white/50 backdrop-blur-md flex items-center justify-between px-10 md:px-20 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
       
        <img src="/logo9.png" alt="SahulatFund logo" className="h-12" />
        <p className="text-2xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
          SahulatFund
        </p>
        
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/#">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        </Link>
        <Link href ="/campaigns">
        <li className="hover:text-gray-900 cursor-pointer">Campaigns</li>
        </Link>
        <li className="hover:text-gray-900 cursor-pointer">Contact</li>
        <li className="hover:text-gray-900 cursor-pointer">About Us</li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        {/* 🔹 Login Button (outline style) */}
        <Button
          size="lg"
          variant="outline"
          className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
        >
          Login
        </Button>

        {/* 🔹 Start Campaign (gradient primary button) */}
        <Link href="/create-campaign">
        <Button
          size="lg"
          className="text-md bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white hover:opacity-90 transition" 
        >
          Start Campaign
        </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
