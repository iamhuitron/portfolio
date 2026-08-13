import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "filled",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300",
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
