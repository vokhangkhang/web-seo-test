export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export interface BlogPostWithNavigation extends BlogPost {
  previous?: BlogPost;
  next?: BlogPost;
  related: BlogPost[];
}