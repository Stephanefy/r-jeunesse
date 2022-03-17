require('dotenv').config();



module.exports = {
  siteMetadata: {
    title: `Marie Rose Ah Moye Distributeur indépendant Jeunesse`,
    description: `Distributeur Jeunesse Global à la Réunion, Découvrez l'univers de Jeunesse`,
    author: `stephanefy`,
    siteUrl: `https://www.rosah-jeunesse.re/`,
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
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options:{
        siteUrl: `https://wwww.rosah-jeunesse.re`
      }
    },
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
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     query: `
    //     {
    //       allSitePage {
    //         nodes {
    //           path
    //         }
    //     }`,
    //     resolveSiteUrl: () => siteUrl,
    //     resolvePages: ({
    //       allSitePage: { nodes: allPages },
    //     }) => {
    //       return allPages.map(page => {
    //         return { ...page}
    //       })
    //     },
    //     serialize: ({ path, modifiedGmt }) => {
    //       return {
    //         url: path,
    //         lastmod: modifiedGmt,
    //       }
    //     },
    //   },
    // }
    // ,
    // {
      // {
      //   resolve: `gatsby-plugin-sitemap`,
      //   options: {
      //     query: `{
      //       site {
      //         siteMetadata {
      //           siteUrl
      //         }
      //       }
      //       allSitePage {
      //           nodes {
      //             path
      //           }
      //       }
      //     }`,
      //     serialize: ({ site, allSitePage }) => {
      //       let pages = []
      //       allSitePage.nodes.map(path => {
      //         pages.push({
      //           url: site.siteMetadata.siteUrl + path,
      //           changefreq: `daily`,
      //           priority: 0.7,
      //         })
      //       })
      //       return pages
      //     },
      //   },
      // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.rosah-jeunesse.re',
        sitemap: 'https://www.rosah-jeunesse.re/sitemap/sitemap-0.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        policy: [{userAgent: '*', allow: '/'}]
        // env: {
        //   development: {
        //     policy: [{ userAgent: '*', disallow: ['/'] }]
        //   },
        //   production: {
        //     policy: [{ userAgent: '*', allow: '/' }]
        //   }
        }
      }
    }
  ],
}
