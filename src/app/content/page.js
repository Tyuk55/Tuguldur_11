"use client";

import { useRouter } from "next/navigation";

const categories = ["Bracelets", "Necklaces", "Rings", "Earrings", "Chains", "Pendants"];

const products = [
  { src: "https://www.vancleefarpels.com/content/dam/rcq/vca/8J/BT/Qn/BS/Ry/-8/29/2W/ge/Sg/Lw/8JBTQnBSRy-8292WgeSgLw.png", name: "Clover Pendant" },
  { src: "https://images.shaneco.com/is/image/ShaneCo/necklace/570/jewelry_41107089_M.jpg&&wid=999&hei=999&fmt=png-alpha", name: "Diamond Drop" },
  { src: "https://jamesmichelle.com/cdn/shop/files/ChunkyChainCrossNecklace-A_70156ae6-f501-4627-b29e-5885c2f5a473.png?v=1754144488&width=1445", name: "Cross Chain" },
  { src: "https://images.shaneco.com/is/image/ShaneCo/necklace/570/jewelry_41096973_M.jpg&&wid=999&hei=999&fmt=png-alpha", name: "Solitaire" },
  { src: "https://classa.com.au/cdn/shop/files/Starlight-Necklace-G-Aquamarine.png?crop=center&height=1200&v=1764546915&width=1000", name: "Starlight" },
  { src: "https://silvermoonnz.myshopify.com/cdn/shop/files/guiding-star-necklace-18k-gold-vermeil-front.-web2_1250x_d439ec2f-b25e-406d-9275-9e6bfba4d1bd.webp", name: "Guiding Star" },
  { src: "https://www.paspaley.com/cdn/shop/files/Lavalier_Pearl_Necklace_with_15mm_Circle_Pearl_-_Yellow_Gold_DH13N01Y83C_1500_x_1875_C_2.png?v=1721804032&width=2048", name: "Pearl Lavalier" },
  { src: "https://www.thomassabo.com/dw/image/v2/AAQY_PRD/on/demandware.static/-/Sites-ts-master-catalog/default/dw33485b7a/product/K/KE/KE2367/KE2367-051-10.png?sw=328&sfrm=png", name: "Charm Pendant" },
  { src: "https://cdn.accentuate.io/43393648132341/1667214271863/Ada_YG_Front_Chain.png?v=1755602135290&transform=cover=1:1/resize=1024", name: "Ada Chain" },
];

export default function ContentPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-50">

      {/* ── Main Nav ── */}
      <header className="w-full bg-white border-b border-stone-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left: back + links */}
          <div className="flex items-center gap-7">
            <button
              onClick={() => router.back()}
              className="text-sm font-medium text-stone-400 hover:text-amber-700 transition-colors flex items-center gap-1"
            >
              ← Back
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm text-stone-600">
              {["About our factory", "Blog", "Contacts", "News"].map((link) => (
                <span key={link} className="hover:text-amber-700 cursor-pointer transition-colors font-medium">
                  {link}
                </span>
              ))}
            </nav>
          </div>

          {/* Center: brand */}
          <span className="text-xl font-semibold tracking-widest text-amber-800 uppercase">
            Auriel
          </span>

          {/* Right: auth */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors">
              Sign in
            </button>
            <button className="px-4 py-1.5 text-sm font-medium bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* ── Category Bar ── */}
      <nav className="w-full bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-3 text-sm font-medium text-stone-500 hover:text-amber-800 border-b-2 border-transparent hover:border-amber-700 transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Hero Banner ── */}
      <section className="max-w-7xl mx-auto px-6 mt-8 rounded-2xl overflow-hidden flex bg-white shadow-sm border border-stone-100">
        <img
          className="w-2/5 h-80 object-cover"
          src="https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.jpg?s=612x612&w=0&k=20&c=miNpkI_ekZ8HoC0U9NhHNacsgcdq8xIFxR-n0zjO5p8="
          alt="Jewelry model"
        />
        <div className="w-3/5 flex flex-col justify-center px-12 py-8">
          <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase mb-3">
            Bespoke Collection
          </p>
          <h1 className="text-3xl font-semibold text-stone-800 leading-snug mb-4">
            Create your unique<br />piece of jewelry
          </h1>
          <p className="text-stone-500 text-base leading-relaxed mb-7">
            Choose precious metals, exquisite stones, and custom designs to bring
            your dream to life in the perfect accessory.
          </p>
          <button className="self-start px-6 py-2.5 bg-amber-800 text-white text-sm font-medium rounded-full hover:bg-amber-700 transition-colors">
            Start designing →
          </button>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="max-w-7xl mx-auto px-6 mt-10 mb-14">
        <h2 className="text-lg font-semibold text-stone-700 mb-5 tracking-wide">
          Featured Pieces
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-4">
          {[...products, ...products].map((item, i) => (
            <div key={i} className="group flex flex-col items-center gap-2 cursor-pointer">
              <div className="w-full aspect-square bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-center overflow-hidden group-hover:border-amber-400 group-hover:shadow-md transition-all">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-stone-500 text-center leading-tight group-hover:text-amber-700 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
