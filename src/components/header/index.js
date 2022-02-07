import React from "react"
import { MainMenu } from "../menu"

import { Branding } from "./Branding"
import { Slidemenu } from "./SlideMenu"
import { SearchModal } from "../search/SearchModal"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import Headroom from "react-headroom"
import clsx from "clsx"
import { window } from "browser-monads"
import { HeroGradient, Wave } from "../SVG"
import bgGradient from "../../images/hero-gradient.svg"
import { HomeHero } from "./HomeHero"

const HeaderContent = (props) => {
  return (
    <div className={"flex justify-between center-container"} {...props}>
      <div className="flex space-x-3">
        <Branding title="Gatsby WP Themes" />
        {/* {search && <SearchModal />} */}
      </div>
      <div className="flex items-center space-x-5">
        <MainMenu orientation="H" className="hidden md:flex" />
        <Slidemenu className="md:hidden" />
      </div>
    </div>
  )
}

export const Header = ({ ...props }) => {
  const { addWordPressSearch: search, addColorModes } = useThemeOptions()
  const path = window.location.pathname
  const isHome = path === "/"
  return (
    <>
      {isHome ? (
        <header
          className="relative h-[830px] bg-left-top object-cover bg-no-repeat text-light"
          css={{ backgroundImage: `url(${bgGradient})` }}
        >
          <Wave
            width="100%"
            height={230}
            className="absolute bottom-0 left-0"
          />
          <div className="py-6">
            <HeaderContent />
            <HomeHero />
          </div>
        </header>
      ) : (
        <Headroom className="z-10">
          <header
            className={clsx(
              "py-10 relative shadow-lg",
              "bg-gradient-to-tr from-[#390066] via-purple-900 to-[#ff5c2d]",
              "text-headerColor dark:text-dark-headerColor"
            )}
            {...props}
          >
            <HeaderContent />
          </header>
        </Headroom>
      )}
    </>
  )
}
