import React from "react"
import Layout from "../../components/layout"
import AmPmLogo from "../../assets/img/logo/am-pm-essentials--trans-logo.svg"
import AmPmImg from "../../assets/img/portfolio/EU_AM-PM-product-img.png"

const ampm = () => {
  return (
    <Layout isNotRoot={true}>
      <section id="ampm" className="container-md ">
        <div className="row d-flex justify-content-center">
          <div class="col-xl-6 col-lg-6">
            <div class="section-title mb-60">
              <div
                className="wow fadeInUp d-flex justify-content-center"
                data-wow-delay=".4s"
              >
                <img src={AmPmLogo} width="200" alt="logo apm & pm essentials" />
              </div>
              <div>
                <img
                  src={AmPmImg}
                  width="600"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  alt="pack am & pm essentials"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h4 style={{color:'#ea872a'}}>AM ESSENTIALS</h4>
              <p>Allez, debout avec la formule</p>
              <p>
                de jour innovante riche en vitamines, minéraux et extraits de
                plante.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <h4 style={{color:'#ea872a'}}>Caractéristiques</h4>
              <ul style={{ listStyleType: "circle"}}>
                <li className="my-1">
                  Sachets pratiques, prêts à emporter
                </li>
                <li className="my-1">
                  Formules complètes
                </li>
                <li className="my-1">
                  Ingrédients de qualité supérieure
                </li>
                <li className="my-1">
                    Mélange propriétaire de vitamines et de minéraux, entre
                    autres.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12">
          <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <h4 style={{color:'#ea872a'}}>PM ESSENTIALS</h4>
                <p>Faites de beaux rêves avec la formule
de nuit innovante riche en vitamines,
minéraux et extraits de plante.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
              <a 
                href="https://www.jeunesseglobal.com/fr-FR/am/pmessentials"
                className="theme-btn ampm-button d-inline-block mx-auto my-5"
                >
                    <span>Plus d'informations</span>
                
                </a>
          </div>

      </section>
    </Layout>
  )
}

export default ampm
