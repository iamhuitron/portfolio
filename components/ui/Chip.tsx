import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-line/40 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
