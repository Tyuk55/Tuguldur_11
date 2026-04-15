"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-16 bg-gray-800 flex items-center justify-center">
        <h1 className="text-3xl text-white font-bold">Welcome to My Website</h1>
      </div>
      <div className="w-full h-36 flex items-center justify-around border-b-2 border-gray-300">
        <button className="cursor-pointer w-36 h-16 bg-blue-400 flex justify-center items-center rounded-2xl" onClick={() => router.push("/data")} >Data</button>
        <button className="cursor-pointer w-36 h-16 bg-blue-400 flex justify-center items-center rounded-2xl" onClick={() => router.push("/about")}>About</button>
        <button className="cursor-pointer w-36 h-16 bg-blue-400 flex justify-center items-center rounded-2xl" onClick={() => router.push("/content")}>Content</button>
      </div>
      </>
);
}