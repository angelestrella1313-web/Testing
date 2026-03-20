import Link from "next/link";

const quickLinks = [
  {
    title: "Agenda",
    description: "View the full offsite schedule and sessions.",
    href: "#",
    emoji: "📅"
  },
  {
    title: "Venue",
    description: "Get directions, maps, and venue details.",
    href: "#",
    emoji: "📍"
  },
  {
    title: "Office",
    description: "Reference office info and shared resources.",
    href: "#",
    emoji: "🏢"
  },
  {
    title: "Tips",
    description: "Need-to-knows for weather, safety, and more.",
    href: "/tips",
    emoji: "🧭"
  }
];

const highlights = [
  {
    title: "Team Dinner",
    subtitle: "Thursday · 7:00 PM",
    emoji: "👥"
  },
  {
    title: "Hotel Check-In",
    subtitle: "Opens at 3:00 PM",
    emoji: "🛏️"
  },
  {
    title: "Workshop Block",
    subtitle: "Friday · 10:00 AM",
    emoji: "💼"
  }
];

const navItems = [
  { label: "Agenda", href: "#", emoji: "📅" },
  { label: "Venue", href: "#", emoji: "📍" },
  { label: "Office", href: "#", emoji: "🏢" },
  { label: "Quotes", href: "#", emoji: "💬" },
  { label: "Photos", href: "#", emoji: "📷" },
  { label: "Tips", href: "/tips", emoji: "🧭" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] text-slate-900 flex flex-col">
      <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-center px-4 py-3 sm:max-w-2xl">
          <div className="text-center">
            <h1 className="text-[15px] font-semibold leading-tight text-slate-900">
              Company Offsite
            </h1>
            <p className="text-xs text-slate-500">January 15–17, 2027</p>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-5 sm:max-w-2xl">
        <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-600 to-sky-500 px-5 py-6 text-white shadow-[0_10px_30px_rgba(37,99,235,0.18)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
            Welcome
          </p>
          <h2 className="mt-2 text-[28px] font-bold leading-tight">
            Your offsite hub for everything you need.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-blue-50">
            Keep schedules, venue info, office details, photos, and local tips in
            one clean place for the whole team.
          </p>

          <div className="mt-5 flex gap-3">
            <Link
              href="/tips"
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              Open Tips
            </Link>
            <a
              href="#quick-links"
              className="inline-flex items-center rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore
            </a>
          </div>
        </div>

        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Highlights</h3>
            <span className="text-xs font-medium text-blue-600">This trip</span>
          </div>

          <div className="grid gap-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="rounded-2xl bg-blue-50 p-3 text-xl">
                  {item.emoji}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="quick-links" className="mt-7">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
            <span className="text-xs font-medium text-slate-500">Browse</span>
          </div>

          <div className="grid gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-blue-100 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-xl">
                      {item.emoji}
                    </div>

                    <div>
                      <h4 className="text-[16px] font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="mt-1 text-slate-400 transition group-hover:text-blue-600">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-blue-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-end justify-between px-3 py-2 sm:max-w-2xl">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex min-w-[48px] flex-col items-center gap-1 rounded-lg px-2 py-1 text-[11px] text-slate-500 transition hover:text-blue-600"
            >
              <span className="text-base">{item.emoji}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
