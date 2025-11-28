# Productivity Dashboard

A minimal React + Vite productivity dashboard with a gold/black aesthetic.

Live demo: https://YOUR-USERNAME.github.io/Productivity-Dashboard

## Features

- Weekly goals calendar
- Streaks & stats panel
- Today’s tasks with add + complete
- Tasks are saved in localStorage (they stay after refresh)
- Deployed with GitHub Actions + GitHub Pages

## Tech Stack

- React 18
- Vite
- JavaScript (ES6)
- CSS (custom, no framework)
- GitHub Actions & GitHub Pages

## How it works

- The top row shows a weekly calendar on the left and streaks/stats on the right.
- The bottom card tracks today’s tasks.
- Tasks are stored in `localStorage` under the key `pd-tasks`.

## Running locally (optional)

```bash
npm install
npm run dev
