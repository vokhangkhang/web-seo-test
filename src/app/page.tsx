import Image from 'next/image';
import Link from 'next/link';
import { AUTHOR_NAME, AUTHOR_DESCRIPTION, AUTHOR_AVATAR, SKILLS, SOCIAL_LINKS } from '../constants/site';
import { getFeaturedBlogPosts } from '../utils/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang Chủ',
  description: 'Trang web cá nhân với các bài viết blog về phát triển web, lập trình AI và công nghệ hiện đại',
  keywords: ['trang web cá nhân', 'blog', 'phát triển web', 'lập trình AI', 'Next.js'],
  openGraph: {
    title: 'Trang Chủ | Trang Web Cá Nhân',
    description: 'Trang web cá nhân với các bài viết blog về phát triển web, lập trình AI và công nghệ hiện đại',
    url: '/',
    images: [{
      url: '/images/og-home.jpg',
      width: 1200,
      height: 630,
      alt: 'Trang Chủ'
    }]
  }
};

export default function HomePage() {
  // Server‑side data fetching – no client‑side hooks needed
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        aria-label="Hero"
        className="py-20 bg-gradient-to from-primary to-secondary text-white"
      >
        <div className="container mx-auto text-center max-w-5xl">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
            <Image
              src={AUTHOR_AVATAR}
              alt={AUTHOR_NAME}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{AUTHOR_NAME}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{AUTHOR_DESCRIPTION}</p>
          <div className="flex justify-center gap-4">
            <Link
              href={SOCIAL_LINKS.github}
              className="px-6 py-2 bg-cyan-500 text-primary rounded-lg font-medium hover:bg-blue-300 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={SOCIAL_LINKS.linkedin}
              className="px-6 py-2 bg-cyan-500 text-primary rounded-lg font-medium hover:bg-blue-300 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        aria-label="About Me"
        className="py-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Về Tôi</h2>
            <div className="prose prose-lg mx-auto dark:prose-invert">
                <p className="mb-4">
                  Tôi là một lập trình viên fullstack đam mê với hơn 10 năm kinh nghiệm xây dựng các ứng dụng web hiện đại.
                  Kiến thức của tôi bao phủ cả công nghệ frontend và backend, tập trung mạnh vào hiệu năng,
                  khả năng mở rộng và trải nghiệm người dùng.
                </p>
                <p>
                  Trang web này là blog cá nhân của tôi, nơi tôi chia sẻ những hiểu biết về phát triển web, lập trình AI,
                  và các thực tiễn kỹ thuật phần mềm hiện đại. Tôi tin vào việc học liên tục và luôn cập nhật
                  các công nghệ mới nhất.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section aria-label="Skills" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kỹ Năng Của Tôi</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SKILLS.map(skill => (
              <div
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section
        aria-label="Featured Articles"
        className="py-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Bài Viết Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
                <Link
                  href="/blog"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Xem Tất Cả Bài Viết
                </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section aria-label="Contact" className="py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Liên Hệ</h2>
            <div className="prose mx-auto dark:prose-invert">
                <p className="mb-6">
                  Tôi luôn sẵn sàng cho những cơ hội mới, hợp tác và những cuộc trò chuyện thú vị.
                  Hãy liên hệ nếu bạn muốn thảo luận về dự án, chia sẻ ý tưởng, hoặc chỉ đơn giản là chào hỏi!
                </p>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Link
                href={SOCIAL_LINKS.github}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                {/* Placeholder for an icon – could be an SVG or next/image if desired */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}