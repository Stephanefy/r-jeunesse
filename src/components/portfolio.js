import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
                <StaticImage src="../assets/img/portfolio/naara-eu-product-500.png" alt="Naara" width="200" />
              </div>
              <div className="portfolio-overlay naara">
                <div className="overlay-content">
                  <h3>Naara</h3>
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
                <StaticImage src="../assets/img/portfolio/2019-RES-FR-BOX5-REV7-PKT3-REV1-300px.png" alt="reserve" />
              </div>
              <div className="portfolio-overlay reserve">
                <div className="overlay-content">
                  <h3>Reserve</h3>
                  <p>
                  Boostez votre santé avec Reserve, un mélange de superfruits avec de l’extrait de pépins de raisin titré en resvératrol issu
                  de la recherche scientifique, de thé vert et d’aloe vera. Chaque fruit de Reserve a été spécialement sélectionné pour son
                  profil nutritionnel et ses qualités gustatives. De meilleurs ingrédients pour un meilleur vous.
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
                <StaticImage src="../assets/img/portfolio/revitablu-package.png" alt="Revita Blu"/>
              </div>
              <div className="portfolio-overlay revita-blu">
                <div className="overlay-content">
                  <h3>Revita Blu</h3>
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
