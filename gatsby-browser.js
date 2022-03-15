/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "@popperjs/core/dist/umd/popper.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import 'bootstrap/dist/js/bootstrap.bundle'
import "./src/assets/css/LineIcons.2.0.css"
import "./src/assets/css/animate.css"
import "./src/assets/css/tiny-slider.css"
import "./src/assets/css/glightbox.min.css"


export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
  }) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/produits/naara`, `/produits/reserve`,`/produits/revita-blu`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
      window.scrollTo(0, 0)
    }
  
    return false
  }