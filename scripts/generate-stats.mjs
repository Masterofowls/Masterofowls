#!/usr/bin/env node
/**
 * Self-hosted GitHub stat card generator.
 *
 * Produces two themed SVGs committed into the repo so the profile README never
 * depends on rate-limited third-party render services (github-readme-stats, etc.):
 *   - assets/metrics/metrics.svg    (overview: stars, commits, PRs, issues, followers)
 *   - assets/metrics/languages.svg  (most-used languages)
 *
 * Auth: reads a token from GH_TOKEN or GITHUB_TOKEN (GraphQL requires auth).
 * Usage: GH_TOKEN=$(gh auth token) node scripts/generate-stats.mjs
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const USER = process.env.STATS_USER || 'Masterofowls';
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const OUT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'metrics');

const THEME = {
  bg: '#0D1117',
  accent: '#00D9FF',
  text: '#FFFFFF',
  muted: '#8B949E',
  radius: 10,
};

if (!TOKEN) {
  console.error('[stats] Missing GH_TOKEN / GITHUB_TOKEN. GraphQL requires authentication.');
  process.exit(1);
}

/** Minimal GitHub GraphQL client. */
async function gql(query, variables = {}) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': `${USER}-stats-generator`,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  return json.data;
}

async function collect() {
  const stats = {
    name: USER,
    stars: 0,
    forks: 0,
    repos: 0,
    followers: 0,
    following: 0,
    commits: 0,
    prs: 0,
    issues: 0,
    contributedTo: 0,
    languages: new Map(),
  };

  let cursor = null;
  let hasNext = true;
  while (hasNext) {
    const data = await gql(
      `query ($login: String!, $after: String) {
        user(login: $login) {
          name
          followers { totalCount }
          following { totalCount }
          contributionsCollection { totalCommitContributions restrictedContributionsCount }
          pullRequests { totalCount }
          issues { totalCount }
          repositoriesContributedTo(contributionTypes: [COMMIT, PULL_REQUEST, ISSUE, REPOSITORY]) { totalCount }
          repositories(first: 100, after: $after, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction: DESC }) {
            totalCount
            pageInfo { hasNextPage endCursor }
            nodes {
              stargazerCount
              forkCount
              languages(first: 12, orderBy: { field: SIZE, direction: DESC }) {
                edges { size node { name color } }
              }
            }
          }
        }
      }`,
      { login: USER, after: cursor },
    );

    const u = data.user;
    if (u.name) stats.name = u.name;
    stats.followers = u.followers.totalCount;
    stats.following = u.following.totalCount;
    // Public commit contributions in the last year (deterministic across tokens).
    stats.commits = u.contributionsCollection.totalCommitContributions;
    stats.prs = u.pullRequests.totalCount;
    stats.issues = u.issues.totalCount;
    stats.contributedTo = u.repositoriesContributedTo.totalCount;
    stats.repos = u.repositories.totalCount;

    for (const repo of u.repositories.nodes) {
      stats.stars += repo.stargazerCount;
      stats.forks += repo.forkCount;
      for (const edge of repo.languages.edges) {
        const cur = stats.languages.get(edge.node.name) || { size: 0, color: edge.node.color };
        cur.size += edge.size;
        stats.languages.set(edge.node.name, cur);
      }
    }

    hasNext = u.repositories.pageInfo.hasNextPage;
    cursor = u.repositories.pageInfo.endCursor;
  }

  return stats;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmt = (n) => new Intl.NumberFormat('en-US').format(n);

function overviewSvg(s) {
  const W = 495;
  const H = 195;
  const rows = [
    ['Total Stars Earned', s.stars],
    ['Commits (last year)', s.commits],
    ['Total PRs', s.prs],
    ['Total Issues', s.issues],
    ['Followers', s.followers],
    ['Public Repos', s.repos],
  ];
  const startY = 70;
  const gap = 20;
  const body = rows
    .map(([label, value], i) => {
      const y = startY + i * gap;
      const delay = 300 + i * 120;
      return `    <g transform="translate(0, ${y})" style="animation: fadeIn 0.5s ease-in-out forwards; animation-delay: ${delay}ms; opacity: 0;">
      <text x="25" y="0" class="stat">${esc(label)}</text>
      <text x="${W - 25}" y="0" class="value" text-anchor="end">${fmt(value)}</text>
    </g>`;
    })
    .join('\n');

  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(s.name)} GitHub stats">
  <style>
    .bg { fill: ${THEME.bg}; }
    .title { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${THEME.accent}; }
    .stat { font: 400 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${THEME.text}; }
    .value { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${THEME.accent}; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; } }
  </style>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="${THEME.radius}" class="bg" />
  <text x="25" y="40" class="title">${esc(s.name)} — GitHub Stats</text>
  <line x1="25" y1="52" x2="${W - 25}" y2="52" stroke="${THEME.accent}" stroke-opacity="0.35" />
${body}
</svg>`;
}

function languagesSvg(s) {
  const W = 495;
  const top = [...s.languages.entries()]
    .map(([name, v]) => ({ name, size: v.size, color: v.color || THEME.accent }))
    .sort((a, b) => b.size - a.size)
    .slice(0, 8);
  const total = top.reduce((acc, l) => acc + l.size, 0) || 1;
  top.forEach((l) => (l.pct = (l.size / total) * 100));

  const H = 105 + Math.ceil(top.length / 2) * 26;
  const barY = 62;
  const barW = W - 50;

  let x = 25;
  const bar = top
    .map((l) => {
      const w = (l.pct / 100) * barW;
      const seg = `<rect x="${x.toFixed(2)}" y="${barY}" width="${w.toFixed(2)}" height="10" fill="${l.color}" />`;
      x += w;
      return seg;
    })
    .join('');

  const listStartY = barY + 34;
  const colW = (W - 50) / 2;
  const list = top
    .map((l, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const lx = 25 + col * colW;
      const ly = listStartY + row * 26;
      return `  <g transform="translate(${lx}, ${ly})">
    <circle cx="6" cy="-4" r="5" fill="${l.color}" />
    <text x="18" y="0" class="lang">${esc(l.name)} ${l.pct.toFixed(2)}%</text>
  </g>`;
    })
    .join('\n');

  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Most used languages">
  <style>
    .bg { fill: ${THEME.bg}; }
    .title { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${THEME.accent}; }
    .lang { font: 400 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${THEME.text}; }
  </style>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="${THEME.radius}" class="bg" />
  <text x="25" y="40" class="title">Most Used Languages</text>
  <clipPath id="barclip"><rect x="25" y="${barY}" width="${barW}" height="10" rx="5" /></clipPath>
  <g clip-path="url(#barclip)">
    <rect x="25" y="${barY}" width="${barW}" height="10" fill="#21262D" />
    ${bar}
  </g>
${list}
</svg>`;
}

async function main() {
  console.log(`[stats] Collecting public stats for ${USER} ...`);
  const stats = await collect();
  console.log(
    `[stats] repos=${stats.repos} stars=${stats.stars} commits=${stats.commits} prs=${stats.prs} issues=${stats.issues} langs=${stats.languages.size}`,
  );
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(resolve(OUT_DIR, 'metrics.svg'), overviewSvg(stats), 'utf8');
  await writeFile(resolve(OUT_DIR, 'languages.svg'), languagesSvg(stats), 'utf8');
  console.log(`[stats] Wrote metrics.svg and languages.svg to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error('[stats] Failed:', err.message);
  process.exit(1);
});
