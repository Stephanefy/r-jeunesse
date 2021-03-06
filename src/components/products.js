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
                Top 3 produits Jeunesse à la Réunion
              </button>
            </div>
          </div>
        </div>
        <div className="row grid">
          <div className="col-lg-4 col-md-6 grid-item beauté">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src={Naara} alt="Naara" width="200" />
              </div>
              <div className="portfolio-overlay naara">
                <div className="overlay-content">
                  <h3 style={{ color: "#fff" }}>Naära</h3>
                  <p>
                    La Boisson Beauté Naära est un complément alimentaire qui
                    combine 11 000 mg d'hydrolysat de collagène avec des
                    nutriments de beauté pour préserver le capital jeunesse des
                    cheveux, de la peau et des ongles.
                  </p>
                  <Link
                    to="/produits/naara"
                    className="theme-btn border-btn glightbox"
                  >
                    Détails
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
                    Boostez votre santé avec Reserve, un mélange de superfruits
                    avec de l’extrait de pépins de raisin titré en resvératrol
                    issu de la recherche scientifique, de thé vert et d’aloe
                    vera. Chaque fruit de Reserve a été spécialement sélectionné
                    pour son profil nutritionnel et ses qualités gustatives. De
                    meilleurs ingrédients pour un meilleur vous.
                  </p>
                  <Link
                    to="/produits/reserve"
                    className="theme-btn border-btn glightbox"
                  >
                    Détails
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
                    RevitaBlū™ est un mélange végétal composé d’algues bleues,
                    de baies d’argousier, d’aloe vera et de poudre d’eau de noix
                    de coco.
                  </p>
                  <Link
                    to="/produits/revita-blu"
                    className="theme-btn border-btn glightbox"
                  >
                    Détails
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
                Les produits Jeunesse à la Réunion
              </span>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Voici une liste des produits disponibles actuellement à la
                Réunion
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
                      Formulé par un pionnier de la recherche sur les cellules
                      souches, RevitaBlū™ est un mélange végétal composé
                      d’algues bleues, de baies d’argousier, d’aloe vera et de
                      poudre d’eau de noix de coco.
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
                      Reserve est un délicieux complément alimentaire qui
                      contient de l’extrait de pépins de raisin titré en
                      resvératrol, de l’aloe vera en poudre, des extraits de
                      baies d’açaï et de feuilles de thé vert.
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
                    <h4>Naära</h4>
                    <p>
                      La Boisson Beauté Naära est un complément alimentaire qui
                      combine 11 000 mg d'hydrolysat de collagène avec des
                      nutriments de beauté pour préserver le capital jeunesse
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
                        Formulé et élaboré par un physicien certifié et nommé au
                        prix Nobel, AM & PM Essentials vous fourni les
                        nutriments que votre corps à besoin le matin et le soir,
                        améliorant votre qualité de vie en tout point.
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
                        La ligne de soins pour la peau Luminesce® redonne à
                        votre peau la vitalité et l’éclat de la jeunesse,
                        estompe les rides et les ridules et révèle la luminosité
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
                        ZEN a aidé des centaines de milliers de personnes dans
                        le monde entier à transformer leur santé, équilibrer
                        leur corps et vivre pleinement. C’est votre tour
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
                        FINITI® contient un mélange unique d'ingrédients qui
                        renforcent la santé cellulaire naturelle de votre corps.
                        Finiti est notre complément le plus avancé, un mélange
                        exclusif qui combine savamment des extraits de fruits et
                        de légumes pour vous permettre de vivre mieux. 60
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
