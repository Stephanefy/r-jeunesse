import React, { useState, useRef, usEffect, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {useStaticQuery, graphql} from 'gatsby';
import Video from './video';


const IndexCarousel = () => {

  

 const data = useStaticQuery(graphql`
    query CloudinaryHeroVideo {
        allCloudinaryMedia {
        edges {
            node {
            secure_url
            url
            }
        }
        }
    }
    `
);
  const heroVideo = data.allCloudinaryMedia.edges[0].node.url;

  console.log(heroVideo)



  const [index, setIndex] = useState(0);

  const videoRef = useRef()

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    videoRef.current.currentTime = 3
  },[])



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
            
                <video 
                    autoPlay 
                    muted 
                    loop 
                    className="hero-video" style={{width: "100%", objectFit:"cover"}}
                    ref={videoRef}
                >
                    <source src="https://res.cloudinary.com/dcbctf4bl/video/upload/v1647233627/rosah-jeunesse/JCloud_.North_America_French_CAN_Media_SHARE_Product_Catalog_Video_YES-System-w-M1ND-2016-FR-compressed_bxxris.mp4" type="video/mp4" />
                </video> 
                {/* <Video 
                    videoSrcURL={heroVideo}
                /> */}

                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 mx-auto mt-5">
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