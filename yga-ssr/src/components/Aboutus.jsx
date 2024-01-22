import {Helmet} from "react-helmet";
import aboutUs from "../images/aboutUs.webp";
import Banner from "./include/Banner";
import AudioIcon from "./include/AudioIcon";
import VideoIcon from "./include/VideoIcon";
import Breadcrumbs from "./include/breadcrumbs";

const AboutUs = () => {
  return (
    <>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        </Helmet>
      <Banner pageName="About Us" />
      <Breadcrumbs pageName="About Us" />
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
                    </div>{/* cols */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
    <AudioIcon />
    <VideoIcon />
    </>
  );
}

export default AboutUs;
