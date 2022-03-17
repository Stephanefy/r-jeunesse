import React from "react"
import Layout from "../../components/layout"
import ReserveLogo from "../../assets/img/logo/Jeunesse-Reserve-TM-white.png"
import ReserveImg from "../../assets/img/portfolio/2019-RES-FR-BOX5-REV7-PKT3-REV1-300px.webp"
import ReserveBg from '../../assets/img/bg/reserve-bg.jpeg'
import Seo from "../../components/seo"


const ReserveProductPage = () => {
  return (
    <Layout isNotRoot={true}>
      <Seo title="Reserve"/>
      <section id="reserve">
        <div className="row d-flex justify-content-center">
          <div class="col-xl-6 col-lg-6">
            <div class="section-title mb-60">
              <div
                className="wow fadeInUp d-flex justify-content-center"
                data-wow-delay=".4s"
                style={{
                  background: "#84276B",
                  width: "300",
                  margin: "auto",
                  padding: "0.3em 0",
                }}
              >
                <img src={ReserveLogo} width="200" alt="logo naara" />
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={ReserveImg}
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
            background:`url(${ReserveBg}) no-repeat fixed`,
            backgroundSize: `cover`
          }}
        >

        </div>
        <div className="row d-flex justify-content-center mt-5 mx-auto">
          <div className="col-xl-3 col-lg-3 col-sm-12">
            <div
              className="footer-widget mb-60 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h4 style={{ color: "#84276B" }}>Résvératrol: buvez sans modération</h4>
              <ul style={{ listStyleType: "circle" }}>
                <li className="my-1">Polyphénol connu</li>
                <li className="my-1">Objet de recherches depuis des décennies</li>
                <li className="my-1">
                Associé au « paradoxe français »
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <h4 style={{ color: "#84276B" }}>Des supers fruits</h4>
              <ul style={{ listStyleType: "circle" }}>
                <li className="my-1">Objet de recherches scientifique</li>
                <li className="my-1">Profil nutritionnel</li>
                <li className="my-1">Bon goût</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div
              className="footer-widget mb-60 wow fadeInRight"
              data-wow-delay=".8s"
            >
              <h4 style={{ color: "#84276B" }}>Sucrés naturellement</h4>
              <ul style={{ listStyleType: "circle" }}>
                <li className="my-1">Sans arômes artificiels</li>
                <li className="my-1">Sans colorants artificiels</li>
                <li className="my-1">Sans édulcorants artificiels</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://rosa3103.jeunesseglobal.com/fr-FR/reserve"
            className="theme-btn reserve-btn d-inline-block mx-auto my-5"
          >
            <span>Plus d'informations</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default ReserveProductPage
