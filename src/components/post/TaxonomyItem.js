import React from "react"
import { Link } from "gatsby"

export const TaxonomyItem = ({ taxName, item, className, ...props }) => (
  <Link
    className={`taxonomy-item ${className ? className : ""}`}
    to={`${item.uri}`}
    aria-label={`visit ${taxName} ${item.name} page`}
    {...props}
  >
    {item.name}
  </Link>
)
