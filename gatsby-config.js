const config = require("./content/data/siteConfig.json")

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.userName,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    social: {
      twitter: config.userTwitter,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 860,
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        remarkPlugins: [
          [
            require("gatsby-remark-vscode").remarkPlugin,
            {
              theme: "Dark+ (default dark)",
              injectStyles: true,
              logLevel: "warn",
            },
          ],
        ],
      },
    },
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId: process.env.ACKEE_ID,
        server: process.env.ACKEE_DOMAIN,
        ignoreLocalhost: true,
        ignoreOwnVisits: true,
        detailed: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: "rubenr.dev",
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [`/blog/tag:*`, `/blog/category:*`],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
