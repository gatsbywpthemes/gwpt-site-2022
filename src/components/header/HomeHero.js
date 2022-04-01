import React, { useState } from "react"
import heroImage from "../../images/hero-image.svg"
import clsx from "clsx"
import { SubscribeModal } from "../subscribe/SubscribeModal"

export const HomeHero = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="items-center justify-between py-10 center-container lg:flex">
        <div className="space-y-7 left">
          <h1 className="text-4xl !leading-tight md:text-6xl lg:text-4xl xl:text-6xl">
            Gatsby themes{" "}
            <span className="text-gradient bg-gradient-to-r from-pink to-gold">
              designed to work <br className="hidden lg:block" /> with{" "}
            </span>
            WordPress
          </h1>
          <h3 className="text-3xl leading-normal">
            Get your feet wet with <br /> our free theme!
          </h3>
          <div
            className={clsx(
              `inline-block p-1 rounded-full`,
              `bg-gradient-to-r from-hotPink to-gold`,
              `shadow-xl hover:shadow-2xl shadow-[#212338]/50 hover:shadow-gold hover:-translate-y-1`,
              `transition duration-500`
            )}
          >
            <button
              className="px-8 py-4 text-xl font-semibold rounded-full bg-light text-text"
              onClick={() => setIsOpen(true)}
            >
              Get your{" "}
              <span className="text-xl font-black text-orange-600 sm:text-2xl">
                FREE
              </span>{" "}
              theme now!
            </button>
          </div>
        </div>
        {/* <StaticImage src={heroImage} alt="" width={600} height={450} /> */}
        <img src={heroImage} alt="" className="hidden lg:block" />
      </div>

      <SubscribeModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
