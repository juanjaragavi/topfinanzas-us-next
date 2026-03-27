# TopFinanzas US - Next.js Project

This is the Next.js codebase for the TopFinanzas US migration.

- **Legacy source**: <https://us.topfinanzas.com> (WordPress)
- **Target**: Next.js 15 App Router + TypeScript + Tailwind CSS

The project features a modern, accessible UI powered by Shadcn/UI and Radix primitives. Features include multi-step credit-card comparison flows, advanced analytics integration (TopAds, GTM), and supporting financial content arrays. For a detailed breakdown of the UI/UX architecture, see [ui-ux-changelog.md](docs/ui-ux-changelog.md).

## Environment setup

1. Copy `.env.example` to `.env.production`
2. Fill the required values
3. Never commit secrets to the repo
4. On servers, environment files are stored in `/opt/app` with restricted permissions

## Run / deploy

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## API keys

All API keys and sensitive values must be managed via environment variables and must never be hard-coded.
