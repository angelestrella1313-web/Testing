"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  MapPin,
  Building2,
  Camera,
  Compass
} from "lucide-react";

const navItems = [
  { label: "Agenda", icon: CalendarDays, href: "/" },
  { label: "Venue", icon: MapPin, href: "/venue" },
  { label: "Office", icon: Building2, href: "/office" },
  { label: "Photos", icon: Camera, href: "/photos" },
  { label: "Tips", icon: Compass, href: "/tips" }
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
<nav className="fixed bottom-0 left-0 right-0 z-[999] ...">
  <div className="mx-auto flex max-w-5xl items-end justify-between px-3 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex min-w-[56px] flex-col items-center gap-1 rounded-lg px-2 py-1 text-[11px] transition ${
                active
                  ? "text-orange-500"
                  : "text-slate-500 hover:text-orange-600"
              }`}
            >
              <Icon size={18} strokeWidth={active ? 2.3 : 1.9} />
              <span className={active ? "font-semibold" : "font-medium"}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
