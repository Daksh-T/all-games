# Adult Language Learning Games

A mobile-first web app with interactive chapter minigames for adult language learning.

The site organizes content by book and chapter, and each chapter includes a short game activity designed to reinforce lessons from the textbooks used in class.

## What It Does

- Mobile-first student experience for quick in-class or at-home play
- Book pages with chapter-based navigation
- Multiple game styles (quiz, matching, categorization, ordering, and more)
- Immediate feedback with answer explanations and end-of-game celebration
- Simple admin panel to edit chapter/game content and publish updates

## Tech Stack

- Next.js (App Router) + TypeScript
- Prisma (database-ready)
- Vercel-ready deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Setup

```bash
cp .env.example .env.local
```

Fill in values in `.env.local` before using authenticated/admin features in production.

## Quality Checks

```bash
npm run lint
npm run test
npm run build
```

## Deploy To Vercel

1. Push this `web` project to GitHub.
2. Import the repo in Vercel.
3. Set framework to Next.js (auto-detected).
4. Add environment variables from `.env.example`.
5. Deploy.

## Vercel Note (Database + Admin Auth)

- Vercel does not automatically create a Postgres database.
- If you want persistent admin edits, connect a Postgres provider (for example Supabase/Neon) and set `DATABASE_URL` (and `DIRECT_URL` if used).
- If no `DATABASE_URL` is set, the app falls back to built-in seeded memory data (good for preview/demo, not persistent storage).
- Set a strong `ADMIN_PASSWORD` and a long random `ADMIN_SESSION_SECRET` in Vercel project environment variables.
