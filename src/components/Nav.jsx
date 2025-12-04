"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-[100] top-0 left-0 w-full h-16 bg-white/60 backdrop-blur-md flex items-center justify-between px-6 md:px-20 shadow-md transition">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo9.png" alt="SahulatFund logo" className="h-10 md:h-12" />
        <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
          SahulatFund
        </p>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
        </Link>
        <Link href="/campaigns">
          <li className="hover:text-gray-900 cursor-pointer">Campaigns</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-gray-900 cursor-pointer">Contact</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-gray-900 cursor-pointer">About Us</li>
        </Link>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        <Button
          onClick={() => signIn("google")}
          variant="outline"
          className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
        >
          Login with Google
        </Button>

        <Link href="/create-campaign">
          <Button
            size="lg"
            className="text-md bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white hover:opacity-90 transition"
          >
            Start Campaign
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md shadow-md md:hidden flex flex-col gap-4 px-6 py-6 animate-slideDown">
          
          <Link href="/" onClick={() => setOpen(false)}>
            <p className="text-gray-700 text-lg">Home</p>
          </Link>

          <Link href="/campaigns" onClick={() => setOpen(false)}>
            <p className="text-gray-700 text-lg">Campaigns</p>
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <p className="text-gray-700 text-lg">Contact</p>
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            <p className="text-gray-700 text-lg">About Us</p>
          </Link>

          <Button
            onClick={() => {
              setOpen(false);
              signIn("google");
            }}
            variant="outline"
            className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition w-full"
          >
            Login with Google
          </Button>

          <Link href="/create-campaign" onClick={() => setOpen(false)}>
            <Button
              size="lg"
              className="text-md w-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white hover:opacity-90 transition"
            >
              Start Campaign
            </Button>
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Nav;
