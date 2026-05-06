"use client";

import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center px-6 py-10">

      {/* Back button — top left */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 text-sm font-medium text-stone-400 hover:text-stone-700 transition-colors flex items-center gap-1"
      >
        ← Back
      </button>

      {/* Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden flex flex-col md:flex-row">

        {/* ── Left: Info panel ── */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-100">

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4">
              Get in touch
            </p>
            <h1 className="text-4xl font-semibold text-stone-800 leading-tight mb-4">
              Let's start a conversation
            </h1>
            <p className="text-stone-400 text-sm leading-relaxed">
              Don't be afraid to say hello — we'd love to hear from you.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-0.5">Phone</p>
              <p className="text-stone-700 font-medium">(+976) 88-99-3420</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-0.5">Email</p>
              <p className="text-stone-700 font-medium">hello@mywebsite.com</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-0.5">Office</p>
              <p className="text-stone-700 font-medium">Ulaanbaatar, BZD District</p>
            </div>
          </div>

        </div>

        {/* ── Right: Contact form ── */}
        <div className="md:w-1/2 p-10 bg-stone-50">
          <h2 className="text-xl font-semibold text-stone-800 mb-1">Send us a message</h2>
          <p className="text-sm text-stone-400 mb-7">We'll get back to you as soon as possible.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-1.5">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+976 __ __ ____"
                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-stone-500 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition resize-none"
              />
            </div>

            <button className="w-full py-2.5 bg-stone-800 text-white text-sm font-medium rounded-lg hover:bg-stone-700 transition-colors mt-1">
              Send message
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
