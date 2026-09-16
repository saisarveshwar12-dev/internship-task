# WEBOIN Agency Website

> A premium, minimal, and modern digital design agency landing page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Development](#development)
- [Build & Deploy](#build--deploy)
- [Project Structure](#project-structure)
- [Styling Guidelines](#styling-guidelines)
- [Responsive Design](#responsive-design)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Overview
WEBOIN is a **premium, production‑quality** website for a digital design agency. The design focuses on:
- Professional, elegant, and minimal aesthetics.
- A **glass‑morphism** navigation bar that stays sticky and floats with subtle shadows and borders.
- Fully responsive layouts across a wide range of viewport widths (from 320 px to 1920 px) without horizontal scrolling, clipped content, or overlapping elements.
- Clean, comment‑free source code (all comments have been removed for a lean repository).

## Features
- **Glassmorphism Navbar** – semi‑transparent dark background, backdrop blur, thin border, inner highlight, and subtle shadow.
- **Service Cards** – high‑contrast hover effect with smooth transitions.
- **Project Modal** – detailed case‑study view with metrics, challenge/solution sections, and tech‑stack pills.
- **Monochrome Color System** – primarily black & white, with restrained violet/blue accents for premium feel.
- **Responsive Layout** – crafted for 20+ breakpoints; no media query hacks that merely shrink desktop elements.
- **Tailwind CSS** – utility‑first styling for rapid UI development.
- **Next.js App Router** – file‑system based routing, server‑side rendering, and static optimization.


## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom globals
- **Icons**: lucide‑react
- **Utilities**: clsx, tailwind‑merge
- **Build Tool**: Vite (via Next.js) and Turborepo (if applicable)

## Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/weboin-agency.git
cd weboin-agency

# Install dependencies
npm ci
```
> **Note**: `npm ci` is recommended to ensure a clean install with the exact versions from `package-lock.json`.

## Development
```bash
# Run the development server (default port 3004, adjusts if ports are occupied)
npm run dev
```
Open `http://localhost:3004` in your browser. The site supports hot‑module reloading and will automatically refresh on code changes.

## Build & Deploy
```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```
The build output resides in `.next`. Deploy to any platform that supports Node.js (Vercel, Netlify, Render, etc.).

## Project Structure
```
.
├─ app/                # Next.js app router (pages)
│   ├─ globals.css     # Global Tailwind + custom glass‑navbar CSS
│   ├─ layout.tsx      # Root layout with metadata
│   └─ page.tsx        # Home page composition
├─ components/         # Reusable UI components
│   ├─ Navbar.tsx      # Glassmorphism navigation bar
│   ├─ ServiceCard.tsx # Service cards with hover effect
│   ├─ ProjectModal.tsx# Detailed project modal
│   └─ …               # About, Contact, Footer, etc.
├─ lib/                # Types and data arrays (services, projects)
├─ public/             # Static assets (images, icons)
├─ tsconfig.json       # TypeScript configuration (cleaned)
├─ tailwind.config.ts  # Tailwind configuration
├─ package.json        # Scripts & dependencies
└─ README.md           # <-- you are here
```

## Styling Guidelines
- **Glassmorphism Navbar**: defined in `app/globals.css` under `.glass-navbar` and `.glass-navbar-scrolled`.
- **Monochrome Palette**: primary variables are `--color-bg-dark` (deep black) and `--color-bg-light` (white). Use them for backgrounds, texts, and borders.
- **Hover Effects**: use Tailwind utilities like `group-hover:` for smooth transitions; avoid excessive animations.
- **No Dark/Light Toggle**: the site is intentionally locked to the dark glass‑morphism theme.

## Responsive Design
The UI has been meticulously crafted for the following breakpoints (and smooth interpolation between them):
```
320px, 360px, 375px, 390px, 393px, 412px, 430px, 480px, 540px, 600px,
768px, 820px, 912px, 1024px, 1280px, 1366px, 1440px, 1536px, 1920px
```
Key layout adaptations include:
- Stacked column layout for narrow viewports (≤ 480 px).
- Adjusted spacing and font sizes to maintain readability.
- Re‑organized navigation into a mobile drawer menu.
- Images scale responsively with `max-width: 100%`.

## Scripts
| Script | Description |
|--------|-------------|
| `dev` | Starts the development server with hot reloading. |
| `build` | Generates an optimized production build. |
| `start` | Runs the production server (`next start`). |
| `lint` | (Optional) Runs ESLint / Prettier if configured. |

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make your changes (ensure the code remains comment‑free unless documentation is needed).
4. Run `npm run build` to verify the build succeeds.
5. Open a Pull Request with a clear description of the changes.

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---
