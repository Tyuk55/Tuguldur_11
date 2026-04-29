"use client";
import { useState } from "react";
import DataJson from "../../utils/data.json";

export default function Home() {
  const [search, setSearch] = useState("");

  <div className="w-1/10 h-full">
      <button className="w-36 h-16 bg-blue-300" onClick={() => router.back()}>
          Back
      </button>
  </div>

  // 🔍 FILTER DATA
  const filteredData = DataJson.filter((item) =>
    item.firstName.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="w-full p-6 bg-white">

      {/* 🔍 SEARCH INPUT */}
      <div className="mb-6 flex justify-center text-black">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-80 h-10 border-2 border-black rounded-lg px-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🧾 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="w-80 h-72 rounded-xl bg-white text-black p-6 border-2 border-black shadow-xl"
            >
              <div className="flex justify-between items-center">
                <p className="font-bold">{item.firstName}</p>

                <div
                  className={`w-20 h-8 flex items-center justify-center rounded-full ${
                    item.type === "student"
                      ? "bg-blue-200"
                      : "bg-green-200"
                  }`}
                >
                  {item.type === "student" ? "Student" : "Teacher"}
                </div>
              </div>

              <p><b>Email:</b> {item.email}</p>
              <p><b>Age:</b> {item.age}</p>
              <p><b>Country:</b> {item.country}</p>
              <p><b>Points:</b> {item.point}</p>
              <p><b>Created:</b> {item.created_at}</p>

              <button className="w-20 h-10 bg-red-600 text-white rounded-lg mt-2">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">
            No results found
          </p>
        )}
      </div>
    </div>
  );
}