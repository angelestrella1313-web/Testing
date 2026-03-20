"use client";

import BottomNav from "@/components/BottomNav";
export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] pb-24">
      <div className="p-6">
        <h1 className="text-3xl font-bold">Photos</h1>
        <p className="mt-3 text-slate-600">No photos yet.</p>
      </div>
      <BottomNav />
    </main>
  );
}
