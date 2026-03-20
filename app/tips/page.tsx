"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  Settings,
  Phone,
  Sun,
  CarFront,
  UtensilsCrossed,
  HeartPulse,
  CalendarDays,
  MapPin,
  Building2,
  MessageCircle,
  Camera,
  Compass
} from "lucide-react";

const sections = [
  {
    title: "Need Help Onsite?",
    content:
      "Visit the onsite help desk in the main lobby or contact your event coordinator for anything you need during the offsite.",
    icon: Phone,
    iconColor: "text-blue-500"
  },
  {
    title: "Weather",
    content:
      "Expect mild daytime temperatures with cooler evenings. A light jacket and comfortable walking shoes are recommended.",
    icon: Sun,
    iconColor: "text-sky-500"
  },
  {
    title: "Getting Around",
    content:
      "Rideshare pickup is available at the main entrance, and shuttle service runs between key offsite locations throughout the day.",
    icon: CarFront,
    iconColor: "text-indigo-500"
  },
  {
    title: "Nearby Restaurants & Coffee",
    content:
      "There are several cafes and casual dining spots within a short walk of the venue for coffee breaks, lunch, and team meetups.",
    icon: UtensilsCrossed,
    iconColor: "text-cyan-600"
  },
  {
    title: "Health & Safety",
    content:
      "Emergency exits are clearly marked. For urgent medical needs, alert venue staff immediately or call local emergency services.",
    icon: HeartPulse,
    iconColor: "text-blue-600"
  }
];

const navItems = [
  { label: "Agenda", icon: CalendarDays, href: "#" },
  { label: "Venue", icon: MapPin, href: "#" },
  { label: "Office", icon: Building2, href: "#" },
  { label: "Quotes", icon: MessageCircle, href: "#" },
  { label: "Photos", icon: Camera, href: "#" },
  { label: "Tips", icon: Compass, href: "/tips", active: true }
];

export default function TipsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f4f8ff] text-slate-900 flex flex-col">
      <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3 sm:max-w-2xl">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <ChevronLeft size={18} />
            <span>Back</span>
          </Link>

          <div className="text-center">
            <h1 className="text-[15px] font-semibold leading-tight text-slate-900">
              Company Offsite
            </h1>
            <p className="text-xs text-slate-500">January 15–17, 2027</p>
          </div>

          <button
            type="button"
            className="rounded-full p-1 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Settings"
          >
            <Settings size={18} />
          </button>
        </div>
      </header>

      <section className="mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-5 sm:max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
          Local Tips
        </p>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Need-to-Knows
        </h2>

        <div className="mt-5 space-y-4">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-4 py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={section.iconColor} />
                    <span className="text-[16px] font-semibold text-slate-900">
                      {section.title}
                    </span>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-blue-50 px-4 pb-5 pt-3">
                    <p className="pl-8 text-sm leading-6 text-slate-600">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
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
                    ? "text-blue-600"
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
