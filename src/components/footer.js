import React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/img/logo/jeunesse-logo-header-v2.svg'

const Footer = () => {
  return (
    <footer className="footer pt-100">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-60 wow fadeInLeft" data-wow-delay=".2s">
                    <Link to="/" className="logo mb-30"><img src={Logo} alt="logo" width="200"/></Link>
                    <p className="mb-30 footer-desc">Notre passion: redéfinir la jeunesse grâce à nos produits révolutionnaires et nos opportunités qui changent la vie.</p>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12">
                <div className="footer-widget mb-60 wow fadeInUp" data-wow-delay=".4s">
                    <h4>Liens</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="https://jeunesseglobal.com/fr-FR/">Jeunesse France</a>
                        </li>
                        <li>
                            <a href="https://www.jeunesseglobal.com/fr-FR/blog/">Blog Jeunesse</a>
                        </li> 
                        <li>
                            <a href="https://www.jeunesseglobal.com/fr-FR/shopping/notice?destination=signup">Rejoindre Jeunesse</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-12">
                <div className="footer-widget mb-60 wow fadeInRight" data-wow-delay=".8s">
                    <h4>Contact</h4>
                    <ul className="footer-contact">
                        <li>
                            <p>0692 66 77 53</p>
                        </li>
                        <li>
                            <p>marie-rose.ah-moye@laposte.net</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-12">
                <div className="footer-widget mb-60 wow fadeInRight" data-wow-delay=".8s">
                    <p>Les marques suivantes sont sous licence de <span style={{color:"#575757"}}>Jeunesse Global Holdings, LLC:</span>
                    </p>
                    <ul>
                        <li>JEUNESSE</li>
                        <li>RevitaBlū™</li>
                        <li>ZEN BODI</li>
                        <li>Naära®</li>
                        <li>Reserve®</li>
                        <li>AM & PM Essentials</li>
                        <li>Luminesce®</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="copyright-area">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-4">
                        <p>Distributeur indépendant Jeunesse Global</p>
                </div>
                <div className="col-md-4 text-center text-lg-start text-sm-center">
                    <Link to="/mentions-légales" style={{color: "#58595b"}}>
                        mentions légales
                    </Link>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer