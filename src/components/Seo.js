import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({
  title = "Gatsby WP Themes",
  description = "Premium Gatsby Themes for WordPress",
  shareImage,
}) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />
      <meta name="twitter:image" content={shareImage} />
    </Helmet>
  )
}

export default SEO
