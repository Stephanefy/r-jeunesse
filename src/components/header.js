import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../assets/img/logo/jeunesse-logo-header-v2.svg"

const Header = ({ siteTitle, isNotRoot }) => {
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true)

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <header className="header navbar-area bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" width="150" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                aria-expanded={!isNavCollapsed ? true : false}
                onClick={handleNavCollapse}
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className={`${
                  isNavCollapsed ? "collapse" : ""
                } navbar-collapse justify-content-end`}
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item">
                    {isNotRoot ? (
                      <Link to="/#top" className="page-scroll active">
                        Accueil
                      </Link>
                    ) : (
                      <a className="page-scroll active" href="#top">
                        Accueil
                      </a>
                    )}
                  </li>
                  <li className="nav-item">
                    {isNotRoot ? (
                      <Link to="/#a-propos" className="page-scroll active">
                        A propos
                      </Link>
                    ) : (
                      <a className="page-scroll active" href="#a-propos">
                        A propos
                      </a>
                    )}
                  </li>
                  <li className="nav-item">
                    {isNotRoot ? (
                      <Link to="/#produits" className="page-scroll active">
                        Produits
                      </Link>
                    ) : (
                      <a className="page-scroll active" href="#produits">
                        Produits
                      </a>
                    )}{" "}
                  </li>
                </ul>
                <div className="header-btn">
                {isNotRoot ? (
                      <Link to="/#contact" className="theme-btn page-scroll active">
                        Prendre contact
                      </Link>
                    ) : (
                      <a className="theme-btn page-scroll active" href="#contact">
                        Prendre contact
                      </a>
                    )}{" "}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
