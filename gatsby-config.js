const DEFAULT_OPTIONS = require("@gatsbywpthemes/gatsby-theme-blog-data/utils/defaultOptions")
const fs = require("fs")
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
})

const {
  title,
  author,
  description,
  pathPrefix,
  ...options
} = require("./config")
const siteUrl = process.env.GATSBY_SITE_URL || options.siteUrl
options.wordPressUrl = process.env.GATSBY_WP_URL

module.exports = {
  pathPrefix,
  siteMetadata: {
    title,
    description,
    author,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@gatsbywpthemes/gatsby-theme-wp-comments`,
    `@gatsbywpthemes/gatsby-theme-wp-search`,
    `@gatsbywpthemes/gatsby-plugin-gwpt-tailwind`,
    `@gatsbywpthemes/gatsby-theme-acf-builder`,
    {
      resolve: `gatsby-plugin-paddle`,
      options: {
        vendorId: "126819", // Find in your account settings.
        debug: false, // Set true to start the debug mode.
      },
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-gwpt-packages`,
      options: {
        ...DEFAULT_OPTIONS,
        ...options,
      },
    },

    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: {
        ...options,
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
  ],
}
