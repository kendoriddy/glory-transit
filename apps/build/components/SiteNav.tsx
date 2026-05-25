"use client";

import Link from "next/link";
import { SITE_URLS } from "@portfolio/config";

export default function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-white hover:text-accent-blue transition-colors"
        >
          Build
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/work"
            className="text-white/70 hover:text-accent-blue transition-colors"
          >
            Work
          </Link>
          <a
            href={SITE_URLS.hub}
            className="text-white/50 hover:text-accent-blue transition-colors"
          >
            Hub
          </a>
        </div>
      </nav>
    </header>
  );
}
