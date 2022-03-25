import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"
import Features from "../components/features"
import About from "../components/about"
import ProductsPortfolio from "../components/portfolio"
import Products from "../components/products"
import Contact from "../components/contact"

const IndexPage = ({ location }) => {
  ''

  ''

  return (
    <Layout>
      <Seo
        title="Accueil"
        description="Distributeur Jeunesse Global Réunion, Découvrez les produits Jeunesse Global, sa large gamme de produits innovants qui vous aideront dans votre recherche de Beauté et de Bien-être"
      />
      <Carousel />
      <Features />
      <About />
      <Products />
      <Contact />
    </Layout>
  )
}

export default IndexPage
