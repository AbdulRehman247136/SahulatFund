"use client";

import {
  MdVerified,
  MdRemoveRedEye,
  MdLockOutline,
  MdCheckCircleOutline,
} from "react-icons/md";

const trustItems = [
  {
    icon: MdVerified,
    title: "100% Verified",
    desc: "Every campaign verified through AI + human review",
  },
  {
    icon: MdRemoveRedEye,
    title: "Full Transparency",
    desc: "Track every rupee from donation to treatment",
  },
  {
    icon: MdLockOutline,
    title: "Secure Payments",
    desc: "JazzCash, EasyPaisa & bank transfers protected",
  },
  {
    icon: MdCheckCircleOutline,
    title: "Real Impact",
    desc: "98% of funds reach patients directly",
  },
];

export default function Badges() {
  return (
    <div className="flex flex-col bg-[#EFF4F9] min-h-screen px-8 md:px-20 py-16">

      {/* Header */}
      <header className="flex flex-col gap-1 mt-6 items-center text-center animate-fadeUp">
        <h1 className="text-4xl font-bold py-2">
          Built on{" "}
          <span className="bg-gradient-to-br from-blue-500 to-blue-400 bg-clip-text text-transparent">
            Trust
          </span>
        </h1>
        <p className="text-gray-500 max-w-lg">
          Your generosity deserves the highest standards of transparency and security
        </p>
      </header>

      {/* Badge Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto py-12">

        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 bg-white rounded-2xl px-6 py-8 
              shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
              animate-fadeUp"
              style={{ animationDelay: `${index * 0.15}s` }} // stagger animations
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-md">
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 font-extralight leading-tight">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Payment Panel */}
      <div
        className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6
        bg-white rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition-shadow 
        animate-fadeUp delay-500"
      >
        {/* Left */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Local Payment Methods You Trust</h3>
          <p className="text-sm text-gray-600 font-extralight max-w-md">
            Support with JazzCash, EasyPaisa, or direct bank transfer — familiar,
            fast, and secure.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="px-5 py-2 font-medium bg-orange-300/20 text-orange-500 border border-orange-300 rounded-full text-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            JazzCash
          </div>
          <div className="px-5 py-2 font-medium bg-green-300/20 text-green-500 border border-green-300 rounded-full text-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            EasyPaisa
          </div>
          <div className="px-5 py-2 font-medium bg-blue-300/20 text-blue-500 border border-blue-300 rounded-full text-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            Other Banks
          </div>
        </div>
      </div>
    </div>
  );
}
