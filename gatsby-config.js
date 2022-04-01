require('dotenv').config();



module.exports = {
  siteMetadata: {
    title: `Marie Rose Ah Moye Distributeur indépendant Jeunesse`,
    description: `Distributeur Jeunesse Global à la Réunion, Découvrez l'univers de Jeunesse`,
    author: `stephanefy`,
    siteUrl: `https://www.rosah-jeunesse.re/`,
    image: `src/assets/team/rosah-402936fee595fc688b59cb9c8f5e8178.jpg`

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
        siteUrl: `https://www.rosah-jeunesse.re/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rosah-jeunesse`,
        short_name: `rosah-jeunesse`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/logo/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly : ['main.scss','glightbox.min.css','tiny-slider.min.css'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: [
          //   'container-lg',       
          //   'container-sm',
          //   'container-xl',
          //   'container-xxl',
          //   'container-fluid',
          //   'col',
          //   'row',
          //   'col-xl-6',
          //   'col-lg-6',
          //   'col-xl-8', 
          //   'col-lg-10', 
          //   'col-sm-12', 
          //   'mx-auto', 
          //   'mt-5',
          //   'carousel-content'
          //     ] 
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/mentions-légales', '/produits/ampm', '/produits/gamme-luminesce'],
      },

    },
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
      resolve: `gatsby-plugin-minify`,
      options: {
        removeAttributeQuotes: true,
        minifyCSS: true,
        minifyJS: true,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://www.rosah-jeunesse.re/sitemap/sitemap-0.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        policy: [{userAgent: '*', allow: '/'}],
        host: null
        // env: {
        //   development: {
        //     policy: [{ userAgent: '*', disallow: ['/'] }]
        //   },
        //   production: {
        //     policy: [{ userAgent: '*', allow: '/' }]
        //   }
        
      }
    },

  ],
}
