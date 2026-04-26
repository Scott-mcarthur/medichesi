# Medic HESI Prep

Free study app for the Massachusetts didactic paramedic HESI capstone exam. Built from the real content outline. Flashcards, scenario questions with detailed rationale, weak-spot tracking, mock exams with per-section breakdowns.

Next.js 14 + Supabase + Tailwind. Free forever for the user.

## Quick deploy checklist

1. Create Supabase project, run SQL migration
2. Copy API keys into `.env.local`
3. `npm install` and `npm run dev` locally
4. Push to GitHub
5. Import to Vercel, paste same env vars
6. Go live

Detailed steps below.

## 1. Supabase setup

Go to [supabase.com](https://supabase.com), create a new project (free tier is fine).

Once the project is provisioned:

**Run the migration.**
- Open the SQL Editor in your Supabase project
- Paste the contents of `supabase/migrations/001_initial.sql`
- Run it
- This creates the `progress` and `mock_exams` tables with Row Level Security policies so each user only sees their own data

**Configure auth.**
- Go to Authentication > Providers
- Email is on by default, good
- Under Authentication > URL Configuration, set your Site URL:
  - Local: `http://localhost:3000`
  - Production: `https://your-domain.com`
- Add redirect URLs for both so the email confirmation callback works
- (Optional) Turn OFF "Confirm email" in Auth Settings if you want signups to log in instantly without email verification. Good for AJ's use case where he just wants to start studying.

**Grab the API keys.**
- Project Settings > API
- Copy the Project URL and the `anon` public key
- You will paste these into `.env.local` next

## 2. Local setup

```bash
npm install
cp .env.local.example .env.local
```

Edit `.env.local` and paste in your Supabase values:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

Then:

```bash
npm run dev
```

Visit `http://localhost:3000`. Sign up, log in, start studying.

## 3. Deploy to Vercel

- Push the repo to GitHub
- Go to vercel.com, import the repo
- In Environment Variables, paste the same two env vars from `.env.local`
- Deploy

Add your production domain to Supabase Auth > URL Configuration so the auth callback works on the live site.

## What's in the app

**5 content sections** mapped to the real HESI outline:
- Airway, Respiration & Ventilation
- Cardiology
- Trauma & Neurology
- Medical & Special Populations
- EMS Operations

**65 flashcards** - facts, dosing, formulas, signs, mnemonics. Tap to flip, rate your recall.

**30 scenarios** - clinical decision-making questions. Each one has three-part rationale:
1. Why the correct answer is correct
2. Why the specific wrong answer the user picked is wrong
3. A clinical pearl with key takeaways

**Weak Spots** - every scenario you miss gets tracked. Drill just your misses.

**Mixed Practice** - 10 random scenarios from every section, HESI-style flow.

**Mock Exams** - Full (all 30) or Quick (15) exams with per-section score breakdown, pass/fail vs 75% threshold, and HESI-scale score estimate.

**Progress persistence** - logged in user's data follows them across devices via Supabase.

## File structure

```
medic-hesi/
├── app/
│   ├── page.tsx                    Landing page
│   ├── login/page.tsx              Login
│   ├── signup/page.tsx             Signup
│   ├── auth/callback/route.ts      Email confirmation handler
│   └── dashboard/
│       ├── layout.tsx              Dashboard wrapper
│       ├── page.tsx                Dashboard home
│       ├── section/[id]/page.tsx   Section detail
│       ├── flashcards/[id]/        Flashcard runner (category or review)
│       ├── quiz/[id]/              Quiz runner (category, mixed, or review)
│       ├── review/page.tsx         Weak spots list
│       └── mock/                   Mock exam selector + runner
├── components/                     Reusable UI
├── lib/
│   ├── content/categories.ts       All flashcards and scenarios (edit this to add content)
│   ├── supabase/                   Client/server/middleware helpers
│   ├── progress.ts                 Progress + weak-spot logic
│   └── utils.ts                    Shuffle, HESI estimate, etc
├── supabase/migrations/            SQL migration
└── middleware.ts                   Auth route protection
```

## Adding more content

All flashcards and scenarios live in `lib/content/categories.ts`.

Scenario structure:

```ts
{
  q: 'Question text',
  opts: ['A option', 'B option', 'C option', 'D option'],
  ans: 1,  // index of correct answer (0-indexed)
  exp: {
    correct: 'Why the right answer is right...',
    wrong: {
      0: 'Why A is wrong...',
      2: 'Why C is wrong...',
      3: 'Why D is wrong...',
    },
    pearl: 'Clinical takeaway...',
  },
}
```

Just add more scenarios to any category's `scenarios` array. Mock exams automatically include all scenarios.

## Customizing the design

Section colors in `tailwind.config.ts` under `theme.extend.colors.sec`. Each of the 5 sections has its own accent.

Typography: Fraunces (display serif) for headlines, Inter for body, JetBrains Mono for labels and data. Loaded from Google Fonts.

Dark mode only by design. Medic app, 3am rig, not a corporate dashboard.

## Disclaimer

This is a study aid built from the HESI content outline. It is not an official NREMT or HESI question bank. Always follow local protocols and the official paramedic curriculum. Good luck.

## License

Free to use, modify, and share. Built for AJ.
