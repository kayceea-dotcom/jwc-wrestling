# JWC Girls Wrestling — Setup Guide

## One-time local setup

Run these commands in Git Bash from `C:\Projects`:

```bash
# 1. Copy the project folder here from wherever you unzipped it
# (or clone after pushing to GitHub)

cd C:\Projects\jwc-wrestling

# 2. Install dependencies
npm install

# 3. Test it locally
npm run dev
# → open http://localhost:3000
```

## Create GitHub repo

```bash
cd C:\Projects\jwc-wrestling

git init
git add .
git commit -m "initial commit"

# Create a new repo on github.com called "jwc-wrestling"
# then push:
git remote add origin https://github.com/YOUR_USERNAME/jwc-wrestling.git
git branch -M main
git push -u origin main
```

## Deploy to Vercel (separate from ShortStoppr)

```bash
# First time only — creates a NEW Vercel project
npx vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Which scope: (your account)
# - Link to existing project: N
# - Project name: jwc-wrestling
# - Directory: ./
# - Override settings: N

# After that, your standard deploy command:
npm run build && git add . && git commit -m "update" && npx vercel --prod --force
```

## Project structure

```
jwc-wrestling/
├── app/
│   ├── layout.tsx        ← root layout, fonts, navbar/footer
│   ├── page.tsx          ← Home page
│   ├── schedule/page.tsx ← Schedule page
│   ├── coaches/page.tsx  ← Coaches page
│   └── contact/page.tsx  ← Contact & Register page
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── tailwind.config.ts    ← custom colors: navy, gold, cream, steel, crimson
└── globals.css
```

## Color palette

| Name    | Hex       | Used for              |
|---------|-----------|-----------------------|
| navy    | #0A1628   | Backgrounds, text     |
| gold    | #F5B800   | Accent, CTAs          |
| cream   | #F8F6F1   | Light bg sections     |
| steel   | #4A5568   | Body text             |
| crimson | #C0392B   | Eyebrow labels        |

## Fonts

Oswald (display/headings) + Inter (body) loaded via Google Fonts link tag in layout.tsx.
