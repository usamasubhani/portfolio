require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Usama Subhani`,
    description: `Usama Subhani's Portfolio`,
    author: `@basedusama`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /* eslint-disable @typescript-eslint/camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Usama Subhani's Portfolio`,
        short_name: `Subhani`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    /* eslint-enable @typescript-eslint/camelcase */
    `gatsby-plugin-offline`,
  ],
};
