import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col pt-32 px-6">
      <div className="flex-1 max-w-content mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
          404
        </p>
        <h1 className="font-display text-display-lg font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-4 text-muted text-lg max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 text-sm font-medium text-accent hover:text-ink transition-colors"
        >
          Return home →
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
