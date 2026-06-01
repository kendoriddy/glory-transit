"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND } from "@portfolio/config";
import { NAV_LINKS } from "@/lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-16 md:h-[4.5rem] flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {BRAND.shortName} Onifade
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-sm font-medium text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden fixed inset-0 top-16 bg-canvas px-6 py-8 flex flex-col gap-6 border-t border-line"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-2xl font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
