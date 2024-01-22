import { useEffect } from 'react'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../sass/slider.scss";
import slide1 from "../../images/delete/slider-1.jpg";
import slide2 from "../../images/delete/slider-2.jpg";
import slide3 from "../../images/delete/slider-3.jpg";

const Slider = () => {
    useEffect(() => {
        document.querySelector(".carousel-root .carousel .thumbs").classList.add("container");
        document.querySelector(".carousel-root .carousel .thumbs-wrapper.axis-vertical").classList.add("container");
        document.querySelector(".carousel-root .control-dots").classList.add("container");

      }, []);
  return (
    <>
        <Carousel autoPlay infiniteLoop interval="5000" transitionTime="1000" showArrows={true}>
            <div className="items">
                <img src={slide1} />
                <figure>
                    <div className="container">
                        <figcaption>
                            <p className="head">Loremi psum</p>
                            <p className="sub_head">Lorm / Ipsumdolr</p>
                            <p className="text">LM &amp; LX Loreipsum (Semipsum Dolorsit)</p>
                            <p className="btns">
                                <a href="#" className="btn-1 rml">Read More</a>
                                <a href="#" className="btn-2 rml">Read More</a>
                            </p>
                        </figcaption>
                    </div>
                </figure>
            </div>
            <div className="items">
            <img src={slide2} />
            <figure>
                <div className="container">
                    <figcaption>
                        <p className="head">Loremi psum</p>
                        <p className="sub_head">Lorm / Ipsumdolr</p>
                        <p className="text">LM &amp; LX Loreipsum (Semipsum Dolorsit)</p>
                        <p className="btns">
                            <a href="#" className="btn-1 rml">Read More</a>
                            <a href="#" className="btn-2 rml">Read More</a>
                        </p>
                    </figcaption>
                </div>
            </figure>
        </div>
        <div className="items">
            <img src={slide3} />
            <figure>
                <div className="container">
                    <figcaption>
                        <p className="head">Loremi psum</p>
                        <p className="sub_head">Lorm / Ipsumdolr</p>
                        <p className="text">LM &amp; LX Loreipsum (Semipsum Dolorsit)</p>
                        <p className="btns">
                            <a href="#" className="btn-1 rml">Read More</a>
                            <a href="#" className="btn-2 rml">Read More</a>
                        </p>
                    </figcaption>
                </div>
            </figure>
        </div>
        </Carousel>
    </>
  );
}

export default Slider;
