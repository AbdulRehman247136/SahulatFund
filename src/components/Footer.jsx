import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">

          {/* Left: Logo + Description */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <img src="/logo9.png" alt="SahulatFund logo" className="h-12" />
              <p className="text-2xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent">
                SahulatFund
              </p>
            </div>
            <p className="text-sm text-gray-600 font-extralight leading-tight max-w-xs">
              Connecting hearts, healing lives. Pakistan's trusted platform for medical crowdfunding.
            </p>
          </div>

          {/* Right Side: Links + Contact (wrapped in flex) */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 flex-wrap">

            {/* Quick Links */}
            <div className="min-w-[180px]">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {['Browse Campaigns', 'How It Works', 'About Us', 'Success Stories'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm font-medium block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-[180px]">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Support</h3>
              <ul className="space-y-3">
                {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm font-medium block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-[200px]">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-[var(--color-primary)]/10 rounded-full p-2 flex-shrink-0">
                    <HiOutlineMail className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <a
                    href="mailto:support@sahulatfund.pk"
                    className="text-sm text-gray-700 hover:text-[var(--color-primary)] transition-colors break-all"
                  >
                    support@sahulatfund.pk
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <div className="bg-[var(--color-primary)]/10 rounded-full p-2 flex-shrink-0">
                    <HiOutlinePhone className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-sm text-gray-700">+92 300 1234567</span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="bg-[var(--color-primary)]/10 rounded-full p-2 flex-shrink-0">
                    <HiOutlineLocationMarker className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-sm text-gray-700">Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 font-medium">
            © 2025 SahulatFund. Every Rupee Counts. Every Life Matters.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;