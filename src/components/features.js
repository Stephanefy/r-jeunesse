import React from "react"
import JeunesseTopIllustration from "../assets/img/logo/jeunesse-top-illustration.svg"

const Features = () => {
  return (
    <section id="features" className="feature-section pt-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-9 mx-auto">
            <div className="section-title text-center mb-55">
              <span className="wow fadeInDown" data-wow-delay=".2s"></span>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Pourquoi choisir Jeunesse
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Jeunesse crée un impact positif dans le monde en aidant les gens
                à paraître et à se sentir jeunes
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-box box-style jeunesse-top-logo">
              <div className="feature-icon box-icon-style">
                <img
                  src={JeunesseTopIllustration}
                  width="70"
                  alt="logo-jeunesse"
                />
              </div>
              <div className="box-content-style feature-content">
                <h4>Bien être</h4>
                <p>Retrouver votre vitalité, une qualité de peau saine. Se sentir bien de l'intérieur comme à l'extérieur.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box box-style jeunesse-top-logo">
              <div className="feature-icon box-icon-style">
                <img
                  src={JeunesseTopIllustration}
                  width="70"
                  alt="logo-jeunesse"
                />
              </div>
              <div className="box-content-style feature-content">
                <h4>Résultats</h4>
                <p>
                  Des produits exceptionnels basés sur une technologie
                  de pointe et la recherche sur les cellules souches.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box box-style jeunesse-top-logo">
              <div className="feature-icon box-icon-style">
                <img
                  src={JeunesseTopIllustration}
                  width="70"
                  alt="logo-jeunesse"
                />
              </div>
              <div className="box-content-style feature-content">
                <h4>Développement</h4>
                <p>Entreprendre en toute liberté et à la portée de tous, des opportunités qui changeront votre vie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
