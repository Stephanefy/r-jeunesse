import React from "react"
import RevitaBluLogo from "../assets/img/logo/revita-blu-logo.png"
import ReserveLogo from "../assets/img/logo/Jeunesse-Reserve-TM-white.png"
import NaaraLogo from "../assets/img/logo/naara-eu-logo.png"
import AMPMLogo from "../assets/img/logo/am-pm-essentials--trans-logo.svg"
import LuminesceLogo from "../assets/img/logo/luminesceLogo_fr.png"
import ZenLogo from "../assets/img/logo/zenBodiSmallLogo.png"
import Finiti from "../assets/img/logo/finitiGrey_en-US.png"
import { Link } from "gatsby"
import Reserve from "../assets/img/portfolio/2019-RES-FR-BOX5-REV7-PKT3-REV1-300px.png"
import RevitaBlu from "../assets/img/portfolio/revitablu-package.png"
import Naara from "../assets/img/portfolio/naara-eu-product-500.png"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"

const Products = () => {
  const splideRef = React.useRef()

  React.useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.Components.Pagination.items.forEach(i =>
        i.button.classList.add("custom-pagination")
      )
    }
  }, [])

  return (
    <section id="produits" className="service-section pt-130">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title mb-60">
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Nos produits phares
              </h2>
            </div>
          </div>
          {/* <div className="col-xl-6 col-lg-6">
            <div className="section-title mb-60">
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We Crafted an awesome design library that is robust aintuitive
                to use. No matter you're building a busine presentation websit
                or a complex web application.
              </p>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="portfolio-btn-wrapper">
              <button className="portfolio-btn active" data-filter="*">
                Top 3 produits Jeunesse ?? la R??union
              </button>
            </div>
          </div>
        </div>
        <div className="row grid">
          <div className="col-lg-4 col-md-6 grid-item beaut??">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src={Naara} alt="Naara" width="200" />
              </div>
              <div className="portfolio-overlay naara">
                <div className="overlay-content">
                  <h3 style={{ color: "#fff" }}>Na??ra</h3>
                  <p>
                    La Boisson Beaut?? Na??ra est un compl??ment alimentaire qui
                    combine 11 000 mg d'hydrolysat de collag??ne avec des
                    nutriments de beaut?? pour pr??server le capital jeunesse des
                    cheveux, de la peau et des ongles.
                  </p>
                  <Link
                    to="/produits/naara"
                    className="theme-btn border-btn glightbox"
                  >
                    D??tails
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item marketing web">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src={Reserve} alt="reserve" />
              </div>
              <div className="portfolio-overlay reserve">
                <div className="overlay-content">
                  <h3 style={{ color: "#fff" }}>Reserve</h3>
                  <p>
                    Boostez votre sant?? avec Reserve, un m??lange de superfruits
                    avec de l???extrait de p??pins de raisin titr?? en resv??ratrol
                    issu de la recherche scientifique, de th?? vert et d???aloe
                    vera. Chaque fruit de Reserve a ??t?? sp??cialement s??lectionn??
                    pour son profil nutritionnel et ses qualit??s gustatives. De
                    meilleurs ingr??dients pour un meilleur vous.
                  </p>
                  <Link
                    to="/produits/reserve"
                    className="theme-btn border-btn glightbox"
                  >
                    D??tails
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item web graphic">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src={RevitaBlu} alt="Revita Blu" />
              </div>
              <div className="portfolio-overlay revita-blu">
                <div className="overlay-content">
                  <h3 style={{ color: "#fff" }}>Revita Blu</h3>
                  <p>
                    RevitaBl????? est un m??lange v??g??tal compos?? d???algues bleues,
                    de baies d???argousier, d???aloe vera et de poudre d???eau de noix
                    de coco.
                  </p>
                  <Link
                    to="/produits/revita-blu"
                    className="theme-btn border-btn glightbox"
                  >
                    D??tails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-9 mx-auto">
            <div className="section-title text-center mb-55">
              <span className="wow fadeInDown" data-wow-delay=".2s">
                Les produits Jeunesse ?? la R??union
              </span>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Voici une liste des produits disponibles actuellement ?? la
                R??union
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <Splide
            options={{
              autoplay: true,
              type: "loop",
              arrows: "slider",
              rewind: true,
            }}
            ref={splideRef}
            renderControls={() => (
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev custom-prev">
                  <span aria-hidden="true">
                    <i className="lni lni-arrow-left"></i>
                  </span>
                </button>
                <button className="splide__arrow splide__arrow--next custom-next">
                  <span aria-hidden="true">
                    <i className="lni lni-arrow-right"></i>
                  </span>
                </button>
              </div>
            )}
          >
            <SplideSlide>
              <div className="col-lg-4 col-md-6 mx-auto">
                  <a href="https://rosa3103.jeunesseglobal.com/fr-FR/revitablu">
                <div className="service-box box-style service-boxes">
                  <div
                    className="service-icon box-icon-style"
                    style={{
                      background: "#0397b2",
                      border: "solid 1px #0397b2",
                    }}
                  >
                    <img src={RevitaBluLogo} alt="revita-blu" width="80" />
                  </div>
                  <div className="box-content-style service-content">
                    <h4>Revitablu</h4>
                    <p>
                      Formul?? par un pionnier de la recherche sur les cellules
                      souches, RevitaBl????? est un m??lange v??g??tal compos??
                      d???algues bleues, de baies d???argousier, d???aloe vera et de
                      poudre d???eau de noix de coco.
                    </p>
                  </div>
                </div>
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="col-lg-4 col-md-6 mx-auto">
                  <a href="https://rosa3103.jeunesseglobal.com/fr-FR/reserve" >
                <div className="service-box box-style service-boxes">

                  <div
                    className="service-icon box-icon-style"
                    style={{
                      background: "#1f1442",
                      border: "solid 1px #1f1442",
                    }}
                  >
                    <img src={ReserveLogo} alt="reserve" width="80" />
                  </div>
                  <div className="box-content-style service-content">
                    <h4>Reserve</h4>
                    <p>
                      Reserve est un d??licieux compl??ment alimentaire qui
                      contient de l???extrait de p??pins de raisin titr?? en
                      resv??ratrol, de l???aloe vera en poudre, des extraits de
                      baies d???a??a?? et de feuilles de th?? vert.
                    </p>
                  </div>
                </div>
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="col-lg-4 col-md-6 mx-auto">
                  <a href="https://rosa3103.jeunesseglobal.com/fr-FR/naara">
                <div className="service-box box-style service-boxes">

                  <div
                    className="service-icon box-icon-style"
                    style={{
                      background: "#c9006b",
                      border: "solid 1px #c9006b",
                    }}
                  >
                    <img src={NaaraLogo} alt="Naara" width="80" />
                  </div>
                  <div className="box-content-style service-content">
                    <h4>Na??ra</h4>
                    <p>
                      La Boisson Beaut?? Na??ra est un compl??ment alimentaire qui
                      combine 11 000 mg d'hydrolysat de collag??ne avec des
                      nutriments de beaut?? pour pr??server le capital jeunesse
                      des cheveux, de la peau et des ongles.
                    </p>
                  </div>
                </div>
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="col-lg-4 col-md-6 mx-auto">
                <a href="https://rosa3103.jeunesseglobal.com/fr-FR/am/pmessentials">
                  <div className="service-box box-style service-boxes">
                    <div
                      className="service-icon box-icon-style"
                      style={{
                        background: "#fff",
                        border: "solid 1px #e39d68",
                      }}
                    >
                      <img src={AMPMLogo} alt="am pm essentials" width="60" />
                    </div>
                    <div className="box-content-style service-content">
                      <h4>AM&PM essentials</h4>
                      <p>
                        Formul?? et ??labor?? par un physicien certifi?? et nomm?? au
                        prix Nobel, AM & PM Essentials vous fourni les
                        nutriments que votre corps ?? besoin le matin et le soir,
                        am??liorant votre qualit?? de vie en tout point.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="col-lg-4 col-md-6 mx-auto">
                <a href="https://rosa3103.jeunesseglobal.com/fr-FR/luminesce">
                  <div className="service-box box-style service-boxes">
                    <div
                      className="service-icon box-icon-style"
                      style={{
                        background: "#3da0ce",
                        border: "solid 1px #3da0ce",
                      }}
                    >
                      <img
                        src={LuminesceLogo}
                        alt="gamme Luminesce"
                        width="60"
                      />
                    </div>
                    <div className="box-content-style service-content">
                      <h4>Gamme Luminesce</h4>
                      <p>
                        La ligne de soins pour la peau Luminesce?? redonne ??
                        votre peau la vitalit?? et l?????clat de la jeunesse,
                        estompe les rides et les ridules et r??v??le la luminosit??
                        unique de votre peau.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="col-lg-4 col-md-6 mx-auto">
                <a href="https://rosa3103.jeunesseglobal.com/fr-FR/zen">
                  <div className="service-box box-style service-boxes">
                    <div
                      className="service-icon box-icon-style"
                      style={{
                        background: "#fff",
                        border: "solid 1px #c3012f",
                      }}
                    >
                      <img src={ZenLogo} alt="Gamme Zen Bodi" width="80" />
                    </div>
                    <div className="box-content-style service-content">
                      <h4>Gamme Zen Bodi</h4>
                      <p>
                        ZEN a aid?? des centaines de milliers de personnes dans
                        le monde entier ?? transformer leur sant??, ??quilibrer
                        leur corps et vivre pleinement. C???est votre tour
                        maintenant !
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="col-lg-4 col-md-6 mx-auto">
                <a href="https://rosa3103.jeunesseglobal.com/fr-FR/">
                  <div className="service-box box-style service-boxes">
                    <div
                      className="service-icon box-icon-style"
                      style={{
                        background: "#fff",
                        border: "solid 1px #ED5151",
                      }}
                    >
                      <img src={Finiti} alt="Finiti" width="50" />
                    </div>
                    <div className="box-content-style service-content">
                      <h4>Finiti</h4>
                      <p>
                        FINITI?? contient un m??lange unique d'ingr??dients qui
                        renforcent la sant?? cellulaire naturelle de votre corps.
                        Finiti est notre compl??ment le plus avanc??, un m??lange
                        exclusif qui combine savamment des extraits de fruits et
                        de l??gumes pour vous permettre de vivre mieux. 60
                        capsules par flacon.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  )
}

export default Products
