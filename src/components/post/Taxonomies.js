import React from "react"
import { TaxonomyItem } from "./TaxonomyItem"

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <div className="flex flex-wrap items-center" {...props}>
        {taxonomies.map((cat) => (
          <TaxonomyItem
            key={cat.slug}
            taxName="category"
            item={cat}
            className="mx-1 "
          />
        ))}
      </div>
    )
  )
}
