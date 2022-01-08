import React from "react"
import heroImage from "../../images/hero-image.svg"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"

export const HomeHero = () => {
  return (
    <div className="flex items-center justify-between py-10 mx-auto max-w-big">
      <div className="space-y-7 left">
        <h1 className="text-6xl leading-tight">
          Gatsby themes{" "}
          <span className="text-gradient bg-gradient-to-r from-pink to-yellow">
            designed to work with{" "}
          </span>
          WordPress
        </h1>
        <h3 className="text-3xl leading-normal">
          Get your feet wet with <br /> our free theme!
        </h3>
        <div
          className={clsx(
            `inline-block p-1 rounded-full`,
            `bg-gradient-to-r from-purple to-yellow`,
            `shadow-xl hover:shadow-2xl shadow-[#212338]/50 hover:shadow-yellow hover:-translate-y-1`,
            `transition duration-500`
          )}
        >
          <button className="px-8 py-4 text-xl font-semibold rounded-full bg-light text-text ">
            Get your{" "}
            <span className="text-2xl font-black text-orange-600">FREE</span>{" "}
            theme now!
          </button>
        </div>
      </div>
      {/* <StaticImage src={heroImage} alt="" width={600} height={450} /> */}
      <img src={heroImage} alt="" />
    </div>
  )
}
