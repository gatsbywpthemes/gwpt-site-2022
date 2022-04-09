import React from "react"
import { Taxonomies } from "./Taxonomies"

export const PostEntryMeta = ({ post, ...props }) => {
  return (
    <div className="flex justify-between entry-meta" {...props}>
      <Taxonomies
        post={post}
        taxName="categories"
        singularName="category"
        className="inline btn btn-secondary"
      />
      <Taxonomies
        post={post}
        taxName="tags"
        singularName="tag"
        className="inline btn btn-primary"
      />
    </div>
  )
}
