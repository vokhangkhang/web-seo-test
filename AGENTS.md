# AI Agent Guidelines

This document defines the coding standards and conventions for this project to ensure consistency when multiple AI agents or developers contribute.

## 1. Coding Conventions

- **Language**: TypeScript for all logic. Use strict mode.
- **Style**: Functional programming approach. Prefer `const` over `let`.
- **Async/Await**: Use `async/await` instead of `.then()`/`.catch()`.
- **Error Handling**: Use try-catch blocks in Server Components and API routes. Use error boundaries for client-side errors.
- **Typing**: Always define interfaces or types for function parameters and return values. Avoid `any`.

## 2. Folder Conventions

- `src/app/`: Next.js App Router (Routing, Layouts, Pages, Server Actions).
- `src/components/`: Reusable, atomic UI components (Buttons, Inputs, Cards).
- `src/features/`: Domain-specific logic and components (e.g., `features/blog/`).
- `src/data/`: Static mock data and local JSON files.
- `src/lib/`: Third-party library configurations (e.g., `lib/utils.ts` for Tailwind merge).
- `src/types/`: Global TypeScript definitions.
- `src/utils/`: Pure helper functions.
- `src/constants/`: Application-wide constants (e.g., `constants/site.ts`).

## 3. Naming Conventions

- **Files**: `kebab-case.tsx` (e.g., `blog-card.tsx`).
- **Components**: `PascalCase` (e.g., `BlogCard`).
- **Functions/Variables**: `camelCase` (e.g., `getBlogPosts`).
- **Types/Interfaces**: `PascalCase` (e.g., `BlogPost`).
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `SITE_NAME`).

## 4. Component Rules

- **Server First**: Use React Server Components (RSC) by default. Only use `'use client'` when interactivity (hooks like `useState`, `useEffect`) is strictly required.
- **Semantic HTML**: Use `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>` appropriately for SEO and accessibility.
- **Image Optimization**: Always use `next/image` for all images.
- **Props**: Always define a `Props` interface for every component.

## 5. SEO Rules

- **Metadata**: Every page must have a `generateMetadata` function or a `metadata` object.
- **Headings**: Maintain a strict heading hierarchy (`h1` -> `h2` -> `h3`). Only one `h1` per page.
- **Schema**: Implement JSON-LD for `Article` and `Person` on relevant pages.
- **Alt Text**: All images must have descriptive `alt` text.
- **URLs**: Use clean, slug-based URLs (e.g., `/blog/how-to-use-ai`).

## 6. Blog Rules

- **Data Structure**: Every blog post must have a unique `slug`, `title`, `excerpt`, `thumbnail`, `publishedAt`, `readingTime`, `tags`, and `content`.
- **Content**: Content should be structured with Markdown-compatible headings.
- **Navigation**: Always provide "Previous" and "Next" article links at the bottom of blog posts.
- **Related Posts**: Suggest 3 related posts based on shared tags.