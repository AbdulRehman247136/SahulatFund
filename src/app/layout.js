import "./globals.css";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import Providers from "../components/Providers";

// 👇 Your primary font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// 👇 Optional secondary fonts (keep or remove if not needed)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Donation & Crowdfunding Platform",
  description: "A platform built with Next.js and love 💚",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
