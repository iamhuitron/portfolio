# portfolio

Miguel Delgado's personal portfolio — Next.js 16, React 19, TypeScript, Tailwind CSS v4. Project data pulls live from the GitHub REST API (stars, primary language, last commit), so updating a repo updates the site automatically.

## Stack

- **Next.js 16** (App Router, Turbopack, React Server Components)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config — no `tailwind.config.ts`, tokens live in `app/globals.css`)
- **[motion](https://motion.dev)** for the handful of deliberate animations
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Optional: GitHub token

Without any setup, the site calls the public GitHub API unauthenticated (60 requests/hour per IP). Every request is cached for an hour (`lib/github.ts`), so this comfortably covers normal traffic. If you want more headroom during local development:

```bash
cp .env.local.example .env.local
```

Add a token with public-repo read access at [github.com/settings/tokens](https://github.com/settings/tokens), then paste it into `.env.local`. That file is git-ignored.

## Before you deploy — fill these in

Everything personal lives in one file: **`data/site.ts`**. Three fields are intentionally left blank rather than guessed:

| Field | What happens if it's empty |
|---|---|
| `email` | The Contact page explains that direct email is not configured instead of showing a fake address |
| `linkedin` | The LinkedIn row on Contact just doesn't render |
| `resumeUrl` | The résumé button on About just doesn't render |

Also update `siteUrl` once you have a real domain — it feeds the sitemap, robots.txt, and Open Graph tags.

## Adding, removing, or swapping a project

Everything project-related is one array: **`data/projects.ts`**.

```ts
{
  slug: "UniSched-Optimizer",   // must match the GitHub repo name exactly
  title: "UniSched Optimizer",
  tagline: "...",
  problem: "...",
  solution: "...",
  technicalHighlights: ["..."],
  categories: ["..."],
  techStack: ["..."],
  featured: true,                // the main featured project on the home page
  selected: true,                // appears in the wider home selection
  year: "2025–2026",
  images: { useReadme: true },   // pull the first image out of the README
  links: { github: "https://github.com/iamhuitron/..." },
}
```

- **Swap a project**: change `slug` and rewrite the copy around it. Stars, language, and "updated Xd ago" are fetched live — nothing else to touch.
- **Reorder**: array order = display order on `/projects`.
- **Add/remove**: add or delete an object. Use one `featured: true` project for the home lead and `selected: true` for the wider home selection.

### Images

For each project, in priority order:

1. `images.local: ["/projects/my-screenshot.png"]` — drop the file in `public/projects/` and reference it here.
2. `images.useReadme: true` — the site fetches the repo's README and grabs the first image it finds (Markdown or `<img>`).
3. Neither — the project gets an honest screenshot slot instead of a fabricated preview.

### Project presentation

Every project is written as **Problem → Solution → Technical highlights**. GitHub is always shown as an action. A **Live Demo** action only becomes active when a verified URL is added to `links.live`; otherwise the UI marks it as unavailable rather than inventing a destination.

## The design system

Each page carries its own accent color, like a calendar app color-coding categories — the "signature" idea behind the whole site is that it reuses the visual language of a ledger/schedule grid, which is literally the subject matter of the two flagship projects (UniSched Optimizer, Statix). Defined in `app/globals.css`:

| Page | Accent | CSS variable |
|---|---|---|
| Home | Marigold | `--color-marigold` |
| Projects | Cobalt | `--color-cobalt` |
| About | Plum | `--color-plum` |
| Contact | Verdigris | `--color-verdigris` |

Each route's `layout.tsx` sets `data-theme="..."` on a wrapper `div`, which overrides `--color-accent` for everything inside it — so components just use `bg-accent` / `text-accent` / `border-accent` and automatically pick up the right color per page. Fonts: **Fraunces** (display/serif, used sparingly for the big lines), **Space Grotesk** (body/UI), **JetBrains Mono** (labels, tags, dates — the "ledger data" voice).

To add a 5th themed page, add a color to the `@theme` block, a `[data-theme="x"]` override, an entry in `THEME_DOT_CLASS`/`THEME_TEXT_CLASS` in `data/site.ts`, and a `layout.tsx` that sets `data-theme="x"`.

## Caching model

`lib/github.ts` uses plain `fetch(..., { next: { revalidate: 3600 } })` — Next 16's "previous" (non–Cache Components) caching model. This was a deliberate choice over the newer `cacheComponents` flag: it's simpler, well-documented, and plenty for a site this size. Revisit if you outgrow it.

## Deploying to Vercel

```bash
npx vercel
```

or connect the repo at [vercel.com/new](https://vercel.com/new). No environment variables are required; add `GITHUB_TOKEN` in the Vercel project settings only if you've added one locally too.

## Pushing to GitHub

This folder is already a git repo with an initial commit. To push it to `github.com/iamhuitron/portfolio`:

```bash
git remote add origin https://github.com/iamhuitron/portfolio.git
git branch -M main
git push -u origin main
```

If that repo already has commits (e.g. from GitHub's own README-init), pull first with `--allow-unrelated-histories`, resolve anything that conflicts, then push.

## Project structure

```
app/
  layout.tsx          Root layout — fonts, metadata, MotionConfig
  globals.css          Design tokens, theme system, base styles
  page.tsx              Home
  projects/             Projects (layout sets theme="projects")
  about/                 About (theme="about")
  contact/               Contact (theme="contact")
components/
  layout/               Navigation, Footer
  sections/             Page-specific composed sections (Hero, FeaturedProjects)
  ui/                    Reusable primitives (ProjectRow, ProductCard, ProjectBrief, ProjectActions, Chip, ButtonLink, Reveal)
data/
  site.ts                Identity, nav, contact info
  projects.ts             The modular project registry
lib/
  github.ts                GitHub REST API — repo data + README image extraction
  utils.ts                  cn() class merge, timeAgo()
```

## Ideas for a v2

- Individual `/projects/[slug]` case-study pages
- Category filtering on `/projects`
- An `og-image` route (`app/opengraph-image.tsx`) generated from each project's data
