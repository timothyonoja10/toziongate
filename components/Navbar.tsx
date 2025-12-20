"use client";

import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileAuthOpen, setMobileAuthOpen] = useState(false);
  const [currency, setCurrency] = useState("£");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Mobile: Menu Icon + Currency */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} className="text-[#FF0066] hover:text-[#222A8C]" />

          </button>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="text-black border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="£">£</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </select>
        </div>

        {/* Website Name (Always left) */}
        <div className="text-lg font-bold text-[#222A8C]">
          <Link href="/">
            Toziongate
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#222A8C] hover:text-[#FF0066]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop: Currency + Auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Currency select box first */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="£">£</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </select>

          <Link href="/login" className="text-sm font-medium">
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-[#FF0066] hover:bg-[#222A8C] rounded-lg"
          >
            Register
          </Link>
        </div>

        {/* Mobile: Account Icon with Dropdown */}
        <div className="relative md:hidden">

          <button aria-label="Account options" onClick={() => setMobileAuthOpen(!mobileAuthOpen)}
            className="inline-flex items-center justify-center rounded-lg bg-[#FF0066] p-2 transition-colors hover:bg-[#222A8C]">
            <User size={24} className="text-white" />
          </button>


          {mobileAuthOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-lg flex flex-col">
              <Link
                href="/login"
                className="px-4 text-black py-2 text-sm hover:bg-gray-100"
                onClick={() => setMobileAuthOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 text-black py-2 text-sm hover:bg-gray-100"
                onClick={() => setMobileAuthOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 text-white bg-[#222A8C] z-50 transform transition-transform md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium p-4 hover:bg-[#FF0066]"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="text-sm font-medium p-4 hover:bg-[#FF0066]">
            Login
          </Link>
          <Link href="/register" className="text-sm font-medium p-4 hover:bg-[#FF0066]">
            Register
          </Link>
        </nav>
      </aside>
    </header>
  );
}
