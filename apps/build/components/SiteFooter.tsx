import Link from "next/link";
import { BRAND, DEFEND_SITE_URL, getHubSiteUrl } from "@portfolio/config";

export default function SiteFooter() {
  const hubUrl = getHubSiteUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-16 mt-24">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-ink">Build</p>
          <p className="mt-1 text-sm text-muted">
            Software &amp; AI engineering — {BRAND.shortName} Onifade
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <Link
            href="/work"
            className="text-muted hover:text-accent transition-colors"
          >
            All work
          </Link>
          <a
            href={hubUrl}
            className="text-muted hover:text-accent transition-colors"
          >
            Overview
          </a>
          <a
            href={DEFEND_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            Defend
          </a>
        </div>
      </div>
      <p className="max-w-content mx-auto mt-10 text-xs text-muted">
        © {year} {BRAND.shortName} Onifade
      </p>
    </footer>
  );
}
