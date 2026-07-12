import { getAllBlogPosts } from '@/utils/blog';
import BlogCard from '@/components/BlogCard';
import { generateMeta } from '@/utils/seo';
import { SITE_URL } from '@/constants/site';
import Link from 'next/link';

/**
 * SEO metadata for the blog listing page.
 */
export const generateMetadata = async () => {
  const baseMeta = generateMeta('Blog', 'Explore all blog posts');
  return {
    ...baseMeta,
    openGraph: {
      title: baseMeta.title,
      description: baseMeta.description,
      url: `${SITE_URL}/blog`,
      type: 'website',
      images: baseMeta.image ? [{ url: baseMeta.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: baseMeta.title,
      description: baseMeta.description,
      images: baseMeta.image ? [baseMeta.image] : [],
    },
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
  };
};

/**
 * Blog index page – displays a grid of blog post cards.
 */
export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="container mx-auto py-8 px-4">
      <Link href={"/"}>Profile</Link>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
