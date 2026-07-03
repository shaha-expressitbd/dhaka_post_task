"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, CircleUserRound, X } from "lucide-react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // রাউটিং ডাটা (Navigation Links)
  const navLinks = [
    { name: "বিশ্ব", href: "#" },
    { name: "ব্যবসা", href: "#" },
    { name: "প্রযুক্তি", href: "#" },
    { name: "রাজনীতি", href: "#" },
    { name: "সংস্কৃতি", href: "#" },
    { name: "মতামত", href: "#" },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-300 sticky top-0 z-50 py-2.5">

      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden md:flex container max-w-7xl mx-auto px-4 lg:px-6 h-14 items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-[32px] lg:text-[50px] font-bold text-[#061838] tracking-tight leading-none">ঢাকা পোস্ট</h1>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="flex items-center space-x-6 lg:space-x-8 text-gray-600 font-medium font-hind text-[18px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Action Icons */}
        <div className="flex-1 flex items-center justify-end space-x-7 text-[#333333]">
          <button aria-label="Search" className="hover:text-[#061838] transition-colors">
            <Search className="w-5 h-5" strokeWidth={2} />
          </button>
          <button aria-label="User Profile" className="hover:text-[#061838] transition-colors">
            <CircleUserRound className="w-[22px] h-[22px]" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="flex md:hidden container mx-auto px-4 h-14 items-center justify-between">

        {/* Item 1: Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-[32px] font-bold text-[#061838] tracking-tight leading-none">ঢাকা পোস্ট</h1>
        </Link>

        {/* Item 2: Search */}
        <button aria-label="Search" className="text-[#333333] hover:text-[#061838] transition-colors">
          <Search className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Item 3: User Profile */}
        <button aria-label="User Profile" className="text-[#333333] hover:text-[#061838] transition-colors">
          <CircleUserRound className="w-[22px] h-[22px]" strokeWidth={1.8} />
        </button>

        {/* Item 4: Menu */}
        <button
          aria-label="Menu"
          className="text-[#333333] hover:text-[#061838] transition-colors"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" strokeWidth={2} />
        </button>

      </div>


      {/* ================= MOBILE SIDEBAR ================= */}
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-5 flex items-center justify-between border-b border-gray-100">
          <span className="text-[20px] font-bold text-[#061838]">মেনু</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 hover:text-red-500 transition-colors p-1 bg-gray-50 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col py-2 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-6 py-3.5 text-[17px] text-gray-700 font-medium font-hind hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 last:border-0 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
