import React from "react"
import heroImage from "../../images/hero-image.svg"
import { StaticImage } from "gatsby-plugin-image"

export const HomeHero = () => {
  return (
    <div className="flex items-center justify-between mx-auto mt-5 max-w-big">
      <div className="left">
        <h1 className="text-6xl leading-tight">
          Gatsby themes{" "}
          <span className="text-gradient bg-gradient-to-r from-pink to-yellow">
            designed to work with{" "}
          </span>
          WordPress
        </h1>
      </div>
      {/* <StaticImage src={heroImage} alt="" /> */}
      <img src={heroImage} alt="" />
    </div>
  )
}
