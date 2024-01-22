import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import {Helmet} from "react-helmet";

import AudioIcon from "./include/AudioIcon";
import VideoIcon from "../components/include/VideoIcon";
import TestimonialSlider from "../components/include/TestimonialSlider";
import WhyUs from "../components/include/WhyUs";

import aboutUs from "../images/aboutUs.webp";
import video from "../images/video.webp";
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
                            <h1 className="head" data-aos="fade-left">Welcome to Yogaphysician</h1>
                        </div>{/* mainHead */}
                    </div>{/* cols */}
                    <div className="col-xs-12 col-sm-12 col-6">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur veritatis tempore doloribus. Voluptatem repellendus, tempore ullam voluptatibus alias, consequuntur atque sed illum quidem doloribus rem fuga. Aliquid non illum magnam perferendis a porro nesciunt maiores ipsam incidunt reprehenderit officia ut, ipsa suscipit odio tempora iste itaque laborum neque. Nemo, deleniti. Aliquid non illum magnam perferendis a porro nesciunt maiores ipsam incidunt reprehenderit officia ut, ipsa suscipit odio tempora iste itaque laborum neque. Nemo, deleniti.</p>
                    </div>{/* cols */}
                    <div className="col-12">
                        <div className="details">
                            <img src={aboutUs} alt="" className="banner" data-aos="zoom-in"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat non nemo eius animi obcaecati accusamus eveniet sed dolore, consequatur at dignissimos, omnis ea assumenda esse ad deleniti dolores nisi eaque voluptatum! Quos odit possimus aliquam ut, sunt esse ad, eaque iste doloribus architecto inventore cum animi perferendis exercitationem ipsam? Perferendis tempore itaque temporibus sint commodi dolore nulla consequatur a, ea qui, exercitationem perspiciatis in omnis quibusdam ab aperiam hic. Alias pariatur recusandae, tenetur natus magnam vel tempore dolorem eligendi rerum soluta ratione aut praesentium ut! Eligendi, ratione sequi. Earum id alias quam itaque architecto iusto accusantium deleniti minima dignissimos exercitationem ut minus perferendis veniam illo quis, accusamus tempore impedit recusandae vel illum autem magni blanditiis debitis veritatis. Deleniti, consectetur molestiae est omnis fugiat, officiis illum ipsa, eaque repellat necessitatibus atque pariatur! Ad natus temporibus velit quos at, voluptate provident nobis nesciunt minus! Architecto odio adipisci officiis, quidem saepe assumenda nostrum possimus autem nesciunt maiores nemo delectus nulla voluptas eaque accusamus commodi explicabo et rem? Veritatis repellat voluptas atque iste perspiciatis. Optio veritatis aliquid nihil iste repellendus quasi eos. Qui labore nesciunt, laudantium accusamus officiis est architecto ut ipsum obcaecati commodi magnam alias ad officia eligendi enim. Quam ipsum aperiam tempore perferendis sapiente corporis magni corrupti assumenda minima odit explicabo praesentium aliquid nemo impedit optio sit earum quisquam officiis natus voluptatibus mollitia at, doloremque magnam! Repellat cupiditate, praesentium ad culpa at magni unde, est id, nihil maxime non alias amet consequatur nam! Incidunt impedit aperiam natus deserunt voluptatem possimus non corrupti provident. Sapiente nulla amet fugiat in veritatis illo modi corporis unde. Veritatis modi, culpa minima illo adipisci ipsam quidem ducimus sit asperiores neque a nisi nostrum obcaecati enim itaque laudantium vero perspiciatis odio nam aliquam, animi eum! Voluptate unde libero qui fuga quisquam expedita debitis ducimus quas fugit totam dolor ab, non necessitatibus dicta facere, amet natus, culpa facilis tempora magnam laudantium adipisci? Cum similique odio culpa obcaecati. Tempore neque, maiores voluptas fugit quisquam autem nam modi illo quas velit harum numquam ratione impedit nesciunt error repudiandae ipsum architecto pariatur! Nulla, sit illo voluptatibus vel asperiores totam odio exercitationem, quia suscipit natus blanditiis, modi neque cumque nesciunt aspernatur esse officia fugit ducimus deserunt? Laborum eum animi ratione corrupti molestiae labore aspernatur ullam eius ut dolores voluptas nisi sequi incidunt sint fuga officiis saepe quos, minima accusantium nostrum aperiam obcaecati illo delectus rerum? Laborum molestiae repellat deleniti et est. Aliquam ipsa repellendus saepe amet, rerum accusantium obcaecati, quia sed non modi ipsum officia sapiente quo officiis repellat facere necessitatibus facilis eum eos veniam eveniet laboriosam blanditiis ratione quisquam. Doloribus repudiandae voluptas perferendis reiciendis assumenda sit laudantium blanditiis, nulla, id numquam recusandae, est similique. In cupiditate vitae unde tempora vero perferendis sed? Ad, rerum ipsum labore recusandae commodi impedit autem laudantium nesciunt reiciendis ex velit voluptatem quae temporibus ut? Necessitatibus est, consequatur dolorum beatae molestiae eius autem quam libero similique rem dolor ut! Rerum numquam dolorem magni cumque excepturi sed, asperiores corporis quis ex at quasi itaque porro nulla voluptas. Amet expedita dolor velit ullam commodi veniam asperiores quasi quos dolorem obcaecati mollitia, recusandae provident esse. Laboriosam libero dolores exercitationem tempore unde a pariatur recusandae sequi at veniam, dolorem quas ut aliquam adipisci ipsa ullam totam nemo similique minus amet harum? Quas expedita quidem voluptatibus deserunt optio labore explicabo doloremque natus repellendus iure pariatur, perferendis, sequi laboriosam, aut mollitia perspiciatis consectetur architecto vero magni libero ducimus? In quas pariatur tenetur maxime deserunt fuga, corrupti tempore suscipit repellendus minima nisi sed praesentium modi nihil architecto tempora nostrum vero blanditiis commodi cum, nemo perferendis! Corporis, illum assumenda. Facere eos ipsum aliquam reiciendis ipsa vero odio officia. Maiores molestias quas, corrupti laborum odio pariatur? Eius, natus dicta. Tempora, nisi officiis placeat perspiciatis modi ipsam odio ipsa laboriosam sit soluta possimus totam eaque illum, eveniet corporis nostrum et ea accusamus excepturi! Laboriosam explicabo, corporis tempora, et excepturi blanditiis officia illo dolorum ex mollitia itaque modi amet minima sed hic nisi. Quisquam voluptatem dicta minima totam cumque quo quibusdam quaerat a ab! Fugit autem, dolor iusto vitae officia totam iste? Alias aperiam id eos deleniti, corrupti ad? Voluptate quia fugiat sapiente sequi laboriosam voluptatibus? Aspernatur eum harum alias laboriosam eaque perspiciatis velit, dicta laborum porro illum placeat similique obcaecati reprehenderit dignissimos deserunt. Eius, repellat eligendi cumque doloremque at totam consequuntur blanditiis praesentium molestiae? Laudantium necessitatibus voluptatibus nemo odit quod. Laborum id placeat officiis quia. Laudantium vero est, distinctio eum nobis odio nisi, sapiente pariatur tempore optio dolor. Tenetur harum voluptas dolorem unde error eum rerum, doloribus quos, sint deleniti repudiandae sit cupiditate neque laborum perferendis perspiciatis rem, corporis iusto! Repudiandae soluta eaque laborum aliquid? Ullam aspernatur eum, temporibus suscipit veniam sequi quam deserunt animi non, quas pariatur atque tempore accusantium possimus ipsum saepe quasi sunt. Id maiores ex, corporis aspernatur eveniet tempora, nobis assumenda iste, adipisci eligendi molestiae labore vel laboriosam obcaecati porro vero? Iusto dignissimos placeat nulla earum excepturi repudiandae voluptas quia, necessitatibus nam optio deserunt officiis repellat perferendis accusamus minima debitis nostrum alias consectetur ullam provident! Laboriosam, saepe, perferendis necessitatibus odio maiores quas accusamus voluptatum ad quibusdam ut obcaecati rem ullam! Illo officiis incidunt labore velit in veniam nihil quam! Recusandae incidunt quod amet aut, id, vitae at accusantium ipsum labore molestias officiis est explicabo, voluptates ad. Quidem id perspiciatis voluptas, dolor soluta quam omnis aspernatur corporis non obcaecati, adipisci qui quasi eum ab consequatur illo fuga nisi ad, culpa et officiis ducimus nobis eligendi unde. Excepturi ab debitis deserunt consectetur repellendus amet vel pariatur laudantium, tenetur, aliquid, alias cum placeat libero voluptate cumque? Dolorum deserunt aliquam fuga commodi exercitationem aut facilis laudantium, excepturi eius iure, impedit accusantium ad est repellendus voluptatibus amet quo esse. Ducimus repellendus, quo quaerat exercitationem minus veritatis pariatur soluta quasi eum voluptas laudantium earum reprehenderit molestias ipsam, laborum minima! Sed necessitatibus ad minus nulla! Ratione odit blanditiis beatae velit quia libero voluptate hic unde suscipit sint debitis autem, omnis non. Veniam nam libero minima sint odio quas quae, mollitia aliquid quis eos dignissimos quasi pariatur repudiandae placeat fuga ipsum. Cumque.</p>
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
        <section className="sectionTB vdo">
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
            <div className="container">
                <div className="row mb">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 col-4">
                        <a href="#" className="vdoArea" data-aos="fade-up">
                            <img src={video}></img>
                            {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                        </a>
                    </div>{/* col */}
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 col-8 mb">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    {/* <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p> */}
                                </a>
                            </div>{/* col */}
                        </div>{/* row */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
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
