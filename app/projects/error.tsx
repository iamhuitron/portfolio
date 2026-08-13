"use client";

import { useEffect } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Error</p>
      <h1 className="font-display text-3xl text-paper">
        Couldn&apos;t load projects from GitHub.
      </h1>
      <p className="max-w-md text-muted">
        The GitHub API might be rate-limited or briefly unavailable. Try
        again, or view the repos directly.
      </p>
      <div className="mt-2 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-opacity duration-300 hover:opacity-90"
        >
          Try again
        </button>
        <ButtonLink href="https://github.com/iamhuitron" variant="outline" external>
          Open GitHub
        </ButtonLink>
      </div>
    </div>
  );
}
