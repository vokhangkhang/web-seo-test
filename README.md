# Giới thiệu

This is a personal website built with Next.js App Router, TypeScript, Tailwind CSS, and Bun. It is designed for SEO, performance, and Docker deployment, suitable for showcasing articles and personal branding.

## Technology Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Bun (package manager & runtime)
- Docker
- Git

## Features

- Responsive design for mobile and desktop
- SEO-friendly metadata, Open Graph, Twitter Cards, JSON-LD schemas
- Fast performance with Server Components, next/image, lazy loading
- Dockerized production build
- Mock blog data with ~10 articles
- Comprehensive README and AGENTS.md for AI agent friendly development

## Installation

### Development

```bash
bun install
bun run dev
```

### Build

```bash
bun run build
```

### Start

```bash
bun run start
```

### Docker

```bash
docker compose up -d
```

## Project Structure

```
src/
├── app/          # Next.js App Router pages and layout
├── components/   # Reusable UI components
├── features/
│   └── blog/     # Blog feature implementation
├── data/         # Mock data files
├── lib/          # Utility libraries
├── types/        # TypeScript types
├── utils/        # Helper functions
└── constants/    # Constant definitions
```

## SEO Features

- Dynamic `generateMetadata` for each page
- Proper `<head>` structure with Open Graph and Twitter Cards
- Canonical URLs
- JSON-LD Article and Person schemas
- Sitemap and robots.txt generation

## Performance

- Lighthouse SEO score > 95
- Performance score > 90
- Server Components used by default
- next/image for optimized images
- Lazy loading for off-screen images
- Dynamic imports for code splitting

## Deployment

The app can be deployed to any Docker-compatible environment. The provided `docker-compose.yml` builds a multi-stage Docker image and runs the production server on port 3000.

## License

MIT