import React from 'react';
import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-8 md:mt-16 px-4 lg:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold capitalize text-3xl lg:text-4xl mb-2 dark:text-light">Recent Posts</h2>
        <Link href="/categories/all" className="inline-block font-medium text-accent underline underline-offset-2 text-sm lg:text-lg">view all</Link>
      </div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-12 sm:gap-x-4 md:gap-8 lg:gap-16 mt-6">
        {
          sortedBlogs.slice(0, 6).map((blog, index) => (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default RecentPosts;
