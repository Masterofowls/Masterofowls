# Activity Log

Running history of notable changes. Newest entries on top.

## 2026-07-07

- **fix(readme): resolve 404 on stat cards — self-host generation instead of third-party render**
  - Root cause: README pointed at `assets/metrics/*.svg` that only existed after a
    workflow run, and `github-readme-stats.vercel.app` was still returning HTTP 503,
    so overview + languages showed 404/blank.
  - Added `scripts/generate-stats.mjs`: queries the GitHub GraphQL API (public data only,
    `privacy: PUBLIC`), aggregates stars/commits/PRs/issues/followers/repos and language
    byte-sizes, and renders two themed SVGs (`#0D1117`/`#00D9FF`) into `assets/metrics/`.
  - Generated and committed the real cards now (repos 132, stars 41, commits/yr 508,
    28 languages) so the README renders immediately with no 404.
  - Replaced the `lowlighter/metrics` workflow with one that runs the script using the
    built-in `GITHUB_TOKEN` (no secret required), keeping local and CI output identical.
  - Verified both cards render correctly via a headless browser screenshot.
  - Updated `SETUP.md` accordingly (local regeneration instructions, removed token step).

- **fix(readme): repair GitHub profile stats, streak, languages and typing banner**
  - Diagnosed broken stat images: `github-readme-streak-stats.herokuapp.com` and
    `readme-typing-svg.herokuapp.com` are dead Heroku domains; the shared
    `github-readme-stats.vercel.app` (overview + top languages) and
    `github-profile-trophy.vercel.app` public instances returned HTTP 503/402
    (rate-limited / over quota). Verified via HTTP HEAD checks.
  - Migrated streak stats to `streak-stats.demolab.com` (verified 200) across all
    10 README language variants.
  - Migrated the animated typing banner to `readme-typing-svg.demolab.com`
    (verified 200) across all README variants.
  - Replaced the unreliable overview + top-languages cards with self-generated
    SVGs committed to `assets/metrics/` via a new `lowlighter/metrics` workflow
    (`.github/workflows/metrics.yml`) — served from the repo, so no rate limits.
  - Removed the dead `github-profile-trophy` card (HTTP 402).
  - Surfaced the already-generated contribution snake animation
    (`output/github-snake*.svg`) in the README (it was produced by the workflow
    but never displayed), with light/dark `<picture>` sources.
  - Kept `github-readme-activity-graph.vercel.app` (verified 200).
  - Updated `SETUP.md` to document the new sources, the committed-SVG rationale,
    and the optional `METRICS_TOKEN` secret.
