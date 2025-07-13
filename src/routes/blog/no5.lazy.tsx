// src/routes/blog/dog.lazy.tsx
import { createLazyFileRoute } from '@tanstack/react-router';
import { BlogPage } from '../../pages/BlogPage';
import { blogData } from '../../data/blogData';

export const Route = createLazyFileRoute('/blog/no5')({
  component: () => <BlogPage data={blogData.no5} />,
});
