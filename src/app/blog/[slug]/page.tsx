import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMeta } from '@/utils/seo';
import { getBlogPostWithNavigation } from '@/utils/blog';
import { BlogPostWithNavigation } from '@/types/blog';

/**
 * Generate SEO metadata for a blog post page.
 * Includes Open Graph, canonical URL and JSON‑LD via the component.
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // `params` is a Promise in the App Router; await it to access the slug.
  const { slug } = await params;
  const post = getBlogPostWithNavigation(slug);
  if (!post) return {};

  const { title, excerpt, thumbnail } = post;
  const meta = generateMeta(title, excerpt, thumbnail);

  const siteUrl = process.env.SITE_URL ?? '';
  const url = `${siteUrl}/blog/${slug}`;

  return {
    ...meta,
    openGraph: {
      title,
      description: excerpt,
      url,
      type: 'article',
      images: [{ url: thumbnail }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt,
      images: [thumbnail],
    },
    alternates: {
      canonical: url,
    },
  };
}

/** Extract a simple Table of Contents from markdown content. */
function extractToc(content: string) {
  const toc: { level: number; text: string; id: string }[] = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      toc.push({ level, text, id });
    }
  }
  return toc;
}

/** Very lightweight markdown → HTML conversion for headings and paragraphs. */
function markdownToHtml(content: string) {
  return content
    .split('\n')
    .map((line) => {
      const heading = line.match(/^(#{1,6})\s+(.*)/);
      if (heading) {
        const level = heading[1].length;
        const text = heading[2];
        const id = text
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '');
        return `<h${level} id="${id}">${text}</h${level}>`;
      }
      if (line.trim() === '') return '';
      return `<p>${line}</p>`;
    })
    .join('\n');
}

/** Server component rendering a single blog post. */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // `params` is a Promise; await it to get the slug.
  const { slug } = await params;
  const post = getBlogPostWithNavigation(slug);
  if (!post) notFound();

  const { title, excerpt, thumbnail, publishedAt, readingTime, tags, content, previous, next, related } = post as BlogPostWithNavigation;

  const toc = extractToc(content);
  const htmlContent = markdownToHtml(content);

  const siteUrl = process.env.SITE_URL ?? '';
  const pageUrl = `${siteUrl}/blog/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    image: thumbnail,
    author: { '@type': 'Person', name: 'Author' },
    datePublished: publishedAt,
    description: excerpt,
    url: pageUrl,
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className='flex flex-wrap gap-3'>
        <Link href={"/"}>Profile</Link>
        <Link href={"/blog"}>| blog</Link>
      </div>
      
      <article className="prose lg:prose-xl">
        <h1>{title}</h1>
        <Image src={thumbnail} alt={title} width={800} height={400} className="w-full object-cover mb-4" />
        <div className="text-gray-500 mb-2">
          {new Date(publishedAt).toLocaleDateString()} • {readingTime}
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        {/* Table of Contents */}
        {toc.length > 0 && (
          <nav className="mb-6 border rounded p-4 bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
            <ul>
              {toc.map((item) => (
                <li key={item.id} className={`ml-${item.level * 4}`}>
                  <Link href={`#${item.id}`} className="text-blue-600 hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {/* Content */}
        <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {previous && (
            <Link href={`/blog/${previous.slug}`} className="text-blue-600 hover:underline">
              ← {previous.title}
            </Link>
          )}
          {next && (
            <Link href={`/blog/${next.slug}`} className="text-blue-600 hover:underline">
              {next.title} →
            </Link>
          )}
        </div>
        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.id} href={`/blog/${rel.slug}`} className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white">
                  <Image src={rel.thumbnail} alt={rel.title} width={400} height={200} className="w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{rel.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        {/* JSON‑LD */}
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </article>
    </main>
  );
}
