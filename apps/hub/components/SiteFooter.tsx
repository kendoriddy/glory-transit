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
    <footer className="border-t border-line px-6 pt-20 pb-10 relative overflow-hidden bg-surface/30">
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/8 blur-3xl"
        aria-hidden
      />
      <div className="max-w-content mx-auto relative">
        <div className="flex items-center gap-3 mb-16">
          <span className="flex h-12 w-12 items-center justify-center border border-accent-border text-accent font-display font-extrabold text-xl gold-ring">
            K
          </span>
          <p className="font-display text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            {BRAND.shortName} Onifade
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="eyebrow text-[11px] mb-5">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors uppercase tracking-[0.08em] font-extrabold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[11px] mb-5">Portfolios</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={buildUrl}
                  className="text-muted hover:text-accent transition-colors uppercase tracking-[0.08em] font-extrabold"
                >
                  Build — Software &amp; AI
                </a>
              </li>
              <li>
                <a
                  href={DEFEND_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors uppercase tracking-[0.08em] font-extrabold"
                >
                  Defend — Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[11px] mb-5">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="text-muted hover:text-accent transition-colors"
                >
                  {SOCIAL.email}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE_URLS.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted uppercase tracking-[0.08em]">
          <p>
            © {year} {BRAND.shortName} Onifade. All rights reserved.
          </p>
          <p>Software, security, and products that matter.</p>
        </div>
      </div>
    </footer>
  );
}
