import React from "react"
import clsx from "clsx"

export const Label = ({ className, children, ...props }) => {
  return (
    <label
      className={clsx("", className)}
      css={{
        ".form-field-checkbox &, .form-field-radio &": {
          display: "flex",
          alignItems: "center",
        },
      }}
      {...props}
    >
      {children}
    </label>
  )
}
