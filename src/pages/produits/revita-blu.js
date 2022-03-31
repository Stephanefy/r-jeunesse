import React from "react"
import Layout from "../../components/layout"
import RevitaBluBg from '../../assets/img/bg/RevitaBLU_Feb10-2020_2.jpeg'
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const RevitaBlu = () => {
  return (
    <Layout isNotRoot={true}>
      <Seo 
        title="RevitaBlū™ le mix délicieux et rafraîchissant"
        description="Complément alimentaire végétal composé
        d’algues bleues, de baies d’argousier, d’aloe vera et de poudre
        d’eau de noix de coco."
      />
      <section id="revita-blu">
        <h1 className="text-center revita-blu-title">RevitaBlū</h1>
        <div className="row d-flex justify-content-center">
          <div class="col-xl-6 col-lg-12">
            <div class="section-title mb-60">
              <div className="text-center">
                <p className="fs-6">Complément alimentaire végétal composé
        d’algues bleues, de baies d’argousier, d’aloe vera et de poudre
        d’eau de noix de coco.</p>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <StaticImage
                  src="../../assets/img/portfolio/revitablu-package.png"
                  width="300"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  alt="img-revita-blu"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"
          style={{
            background:`url(${RevitaBluBg}) no-repeat fixed`,
            backgroundSize: `cover`
          }}
        >

        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-xl-6 col-lg-6 col-md-12 mx-2">
            <div
              className="mb-60 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h4 className="revita-blu-title">Le meilleur de vous-même</h4>
              <p>
                RevitaBlūTM est un complément alimentaire végétal composé
                d’algues bleues, de baies d’argousier, d’aloe vera et de poudre
                d’eau de noix de coco.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <h4 className="revita-blu-title">Caractéristiques</h4>
              <ul style={{ listStyleType: "circle" }}>
                <li className="my-1">
                  Formule exclusive composée d'ingrédients à base de plantes{" "}
                </li>
                <li className="my-1">Nourrit et soutient votre corps</li>
                <li className="my-1">
                  L'aloe vera offre une protection antioxydante.
                </li>
                <li className="my-1">
                  Sachets individuels, faciles à partager.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a 
          href="https://rosa3103.jeunesseglobal.com/fr-FR/revitablu"
          className="theme-btn revita-blu-button d-inline-block mx-auto my-5"
          >
            Plus d'informations
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default RevitaBlu
