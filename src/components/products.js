import React from "react"
import RevitaBluLogo from "../assets/img/logo/revita-blu-logo.png"
import ReserveLogo from "../assets/img/logo/Jeunesse-Reserve-TM-white.png"
import NaaraLogo from "../assets/img/logo/naara-eu-logo.png"
import AMPMLogo from "../assets/img/logo/am-pm-essentials--trans-logo.svg"
import LuminesceLogo from "../assets/img/logo/luminesceLogo_fr.png"
import ZenLogo from "../assets/img/logo/zenBodiSmallLogo.png"

const Products = () => {
  return (
    <section id="produits" className="service-section pt-130">
      <div className="container">
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
          <div className="col-lg-4 col-md-6">
            <div className="service-box box-style service-boxes">
              <a href="https://www.jeunesseglobal.com/fr-FR/revitablu"></a>
              <div
                className="service-icon box-icon-style"
                style={{ background: "#0397b2", border: "solid 1px #0397b2" }}
              >
                <img src={RevitaBluLogo} alt="revita-blu" width="80" />
              </div>
              <div className="box-content-style service-content">
                <h4>Revitablu</h4>
                <p>
                  Formulé par un pionnier de la recherche sur les cellules
                  souches, RevitaBlū™ est un mélange végétal composé d’algues
                  bleues, de baies d’argousier, d’aloe vera et de poudre d’eau
                  de noix de coco.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box box-style service-boxes">
              <a href="https://www.jeunesseglobal.com/fr-FR/reserve"></a>

              <div
                className="service-icon box-icon-style"
                style={{ background: "#1f1442", border: "solid 1px #1f1442" }}
              >
                <img src={ReserveLogo} alt="reserve" width="80" />
              </div>
              <div className="box-content-style service-content">
                <h4>Reserve</h4>
                <p>
                  Reserve est un délicieux complément alimentaire qui contient
                  de l’extrait de pépins de raisin titré en resvératrol, de
                  l’aloe vera en poudre, des extraits de baies d’açaï et de
                  feuilles de thé vert.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box box-style service-boxes">
              <a href="https://www.jeunesseglobal.com/fr-FR/naara"></a>

              <div
                className="service-icon box-icon-style"
                style={{ background: "#c9006b", border: "solid 1px #c9006b" }}
              >
                <img src={NaaraLogo} alt="reserve" width="80" />
              </div>
              <div className="box-content-style service-content">
                <h4>Naära</h4>
                <p>
                  La Boisson Beauté Naära est un complément alimentaire qui
                  combine 11 000 mg d'hydrolysat de collagène avec des
                  nutriments de beauté pour préserver le capital jeunesse des
                  cheveux, de la peau et des ongles.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box box-style service-boxes">
              <a href="https://www.jeunesseglobal.com/fr-FR/am/pmessentials"></a>

              <div
                className="service-icon box-icon-style"
                style={{ background: "#fff", border: "solid 1px #e39d68" }}
              >
                <img src={AMPMLogo} alt="reserve" width="60" />
              </div>
              <div className="box-content-style service-content">
                <h4>AM&PM essentials</h4>
                <p>
                  Formulé et élaboré par un physicien certifié et nommé au prix
                  Nobel, AM & PM Essentials vous fourni les nutriments que votre
                  corps à besoin le matin et le soir, améliorant votre qulaité
                  de vie en tout point.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box box-style service-boxes">
              <a href="https://www.jeunesseglobal.com/fr-FR/luminesce"></a>

              <div
                className="service-icon box-icon-style"
                style={{ background: "#3da0ce", border: "solid 1px #3da0ce" }}
              >
                <img src={LuminesceLogo} alt="reserve" width="60" />
              </div>
              <div className="box-content-style service-content">
                <h4>Gamme Luminesce</h4>
                <p>
                  La ligne de soins pour la peau Luminesce® redonne à votre peau
                  la vitalité et l’éclat de la jeunesse, estompe les rides et
                  les ridules et révèle la luminosité unique de votre peau.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box box-style service-boxes">
              <a href="https://www.jeunesseglobal.com/fr-FR/zen"></a>
              <div
                className="service-icon box-icon-style"
                style={{ background: "#fff", border: "solid 1px #c3012f" }}
              >
                <img src={ZenLogo} alt="reserve" width="80" />
              </div>
              <div className="box-content-style service-content">
                <h4>Gamme Zen Bodi</h4>
                <p>
                  ZEN a aidé des centaines de milliers de personnes dans le
                  monde entier à transformer leur santé, équilibrer leur corps
                  et vivre pleinement. C’est votre tour maintenant !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
