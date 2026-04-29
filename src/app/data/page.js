"use client";
import { useState } from "react";
import DataJson from "../../utils/data.json";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((item) =>
    item.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      
      {/* 🔍 SEARCH */}
      <div className="max-w-6xl mx-auto mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-96 h-12 border border-gray-300 rounded-full px-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🧾 CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col"
            >
              
              {/* IMAGE */}
              <img
                src={item.Image}
                alt="profile"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              {/* HEADER */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.firstName}
                </h2>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    item.type === "student"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {item.type === "student" ? "Student" : "Teacher"}
                </span>
              </div>

              {/* INFO */}
              <div className="text-sm text-gray-600 space-y-1 flex-1">
                <p><span className="font-medium">Email:</span> {item.email}</p>
                <p><span className="font-medium">Age:</span> {item.age}</p>
                <p><span className="font-medium">Country:</span> {item.country}</p>
                <p><span className="font-medium">Points:</span> {item.point}</p>
                <p><span className="font-medium">Created:</span> {item.created_at}</p>
              </div>

              {/* BUTTON */}
              <button className="mt-4 w-full h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No results found
          </p>
        )}
      </div>
    </div>
  );
}