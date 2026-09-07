"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE, THEME_DOT_CLASS, THEME_TEXT_CLASS } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line/25 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-mono text-sm tracking-tight text-paper"
        >
          {SITE.handle}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300",
                    active ? THEME_TEXT_CLASS[item.theme] : "text-muted hover:text-paper",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-opacity duration-300",
                      THEME_DOT_CLASS[item.theme],
                      active ? "opacity-100" : "opacity-30 group-hover:opacity-70",
                    )}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/cv"
            className="inline-flex items-center gap-1.5 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-paper transition-all hover:border-accent hover:bg-accent hover:text-ink"
          >
            CV / Résumé
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm text-paper transition-colors hover:bg-ink-soft hover:text-accent md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex flex-col border-t border-line/25 bg-ink px-6 py-2 md:hidden"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 border-b border-line/20 py-3.5 font-mono text-sm uppercase tracking-widest last:border-b-0",
                  active ? THEME_TEXT_CLASS[item.theme] : "text-muted",
                )}
                aria-current={active ? "page" : undefined}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", THEME_DOT_CLASS[item.theme])} />
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/cv"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border-t border-line/30 py-3.5 font-mono text-sm uppercase tracking-widest text-accent font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            CV / Résumé
          </Link>
        </nav>
      )}
    </header>
  );
}
