import React from "react";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

import Tag from "../Elements/Tag";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group h-80 inline-block overflow-hidden rounded-xl cursor-pointer ">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-80 group-hover:scale-105 transition-all ease duration-300 cursor-pointer
        bg-gradient-to-b from-transparent from-0% to-dark rounded-xl z-20"
      ></div>
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full w
         rounded-xl z-1"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="h-80 sm:h-100 md:h-120 lg:h-140 min-w-full object-center object-cover rounded-xl z-0 group-hover:scale-105 transition-all ease duration-300 cursor-pointer"
        />

        <div className="absolute top-40 p-10 z-30 w-full">
          <Tag
            link={`/categories/${slug(blog.tags[0])}`}
            name={blog.tags[0]}
            className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
          />
          <Link href={blog.url} className="mt-3">
            <h2 className="font-bold capitalize text-2xl text-light mt-4">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                {blog.title}
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
