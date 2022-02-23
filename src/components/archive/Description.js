import React from "react"

export const Description = ({ description, className = "", ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={`description card p-5 sm:p-8 italic ${className}`}
      {...props}
    />
  )
}
