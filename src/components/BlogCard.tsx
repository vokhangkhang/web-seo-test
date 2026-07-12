import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

/**
 * Card component for displaying a blog post summary.
 *
 * The component follows the project's UI conventions:
 *  - Uses Tailwind CSS for styling.
 *  - Renders the thumbnail with `next/image` for optimization.
 *  - Shows title, excerpt, publish date, reading time and tags.
 *  - Wraps the whole card in a link to the post detail page.
 */
interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white">
      <Link href={`/blog/${post.slug}`}> 
        <div>
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={400}
            height={200}
            className="w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
            <p className="text-gray-600 mb-2 line-clamp-3">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              <span>{post.readingTime}</span>
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 rounded px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
