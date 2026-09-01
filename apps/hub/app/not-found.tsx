import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col pt-32 px-6">
      <div className="flex-1 max-w-content mx-auto">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-display-lg text-ink">
          Page not found
        </h1>
        <p className="mt-4 text-muted text-lg max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="link-arrow mt-8 inline-flex"
        >
          Return home →
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
