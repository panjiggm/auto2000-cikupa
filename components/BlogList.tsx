'use client';

import { BlogProps } from '@types';
import { useState } from 'react';
import ClientSideRoute from './ClientSideRoute';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }: { blogs: BlogProps[] }) => {
  const articlesShown = 4;

  const [loadMore, setLoadMore] = useState<number>(articlesShown);

  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 gap-y-16 pb-24">
      {blogs.slice(0, loadMore)?.map((blog) => (
        <ClientSideRoute route={`/blog/${blog.slug}`} key={blog._id}>
          <BlogCard blog={blog} />
        </ClientSideRoute>
      ))}
    </div>
  );
};

export default BlogList;
