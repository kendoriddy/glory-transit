"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, SOCIAL } from "@portfolio/config";
import { NAV_LINKS } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-surface border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-16 md:h-[4.75rem] flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-accent-border text-accent font-display font-extrabold text-sm gold-ring transition-colors group-hover:border-accent">
            K
          </span>
          <span className="font-display text-sm font-extrabold tracking-tight text-ink hidden sm:inline">
            {BRAND.shortName} Onifade
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 text-[11px] font-extrabold uppercase tracking-[0.08em] bg-accent text-canvas border border-accent hover:bg-accent/90 transition-colors"
          >
            Hire
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-line text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="lg:hidden fixed inset-0 top-16 glass-surface px-6 py-10 flex flex-col gap-2 border-t border-line"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="block py-4 font-display text-2xl font-extrabold text-ink border-b border-line"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href={`mailto:${SOCIAL.email}`}
              className="mt-6 inline-flex items-center justify-center min-h-[52px] px-7 text-[13px] font-extrabold uppercase tracking-[0.04em] bg-accent text-canvas"
              onClick={() => setOpen(false)}
            >
              Hire — Email
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
