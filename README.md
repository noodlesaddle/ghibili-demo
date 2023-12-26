# Installation

Install frontend dependencies using PNPM or NPM

- **PNPM (Recommended)**: `pnpm install`
- **NPM**: `npm install`

# ENV download
# Development

- To run the project for development:
  - **PNPM**: `pnpm dev`
  - **NPM**: `npm dev`<br/>It will use .env and .env.ci files to start server.

# TailwindCSS

- To generate the tailwind css (When you add classes of tailwindCSS you have to generate again): `npm run build:css`
- To generate the tailwind css for production as minimized: `npm run build:css:prod`

# Build

- Before building staging or production build you need to run tailwind build for production
  - To generate the tailwind css for production as minimized:
    - **PNPM**: `pnpm run build:css:prod`
    - **NPM**: `npm run build:css:prod`
- To create a build for staging environment (Pre-production):
  - **PNPM**: `pnpm run build:staging`
  - **NPM**: `npm run build:staging`<br/>It will use .env and .env.staging files to create build.

