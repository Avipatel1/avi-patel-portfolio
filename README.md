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

The N-body project is in development; the chaos project is a research prototype.
Expandable project notes describe
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

The chaos project notes include the recorded 100-epoch, seed-42 comparison from
project revision 853977f. Diagnostic PNGs and unmodified metrics JSON files were
copied from its docs/ directory into public/images/ and public/results/.
These are saved experimental results, not training rerun by the website.
The summary distinguishes one-step accuracy from recursive forecasting and
documents the single-trajectory and reference-energy-drift limitations.

The N-body entry reflects project revision edb1d7d. Its current Sun-relative
preview is copied from docs/orbits.png. The downloadable analyzer report was
regenerated from the saved default dataset using analyze_physics.py; the simulator
was not rerun. The orbital table reproduces that report, including insufficient
outer-planet coverage. Conservation, convergence, and performance benchmarks
remain future work. The older orbital SVG generator is retained as an optional
asset tool; the homepage uses the updated PNG from the project instead.
