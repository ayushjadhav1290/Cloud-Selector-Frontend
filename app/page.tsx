"use client"; // Needed for client-side interactivity in Next.js App Router

import { useState } from "react";
import CloudScroll from "@/components/CloudScroll";
import ScrollContent from "@/components/ScrollContent";

export default function Page() {
  const [showSite, setShowSite] = useState(false);

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

          {/* Chat Button */}
          {!showSite && (
            <button
              onClick={() => setShowSite(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Open Chat
            </button>
          )}

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
    </main>
  );
}