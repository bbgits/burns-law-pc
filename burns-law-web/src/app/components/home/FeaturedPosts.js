"use client";
import React from "react";
import { sortBlogs } from "@/src/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {

  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-8 md:mt-16 px-4 lg:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl mb-8 dark:text-light">
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-2">
        <article className="col-span-2 relative">
          <BlogLayoutOne blog={blogs[1]} />
        </article>
        <article className="col-span-2 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-2 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
