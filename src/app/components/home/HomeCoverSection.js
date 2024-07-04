import React from 'react'
import { sortBlogs } from '@/src/utils'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../Elements/Tag'

const HomeCoverSection = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs)
    const blog = sortedBlogs[0] // default uses all
    // alternatively, name specific blog as header:
    // const blog = 
  return (
    <div className="w-full inline-block">
    <article className='flex flex-col items-start justify-end  mx-6 md:mx-10 relative h-[50vh] md:h-[85vh]'>
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full 
        bg-gradient-to-b from-transparent from-0% to-dark rounded-xl md:rounded-3xl z-10"></div>
      <Image src={blog.image.filePath.replace("../public","")}
      placeholder='blur'
      blurDataURL={blog.image.blurhashDataUrl}
      alt={blog.title}
      fill
      className='w-full h-3/5 object-center object-cover rounded-xl md:rounded-3xl -z-10'
      sizes='100vw'
      priority
      />

      <div className="w-7/8 sm:w-3/4 p-2 xxs:p-4 xs:p-8 sm:p-12 md:p-16 flex flex-col items-start justify-center z-10 text-light">
        <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} />
        <Link href={blog.url} className="mt-3">
        <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">{blog.title}</span>
        </h1>
        </Link>
        <p className="inline-block mt-4 text-xl font-in">{blog.description}</p>
      </div>
    </article>
    </div>
  )
}

export default HomeCoverSection
