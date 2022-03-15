import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../assets/img/logo/jeunesse-logo-header-v2.svg"

const Header = ({ siteTitle, isNotRoot }) => {
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true)
  const [isActive, setIsActive] = React.useState(1)

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  const handleIsActive = (i) => setIsActive(i)

  const onScroll = () => {
    let sections = document.querySelectorAll('.page-scroll');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      let currLink = sections[i];
      let val = currLink.getAttribute('href');
      let refElement = document.querySelector(val.split('/')[1] ? val.split('/')[1] : val);
      let scrollTopMinus = scrollPos + 73;
      if (refElement && refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
        document.querySelector('.page-scroll').classList.remove('active');
        currLink.classList.add('active');
      } else {
        currLink.classList.remove('active');
      }
    }
  };


  React.useEffect(() => {
    if (!isNotRoot) {
      window.document.addEventListener('scroll', onScroll);
  
  
      return () => window.removeEventListener('scroll', onScroll);
    }

  }, [onscroll])




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
                  <li className="nav-item" onClick={() => handleIsActive(1)}>
                    {isNotRoot ? (
                      <Link to="/#top" className={`page-scroll ${isActive === 1 ? "active" : null}`}>
                        Accueil
                      </Link>
                    ) : (
                      <a className={`page-scroll ${isActive === 1 ? "active" : null}`} href="#top">
                        Accueil
                      </a>
                    )}
                  </li>
                  <li className="nav-item" onClick={() => handleIsActive(2)}>
                    {isNotRoot ? (
                      <Link to="/#a-propos" className={`page-scroll ${isActive === 2 ? "active" : null}`}>
                        A propos
                      </Link>
                    ) : (
                      <a className={`page-scroll ${isActive === 2 ? "active" : null}`} href="#a-propos">
                        A propos
                      </a>
                    )}
                  </li>
                  <li className="nav-item" onClick={() => handleIsActive(3)}>
                    {isNotRoot ? (
                      <Link to="/#produits" className={`page-scroll ${isActive === 3 ? "active" : null}`}>
                        Produits
                      </Link>
                    ) : (
                      <a className={`page-scroll ${isActive === 3 ? "active" : null}`} href="#produits">
                        Produits
                      </a>
                    )}{" "}
                  </li>
                </ul>
                <div className="header-btn">
                {isNotRoot ? (
                      <Link to="/#contact" className="theme-btn page-scroll">
                        Prendre contact
                      </Link>
                    ) : (
                      <a className="theme-btn page-scroll" href="#contact">
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
