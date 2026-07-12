import { BlogPost } from '../types/blog';

/**
 * Mock data for blog posts. The array contains 10 posts covering the
 * requested topics: Next.js, SEO, AI Coding, Docker, NestJS, React, and
 * TypeScript. Each post includes all required fields.
 */
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-coding-saas',
    title: 'Cách dùng AI để build sản phẩm SaaS',
    excerpt: 'Hướng dẫn cách sử dụng AI để xây dựng sản phẩm SaaS từ ý tưởng đến triển khai.',
    thumbnail: '/images/blog/ai-saas.jpg',
    publishedAt: '2023-01-15',
    readingTime: '12 min read',
    tags: ['AI Coding', 'SaaS'],
    content: `
# Cách dùng AI để build sản phẩm SaaS

## Giới thiệu

Trong thời đại công nghệ 4.0, AI đã trở thành một công cụ không thể thiếu trong quá trình phát triển phần mềm. Bài viết này sẽ hướng dẫn bạn cách sử dụng AI để xây dựng sản phẩm SaaS từ ý tưởng đến triển khai.

## Bước 1: Nghiên cứu thị trường

Trước khi bắt đầu xây dựng sản phẩm, bạn cần nghiên cứu thị trường để hiểu rõ nhu cầu của khách hàng. AI có thể giúp bạn phân tích dữ liệu thị trường một cách nhanh chóng và chính xác.

## Bước 2: Thiết kế sản phẩm

Sử dụng AI để tạo ra các thiết kế UI/UX chuyên nghiệp. Các công cụ như Midjourney, DALL-E có thể giúp bạn tạo ra các bản thiết kế đẹp mắt chỉ trong vài phút.

## Bước 3: Phát triển sản phẩm

AI có thể giúp bạn viết code nhanh hơn và hiệu quả hơn. Các công cụ như GitHub Copilot, Claude Code có thể giúp bạn hoàn thành các đoạn code phức tạp một cách dễ dàng.

## Bước 4: Kiểm thử sản phẩm

Sử dụng AI để tự động hóa quá trình kiểm thử. Các công cụ như Selenium, Appium có thể được tích hợp với AI để tạo ra các kịch bản kiểm thử thông minh.

## Bước 5: Triển khai sản phẩm

AI có thể giúp bạn tối ưu hóa quá trình triển khai sản phẩm. Các công cụ như Kubernetes, Docker có thể được tích hợp với AI để tự động hóa quá trình triển khai.

## Kết luận

Sử dụng AI trong quá trình xây dựng sản phẩm SaaS không chỉ giúp bạn tiết kiệm thời gian và công sức mà còn giúp bạn tạo ra các sản phẩm chất lượng cao hơn.
`
  },
  {
    id: '2',
    slug: 'modern-ai-workflow',
    title: 'Workflow AI Coding hiện đại',
    excerpt: 'Khám phá workflow AI coding hiện đại giúp tăng năng suất phát triển phần mềm.',
    thumbnail: '/images/blog/ai-workflow.jpg',
    publishedAt: '2023-02-20',
    readingTime: '15 min read',
    tags: ['AI Coding', 'Workflow'],
    content: `
# Workflow AI Coding hiện đại

## Giới thiệu

Workflow AI coding hiện đại đã thay đổi cách chúng ta phát triển phần mềm. Bài viết này sẽ giới thiệu cho bạn một workflow AI coding hiện đại giúp tăng năng suất phát triển phần mềm.

## Bước 1: Sử dụng AI để tạo ý tưởng

AI có thể giúp bạn tạo ra các ý tưởng mới cho sản phẩm của mình. Các công cụ như ChatGPT, Claude có thể giúp bạn brainstorming các ý tưởng sáng tạo.

## Bước 2: Sử dụng AI để viết code

Các công cụ như GitHub Copilot, Claude Code có thể giúp bạn viết code nhanh hơn và hiệu quả hơn. Bạn có thể sử dụng các công cụ này để hoàn thành các đoạn code phức tạp một cách dễ dàng.

## Bước 3: Sử dụng AI để kiểm thử code

AI có thể giúp bạn kiểm thử code một cách tự động. Các công cụ như Selenium, Appium có thể được tích hợp với AI để tạo ra các kịch bản kiểm thử thông minh.

## Bước 4: Sử dụng AI để tối ưu hóa code

AI có thể giúp bạn tối ưu hóa code để cải thiện hiệu suất. Các công cụ như SonarQube, ESLint có thể được tích hợp với AI để tạo ra các gợi ý tối ưu hóa code thông minh.

## Bước 5: Sử dụng AI để triển khai code

AI có thể giúp bạn triển khai code một cách tự động. Các công cụ như Kubernetes, Docker có thể được tích hợp với AI để tự động hóa quá trình triển khai.

## Kết luận

Workflow AI coding hiện đại không chỉ giúp bạn tăng năng suất phát triển phần mềm mà còn giúp bạn tạo ra các sản phẩm chất lượng cao hơn.
`
  },
  {
    id: '3',
    slug: 'claude-code-developers',
    title: 'Claude Code cho lập trình viên',
    excerpt: 'Hướng dẫn sử dụng Claude Code để cải thiện năng suất lập trình.',
    thumbnail: '/images/blog/claude-code.jpg',
    publishedAt: '2023-03-10',
    readingTime: '10 min read',
    tags: ['AI Coding', 'Claude'],
    content: `
# Claude Code cho lập trình viên

## Giới thiệu

Claude Code là một công cụ AI mạnh mẽ giúp lập trình viên cải thiện năng suất làm việc. Bài viết này sẽ hướng dẫn bạn cách sử dụng Claude Code để cải thiện năng suất lập trình.

## Bước 1: Cài đặt Claude Code

Bạn có thể cài đặt Claude Code thông qua các trình duyệt phổ biến như Chrome, Firefox. Sau khi cài đặt, bạn cần đăng nhập vào tài khoản của mình để bắt đầu sử dụng.

## Bước 2: Sử dụng Claude Code để viết code

Claude Code có thể giúp bạn viết code nhanh hơn và hiệu quả hơn. Bạn có thể sử dụng Claude Code để hoàn thành các đoạn code phức tạp một cách dễ dàng.

## Bước 3: Sử dụng Claude Code để kiểm thử code

Claude Code có thể giúp bạn kiểm thử code một cách tự động. Bạn có thể sử dụng Claude Code để tạo ra các kịch bản kiểm thử thông minh.

## Bước 4: Sử dụng Claude Code để tối ưu hóa code

Claude Code có thể giúp bạn tối ưu hóa code để cải thiện hiệu suất. Bạn có thể sử dụng Claude Code để tạo ra các gợi ý tối ưu hóa code thông minh.

## Bước 5: Sử dụng Claude Code để triển khai code

Claude Code có thể giúp bạn triển khai code một cách tự động. Bạn có thể sử dụng Claude Code để tự động hóa quá trình triển khai.

## Kết luận

Claude Code là một công cụ AI mạnh mẽ giúp lập trình viên cải thiện năng suất làm việc. Bạn có thể sử dụng Claude Code để viết code, kiểm thử code, tối ưu hóa code và triển khai code một cách hiệu quả.
`
  },
  {
    id: '4',
    slug: 'codex-agent-workflow',
    title: 'Codex và Agent Workflow',
    excerpt: 'Tìm hiểu về Codex và Agent Workflow trong phát triển phần mềm.',
    thumbnail: '/images/blog/codex-agent.jpg',
    publishedAt: '2023-04-05',
    readingTime: '18 min read',
    tags: ['AI Coding', 'Codex'],
    content: `
# Codex và Agent Workflow

## Giới thiệu

Codex và Agent Workflow là hai công nghệ AI mạnh mẽ giúp cải thiện quá trình phát triển phần mềm. Bài viết này sẽ giới thiệu cho bạn về Codex và Agent Workflow trong phát triển phần mềm.

## Codex

Codex là một công cụ AI mạnh mẽ giúp lập trình viên viết code nhanh hơn và hiệu quả hơn. Codex có thể giúp bạn hoàn thành các đoạn code phức tạp một cách dễ dàng.

## Agent Workflow

Agent Workflow là một công nghệ AI giúp tự động hóa quá trình phát triển phần mềm. Agent Workflow có thể giúp bạn tự động hóa các tác vụ như viết code, kiểm thử code, tối ưu hóa code và triển khai code.

## Kết hợp Codex và Agent Workflow

Bạn có thể kết hợp Codex và Agent Workflow để cải thiện quá trình phát triển phần mềm. Codex có thể giúp bạn viết code nhanh hơn và hiệu quả hơn, trong khi Agent Workflow có thể giúp bạn tự động hóa các tác vụ phát triển phần mềm.

## Kết luận

Codex và Agent Workflow là hai công nghệ AI mạnh mẽ giúp cải thiện quá trình phát triển phần mềm. Bạn có thể sử dụng Codex và Agent Workflow để viết code, kiểm thử code, tối ưu hóa code và triển khai code một cách hiệu quả.
`
  },
  {
    id: '5',
    slug: 'nextjs-app-router',
    title: 'Next.js App Router từ cơ bản đến nâng cao',
    excerpt: 'Hướng dẫn sử dụng Next.js App Router từ cơ bản đến nâng cao.',
    thumbnail: '/images/blog/nextjs-router.jpg',
    publishedAt: '2023-05-15',
    readingTime: '20 min read',
    tags: ['Web Development', 'Next.js'],
    content: `
# Next.js App Router từ cơ bản đến nâng cao

## Giới thiệu

Next.js App Router là một tính năng mới trong Next.js giúp bạn tạo ra các ứng dụng web hiện đại. Bài viết này sẽ hướng dẫn bạn cách sử dụng Next.js App Router từ cơ bản đến nâng cao.

## Bước 1: Cài đặt Next.js

Bạn có thể cài đặt Next.js thông qua npm hoặc yarn. Sau khi cài đặt, bạn cần tạo một dự án Next.js mới để bắt đầu sử dụng App Router.

## Bước 2: Tạo các trang mới

Bạn có thể tạo các trang mới trong thư mục pages của dự án Next.js. Mỗi trang mới sẽ được tự động định tuyến dựa trên tên file.

## Bước 3: Sử dụng App Router

App Router giúp bạn tạo ra các ứng dụng web hiện đại với các tính năng như lazy loading, code splitting và server-side rendering. Bạn có thể sử dụng App Router để cải thiện hiệu suất của ứng dụng web.

## Bước 4: Tối ưu hóa ứng dụng web

Bạn có thể tối ưu hóa ứng dụng web bằng cách sử dụng các tính năng của Next.js như lazy loading, code splitting và server-side rendering. Các tính năng này giúp cải thiện hiệu suất của ứng dụng web.

## Kết luận

Next.js App Router là một tính năng mới trong Next.js giúp bạn tạo ra các ứng dụng web hiện đại. Bạn có thể sử dụng App Router để cải thiện hiệu suất của ứng dụng web.
`
  },
  {
    id: '6',
    slug: 'seo-nextjs',
    title: 'SEO cho Next.js',
    excerpt: 'Hướng dẫn tối ưu hóa SEO cho ứng dụng Next.js.',
    thumbnail: '/images/blog/seo-nextjs.jpg',
    publishedAt: '2023-06-20',
    readingTime: '15 min read',
    tags: ['Web Development', 'SEO'],
    content: `
# SEO cho Next.js

## Giới thiệu

SEO (Search Engine Optimization) là một phần quan trọng trong quá trình phát triển ứng dụng web. Bài viết này sẽ hướng dẫn bạn cách tối ưu hóa SEO cho ứng dụng Next.js.

## Bước 1: Sử dụng các thẻ meta

Bạn có thể sử dụng các thẻ meta để cải thiện SEO cho ứng dụng Next.js. Các thẻ meta giúp các công cụ tìm kiếm hiểu rõ hơn về nội dung của trang web.

## Bước 2: Sử dụng các thẻ heading

Bạn có thể sử dụng các thẻ heading để cải thiện SEO cho ứng dụng Next.js. Các thẻ heading giúp các công cụ tìm kiếm hiểu rõ hơn về cấu trúc của trang web.

## Bước 3: Sử dụng các thẻ alt cho hình ảnh

Bạn có thể sử dụng các thẻ alt cho hình ảnh để cải thiện SEO cho ứng dụng Next.js. Các thẻ alt giúp các công cụ tìm kiếm hiểu rõ hơn về nội dung của hình ảnh.

## Bước 4: Sử dụng các liên kết nội bộ

Bạn có thể sử dụng các liên kết nội bộ để cải thiện SEO cho ứng dụng Next.js. Các liên kết nội bộ giúp các công cụ tìm kiếm hiểu rõ hơn về cấu trúc của ứng dụng.

## Kết luận

SEO là một phần quan trọng trong quá trình phát triển ứng dụng web. Bạn có thể sử dụng các thẻ meta, thẻ heading, thẻ alt cho hình ảnh và các liên kết nội bộ để cải thiện SEO cho ứng dụng Next.js.
`
  },
  {
    id: '7',
    slug: 'nestjs-architecture',
    title: 'NestJS Architecture Patterns',
    excerpt: 'Khám phá các mô hình kiến trúc trong NestJS để xây dựng ứng dụng mạnh mẽ.',
    thumbnail: '/images/blog/nestjs-architecture.jpg',
    publishedAt: '2023-07-10',
    readingTime: '15 min read',
    tags: ['NestJS'],
    content: `
# NestJS Architecture Patterns

## Giới thiệu

NestJS là một framework Node.js mạnh mẽ, cung cấp kiến trúc dựa trên mô-đun và dependency injection. Bài viết này sẽ giới thiệu các mô hình kiến trúc phổ biến trong NestJS.

## Mô hình MVC

NestJS hỗ trợ mô hình MVC, giúp tách biệt logic, dữ liệu và giao diện.

## Mô hình Clean Architecture

Clean Architecture giúp tách rời các tầng logic, dễ bảo trì và mở rộng.

## Mô hình Microservices

NestJS hỗ trợ xây dựng microservices, giúp chia nhỏ ứng dụng thành các dịch vụ độc lập.

## Kết luận

Những mô hình kiến trúc này giúp bạn xây dựng ứng dụng NestJS có cấu trúc rõ ràng và dễ bảo trì.
`
  },
  {
    id: '8',
    slug: 'react-hooks-best-practices',
    title: 'React Hooks Best Practices',
    excerpt: 'Hướng dẫn các thực tiễn tốt nhất khi sử dụng React Hooks.',
    thumbnail: '/images/blog/react-hooks.jpg',
    publishedAt: '2023-08-15',
    readingTime: '12 min read',
    tags: ['React'],
    content: `
# React Hooks Best Practices

## Giới thiệu

React Hooks giúp quản lý state và side effects một cách hiệu quả. Bài viết này sẽ giới thiệu các thực tiễn tốt nhất khi sử dụng Hooks.

## useState và useEffect

Sử dụng đúng cách để tránh render không cần thiết.

## useCallback và useMemo

Tối ưu hoá performance bằng cách tránh tạo lại hàm và giá trị.

## Custom Hooks

Tái sử dụng logic trong nhiều component.

## Kết luận

Áp dụng các thực tiễn này giúp viết code React sạch và hiệu quả.
`
  },
  {
    id: '9',
    slug: 'typescript-advanced-typing',
    title: 'Advanced TypeScript Typing Techniques',
    excerpt: 'Khám phá các kỹ thuật typing nâng cao trong TypeScript.',
    thumbnail: '/images/blog/typescript-advanced.jpg',
    publishedAt: '2023-09-20',
    readingTime: '18 min read',
    tags: ['TypeScript'],
    content: `
# Advanced TypeScript Typing Techniques

## Giới thiệu

TypeScript cung cấp nhiều tính năng typing mạnh mẽ. Bài viết này sẽ giới thiệu các kỹ thuật nâng cao.

## Mapped Types

Tạo kiểu mới dựa trên kiểu hiện có.

## Conditional Types

Định nghĩa kiểu dựa trên điều kiện.

## Utility Types

Sử dụng các kiểu tiện ích như Partial, Pick, Omit.

## Kết luận

Áp dụng các kỹ thuật này giúp viết code TypeScript mạnh mẽ và an toàn.
`
  },
  {
    id: '10',
    slug: 'docker-frontend-deployment',
    title: 'Docker cho Frontend Deployment',
    excerpt: 'Hướng dẫn triển khai ứng dụng frontend bằng Docker.',
    thumbnail: '/images/blog/docker-frontend.jpg',
    publishedAt: '2023-10-10',
    readingTime: '18 min read',
    tags: ['Docker', 'Frontend'],
    content: `
# Docker cho Frontend Deployment

## Giới thiệu

Docker giúp bạn đóng gói ứng dụng frontend vào một container, dễ dàng triển khai và quản lý.

## Bước 1: Tạo Dockerfile

Viết Dockerfile để build image từ mã nguồn frontend.

## Bước 2: Xây dựng image

Chạy 'docker build' để tạo image.

## Bước 3: Chạy container

Chạy 'docker run' hoặc sử dụng docker-compose để triển khai.

## Kết luận

Docker làm đơn giản quá trình triển khai frontend, giảm thiểu lỗi môi trường.
`
  }
];

/**
 * Return all blog posts.
 */
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

/**
 * Find a post by its slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Return related posts based on shared tags. The current post is excluded.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const related = blogPosts.filter(
    (p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
  );
  return related.slice(0, limit);
}
