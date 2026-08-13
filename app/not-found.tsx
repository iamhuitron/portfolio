import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-6 py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="font-display text-4xl text-paper sm:text-5xl">
        Nothing logged at this entry.
      </h1>
      <p className="max-w-md text-muted">
        This page isn&apos;t in the ledger. It may have moved, or the link is
        off by a character.
      </p>
      <ButtonLink href="/" className="mt-4">
        Back to home
      </ButtonLink>
    </div>
  );
}
