import React from "react"

import { PostEntryMedia } from "../post/PostEntryMedia"
import { PostEntryTitle } from "../post/PostEntryTitle"
import { Taxonomies } from "../post/Taxonomies"
import clsx from "clsx"
import tw, { css } from "twin.macro"

export const Archivepost = ({
  isFirst = false,
  post,
  className = null,
  ctx,
  ...props
}) => {
  return (
    <article
      className={clsx(
        "card transition  duration-500 hover:-translate-y-1 relative",

        className
      )}
      {...props}
    >
      <div className="relative">
        <PostEntryMedia
          post={post}
          location="archive"
          imageLoading={isFirst ? "eager" : "lazy"}
          className=" aspect-w-16 aspect-h-7 rounded-t-md"
        />
        <Taxonomies
          post={post}
          taxName="categories"
          singularName="category"
          className="absolute right-3 top-3"
          css={{
            ".taxonomy-item": tw`px-3 py-2 text-[10px] font-semibold tracking-wider uppercase rounded-[3px] bg-gradient-to-tr from-pink to-gold  text-white transition duration-500`,
          }}
        />
      </div>

      <div className="p-5 md:p-8">
        <PostEntryTitle
          post={post}
          location="archive"
          className="mb-5 text-gradient bg-gradient-to-r from-pink to-orange-300"
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
          className="mb-10 line-clamp-2"
        />

        <Taxonomies
          post={post}
          taxName="tags"
          singularName="tag"
          className="absolute bottom-5 md:bottom-8 left-5 md:left-8"
          css={{
            ".taxonomy-item": tw`px-2 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-[3px] bg-gradient-to-tr from-purple-900 to-cyan-500  text-white transition duration-500`,
          }}
        />
      </div>
    </article>
  )
}
