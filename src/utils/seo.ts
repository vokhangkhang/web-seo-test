/**
 * Utility functions for generating SEO metadata.
 *
 * The project follows the guidelines in AGENTS.md for SEO.  The helper
 * below provides a simple `generateMeta` function that returns an object
 * containing the common meta tags used by Next.js pages.
 *
 * The function accepts a title, description, and optional image URL.  It
 * uses the constants defined in `src/constants/site.ts` for default
 * values.
 */

import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "../constants/site";

export interface MetaData {
  title: string;
  description: string;
  url: string;
  image?: string;
}

/**
 * Generate SEO meta data for a page.
 * @param title Page title (will be appended with the site name).
 * @param description Page description.
 * @param image Optional image URL for Open Graph.
 * @returns MetaData object.
 */
export function generateMeta(
  title: string,
  description: string,
  image?: string
): MetaData {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullDescription = description || SITE_DESCRIPTION;
  const url = `${SITE_URL}/${title.replace(/\s+/g, "-").toLowerCase()}`;
  return {
    title: fullTitle,
    description: fullDescription,
    url,
    image,
  };
}
