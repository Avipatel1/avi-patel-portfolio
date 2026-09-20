# Avi Patel — Portfolio

Responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS.
Requires Node.js 22.12+ (verified with 22.15.0) and npm.

## Commands

- npm install — install dependencies; use npm ci for repeatable installs from the lockfile.
- npm run dev — serve at http://127.0.0.1:5173 with hot module replacement.
- npm run typecheck — check strict TypeScript types.
- npm run build — type-check and create a production bundle in dist/.
- npm run preview — serve the production build locally.
- npm run check:browser — check the running dev server with Playwright and installed Microsoft Edge on Windows. On other systems, install Chromium using npx playwright install chromium first.

## Structure

    public/                 Résumé, favicon, static simulation previews
    src/
      components/           Header, project card, contact form, illustration, icons
      data/projects.ts      Typed project content and repository links
      styles/index.css      Tailwind import, theme, responsive styles
      App.tsx               Homepage composition and copy
      main.tsx              React entry point
    scripts/                Asset preparation and browser verification

## Content and scope

Both projects are explicitly in development. Expandable project notes describe
the current approach and limitations; dedicated case-study pages are a future
addition. Lab reports and the research navigation item are omitted until content
is available. The résumé is supplied by Avi Patel.

The contact form opens a populated mailto draft in the visitor's email client.
It does not send, store, or submit messages to a backend. The direct email link
is also available. Connect an email delivery service before changing this to a
server-delivered form.

The hero orbit illustration is decorative. Project SVGs are derived from the
existing local simulation output, not prediction benchmarks or validation results.
To regenerate them, pass your two data paths:

    node scripts/prepare-visuals.mjs "<n-body-folder>/solar_system_data.txt" "<chaos-folder>/chaos_training_data.txt"

No project source directories or full simulation datasets are required to run
the website. Fonts are local system fonts; no external font service is needed.