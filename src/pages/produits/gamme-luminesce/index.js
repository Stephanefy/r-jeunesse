import React from "react"
import Layout from "../../../components/layout"
import LuminesceLogo from "../../../assets/img/logo/luminesceLogo_fr.png"
import LuminesceImg from "../../../assets/img/portfolio/luminesceFamily.png"
import LuminesceRenewal from "../../../assets/img/portfolio/lulminesce-renewal.png"
import LuminesceMoisturizer from "../../../assets/img/portfolio/luminesce-moisturizer.png"
import LuminesceSerum from "../../../assets/img/portfolio/luminesce-serum.png"

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
                  background: "#7dc1df",
                  width: "250px",
                  height: "100px",
                  margin: "auto",
                }}
              >
                <img
                  src={LuminesceLogo}
                  width="230"
                  height="80"
                  alt="logo-revita-blu"
                />
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={LuminesceImg}
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
        <div className="col-xl-8 col-lg-8 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <div className="d-flex justify-content-center">
                <img
                  src={LuminesceSerum}
                  width="60"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  alt="Sérum de Régénération Cellulaire Luminesce®"
                />
              </div>
              <h4 style={{ color: "#30b9c9" }} className="text-center">
                Sérum de Régénération Cellulaire Luminesce®{" "}
              </h4>
              <p className="text-center">
                le produit le plus vendu de notre gamme exceptionnelle de soins
                pour la peau, contient en très forte concentration la
                technologie APT-200™ exclusive à Jeunesse et sublime l’éclat de
                votre peau.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 mx-2">
            <div className="mb-60 wow fadeInUp" data-wow-delay=".4s">
              <div className="d-flex justify-content-center">
                <img
                  src={LuminesceRenewal}
                  width="70"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  alt="lotion renouvellement essentiel Luminesce"
                />
              </div>
              <h4 style={{ color: "#30b9c9" }}>
                Lait Corps Renouvellement Essentiel Luminesce®
              </h4>
              <p>
                Formulé avec la technologie APT-200™ exclusive à Jeunesse, il
                cible les signes du vieillissement et apporte des bienfaits
                durables, de la tête aux pieds. Votre peau retrouve tout son
                éclat !
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <div className="d-flex justify-content-center">
                <img
                  src={LuminesceMoisturizer}
                  width="70"
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  alt="crème de jour hydratante Luminesce"
                />
              </div>
              <h4 style={{ color: "#30b9c9" }}>
                Crème de jour hydratante Luminesce®
              </h4>
              <p>
                Nourrit et protège au quotidien l’éclat de votre peau. Votre
                peau garde toute sa fraîcheur et son éclat avec cette lotion
                visage légère qui la protège et l’hydrate grâce à des extraits
                de fruits et de légumes
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://www.jeunesseglobal.com/fr-FR/luminesce"
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
