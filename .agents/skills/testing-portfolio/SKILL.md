---
name: testing-portfolio
description: How to run and end-to-end test the personal portfolio site (Next.js 16 + Tailwind v4), including dark-mode and mobile-viewport emulation via CDP.
---

# Testing the portfolio site

## Run
- `npm run dev` serves http://localhost:3000 (static single page; all content in `src/lib/data.ts`, layout in `src/app/page.tsx`, theme vars in `src/app/globals.css`).
- `npm run build` and `npm run lint` should both exit 0. Building while the dev server runs was harmless here, but re-curl :3000 afterwards to confirm.

## Theme + responsive emulation (no theme toggle exists)
- Colors are keyed off `prefers-color-scheme` in `globals.css`; there is no in-page toggle, so emulate via CDP.
- Launch Chrome with `--remote-debugging-port=9222`. CDP websocket connections are rejected with 403 unless you pass `suppress_origin=True` (python `websocket-client`) or launch Chrome with `--remote-allow-origins=*`.
- IMPORTANT: `Emulation.setEmulatedMedia` / `setDeviceMetricsOverride` only persist while the CDP session stays attached. Keep the websocket open in a long-running process for the duration of screenshots (see `/tmp/darkmode.py`, `/tmp/mobile2.py` pattern: connect, send override, then sleep-loop; optionally poll `Runtime.evaluate` for scrollWidth overflow checks).
- Gotcha: killing that helper with `pkill -f darkmode` can match and kill your own shell (command line contains the pattern). Use a self-escaping pattern like `pkill -f "[d]arkmode"`.
- After killing the device-metrics helper, the page may stay at the emulated width until you reload (F5).
- DevTools "Emulate prefers-color-scheme" via the command menu works too but the emulation is lost if DevTools closes/undocks; the CDP helper approach is more reliable for recordings.

## Known flakiness
- Chrome for Testing crashed twice mid-session (whole window disappeared after tab actions). Relaunch with:
  `setsid nohup /home/ubuntu/.local/bin/google-chrome --remote-debugging-port=9222 "http://localhost:3000/" >/tmp/chrome.log 2>&1 < /dev/null &`
  then re-maximize: `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`.

## What to verify
- Hero links: GitHub -> github.com/shahilsingh546, LinkedIn -> linkedin.com/in/sahil-singh-1474b1228, Email mailto.
- Project cards: "Live Demo ↗" (accent colored) + "GitHub ↗" links; live demos are real Vercel apps (PaisaFlow redirects to its /api/auth/signin page — that is expected, not a bug).
- Footer year comes from `new Date().getFullYear()`.
- At 390px width the experience grid collapses to one column; assert `document.documentElement.scrollWidth == 390` for no horizontal overflow.

## Devin Secrets Needed
None — everything is public/local.
