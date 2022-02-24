import React from "react"
import { graphql } from "gatsby"
import { Image } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ui-components/Image"
import { HeadlineContent } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/HeadlineContent"
import { GradientBorderPurple } from "../../components/ui-components"

import Slider from "react-slick"
import "@gatsbywpthemes/gatsby-theme-acf-builder/src/styles/slick.scss"

export const fragment = graphql`
  fragment testimonialsBlock on WpPage_Layoutblocks_Blocks_TestimonialsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    quotesItems {
      author
      position
      content
      picture {
        ...basicImage
      }
    }
  }
`

const TestimonialsBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  quotesItems,
  ...props
}) => {
  const slides = quotesItems.length > 3 ? 3 : quotesItems.length
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
    autoplaySpeed: 5000,
  }
  return (
    <section
      className={`testimonials-block  py-20 my-20 md:py-28 md:my-28 bg-gradient-to-tr from-[#390066] via-purple-900 to-[#ff5c2d] ${
        cssClass ? cssClass : ""
      }`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      <div className="container max-w-screen-lg px-4 mx-auto md:px-0">
        {(headline || content) && (
          <HeadlineContent
            headline={headline}
            content={content}
            headlineTag={headlineTag}
          />
        )}
        <Slider {...sliderSettings}>
          {quotesItems &&
            quotesItems.map((quote, index) => {
              const { author, position, picture, content } = quote
              return (
                <div className=" testimonial center-container" key={index}>
                  <div className="items-center gap-10 md:flex">
                    {picture && (
                      <div className="flex justify-center">
                        <GradientBorderPurple className="p-1 mb-10 rounded-full md:mb-0 ">
                          <Image
                            img={picture}
                            className=" author-pic-container rounded-full w-[130px] h-[130px] in"
                            imgClassName="author-pic rounded-full"
                          />
                        </GradientBorderPurple>
                      </div>
                    )}
                    <div>
                      <div
                        className="text-2xl font-medium testimonial-content text-light"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                      <div className="mt-5 italic font-medium author text-gradient bg-gradient-to-r from-gold to-hotPink">
                        <div className="author-name">{author}</div>
                        <div className="author-position">{position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    </section>
  )
}

export default TestimonialsBlock
