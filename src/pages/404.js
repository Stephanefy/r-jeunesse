import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout isNotFound={true}>
    <Seo title="404: Not found" />
    <div className="container d-flex justify-content-center align-items-center">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>  
  </Layout>
)

export default NotFoundPage
