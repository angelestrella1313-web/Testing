"use client";

import { useState } from "react";
import Link from "next/link";
import BottomNav from "../components/BottomNav";
import {
  Settings,
  ChevronDown,
  Coffee,
  Briefcase,
  Users,
  UtensilsCrossed,
  MapPin
} from "lucide-react";

const days = [
  { short: "WED", date: "10", active: true },
  { short: "THU", date: "11", active: false },
  { short: "FRI", date: "12", active: false }
];

const agendaItems = [
  {
    time: "1:00 PM",
    title: "Welcome + Lunch",
    location: "Innovation Tower, 16th Floor",
    summary: "Lunch will be served 12-1p",
    notes: [
      "Lunch will be available at 12:00 PM",
      "Arrive 10 minutes early",
      "Opening remarks at 1:00 pM"
    ],
    icon: Coffee
  },
  {
    time: "9:30 AM",
    title: "Company Vision & Strategy",
    location: "Main Conference Room",
    summary: "Where we are and where we're going.",
    notes: [
      "Leadership presentation",
      "Q&A at the end",
      "Take notes for planning"
    ],
    icon: Briefcase
  },
  {
    time: "11:00 AM",
    title: "Break",
    location: "Lounge Area",
    summary: "Recharge and connect.",
    notes: ["Snacks provided", "Networking time"],
    icon: Coffee
  },
  {
    time: "11:15 AM",
    title: "Team Breakouts",
    location: "Meeting Rooms",
    summary: "Small group collaboration.",
    notes: [
      "Assigned rooms",
      "Facilitator-led",
      "Capture action items"
    ],
    icon: Users
  },
  {
    time: "12:30 PM",
    title: "Lunch",
    location: "Dining Area",
    summary: "Group lunch.",
    notes: ["Multiple options available"],
    icon: UtensilsCrossed
  }
];

export default function AgendaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#f6f9ff] text-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-blue-200 bg-gradient-to-r from-slate-700 via-blue-700 to-orange-400 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:18px_18px]" />
        <div className="relative mx-auto max-w-md px-4 py-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/70">
                Your Company
              </p>
              <h1 className="text-3xl font-bold">Company Offsite</h1>
              <p className="text-sm text-white/80">
                Your City · January 15–17, 2027
              </p>
            </div>

            <button className="rounded-full p-2 hover:bg-white/10">
              <Settings size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-md px-4 pb-24 pt-5">
        <p className="text-xs uppercase text-orange-600 font-semibold">
          Trip starts in 300 days
        </p>

        <h2 className="text-3xl font-bold mt-2">Day 1 — Friday</h2>
        <p className="text-slate-500">Friday, January 15</p>

        {/* Day selector */}
        <div className="flex gap-2 mt-4">
          {days.map((day) => (
            <div
              key={day.date}
              className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center text-sm ${
                day.active
                  ? "bg-orange-500 text-white"
                  : "bg-white border text-slate-500"
              }`}
            >
              <span className="text-xs">{day.short}</span>
              <span className="text-lg">{day.date}</span>
            </div>
          ))}
        </div>

        {/* Agenda list */}
        <div className="mt-6 space-y-4">
          {agendaItems.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border p-4 shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-start gap-3"
                >
                  <div className="text-sm text-slate-500 w-20">
                    {item.time}
                  </div>

                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-orange-500" />
                      <span className="font-semibold">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`ml-auto ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <p className="text-sm text-slate-600 mt-2">
                      {item.summary}
                    </p>

                    <div className="flex items-center gap-1 text-sm text-slate-400 mt-1">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 bg-blue-50 p-3 rounded-xl ml-20">
                    <p className="text-xs text-blue-600 font-semibold">
                      NOTES
                    </p>
                    <ul className="mt-2 text-sm text-slate-600 space-y-1">
                      {item.notes.map((note) => (
                        <li key={note}>• {note}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Nav */}
      <BottomNav />
    </main>
  );
}
