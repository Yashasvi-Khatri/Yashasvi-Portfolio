# Yashasvi Khatri — Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

© 2026 Yashasvi Khatri. All rights reserved. Khatrii Enterprises™.

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Node.js 18+ installed — download from [nodejs.org](https://nodejs.org/)
- npm or yarn

### Steps

```bash
# 1. Extract / navigate to this folder
cd yashasvi-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # Tailwind base + custom utilities
│
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero section with animated terminal
│   ├── Terminal.tsx      # Animated terminal component
│   ├── Projects.tsx      # 4 project cards
│   ├── Experience.tsx    # DRDO internship timeline
│   ├── Skills.tsx        # Categorized skill chips
│   ├── About.tsx         # Bio + interests
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer
│   └── SectionHeader.tsx # Reusable section heading
│
├── hooks/
│   └── useInView.ts      # Scroll-based intersection hook
│
├── public/
│   └── resume.pdf        # ← PUT YOUR RESUME PDF HERE
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 📄 Add Your Resume PDF

Place your resume PDF at:
```
public/resume.pdf
```
The navbar "Resume" button links to it automatically.

## 🌐 Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI once
npm install -g vercel

# Inside the project folder
vercel

# Follow prompts → it gives you a live URL instantly
```

### Option B — Vercel Dashboard (no CLI)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — done in ~60 seconds

### Custom Domain (Optional)
In Vercel dashboard → Project → Settings → Domains → add your domain.

## 🛠 Customization

| What to change | Where |
|---|---|
| Your name, meta title | `app/layout.tsx` |
| Hero text | `components/Hero.tsx` |
| Projects | `components/Projects.tsx` → `PROJECTS` array |
| Skills | `components/Skills.tsx` → `SKILLS` object |
| Experience | `components/Experience.tsx` → `BULLETS` array |
| About bio | `components/About.tsx` |
| Social links | `components/Navbar.tsx`, `components/Contact.tsx` |
| Colors / fonts | `tailwind.config.ts`, `app/globals.css` |

## 📦 Build for Production

```bash
npm run build   # Creates optimized production build
npm run start   # Runs production build locally
```

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: DM Sans + DM Mono (Google Fonts)
- **Icons**: Lucide React
- **Deployment**: Vercel
