import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section id="a-propos" className="pt-100">
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img-wrapper">
                <div
                  className="about-img position-relative d-inline-block wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <StaticImage
                    src="../assets/img/team/rosah.jpg"
                    width="500"
                    alt="ah moye marie rose"
                    aspectRatio="21/9"
                  />
                  {/*                         
                            <div className="about-experience">
                                <h3>5 Year Of Working Experience</h3>
                                <p>We Crafted an aweso design library that is robust and intuitive to use.</p>
                            </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content-wrapper">
                <div className="section-title">
                  <div className="d-flex my-3">
                    <div className="align-self-center">
                      <p
                        className="ml-2 wow fadeInUp text-white"
                        data-wow-delay=".6s"
                      >
                        Mon histoire avec Jeunesse commence en 2021 lorsqu'une
                        amie proche me présente les produits.
                      </p>
                      <br/>
                      <p
                        className="ml-2 wow fadeInUp text-white"
                        data-wow-delay=".7s"
                      >
                        Appuyés par un comité scientifique de professeurs et
                        médecins, les produits Jeunesse m'ont tout de suite plu
                        par leur qualité, leur origine naturelle et par les
                        résultats rapidement visibles.
                      </p>
                      <br/>
                      <p
                        className="ml-2 wow fadeInUp text-white"
                        data-wow-delay=".8s"
                      >
                        Jeunesse m'a permis de retrouver Bien-être et confiance
                        en soi.<br/>À 64 ans j'ai donc décidé de me lancer dans
                        cette nouvelle aventure et me suis posé le défi d'aider
                        les gens à retrouver les bienfaits que j'ai moi-même
                        récoltés en rejoignant l'univers de Jeunesse Global.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
