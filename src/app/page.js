"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { label: "Data", path: "/data", desc: "Explore insights" },
    { label: "About", path: "/about", desc: "Our story" },
    { label: "Content", path: "/content", desc: "Browse library" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,600&family=Outfit:wght@300;400;500&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --ink:     #0e1520;
          --ink-mid: #1a2740;
          --cream:   #f4ede0;
          --gold:    #c8a45a;
          --gold-lt: #e5c98a;
          --fog:     #6e829c;
          --white:   #ffffff;
        }

        body { background: var(--ink); }

        /* ── PAGE SHELL ─────────────────────────────── */
        .shell {
          min-height: 100vh;
          background: var(--ink);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* ambient glows */
        .shell::before, .shell::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .shell::before {
          width: 700px; height: 700px;
          top: -260px; right: -200px;
          background: radial-gradient(circle, rgba(200,164,90,.09) 0%, transparent 65%);
        }
        .shell::after {
          width: 500px; height: 500px;
          bottom: -180px; left: -140px;
          background: radial-gradient(circle, rgba(200,164,90,.06) 0%, transparent 65%);
        }

        /* ── HEADER ─────────────────────────────────── */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 52px;
          border-bottom: 1px solid rgba(200,164,90,.14);
          position: relative;
          z-index: 10;
          animation: fadeDown .6s ease both;
        }

        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          color: var(--gold);
          letter-spacing: .04em;
        }
        .logo em {
          color: var(--cream);
          font-style: italic;
          font-weight: 300;
        }

        .header-badge {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--fog);
        }

        /* ── HERO ───────────────────────────────────── */
        .hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 72px 24px 56px;
          text-align: center;
          position: relative;
          z-index: 5;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
          animation: fadeUp .7s .1s ease both;
        }
        .eyebrow::before, .eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--gold);
          opacity: .55;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 9vw, 96px);
          font-weight: 700;
          color: var(--cream);
          line-height: 1.02;
          letter-spacing: -.015em;
          margin-bottom: 18px;
          animation: fadeUp .7s .2s ease both;
        }
        .hero-title span {
          color: var(--gold);
          font-style: italic;
          font-weight: 300;
        }

        .divider {
          width: 44px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 0 auto 20px;
          animation: fadeUp .7s .3s ease both;
        }

        .hero-sub {
          font-size: 15px;
          font-weight: 300;
          color: var(--fog);
          letter-spacing: .06em;
          margin-bottom: 0;
          animation: fadeUp .7s .35s ease both;
        }

        /* ── IMAGE SLOT ─────────────────────────────── */
        .image-slot {
          width: 100%;
          max-width: 820px;
          margin: 52px auto 0;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          animation: fadeUp .8s .4s ease both;
        }
        .image-slot::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(14,21,32,.85) 100%
          );
          z-index: 1;
        }
        .image-slot img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          display: block;
          filter: brightness(.82) saturate(.88);
        }
        .image-label {
          position: absolute;
          bottom: 18px;
          left: 22px;
          z-index: 2;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: rgba(244,237,224,.65);
        }

        /* ── NAV CARDS ──────────────────────────────── */
        .nav-grid {
          display: flex;
          gap: 14px;
          width: 100%;
          max-width: 820px;
          margin: 48px auto 0;
          padding: 0 24px;
          animation: fadeUp .8s .5s ease both;
        }

        .nav-card {
          flex: 1;
          min-height: 82px;
          background: var(--ink-mid);
          border: 1px solid rgba(200,164,90,.18);
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 18px 12px;
          transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
          position: relative;
          overflow: hidden;
        }
        .nav-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200,164,90,.1), transparent 55%);
          opacity: 0;
          transition: opacity .22s ease;
        }
        .nav-card:hover {
          transform: translateY(-4px);
          border-color: var(--gold);
          box-shadow: 0 16px 40px rgba(200,164,90,.13);
        }
        .nav-card:hover::after { opacity: 1; }
        .nav-card:active { transform: translateY(-2px); }

        .card-label {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--cream);
          transition: color .2s;
          position: relative;
          z-index: 1;
        }
        .nav-card:hover .card-label { color: var(--gold-lt); }

        .card-desc {
          font-size: 11px;
          font-weight: 300;
          color: var(--fog);
          letter-spacing: .04em;
          position: relative;
          z-index: 1;
          transition: color .2s;
        }
        .nav-card:hover .card-desc { color: rgba(200,164,90,.7); }

        /* ── FOOTER ─────────────────────────────────── */
        .footer {
          padding: 22px 52px;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(200,164,90,.1);
          position: relative;
          z-index: 5;
          animation: fadeDown .6s .6s ease both;
        }
        .footer-text {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--fog);
        }

        /* ── KEYFRAMES ──────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0);     }
        }

        /* ── RESPONSIVE ─────────────────────────────── */
        @media (max-width: 560px) {
          .header { padding: 20px 24px; }
          .nav-grid { flex-direction: column; }
          .nav-card { min-height: 64px; }
          .image-slot img { height: 220px; }
        }
      `}</style>

      <div className="shell">
        {/* Header */}
        <header className="header">
          <div className="logo">My<em>Website</em></div>
          <div className="header-badge">Est. 2024</div>
        </header>

        {/* Hero */}
        <main className="hero">
          <p className="eyebrow">Welcome</p>

          <h1 className="hero-title">
            Welcome to<br />
            <span>My Website</span>
          </h1>

          <div className="divider" />
          <p className="hero-sub">Explore what we have to offer</p>

          {/* Image — swap src for your own */}
          <div className="image-slot">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s" alt="Hero" />
            <span className="image-label">Featured</span>
          </div>

          {/* Nav cards */}
          <div className="nav-grid">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="nav-card"
                onClick={() => router.push(item.path)}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="card-label">{item.label}</span>
                <span className="card-desc">{item.desc}</span>
              </button>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <span className="footer-text">© 2024 My Website · All rights reserved</span>
        </footer>
      </div>
    </>
  );
}
