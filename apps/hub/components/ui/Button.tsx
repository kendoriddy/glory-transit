import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas border border-ink hover:bg-ink/90 transition-colors",
  secondary:
    "bg-transparent text-ink border border-line-strong hover:border-ink/30 transition-colors",
  ghost:
    "bg-transparent text-ink border border-transparent hover:text-accent transition-colors",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-tight";

  if (external || download) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
