# Activity Log

Running history of notable changes. Newest entries on top.

## 2026-07-07

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
