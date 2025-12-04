"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Globe } from "lucide-react";
import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900">
              About <span className="bg-gradient-to-br from-blue-500 to-blue-400 bg-clip-text text-transparent">Sahulat Connect</span>
            </h1>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
              A trusted platform helping families in medical and emergency crises
              receive support quickly, transparently, and securely.
            </p>
          </motion.div>

          {/* MISSION SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/mission.jpg"
              className="rounded-3xl shadow-md w-full"
              alt="Mission"
            />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We aim to make fundraising transparent, fast, and accessible for every
                Pakistani in need — especially patients facing life-threatening medical
                emergencies. With advanced verification and secure payment options,
                Sahulat Connect ensures every rupee reaches those who need it most.
              </p>
            </motion.div>
          </div>

          {/* VALUES GRID */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: ShieldCheck,
                title: "Verified & Secure",
                desc: "Every campaign is checked through AI + human verification to ensure legitimacy."
              },
              {
                icon: Heart,
                title: "Impact Driven",
                desc: "98% of all donations directly reach patients and families."
              },
              {
                icon: Users,
                title: "Community First",
                desc: "We empower donors and beneficiaries through transparency and trust."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* GLOBAL VISION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-sm text-center"
          >
            <Globe className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              To become Pakistan’s most trusted and impactful fundraising platform,
              empowering millions to support each other in times of crisis.
            </p>
          </motion.div>

        </div>
      </div>
    </>
  );
}
