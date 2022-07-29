import React from "react"
import { MainMenu } from "../menu"
import { Branding } from "./Branding"
import { Slidemenu } from "./SlideMenu"
import Headroom from "react-headroom"
import clsx from "clsx"
import bgGradientJpg from "../../images/hero-gradient.jpg"
import bgGradient from "../../images/hero-gradient.svg"
import bgLightWave from "../../images/light-wave.svg"
import { HomeHero } from "./HomeHero"
import { detect } from "detect-browser"

const HeaderContent = (props) => {
  return (
    <div className={"flex justify-between center-container"} {...props}>
      <div className="flex space-x-3">
        <Branding title="Gatsby WP Themes" />
        {/* {search && <SearchModal />} */}
      </div>
      <div className="flex items-center space-x-5">
        <MainMenu orientation="H" className="hidden lg:flex" />
        <Slidemenu className="lg:hidden" />
      </div>
    </div>
  )
}

export const Header = ({ isHomePage, ...props }) => {
  // const { addWordPressSearch: search, addColorModes } = useThemeOptions()
  const browser = detect()

  return (
    <>
      {isHomePage ? (
        <header
          className="relative h-[720px] md:h-[830px] bg-left-top object-cover bg-no-repeat bg-cover text-light overflow-hidden"
          css={{
            backgroundImage: `url(${
              browser.name === "safari" ? bgGradientJpg : bgGradient
            })`,
          }}
        >
          <div
            className="absolute bottom-0 left-0 h-[230px] object-cover bg-no-repeat bg-cover w-[105%]"
            css={{ backgroundImage: `url(${bgLightWave})` }}
          />

          {/* <Wave
            width="100%"
            height={230}
            className="absolute bottom-0 left-0 object-cover bg-no-repeat bg-cover"
          /> */}
          <div className="py-6">
            <HeaderContent />
            <HomeHero />
          </div>
        </header>
      ) : (
        <Headroom className="z-10">
          <header
            className={clsx(
              "sm:py-7 py-5 relative shadow-lg",
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
