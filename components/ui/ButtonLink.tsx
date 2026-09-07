import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "filled",
  external = false,
  className,
  "aria-label": ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  external?: boolean;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        variant === "filled"
          ? "bg-accent text-ink hover:opacity-90"
          : "border border-line/50 text-paper hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </Link>
  );
}
