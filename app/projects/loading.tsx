export default function ProjectsLoading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="max-w-2xl animate-pulse space-y-3">
        <div className="h-3 w-32 rounded-sm bg-ink-soft" />
        <div className="h-16 w-64 rounded-sm bg-ink-soft" />
        <div className="h-4 w-full rounded-sm bg-ink-soft" />
      </div>

      <div className="mt-12 space-y-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse space-y-3 border-l-2 border-line/20 py-2 pl-5"
          >
            <div className="h-6 w-48 rounded-sm bg-ink-soft" />
            <div className="h-4 w-72 rounded-sm bg-ink-soft" />
            <div className="flex gap-2">
              <div className="h-5 w-16 rounded-sm bg-ink-soft" />
              <div className="h-5 w-16 rounded-sm bg-ink-soft" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
