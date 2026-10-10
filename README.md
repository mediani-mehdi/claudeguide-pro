# Guide Angel

A minimal, elegant blog website for learning how to use Claude AI. Built with Next.js 14 and Tailwind CSS.

## Features

- **Hero Section**: Full-screen video background with the provided hero.mp4
- **Minimal Design**: Clean, elegant styling with glass-morphism effects
- **Blog Section**: Sample blog posts with category tags and excerpts
- **Responsive**: Fully responsive design for all screen sizes
- **Modern Animations**: Smooth fade-in animations and hover effects

## Project Structure

```
bloggy-claude/
├── public/
│   └── hero.mp4          # Hero video background
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles with Tailwind
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   └── components/       # React components (empty for now)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Hero Video
The hero section uses `/public/hero.mp4` as the background video. Replace this file with your own video or update the path in `src/app/page.tsx`.

### Styling
Customize colors and fonts in `tailwind.config.ts`. The design uses:
- Dark theme with glass-morphism effects
- Blue-purple gradient accents
- Inter font family

### Blog Posts
Edit the sample blog posts in `src/app/page.tsx` to add your own content.

## Deployment

Deploy to Vercel, Netlify, or any Next.js-compatible hosting:

```bash
npm run build
npm run start
```

## Inspiration

The design takes inspiration from modern AI-focused websites with:
- Full-screen video backgrounds
- Minimal, clean typography
- Glass card effects
- Gradient accents
- Smooth animations

---

Built with ❤️ using Next.js and Tailwind CSS
