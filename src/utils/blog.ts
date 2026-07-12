import { blogPosts, getAllPosts, getPostBySlug, getRelatedPosts } from '../data/blog-posts';
import { BlogPost, BlogPostWithNavigation } from '../types/blog';

export function getAllBlogPosts(): BlogPost[] {
  return getAllPosts();
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getPostBySlug(slug);
}

export function getBlogPostWithNavigation(slug: string): BlogPostWithNavigation | undefined {
  const currentIndex = blogPosts.findIndex(post => post.slug === slug);
  if (currentIndex === -1) return undefined;

  const currentPost = blogPosts[currentIndex];
  const previous = currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
  const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined;

  // Find related posts (same tags)
  const related = getRelatedPosts(currentPost, 3);

  return {
    ...currentPost,
    previous,
    next,
    related
  };
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.slice(0, 3);
}