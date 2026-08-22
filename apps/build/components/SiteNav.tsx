"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DEFEND_SITE_URL, getHubSiteUrl } from "@portfolio/config";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const hubUrl = getHubSiteUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/80 backdrop-blur-xl border-b border-line shadow-soft"
          : "bg-canvas/60 backdrop-blur-md"
      }`}
    >
      <nav
        className="max-w-content mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          Build
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/work"
            className="text-muted hover:text-ink transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Work
          </Link>
          <a
            href={hubUrl}
            className="text-muted hover:text-ink transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Overview
          </a>
          <a
            href={DEFEND_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Defend
          </a>
        </div>
      </nav>
    </header>
  );
}
