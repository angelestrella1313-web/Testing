export default function OfficePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Office</h1>
      <p className="mt-4 text-gray-600">
        Company HQ details go here.
      </p>
    </main>
  );
  const navItems = [
  { label: "Agenda", href: "/", emoji: "📅" },
  { label: "Venue", href: "/venue", emoji: "📍" },
  { label: "Office", href: "/office", emoji: "🏢" },
  { label: "Quotes", href: "/quotes", emoji: "💬" },
  { label: "Photos", href: "/photos", emoji: "📷" },
  { label: "Tips", href: "/tips", emoji: "🧭" }
];
}
