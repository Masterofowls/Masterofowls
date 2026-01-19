# Daniil Shtarkman - Portfolio Website

A modern, interactive portfolio website built with Next.js, Three.js, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Next.js 14** - React framework with App Router
- **Three.js** - 3D graphics and animations
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Framer Motion** - Smooth animations and transitions
- **Lucide Icons** - Modern icon library
- **TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach
- **GitHub Pages Deployment** - Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **3D Graphics:** Three.js
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages
- **Package Manager:** Bun

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Masterofowls/Masterofowls.git
cd Masterofowls
```

2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Build for production:

```bash
bun run build
```

The static files will be generated in the `out` directory.

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

The deployment workflow:

1. Triggers on push to `main` branch
2. Builds the Next.js application using Bun
3. Exports static files
4. Deploys to GitHub Pages

**Live URL:** https://masterofowls.github.io/Masterofowls/

## 📁 Project Structure

```
Masterofowls/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── sections/           # Page sections
│   │   ├── Navigation.tsx      # Navigation component
│   │   └── ThreeBackground.tsx # Three.js background
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Sections

- **Hero** - Introduction with animated text
- **About** - Professional summary and core competencies
- **Skills** - Technical skills with interactive tabs
- **Projects** - Featured projects with live previews
- **Contact** - Contact information and social links

## 🔗 Featured Projects

1. **3D Game Platform** - Three.js interactive game
2. **Video Player Application** - Custom video player
3. **Yoom** - Video conferencing platform
4. **Creative Portfolio** - Modern portfolio website

## 📧 Contact

- **Email:** mrdaniilsht@gmail.com
- **Telegram:** [@froggytalents](https://t.me/froggytalents)
- **GitHub:** [Masterofowls](https://github.com/Masterofowls)
- **Location:** Saint Petersburg, Russia

## 📄 License

© 2026 Daniil Shtarkman. All rights reserved.
