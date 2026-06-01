# Hannes Röd Portfolio

Modern personal portfolio for software engineering, AI, and game development roles. Built with React, TypeScript, Vite, and Tailwind CSS, and ready for GitHub Pages or Vercel.

## Features

- Responsive single-page portfolio with Home, About, Skills, Projects, Experience, Education, Blog, and Contact sections
- Dark and light mode with persisted preference
- Timeline-based CV sections
- Accessible navigation and contact form structure
- SEO metadata, Open Graph image, and semantic content
- GitHub Pages deployment workflow
- Data-driven content in `src/data/portfolio.ts`

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production build is emitted to `dist/`.

For the current GitHub Pages branch-root setup, publish the built files into the repository root with:

```bash
npm run publish:root
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, go to **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Push to `main`, or manually run the `Deploy portfolio to GitHub Pages` workflow.

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site, uploads `dist`, and publishes it through GitHub Pages.

If GitHub Pages is configured to deploy from the `main` branch root instead of GitHub Actions, run `npm run publish:root`, commit the generated root `index.html`, `assets/`, and copied public files, then push.

## Deploy to Vercel

1. Import the repository in Vercel.
2. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

## Customizing Content

Edit `src/data/portfolio.ts` to update:

- Contact links
- Projects
- Skills
- Experience timeline
- Education and certifications
- Blog placeholders

Replace `public/cv-hannes-roed.pdf` with your real CV while keeping the filename, or update the `cvUrl` field in `src/data/portfolio.ts`.
