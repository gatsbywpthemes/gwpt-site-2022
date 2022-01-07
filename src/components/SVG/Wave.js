import * as React from "react"

export const Wave = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 156.539c193.607 13.301 213.986-272.943 509.966-97.414s445.97-269.267 929.934 97.414c483.97 366.682 0 279.376 0 279.376H0V156.539z"
        fill="#FFF4E6"
      />
    </svg>
  )
}
