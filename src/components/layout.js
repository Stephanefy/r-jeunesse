/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../assets/scss/main.scss"
import WOW from 'wowjs';

const Layout = ({ isNotFound, children, isNotRoot }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isBrowser = typeof window !== "undefined"

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

    if (isBrowser) {
      /*=====================================
      Sticky
      ======================================= */
      window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
    
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
        } else {
          header_navbar.classList.remove("sticky");
        }
    
    
    
        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTo.style.display = "block";
        } else {
          backToTo.style.display = "none";
        }
      };

    }
    if (isBrowser) { 

        //WOW Scroll Spy
          new WOW.WOW({
            live: false
        }).init();


        	// section menu active

      window.document.addEventListener('scroll', onScroll);
  
  
      return () => window.removeEventListener('scroll', onScroll);



    }


      	//======= portfolio-btn active
	var elements = document.getElementsByClassName("portfolio-btn");
	for (var i = 0; i < elements.length; i++) {
		elements[i].onclick = function () {

			// remove class from sibling

			var el = elements[0];
			while (el) {
				if (el.tagName === "BUTTON") {
					//remove class
					el.classList.remove("active");

				}
				// pass to the new sibling
				el = el.nextSibling;
			}

			this.classList.add("active");
		};
	}
    
  }, [onScroll, isBrowser])


  return (
    <div className="h-100">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} isNotRoot={isNotRoot} />
      <div>
        <main>{children}</main>
      {
        !isNotFound ? (
          <Footer/>

        ) : null
      }
      </div>
      <a href="#" className="scroll-top">
            <i className="lni lni-arrow-up"></i>
      </a>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
