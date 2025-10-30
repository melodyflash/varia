# Variable Objects · Artful IoT Web Experience

This is a Vite + React single-page application for **Variable Objects**, an Ocean Beach, CA based IoT design studio that blends technology, artistry, and business intelligence.

## Available Scripts

- `npm run dev` – Launches the development server.
- `npm run build` – Builds the production bundle.
- `npm run preview` – Serves the built bundle locally.

> **Note:** Install dependencies with `npm install` (or your preferred package manager) before running the scripts.

## Features

- Animated, theme-aware landing page highlighting IoT-driven ROI metrics.
- Dedicated routes for Services, Case Studies, and About content.
- Research-backed statistics with contextual storytelling.
- Dark/light theme toggle (dark by default) plus accessibility controls for text size, contrast, and motion.
- Interactive UI accents with subtle hover and motion flourishes inspired by immersive installations.
- Contact form CTA wired to `mailto:awesome3dpf@proton.me` and footer contact/social details.

## Tech Stack

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com)

## Folder Structure

```
src/
  components/   # Shared layout and UI components
  data/         # Metrics and case-study content
  pages/        # Route views (Home, Services, Case Studies, About)
  styles/       # Global theme and layout styles
```

## Accessibility

The floating control hub allows visitors to toggle large text, high contrast, and motion reduction settings. Theme and accessibility preferences persist via `localStorage` and respect `prefers-color-scheme` defaults.

---
Built with heart for the West Coast creative business community.
