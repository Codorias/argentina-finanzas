# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

The full project brief lives in `AGENTS.md` — read it first.

@AGENTS.md

## Claude-specific pointers

- **Voice / messaging source of truth:** `ABOUT.md` is the client's own brief (untracked). Re-read it before changing any user-facing copy. Don't invent credentials, names, or numbers — only what's in ABOUT.md is confirmed real (currently: Joaquín Rodríguez Nuin, Agente Productor CNV #2245, abogado, idóneo en mercado de capitales, maestrando UdeSA). Everything else in the page (WhatsApp number, email, social URLs, Calendly, testimonials) is still placeholder.
- **lucide-react@1.14.0 is pinned and old.** It has no brand/social icons (`Linkedin`, `Youtube`, `Instagram`, `Tiktok` etc. don't exist). Use inline SVG for socials — see `Footer.tsx` for examples. Before importing any new icon, verify with `node -e "console.log(!!require('lucide-react').IconName)"`.
- **Static export:** the build emits to `dist/`. Don't add server-only Next.js APIs (route handlers, dynamic `headers()` / `cookies()`, ISR). Forms must be client-side or third-party.
- **React Compiler is on** — skip manual `useMemo` / `useCallback` / `React.memo` unless you've measured a real problem.
- **Testing the redesign:** there is no test runner. After meaningful UI changes, run `npm run build` (catches TS + import errors) and ideally `npm run dev` to eyeball the page in a browser.
