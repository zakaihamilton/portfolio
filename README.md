# Zakai Hamilton Portfolio

A Next.js portfolio for eight software projects. The site uses TypeScript, the App Router, and CSS Modules. Project content and images are stored locally in this repository; there is no database or runtime dependency on sibling projects.

## Run locally

Requirements: Node.js 24.22.0 (Node 24 LTS) and pnpm 10.33.0.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Open http://localhost:3000.

## Quality checks

```sh
pnpm run health
pnpm run build
```

RepNix requires type, lint, formatting, accessibility, and dead-code coverage. GitHub Actions runs these checks and a production build on pushes and pull requests.

## Content

Project descriptions, technology labels, images, and outbound links live in src/data/projects.ts. Add a project there and place its image in public/projects; the project detail route is generated from the catalog.
