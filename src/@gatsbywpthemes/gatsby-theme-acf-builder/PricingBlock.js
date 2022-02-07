import React from "react"
import { graphql } from "gatsby"
import { HeadlineContent } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/HeadlineContent"
import { window } from "browser-monads"
import { Tooltip } from "react-tippy"
import "react-tippy/dist/tippy.css"

export const fragment = graphql`
  fragment pricingBlock on WpPage_Layoutblocks_Blocks_PricingBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    tables {
      cssClass
      price
      productId
      title
      description
      features {
        description
        feature
      }
    }
  }
`

const PricingBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  tables,
  ...props
}) => {
  return (
    <section
      className={`pricing-block ${cssClass ? cssClass : ""}`}
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
      {tables && (
        <div className="tables-container">
          {tables.map((table, index) => {
            const { cssClass, price, productId, title, features, description } =
              table

            const Paddle = window.Paddle
            console.log("paddle", Paddle)
            const openCheckout = () => {
              Paddle.Checkout.open({
                product: productId,
                locale: "en",
              })
            }
            return (
              <div
                className={`pricing-table ${cssClass ? cssClass : ""}`}
                key={index}
              >
                <div className="pb-10 mb-10 border-b border-dashed">
                  <Tooltip title={description} size="small" arrow distance={15}>
                    <div className="title">{title}</div>
                  </Tooltip>
                  <div className="price">
                    ${price}
                    <span>/year</span>
                  </div>
                  <div className="text-xs font-semibold vat">exc. VAT</div>
                </div>

                <div className="features">
                  {features &&
                    features.map((item, index) => {
                      const { description, feature } = item
                      return (
                        <div className="feature-container" key={index}>
                          <Tooltip
                            className=" description"
                            title={description}
                            size="small"
                            arrow
                            distance={5}
                          >
                            <div
                              className={`feature ${
                                description && "underline"
                              }`}
                            >
                              {feature}
                            </div>
                          </Tooltip>
                        </div>
                      )
                    })}
                </div>
                {productId && (
                  <div className="button-container">
                    <button
                      onClick={openCheckout}
                      className={`${
                        cssClass.includes("base")
                          ? "from-cyan-500 to-purple-700"
                          : "from-gold to-hotPink"
                      }`}
                    >
                      buy now
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default PricingBlock
