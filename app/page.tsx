"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Settings,
  CalendarDays,
  MapPin,
  Building2,
  MessageCircle,
  Camera,
  Compass,
  ChevronDown,
  Coffee,
  Briefcase,
  Users,
  UtensilsCrossed
} from "lucide-react";

const days = [
  { short: "FRI", date: "15", active: true },
  { short: "SAT", date: "16", active: false },
  { short: "SUN", date: "17", active: false }
];

const agendaItems = [
  {
    time: "9:00 AM",
    title: "Welcome + Coffee",
    location: "Main Conference Room",
    summary: "Kick off the offsite with the full team.",
    notes: [
      "Coffee, tea, and breakfast bites available starting at 8:30 AM.",
      "Please arrive 10 minutes early for check-in.",
      "Opening remarks will begin promptly at 9:00 AM."
    ],
    icon: Coffee
  },
  {
    time: "9:30 AM",
    title: "Company Vision & Strategy",
    location: "Main Conference Room",
    summary: "Where we are and where we're going.",
    notes: [
      "Leadership will review company priorities for the year.",
      "Questions will be saved for the last 10 minutes.",
      "Bring your notebook or laptop for planning notes."
    ],
    icon: Briefcase
  },
  {
    time: "11:00 AM",
    title: "Break",
    location: "Lounge Area",
    summary: "Take a short break and recharge.",
    notes: [
      "Snacks and drinks will be available in the lounge.",
      "Use this time for informal conversations and networking."
    ],
    icon: Coffee
  },
  {
    time: "11:15 AM",
    title: "Team Breakouts",
    location: "Meeting Rooms A–C",
    summary: "Smaller group sessions for planning and collaboration.",
    notes: [
      "Each team will rotate to its assigned breakout room.",
      "A facilitator will share the session prompts.",
      "Capture action items before returning to the main session."
    ],
    icon: Users
  },
  {
    time: "12:30 PM",
    title: "Lunch",
    location: "Terrace Dining Area",
    summary: "Lunch with the full group.",
    notes: [
      "Vegetarian, vegan, and gluten-free options will be available.",
      "Feel free to sit with a new team or cross-functional group."
    ],
    icon: UtensilsCrossed
  }
];

const navItems = [
  { label: "Agenda", href: "/", emoji: "📅" },
  { label: "Venue", href: "/venue", emoji: "📍" },
  { label: "Office", href: "/office", emoji: "🏢" },
  { label: "Photos", href: "/photos", emoji: "📷" },
  { label: "Tips", href: "/tips", emoji: "🧭" }
];

type AgendaCardProps = {
  item: {
    time: string;
    title: string;
    location: string;
    summary: string;
    notes: string[];
    icon: React.ComponentType<{ size?: number; className?: string }>;
  };
  isOpen: boolean;
  onToggle: () => void;
};

function AgendaCard({ item, isOpen, onToggle }: AgendaCardProps) {
  const Icon = item.icon;

  return (
    <div className="rounded-3xl border border-blue-100 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 px-4 py-5 text-left"
      >
        <div className="min-w-[64px] pt-1 text-sm font-semibold text-slate-500">
          {item.time}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Icon size={16} className="text-blue-500" />
            <h3 className="text-[18px] font-semibold text-slate-900">
              {item.title}
            </h3>
            <ChevronDown
              size={18}
              className={`ml-auto text-slate-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-sm leading-6 text-slate-600">{item.summary}</p>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={15} className="text-slate-400" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-slate-100 px-4 pb-5 pt-4">
          <div className="ml-[80px] rounded-2xl bg-blue-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Notes
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {item.notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AgendaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#f6f9ff] text-slate-900">
      <header className="relative overflow-hidden border-b border-blue-200 bg-gradient-to-r from-slate-700 via-blue-700 to-orange-400 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:18px_18px]" />
        <div className="relative mx-auto max-w-md px-4 py-5 sm:max-w-2xl">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                Your Company
              </p>
              <h1 className="mt-1 text-4xl font-bold tracking-tight">
                Company Offsite
              </h1>
              <p className="mt-1 text-sm text-white/85">
                Your City, State · January 15–17, 2027
              </p>
            </div>

            <button
              type="button"
              className="mt-1 rounded-full p-2 text-white/90 transition hover:bg-white/10"
              aria-label="Settings"
            >
              <Settings size={18} />
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-md px-4 pb-24 pt-5 sm:max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
          Trip starts in 300 days
        </p>

        <h2 className="mt-2 text-[38px] font-bold leading-tight text-slate-900">
          Day 1 — Friday
        </h2>
        <p className="mt-1 text-lg text-slate-500">Friday, January 15</p>

        <div className="mt-6 flex gap-2">
          {days.map((day) => (
            <button
              key={`${day.short}-${day.date}`}
              type="button"
              className={`flex h-14 w-14 flex-col items-center justify-center rounded-2xl border text-sm font-semibold transition ${
                day.active
                  ? "border-orange-300 bg-orange-500 text-white shadow-[0_8px_20px_rgba(249,115,22,0.25)]"
                  : "border-slate-200 bg-white text-slate-500"
              }`}
            >
              <span className="text-[10px] tracking-[0.18em]">{day.short}</span>
              <span className="text-xl leading-none">{day.date}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {agendaItems.map((item, index) => (
            <AgendaCard
              key={`${item.time}-${item.title}`}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-blue-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-end justify-between px-3 py-2 sm:max-w-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.active;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex min-w-[48px] flex-col items-center gap-1 rounded-lg px-2 py-1 text-[11px] transition ${
                  active
                    ? "text-orange-500"
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.2 : 1.9} />
                <span className={active ? "font-semibold" : "font-medium"}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </main>
  );
}
