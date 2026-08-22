import Link from "next/link";
import {
  BRAND,
  DEFEND_SITE_URL,
  SITE_URLS,
  SOCIAL,
  getBuildSiteUrl,
} from "@portfolio/config";
import { NAV_LINKS } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const buildUrl = getBuildSiteUrl();

  return (
    <footer className="border-t border-line px-6 py-16 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/[0.06] blur-3xl"
        aria-hidden
      />
      <div className="max-w-content mx-auto grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] relative">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {BRAND.fullName}
          </p>
          <p className="mt-2 text-sm text-muted max-w-xs leading-relaxed">
            {BRAND.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            Navigate
          </p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            Portfolios
          </p>
          <ul className="space-y-2 text-sm mb-8">
            <li>
              <a
                href={buildUrl}
                className="text-ink/80 hover:text-accent transition-colors"
              >
                Build — Software &amp; AI
              </a>
            </li>
            <li>
              <a
                href={DEFEND_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/80 hover:text-accent transition-colors"
              >
                Defend — Cybersecurity
              </a>
            </li>
          </ul>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            Connect
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${SOCIAL.email}`}
                className="text-ink/80 hover:text-accent transition-colors"
              >
                {SOCIAL.email}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/80 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/80 hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={SITE_URLS.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/80 hover:text-accent transition-colors"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-content mx-auto mt-14 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted">
        <p>
          © {year} {BRAND.shortName} Onifade. All rights reserved.
        </p>
        <p>
          Built with intention — software, security, and products that matter.
        </p>
      </div>
    </footer>
  );
}
