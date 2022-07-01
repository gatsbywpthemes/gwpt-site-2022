import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({
  title = "Gatsby WP Themes",
  description = "Premium Gatsby Themes for WordPress",
  shareImage,
}) => {
  let fullImagePath = `https://gatsbywpthemes.com${shareImage}`
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      {/* <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:card" content="summary_large_image" /> */}

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Gatsby WP Themes" />
      <meta property="og:image" content={fullImagePath} />
      {/* Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@alexadark" />
      <meta name="twitter:site" content="@Gatsby_WP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={fullImagePath} />
      <meta name="twitter:image:alt" content={shareImage?.altText ?? title} />
    </Helmet>
  )
}

export default SEO
