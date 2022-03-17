import React from "react"
import Layout from "../../components/layout"
import NaaraLogo from "../../assets/img/logo/naara-eu-logo.png"
import NaaraImg from "../../assets/img/portfolio/naara-eu-product-500.png"
import NaaraBg from '../../assets/img/bg/hair-skin-nails-naara.jpeg'
import Seo from "../../components/seo"

const NaaraProductPage = () => {
  return (
    <Layout isNotRoot={true}>
      <Seo title="Naära"/>
      <section id="naara">
        <div className="row d-flex justify-content-center">
          <div class="col-xl-6 col-lg-6">
            <div class="section-title mb-60">
              <div
                className="wow fadeInUp d-flex justify-content-center"
                data-wow-delay=".4s"
                style={{
                  background: "#b00057",
                  width: "150px",
                  margin: "auto",
                  padding: "0.3em 0",
                }}
              >
                <img src={NaaraLogo} width="200" alt="logo naara" />
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={NaaraImg}
                  width="300"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  alt="Naara"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"
          style={{
            background:`url(${NaaraBg}) no-repeat fixed`,
            backgroundSize: `cover`
          }}
        >

        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h4 style={{ color: "#b00057" }}>Composition</h4>
              <ul style={{ listStyleType: "circle" }}>
                <li className="my-1">11 000 mg d’hydrolysat de collagène</li>
                <li className="my-1">14 nutriments de beauté</li>
                <li className="my-1">
                  Mélange de six superfruits : baie d’açaï, myrtille, raisin,
                  cerise, grenade et acérola{" "}
                </li>
                <li className="my-1">
                  Huit vitamines renforcées par un mélange d’acides aminés et de
                  minéraux : vitamine C, Niacine (B3), acide pantothénique (B5),
                  biotine (B7), vitamine B12, vitamine B6, zinc et L-cystéine
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <h4 style={{ color: "#b00057" }}>Les bienfaits de NAÄRA</h4>
              <ul style={{ listStyleType: "circle" }}>
                <li className="my-1">
                  La vitamine C contribue à la formation normale du collagène
                  nécessaire au fonctionnement normal de la peau.
                </li>
                <li className="my-1">
                  La biotine, la niacine et le zinc contribuent à l’entretien
                  d’une peau normale.
                </li>
                <li className="my-1">
                  La biotine et le zinc contribuent à l’entretien de cheveux
                  normaux.
                </li>
                <li className="my-1">
                  Le zinc contribue à l’entretien d’ongles normaux.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <h4 style={{ color: "#b00057" }}>
                Qui peut consommer la boisson beauté NAÄRA ?
              </h4>
              <p>
                La Boisson Beauté Naära est destinée aux adultes de plus de 18
                ans qui veulent améliorer visiblement leur peau, leurs cheveux
                et leurs ongles, indépendamment de l’âge, du sexe ou de
                l’appartenance ethnique. Comme toujours avec les compléments
                alimentaires, chacun doit consulter son médecin traitant avant
                de prendre un nouveau complément alimentaire, y compris la
                Boisson Beauté Naära.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://rosa3103.jeunesseglobal.com/fr-FR/naara"
            className="theme-btn naara-button d-inline-block mx-auto my-5"
          >
            <span>Plus d'informations</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default NaaraProductPage
