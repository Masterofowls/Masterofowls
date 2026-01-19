# Portfolio Website Setup Guide

This guide will help you set up and deploy your portfolio website to GitHub Pages.

## Prerequisites

- **Bun** installed on your system ([bun.sh](https://bun.sh))
- **Git** installed
- **GitHub account**

## Initial Setup

### 1. Install Bun (if not already installed)

**Windows:**

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

**macOS/Linux:**

```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Install Project Dependencies

```bash
cd c:\Users\froggy\Masterofowls
bun install
```

### 3. Development Server

Run the development server to see your portfolio locally:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## GitHub Pages Deployment

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/Masterofowls/Masterofowls
2. Click **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Build and deployment**, select:
   - **Source:** GitHub Actions

### 2. Push to GitHub

The GitHub Actions workflow is already configured. Simply push your code:

```bash
git add .
git commit -m "Add portfolio website"
git push origin main
```

### 3. Wait for Deployment

- Go to the **Actions** tab in your repository
- Wait for the "Deploy Next.js Portfolio to GitHub Pages" workflow to complete
- Your site will be live at: https://masterofowls.github.io/Masterofowls/

## Project Structure

```
Masterofowls/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Main page composition
│   │   └── globals.css         # Global styles and theme
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── tabs.tsx
│   │   ├── sections/           # Portfolio sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── Navigation.tsx      # Navigation bar
│   │   └── ThreeBackground.tsx # 3D animated background
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
│   └── .nojekyll              # Disable Jekyll processing
├── next.config.js              # Next.js configuration for GitHub Pages
├── tailwind.config.ts          # Tailwind CSS theme
├── components.json             # shadcn/ui configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── bun.lockb                   # Bun lockfile
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server locally
- `bun run lint` - Run ESLint
- `bun run export` - Build and export static files

## Customization Guide

### 1. Personal Information

Update your information in these files:

**Contact Information:** [src/components/sections/ContactSection.tsx](src/components/sections/ContactSection.tsx)

```typescript
const contactInfo = [
  { label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { label: "Telegram", value: "@yourhandle", href: "https://t.me/yourhandle" },
  // ...
];
```

**Hero Section:** [src/components/sections/HeroSection.tsx](src/components/sections/HeroSection.tsx)

```typescript
const words = ["Full Stack Developer", "Your Title", ...];
```

### 2. Projects

Edit [src/components/sections/ProjectsSection.tsx](src/components/sections/ProjectsSection.tsx) to add/remove projects:

```typescript
const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description",
    url: "https://your-project.com",
    preview: "https://your-project.com",
    tags: ["React", "Next.js"],
  },
  // Add more projects...
];
```

### 3. Skills

Update [src/components/sections/SkillsSection.tsx](src/components/sections/SkillsSection.tsx):

```typescript
const skills = {
  frontend: [
    { name: "Your Skill", level: 95 },
    // Add more skills...
  ],
  // More categories...
};
```

### 4. Theme Colors

Edit [tailwind.config.ts](tailwind.config.ts) to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(189 100% 50%)", // Change this
    // ...
  }
}
```

### 5. Metadata & SEO

Update [src/app/layout.tsx](src/app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  // ...
};
```

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `.next` folder and `node_modules`:
   ```bash
   rm -rf .next node_modules bun.lockb
   bun install
   bun run build
   ```

### GitHub Pages Not Updating

1. Check the Actions tab for deployment errors
2. Ensure GitHub Pages is configured to use GitHub Actions
3. Verify the workflow file is in `.github/workflows/deploy.yml`

### Local Development Issues

1. Make sure you're using the correct Node/Bun version
2. Clear the Next.js cache:
   ```bash
   rm -rf .next
   bun run dev
   ```

## Features

✅ **Modern Tech Stack:**

- Next.js 14 with App Router
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui
- Three.js for 3D graphics
- Framer Motion for animations

✅ **Sections:**

- Hero with animated typing effect
- About with feature cards
- Skills with interactive tabs
- Projects with live iframe previews
- Contact with social links

✅ **Performance:**

- Static Site Generation (SSG)
- Optimized for GitHub Pages
- Lazy loading and code splitting
- Responsive design

✅ **Deployment:**

- Automated GitHub Actions workflow
- Deploys on every push to `main`
- No manual deployment needed

## Next Steps

1. **Customize Content:** Update personal information, projects, and skills
2. **Add Images:** Place images in `public/` folder and reference them
3. **Test Locally:** Run `bun run dev` to preview changes
4. **Deploy:** Push to GitHub and watch it deploy automatically

## Support

For issues or questions:

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [shadcn/ui components](https://ui.shadcn.com/)
- Consult [Tailwind CSS docs](https://tailwindcss.com/)

---

Happy coding! 🚀
