import React from "react"
import clsx from "clsx"

export const Archivetitle = ({ name, text, className, ...props }) => {
  return (
    <div
      className={clsx(
        "inline-block",
        "px-7 py-2 rounded-md shadow-lg",
        "bg-gradient-to-tr from-pink to-gold",

        className
      )}
      {...props}
    >
      <h1
        className={`text-white text-lg font-semibold uppercase tracking-wider`}
      >
        {text} {name}
      </h1>
    </div>
  )
}
