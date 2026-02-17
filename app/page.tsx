"use client"; // Needed for client-side interactivity in Next.js App Router

import { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CloudScroll from "@/components/CloudScroll";
import ScrollContent from "@/components/ScrollContent";

export default function Page() {
  const [showSite, setShowSite] = useState(false);
  const { scrollYProgress } = useScroll();

  // Button visible throughout scroll
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <main className="relative w-full bg-[#0b1f24] text-white">
      {/* Background Scroll Animation */}
      <div className="fixed inset-0 z-0">
        <CloudScroll />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 pointer-events-auto">
        <div className="h-[400vh] w-full relative">
          <ScrollContent />

          {/* Render the whole external site when clicked */}
          {showSite && (
            <iframe
              src="https://eternity-systems.onrender.com"
              className="w-full h-screen border-0 bg-white text-black mt-4"
              title="Backend Page"
            />
          )}
        </div>
      </div>

      {/* Chat Button - Fixed outside scrollable area */}
      {!showSite && (
        <motion.div 
          style={{ y: buttonY }}
          className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-[9999]"
        >
          <button
            onClick={() => setShowSite(true)}
            className="flex items-center gap-2 px-6 py-2 chat-pill font-bold text-base transition-all hover:scale-105 active:scale-95"
          >
            <span>Chat</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </motion.div>
      )}
    </main>
  );
}