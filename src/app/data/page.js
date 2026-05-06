"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DataJson from "../../utils/data.json";

export default function DataPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((item) =>
    item.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50">

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-10 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

          <button
            onClick={() => router.back()}
            className="text-sm font-medium text-stone-400 hover:text-stone-700 transition-colors flex items-center gap-1 shrink-0"
          >
            ← Back
          </button>

          {/* Search */}
          <div className="relative w-full max-w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search by name…"
              className="w-full pl-9 pr-4 py-2 text-sm text-stone-700 bg-stone-100 border border-transparent rounded-full focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition placeholder-stone-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <span className="text-sm text-stone-400 shrink-0">
            {filteredData.length} result{filteredData.length !== 1 ? "s" : ""}
          </span>
        </div>
      </header>

      {/* ── Grid ── */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden"
              >
                {/* Profile image */}
                <div className="relative">
                  <Image
                    src={item.Image}
                    alt={item.firstName}
                    className="w-full h-36 object-cover"
                  />
                  {/* Type badge overlaid on image */}
                  <span
                    className={`absolute top-2.5 right-2.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      item.type === "student"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {item.type === "student" ? "Student" : "Teacher"}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-base font-semibold text-stone-800 mb-3">
                    {item.firstName}
                  </h2>

                  <div className="text-sm text-stone-500 space-y-1.5 flex-1">
                    <Row label="Email"   value={item.email} />
                    <Row label="Age"     value={item.age} />
                    <Row label="Country" value={item.country} />
                    <Row label="Points"  value={item.point} />
                    <Row label="Joined"  value={item.created_at} />
                  </div>

                  {/* Two-item row */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {["Item 1", "Item 2"].map((label) => (
                      <div key={label} className="rounded-lg overflow-hidden border border-stone-100 flex flex-col">
                        <Image src={item.Image} alt={label} className="w-full h-12 object-cover" />
                        <span className="text-[11px] text-center text-stone-400 py-0.5">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Delete */}
                  <button className="mt-4 w-full py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-stone-400">
            <span className="text-4xl mb-3">🔍</span>
            <p className="text-base font-medium">No results for "{search}"</p>
            <p className="text-sm mt-1">Try a different name</p>
          </div>
        )}
      </main>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <p className="flex justify-between gap-2">
      <span className="font-medium text-stone-700">{label}</span>
      <span className="text-right truncate">{value}</span>
    </p>
  );
}
