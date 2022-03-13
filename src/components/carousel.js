import React, { useState } from 'react'
import revitaBluImg from '../assets/img/carousel/image36.jpg'
import AmPmImg from '../assets/img/carousel/image17.jpg'
import Carousel from 'react-bootstrap/Carousel';
import JeunessBGVideo from '../assets/videos/JCloud_.North+America_French+CAN_Media_SHARE_Product+Catalog+Video_YES-System-w-M1ND-2016-FR-compressed.webm'

const IndexCarousel = () => {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  



  return (
    <section id="top" className="carousel-section-wrapper">
    <Carousel 
        id="carouselExampleCaptions" 
        className="carousel slide carousel-fade" 
        data-ride="carousel"
        activeIndex={index} 
        onSelect={handleSelect}
        nextLabel="Suivant"
        indicators={true}
        controls={false}
        interval={2000}
        >

            <Carousel.Item className="carousel-section carousel-item"
            >
                <video autoPlay muted loop className="hero-video" style={{width: "100%", objectFit:"cover"}}>
                    <source src={JeunessBGVideo} type="video/webm" />
                </video> 

                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 mx-auto">
                            <div className="carousel-content text-center">
                                <div className="section-title">
                                    <h1 className="hero-title">Marie Rose Ah-Moye</h1>
                                    <p className="hero-text">Distributeur indépendant Jeunesse Global</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        {/* <a className="carousel-control carousel-control-prev" href="#carouselExampleCaptions" role="button"
            data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"><i className="lni lni-arrow-left"></i></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control carousel-control-next" href="#carouselExampleCaptions" role="button"
            data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"><i className="lni lni-arrow-right"></i></span>
        </a> */}
    </Carousel>
</section>
  )
}

export default IndexCarousel