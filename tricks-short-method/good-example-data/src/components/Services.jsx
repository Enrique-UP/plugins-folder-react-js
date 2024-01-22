import video from "../images/video.webp";
import Banner from "../components/include/Banner";
import AudioIcon from "../components/include/AudioIcon";
import VideoIcon from "../components/include/VideoIcon";
import {Helmet} from "react-helmet";
import Breadcrumbs from "./include/breadcrumbs";
const Services = () => {
  return (
    <>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        </Helmet>
      <Banner pageName="Services" />
      <Breadcrumbs pageName="Services" />
      <section className="sectionTB vdo">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mainHead">
                            <p className="subHead" data-aos="fade-left">Lorem</p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <h1 className="head" data-aos="fade-right">Lorem ipsum dolor</h1>
                                </div>{/* col */}
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                                </div>{/* col */}
                            </div>{/* row */}
                        </div>{/* mainHead */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
            <div className="container">
                <div className="row mb">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 col-4">
                        <a href="#" className="vdoArea" data-aos="fade-up">
                            <img src={video}></img>
                            <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                        </a>
                    </div>{/* col */}
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 col-8 mb">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                        </div>{/* row */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
        <AudioIcon />
        <VideoIcon />
    </>
  );
}

export default Services;
