"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-50 pt-24 pb-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg mb-8">
              Have questions? Need support? We're here to help you 7 days a week.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500 w-7 h-7" />
                <p className="text-gray-700">support@sahulatconnect.pk</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500 w-7 h-7" />
                <p className="text-gray-700">+92 300 1234567</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500 w-7 h-7" />
                <p className="text-gray-700">Karachi, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-3xl shadow-md space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">Send us a message</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300"
            />

            <textarea
              placeholder="Your Message..."
              rows={5}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300"
            ></textarea>

            <button className="w-full py-4 bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-xl font-semibold hover:opacity-90 transition">
              Submit
            </button>
          </motion.form>

        </div>
      </div>
    </>
  );
}
