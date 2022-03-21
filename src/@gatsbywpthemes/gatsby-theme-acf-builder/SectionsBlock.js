import React from "react"
import { graphql } from "gatsby"
import {
  Heading,
  Button,
} from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ui-components"
import { HeadlineContent } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/HeadlineContent"
import { SubscribeForm } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/SubscribeForm"

export const fragment = graphql`
  fragment sectionsBlock2 on WpPage_Layoutblocks_Blocks_SectionsBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    sections {
      cssClass
      headline
      headlineTag
      content
      button {
        ...button
      }
    }
  }
`

const SectionsBlock = ({
  cssClass,
  anchorId,
  sections,
  headline,
  headlineTag,
  content,
  ...props
}) => {
  return (
    <div
      className={`sections-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {(headline || content) && (
        <HeadlineContent
          headline={headline}
          content={content}
          headlineTag={headlineTag}
        />
      )}
      {sections?.length > 0 && (
        <div className="sections">
          {sections?.map((section, index) => {
            const { headline, content, headlineTag, button, cssClass } = section
            const hasSubscribe = cssClass?.includes("subscribe")

            return (
              <section key={index} className={`${cssClass ? cssClass : ""}`}>
                {headline && (
                  <Heading
                    tag={headlineTag}
                    className="headline"
                    dangerouslySetInnerHTML={{ __html: headline }}
                  />
                )}
                {content && (
                  <div
                    className="content-text"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
                {hasSubscribe && (
                  <div className="subscribe-container">
                    <SubscribeForm />
                  </div>
                )}
                {button && (
                  <div className="button-container">
                    <Button button={button} className="button" />
                  </div>
                )}
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SectionsBlock
