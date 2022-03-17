import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout isNotFound={true}>
    <Seo title="404: Not found" />
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{height:"80vh"}}>
      <div className="row">
        <div className="col-12 my-auto">
          <h1>404: Page inexistante</h1>
          <p>
            OOps cette page n'existe pas veuillez cliquez sur le logo ou sur
            Accueil dans la navigation
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
