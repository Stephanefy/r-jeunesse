require('dotenv').config();



module.exports = {
  siteMetadata: {
    title: `Marie Rose Ah Moye Distributeur indépendant Jeunesse`,
    description: `Distributeur Jeunesse Global à la Réunion, Découvrez l'univers de Jeunesse`,
    author: `stephanefy`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    keywords: `produits naturel, Bien-être, Jeunesse, Jeunesse Global Réunion`,
    image: `src/assets/logo/Jeunesse-Logo-Gray.png`

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/logo/jeunesse-top-illustration.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      resourceType: `video`,
      prefix: `rosah-jeunesse/`
      }
    },
    `gatsby-plugin-smoothscroll`
  ],
}
