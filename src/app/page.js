import Image from "next/image";


export default function Home() {
  return (
   <div className="w-screen h-screen bg-white flex ">
      <div className="w-full h-36 flex items-center justify-around border-b-2 border-gray-300 "> 
        <a href="/contact" className="text-2xl text-bold text-black bg-blue-400 rounded-3xl w-32 h-16 flex justify-center items-center">About </a>
        <a href="/content" className="text-2xl text-bold text-black  bg-blue-400 rounded-3xl w-32 h-16 flex justify-center items-center">Content </a>
      </div>
   </div>
  );
}
