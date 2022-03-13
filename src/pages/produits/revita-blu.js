import React from "react"
import Layout from "../../components/layout"
import RevitaBluLogo from "../../assets/img/logo/revita-blu-logo.png"
import RevitaImg from "../../assets/img/portfolio/revitablu-package.png"

const RevitaBlu = () => {
  return (
    <Layout isNotRoot={true}>
      <section id="revita-blu" className="container-md">
        <div className="row d-flex justify-content-center">
          <div class="col-xl-6 col-lg-12">
            <div class="section-title mb-60">
              <div
                className="wow fadeInUp d-flex justify-content-center"
                data-wow-delay=".4s"
                style={{
                  background: "#30b9c9",
                  width: "150px",
                  height: "150px",
                  padding: "1em",
                  borderRadius: "50%",
                  margin: "auto",
                }}
              >
                <img src={RevitaBluLogo} width="200" alt="logo-revita-blu" />
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={RevitaImg}
                  width="300"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  alt="img-revita-blu"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-12 mx-2">
            <div
              className="mb-60 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h4 style={{ color: "#30b9c9" }}>Le meilleur de vous-même</h4>
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
              <h4 style={{ color: "#30b9c9" }}>Caractéristiques</h4>
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
          href="https://www.jeunesseglobal.com/fr-FR/am/pmessentials"
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
