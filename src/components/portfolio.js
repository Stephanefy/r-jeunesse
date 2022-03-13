import React from "react"
import { Link } from "gatsby"
import Luminesce from "../assets/img/portfolio/luminesceFamily.png"
import AmPm from "../assets/img/portfolio/EU_AM-PM-product-img.png"
import RevitaBlu from "../assets/img/portfolio/revitablu-package.png"
import Naara from '../assets/img/portfolio/naara-eu-product-500.png'

const ProductsPortfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section pt-130">
      <div id="container" className="container">
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
                <img src={Naara} alt="Naara" width="300" />
              </div>
              <div className="portfolio-overlay naara">
                <div className="overlay-content">
                  <h4>Naara</h4>
                  <p>
                  La Boisson Beauté Naära est un complément alimentaire qui combine 11 000 mg d'hydrolysat de collagène avec des nutriments de beauté pour préserver le capital jeunesse des cheveux, de la peau et des ongles.
                  </p>
                  <Link
                    to="/produits/naara/"
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
                <img src={AmPm} alt="am pm essentials" />
              </div>
              <div className="portfolio-overlay ampm">
                <div className="overlay-content">
                  <h4>AM & PM Essentials</h4>
                  <p>
                    Ce duo contient des vitamines, des nutriments et des
                    minéraux conçus exclusivement pour cibler les besoins
                    diurnes et nocturnes de votre corps.
                  </p>
                  <Link
                    to="/produits/ampm"
                    className="theme-btn border-btn glightbox"
                  >
                    Détails
                  </Link>
                </div>
              </div>
              ""
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item web graphic">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src={RevitaBlu} alt="Revita Blu" height="300" />
              </div>
              <div className="portfolio-overlay revita-blu">
                <div className="overlay-content">
                  <h4>Revita Blu</h4>
                  <p>
                    RevitaBlū™ est un mélange végétal composé d’algues bleues,
                    de baies d’argousier, d’aloe vera et de poudre d’eau de noix
                    de coco.
                  </p>
                  <Link
                    to="produits/revita-blu"
                    className="theme-btn border-btn glightbox"
                  >
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsPortfolio
