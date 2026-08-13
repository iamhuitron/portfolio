// Server-only. Called straight from async Server Components — no API route
// needed. Every fetch opts into Next's data cache for an hour, so a burst of
// visitors still only costs one real request to GitHub per repo per hour,
// well inside the unauthenticated 60 req/hour rate limit. Set GITHUB_TOKEN
// in .env.local if you outgrow that (see .env.local.example).

const GITHUB_API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

function authHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export interface GithubRepoData {
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
  htmlUrl: string;
  license: string | null;
}

export async function getRepoData(
  owner: string,
  repo: string,
): Promise<GithubRepoData | null> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}`, {
      headers: authHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      description: data.description ?? null,
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      language: data.language ?? null,
      topics: Array.isArray(data.topics) ? data.topics : [],
      updatedAt: data.pushed_at ?? data.updated_at,
      htmlUrl: data.html_url,
      license: data.license?.spdx_id ?? null,
    };
  } catch {
    return null;
  }
}

/** First Markdown or HTML <img> reference in the repo's README, if any. */
export async function getRepoReadmeImage(
  owner: string,
  repo: string,
): Promise<string | null> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/readme`, {
      headers: authHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.content) return null;
    const text = Buffer.from(json.content, "base64").toString("utf-8");

    const markdownImage = text.match(/!\[[^\]]*\]\((https?:\/\/[^\s)]+)\)/);
    if (markdownImage) return markdownImage[1];

    const htmlImage = text.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (htmlImage) return htmlImage[1];

    return null;
  } catch {
    return null;
  }
}
