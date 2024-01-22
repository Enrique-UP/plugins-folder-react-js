import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import {Helmet} from "react-helmet";

import AudioIcon from "./include/AudioIcon";
import VideoIcon from "../components/include/VideoIcon";
import TestimonialSlider from "../components/include/TestimonialSlider";
import WhyUs from "../components/include/WhyUs";
import ImageGallery from "../components/include/ImageGallery";

import aboutUs from "../images/aboutUs.webp";
import benefits from "../images/benefits.png";

const Home = () => {
  return (
    <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        </Helmet>
        <Carousel className="banner">
            <Carousel.Item>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8 col-7">
                            <p className="head">Benefits of Yoga</p>
                            <p className="text">There is a broad variety of Yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. Among the most well-known types of yoga are Hatha yoga and Rāja yoga.</p>
                            <div className="btn">
                                <Link to="/contactus"><span>For more information <i className="icon">&#xf178;</i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8 col-7">
                            <p className="head">Yoga is 99% Practice & 1% Theory</p>
                            <p className="text">Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six orthodox schools of Hindu philosophy.</p>
                            <div className="btn">
                                <Link to="/contactus"><span>For more information <i className="icon">&#xf178;</i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8 col-7">
                            <p className="head">The Main Reasons to Practice Yoga</p>
                            <p className="text">Balance body and mind, Increase strength & flexibility, Build core strength, Build core strength, Eliminate toxins from body and Increase strength & flexibility.</p>
                            <div className="btn">
                                <Link to="/contactus"><span>For more information <i className="icon">&#xf178;</i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        <WhyUs />
        <section className="sectionTB aboutUs">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-6">
                        <div className="mainHead">
                            <h1 className="head" data-aos="fade-left">Welcome to website</h1>
                        </div>{/* mainHead */}
                    </div>{/* cols */}
                    <div className="col-xs-12 col-sm-12 col-6">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur veritatis tempore doloribus. Voluptatem repellendus, tempore ullam voluptatibus alias, consequuntur atque sed illum quidem doloribus rem fuga. Aliquid non illum magnam perferendis a porro nesciunt maiores ipsam incidunt reprehenderit officia ut, ipsa suscipit odio tempora iste itaque laborum neque. Nemo, deleniti. Aliquid non illum magnam perferendis a porro nesciunt maiores ipsam incidunt reprehenderit officia ut, ipsa suscipit odio tempora iste itaque laborum neque. Nemo, deleniti.</p>
                    </div>{/* cols */}
                    <div className="col-12">
                        <div className="details">
                            <img src={aboutUs} alt="" className="banner" data-aos="zoom-in"></img>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla rem beatae dolorem. Officia, tempora illum earum quae dicta nulla fugit sit quasi deserunt odio similique nemo, a aut id aspernatur facere, praesentium ipsam maxime esse eligendi. Consectetur sint iure mollitia odit. Dolores odio voluptatibus mollitia at iusto aspernatur voluptatem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla rem beatae dolorem. Officia, tempora illum earum quae dicta nulla fugit sit quasi deserunt odio similique nemo, a aut id aspernatur facere, praesentium ipsam maxime esse eligendi. Consectetur sint iure mollitia odit. Dolores odio voluptatibus mollitia at iusto aspernatur voluptatem.</p>
                            <p><b>Lorem ipsum dolor</b></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla rem beatae dolorem. Officia, tempora illum earum quae dicta nulla fugit sit quasi deserunt odio similique nemo, a aut id aspernatur facere, praesentium ipsam maxime esse eligendi. Consectetur sint iure mollitia odit. Dolores odio voluptatibus mollitia at iusto aspernatur voluptatem.</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis aut tempore, molestiae veniam sint deserunt nemo quod assumenda delectus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis aut tempore, molestiae veniam sint deserunt nemo quod assumenda delectus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis aut tempore, molestiae veniam sint deserunt nemo quod assumenda delectus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis aut tempore, molestiae veniam sint deserunt nemo quod assumenda delectus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis aut tempore, molestiae veniam sint deserunt nemo quod assumenda delectus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis aut tempore, molestiae veniam sint deserunt nemo quod assumenda delectus.</li>
                            </ul>
                            <p><b>Lorem ipsum dolor</b></p>
                            <p>Lorem ipsum dolor <a href="#">sit amet consectetur</a> adipisicing elit. Placeat nulla rem beatae dolorem. Officia, tempora illum earum quae dicta nulla fugit sit quasi deserunt odio similique nemo, a aut id aspernatur facere, praesentium ipsam maxime esse eligendi. Consectetur sint iure mollitia odit. Dolores odio voluptatibus mollitia at iusto aspernatur voluptatem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla rem beatae dolorem. Officia, tempora illum earum quae dicta nulla fugit sit quasi deserunt odio similique nemo, a aut id aspernatur facere, praesentium ipsam maxime esse eligendi. Consectetur sint iure mollitia odit. Dolores odio voluptatibus mollitia at iusto aspernatur voluptatem.</p>
                            <p><b>Lorem ipsum dolor</b></p>
                            <ol>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit dignissimos ea velit distinctio maxime! Et corporis ducimus laboriosam non veniam illo, sunt saepe. Suscipit illum quasi harum dolorum nemo eaque odit id itaque asperiores optio voluptatem nihil esse adipisci voluptas explicabo deserunt tempore, facere alias quam dolorem officiis nesciunt.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellendus quos error pariatur ea quaerat porro vel perspiciatis tempora quas ipsa ipsum, omnis neque, adipisci officia rerum! Reiciendis harum voluptates laboriosam quo ab officiis error quas nihil porro. Aliquid, id.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellendus quos error pariatur ea quaerat porro vel perspiciatis tempora quas ipsa ipsum, omnis neque, adipisci officia rerum! Reiciendis harum voluptates laboriosam quo ab officiis error quas nihil porro. Aliquid, id.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellendus quos error pariatur ea quaerat porro vel perspiciatis tempora quas ipsa ipsum, omnis neque, adipisci officia rerum! Reiciendis harum voluptates laboriosam quo ab officiis error quas nihil porro. Aliquid, id.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellendus quos error pariatur ea quaerat porro vel perspiciatis tempora quas ipsa ipsum, omnis neque, adipisci officia rerum! Reiciendis harum voluptates laboriosam quo ab officiis error quas nihil porro. Aliquid, id.</li>
                            </ol>
                        </div>{/* details */}
                        <div className="btn center">
                            <Link to="/aboutus" data-aos="zoom-in"><span>View more <i className="icon">&#xf178;</i></span></Link>
                        </div>{/* btn */}
                    </div>{/* cols */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
        <AudioIcon />
        <VideoIcon />
        <ImageGallery />
        <section className="sectionTB benefits">
            <div className="container">
                <div className="mainHead">
                    <p className="subHead" data-aos="fade-left">Yoga Benefits</p>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-6">
                            <h1 className="head" data-aos="fade-right">Yoga as a lifestyle</h1>
                        </div>{/* col */}
                        <div className="col-xs-12 col-sm-12 col-6">
                            <p className="detailsHead" data-aos="fade-up">Yoga was and  always will be something more than just a workout. It has always been a philosophy, a lifestyle for a healthy mind and body state. The main things that yoga will help you achieve are:</p>
                        </div>{/* col */}
                    </div>{/* row */}
                </div>{/* mainHead */}
            </div>{/* container */}
            <div className="container">
                <ul className="benefitsArea">
                    <li data-aos="fade-left">
                        <ul>
                            <li>Learn essential yoga</li>
                            <li>Spend 15 minutes a day</li>
                            <li>Develops and equlibra your chakras</li>
                            <li>Learn seven energy levels</li>
                            <li>Refreshens your body and soul</li>
                            <li>Learn meditation technique</li>
                            <li>Heal your emotions, be happy</li>
                            <li>Transform your thinking habits</li>
                            <li>Strengthen your health and body</li>
                            <li>Learn about ayurvedic medicines</li>
                        </ul>
                    </li>
                    <li data-aos="fade-up"><img src={benefits} alt=""></img></li>
                    <li data-aos="fade-right">
                        <ul>
                            <li>Studied and applied in everyday life</li>
                            <li>Relaxation after work</li>
                            <li>Much more peaceful state of mind</li>
                            <li>Energized body</li>
                            <li>Reenergized mind</li>
                            <li>High flexibility</li>
                            <li>Balance Body & Mind</li>
                            <li>Meditation Practice</li>
                            <li>Healthy Daily Life</li>
                            <li>And much more...</li>
                        </ul>
                    </li>
                </ul>
            </div>{/* container */}
        </section>
        <TestimonialSlider />
    </>
  );
}

export default Home;
