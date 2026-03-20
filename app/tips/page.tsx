"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";

const sections = [
  {
    title: "Need Help Onsite?",
    content: "Contact your coordinator or visit the help desk located in the lobby."
  },
  {
    title: "Weather",
    content: "Expect mild temperatures. Bring a light jacket for evenings."
  },
  {
    title: "Getting Around",
    content: "Shuttles run every 20 minutes between venues."
  },
  {
    title: "Nearby Restaurants & Coffee",
    content: "Check out local cafés within walking distance of the venue."
  },
  {
    title: "Health & Safety",
    content: "Emergency exits are marked. Follow staff instructions if needed."
  }
];

export default function TipsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-blue-50 text-blue-900 flex flex-col">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-blue-100 bg-white">
        <div className="flex items-center gap-2 text-blue-600 cursor-pointer">
          <ChevronLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </div>

        <div className="text-center">
          <p className="font-semibold">Company Offsite</p>
          <p className="text-xs text-blue-400">January 15–17, 2027</p>
        </div>

        <div className="text-blue-400">⚙️</div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-5">
        <p className="text-xs font-semibold text-blue-500 tracking-widest">
          LOCAL TIPS
        </p>

        <h1 className="text-2xl font-bold mt-2 mb-4">
          Need-to-Knows
        </h1>

        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-blue-100 shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-4 py-4"
                >
                  <span className="font-medium text-left">
                    {section.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-blue-700">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="border-t border-blue-100 bg-white flex justify-around py-2 text-xs text-blue-500">
        <div className="flex flex-col items-center">
          📅
          <span>Agenda</span>
        </div>
        <div className="flex flex-col items-center">
          📍
          <span>Venue</span>
        </div>
        <div className="flex flex-col items-center">
          🏢
          <span>Office</span>
        </div>
        <div className="flex flex-col items-center">
          💬
          <span>Quotes</span>
        </div>
        <div className="flex flex-col items-center">
          📷
          <span>Photos</span>
        </div>
        <div className="flex flex-col items-center text-blue-700 font-semibold">
          🧭
          <span>Tips</span>
        </div>
      </div>
    </main>
  );
}
