import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from '../components/carousel'
import Features from "../components/features"
import About from "../components/about"
import ProductsPortfolio from "../components/portfolio"
import Products from "../components/products"
import Contact from "../components/contact"


const IndexPage = ({ location }) => {


  console.log(location.pathname)

  console.log(location.pathname.split('/').length)

  
return (
    <Layout>
      <Seo title="Accueil"/>
      <Carousel/>
      <Features/>
      <About />
      <Products/>
      <Contact/>
    </Layout>

)
}

export default IndexPage
