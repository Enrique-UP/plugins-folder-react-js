import React from "react";
import {useEffect} from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox";
import video from "../../images/aboutUs.webp";

function Imagegallery(){
    useEffect(() => {
        document.querySelector(".ig > .container + *").classList.add("container");
      }, []);
  return (
    <>
        <section className="sectionTB vdo ig">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mainHead">
                            <p className="subHead" data-aos="fade-left">Captured Moments</p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <h1 className="head" data-aos="fade-right">Our Gallery</h1>
                                </div>{/* col */}
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                                </div>{/* col */}
                            </div>{/* row */}
                        </div>{/* mainHead */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="row mb">
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 col-4">
                            <a className="vdoArea" data-aos="fade-up">
                                <img src={video}></img>
                                {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                            </a>
                        </div>{/* col */}
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 col-8 mb">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                    <a className="vdoArea" data-aos="fade-up">
                                        <img src={video}></img>
                                        {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                    </a>
                                </div>{/* col */}
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                    <a className="vdoArea" data-aos="fade-up">
                                        <img src={video}></img>
                                        {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                    </a>
                                </div>{/* col */}
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                    <a className="vdoArea" data-aos="fade-up">
                                        <img src={video}></img>
                                        {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                    </a>
                                </div>{/* col */}
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                    <a className="vdoArea" data-aos="fade-up">
                                        <img src={video}></img>
                                        {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                    </a>
                                </div>{/* col */}
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                    <a className="vdoArea" data-aos="fade-up">
                                        <img src={video}></img>
                                        {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                    </a>
                                </div>{/* col */}
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                    <a className="vdoArea" data-aos="fade-up">
                                        <img src={video}></img>
                                        {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                    </a>
                                </div>{/* col */}
                            </div>{/* row */}
                        </div>{/* col */}
                    </div>{/* row */}
                </SRLWrapper>
            </SimpleReactLightbox>{/* container */}
        </section>
    </>
  );
}
export default Imagegallery;