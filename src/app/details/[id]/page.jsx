"use client";

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import campaignsData from '@/campaignsdata';
import { Separator } from '@radix-ui/react-select';
import { CheckCircle2, Clock, FileText, Heart, MessageCircle, Share2, ShieldCheck, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

export default async function CampaignPage({ params }) {
  const { id } = await params;

  const campaign = campaignsData.find((camp) => camp.id === Number(id));

  if (!campaign) {
    return (
      <div>
        <Nav />

        <main className="mt-32 px-5 md:px-20 text-center py-20">
          <h1 className="text-4xl font-bold text-red-600">Campaign Not Found</h1>
          <p className="mt-4 text-gray-600">Sorry, we couldn't find this campaign.</p>
        </main>

        <Footer />
      </div>
    );
  }

  const progress = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <div>
      <Nav />

      <main className="flex flex-col lg:flex-row gap-12 mt-24 px-5 md:px-20">

        {/* LEFT SIDE */}
        <motion.div
          className="left flex-4 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={campaign.imageUrl}
            alt=""
            className="w-full rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <span className="px-2 py-1 text-xs max-w-max text-white bg-blue-500 rounded-full">
            {campaign.category}
          </span>

          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {campaign.title}
          </motion.h1>

          <Separator />

          {/* Story */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[var(--color-primary)]" />
              <h2 className="text-xl md:text-2xl font-bold">The Story</h2>
            </div>

            <motion.div
              className="prose max-w-none text-gray-700 leading-relaxed space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {campaign.story.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>
          </div>

          <Separator />

          {/* Verification */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />
              <h2 className="text-xl md:text-2xl font-bold">Verification & Documents</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 bg-[var(--color-primary)]/5 border-[var(--color-primary)]/20">
                <div className="flex items-center gap-3 text-teal-700 font-medium mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  This campaign has been verified
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  All medical documents and identity proofs have been authenticated by our team
                </p>

                <div className="space-y-3">
                  {campaign.documents.map((doc, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <FileText className="w-5 h-5 text-green-700" />
                      <span>{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="right flex-2 lg:pl-6 w-full lg:w-[35%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">

            {/* Donation Card */}
            <Card className="shadow-md border rounded-lg">
              <div className="px-6 pt-4 pb-8">
                <div className="text-center mt-6">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-600">
                    Rs {campaign.raised.toLocaleString()}
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    of Rs {campaign.goal.toLocaleString()} goal
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-blue-700/20 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-emerald-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Donors & Days */}
                <div className="flex justify-between gap-2 mt-8 text-center">
                  <div className="bg-gray-100/90 rounded-2xl flex-1 py-3">
                    <Users className="w-4 h-4 mx-auto text-gray-600" />
                    <p className="text-xl font-bold">{campaign.donors}</p>
                    <p className="text-xs text-gray-500">donors</p>
                  </div>

                  <div className="bg-gray-100/90 rounded-2xl flex-1 py-3">
                    <Clock className="w-4 h-4 mx-auto text-gray-600" />
                    <p className="text-xl font-bold">{campaign.daysLeft}</p>
                    <p className="text-xs text-gray-500">days left</p>
                  </div>
                </div>

                {/* Donate Button */}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="mt-3 text-md w-full h-12 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white hover:opacity-90"
                  >
                    <Heart className="w-6 h-6 fill-white" />
                    Donate Now
                  </Button>
                </motion.div>

                {/* Share & Contact */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button variant="outline" className="border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white">
                    <Share2 className="w-5 h-5" />
                    Share
                  </Button>

                  <Button variant="outline" className="border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white">
                    <MessageCircle className="w-5 h-5" />
                    Contact
                  </Button>
                </div>
              </div>
            </Card>

            {/* Payment Methods */}
            <Card className="shadow-md border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Accepted Payment Methods</h4>
              <div className="space-y-3">
                {["JazzCash & EasyPaisa", "All Major Banks", "Credit/Debit Cards"].map((method, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-sm">{method}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Secure Badge */}
            <div className="bg-gradient-to-br from-[#2181DF] to-[#3BB2DD] text-white rounded-xl p-6 text-center shadow-md">
              <ShieldCheck className="w-12 h-12 mx-auto mb-3" />
              <p className="font-bold text-lg">100% Secure</p>
              <p className="text-sm opacity-90">
                Your donation is protected and goes directly to the beneficiary
              </p>
            </div>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
