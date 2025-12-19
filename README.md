# TopFinanzas US - Next.js Project

This is the Next.js codebase for the TopFinanzas US migration.

- **Legacy source**: https://us.topfinanzas.com (WordPress)
- **Target**: Next.js App Router + TypeScript + Tailwind

The project includes a blog, credit-card comparison/recommender flows, and supporting financial content.

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
