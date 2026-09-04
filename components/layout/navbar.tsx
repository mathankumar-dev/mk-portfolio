"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MKLogo } from "@/components/ui/logo";

const NAV_LINKS = [
  { name: "Work", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-md sleek-border-b">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand / Logo + Identity */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <div className="w-7 h-7 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1 group-hover:border-neutral-700 transition-colors">
            <MKLogo className="w-full h-full text-white" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-xl text-white tracking-tight">Mathankumar V</span>
            <span className="hidden md:inline-block text-neutral-200 text-xs font-normal">/ Flutter Developer</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-xs text-neutral-300">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-white ${
                  isActive ? "text-white font-medium" : "text-neutral-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="text-white hover:text-neutral-300 transition-colors flex items-center gap-1 font-medium pl-2 sleek-border-l border-neutral-800"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="sm:hidden p-2 -mr-2 text-neutral-300 hover:text-white focus:outline-none rounded-md transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-xl border-t border-neutral-800/80 ${
          mobileMenuOpen ? "max-h-64 opacity-100 py-5 px-6" : "max-h-0 opacity-0 py-0 px-6 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-3 text-sm">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 transition-colors ${
                  isActive ? "text-white font-medium" : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-white font-medium pt-3 mt-1 border-t border-neutral-800"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-300" />
          </Link>
        </div>
      </div>
    </header>
  );
}
