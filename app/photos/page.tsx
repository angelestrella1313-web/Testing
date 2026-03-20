"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Settings,
  CalendarDays,
  MapPin,
  Building2,
  Camera,
  Compass,
  Plus
} from "lucide-react";

type PhotoItem = {
  id: string;
  name: string;
  url: string;
};

const navItems = [
  { label: "Agenda", icon: CalendarDays, href: "/" },
  { label: "Venue", icon: MapPin, href: "/venue" },
  { label: "Office", icon: Building2, href: "/office" },
  { label: "Photos", icon: Camera, href: "/photos", active: true },
  { label: "Tips", icon: Compass, href: "/tips" }
];

export default function PhotosPage() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleOpenPicker() {
    fileInputRef.current?.click();
  }

  function handleFilesSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newPhotos: PhotoItem[] = Array.from(files).map((file) => ({
      id: `${file.name}-${file.lastModified}`,
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);
    event.target.value = "";
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-[#e6ddd2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft size={18} />
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
            className="rounded-full p-1 text-slate-500 transition hover:bg-orange-50 hover:text-orange-600"
            aria-label="Settings"
          >
            <Settings size={18} />
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-24 pt-5">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
              Event
            </p>
            <h2 className="mt-2 text-[28px] font-bold leading-tight text-slate-900">
              Photos
            </h2>
          </div>

          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFilesSelected}
            />

            <button
              type="button"
              onClick={handleOpenPicker}
              className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              <Plus size={18} />
              <span>Add</span>
            </button>
          </div>
        </div>

        {photos.length === 0 ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-[#e8dfd4] bg-[#f8f4ee] text-center">
            <div className="rounded-full bg-[#efe7dc] p-5 text-[#d9cdbd]">
              <Camera size={30} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              No photos yet
            </h3>
            <p className="mt-3 max-w-md text-base text-slate-500">
              Be the first to capture the moment!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="overflow-hidden rounded-3xl border border-[#e6ddd2] bg-white shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
              >
                <div className="aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-3 py-3">
                  <p className="truncate text-sm font-medium text-slate-700">
                    {photo.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#e6ddd2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-end justify-between px-3 py-2">
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
                    : "text-slate-500 hover:text-orange-600"
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
