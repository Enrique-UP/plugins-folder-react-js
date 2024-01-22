import React from "react";
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import "../../sass/about.scss";
import img1 from "../../images/delete/lifeStyle-1.jpg";

const CounterTag = ({ target, duration }) => {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
	return (
		<span ref={ref}>
			<CountUp
				start={0}
				end={inView ? target : 0}
				duration={duration}
				separator=','
				useEasing={true} />
		</span>
	);
};

const AboutUs = () => {
    return(
        <>
            <section className="section aboutMe">
                <div className="container">
                    <h1 className="heading">Section <span>Let</span><i>Lorem ipsum dolor</i></h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <figure className="heightImg1">
                                        <img src={img1} />
                                    </figure>
                                </div>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <figure className="heightImg2">
                                                <img src={img1} />
                                            </figure>
                                        </div>
                                        <div className="col-6">
                                            <figure className="heightImg2">
                                                <img src={img1} />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <p className="head">Hello!</p>
                            <p className="subHead">Lorem, ipsum dolor.</p>
                            <div className="post">
                                <span>Hello!</span>
                                <Typewriter options={{strings: ['<em>Lorem</em>', '<i>Ipsum</i>', '<b>Dolor</b>'], autoStart: true, loop: true, }} />
                            </div>
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor pariatur repellat consequuntur. Neque officiis fuga quasi exercitationem et, iure ipsa sit natus debitis itaque odio consectetur nesciunt atque placeat totam hic ipsam minus consequuntur nemo quisquam alias eos laborum. Consectetur odio aperiam accusantium cum dolorum culpa minima ullam sint?</p>
                            <p className="head1">Lorem</p>
                            <ul className="lists list1">
                                <li>1 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>2 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>4 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>5 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>6 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>7 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>8 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>9 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>10 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>11 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>12 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>13 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>14 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>15 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>16 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>17 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>18 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>19 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>20 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>21 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>22 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>23 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>24 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="lists list2">
                                <li>1 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>2 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>4 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>5 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>6 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>7 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>8 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>9 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>10 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>11 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>12 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>13 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>14 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>15 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>16 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>17 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>18 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>19 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>20 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>21 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>22 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>23 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>24 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ul>
                            <div className="fw progress-bars">
                                <p className="head1">Skl</p>
                                <div className="row">
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={40} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-1 fourty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={50} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-2 fifty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={60} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-3 sixty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-4 seventy"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={80} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-5 eighty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={90} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-6 ninty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={50} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-7 fifty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={60} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-8 sixty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-9 seventy"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={80} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-10 eighty"></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw progress-bars">
                                <p className="head1">Lang</p>
                                <div className="row">
                                    <div className="col-4 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={50} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-1 fifty"></div></div>
                                    </div>
                                    <div className="col-4 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-2 seventy"></div></div>
                                    </div>
                                    <div className="col-4 bar-item">
                                        <div className="skill-header">
                                            <b>Skls</b>
                                            <div className="count-box"><CounterTag className="count-text" target={60} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-3 sixty"></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw">
                                <p className="head1">Lorem</p>
                                <p>Lorem ipsum dolor, sit <b>amet consectetur adipisicing elit</b>. Nulla esse sit perspiciatis numquam impedit fuga! In quae, blanditiis voluptatibus molestiae facilis autem nihil consectetur iusto, quaerat quibusdam tenetur perspiciatis? Reiciendis provident corporis rerum atque doloremque officia. Dolore, veniam, quam eum esse nostrum iste voluptas numquam neque reiciendis ipsam et necessitatibus mollitia fuga ratione praesentium dolorum! Fugit ipsam, sapiente quidem iure a adipisci, molestiae omnis architecto iste rem quia, delectus corporis alias expedita exercitationem quaerat itaque porro eaque? Dignissimos earum, deserunt impedit inventore nemo a amet aut saepe natus quod perspiciatis adipisci, cumque beatae porro nihil? Assumenda libero architecto a expedita culpa ad ratione. Voluptatibus tempora perspiciatis soluta dolor, reprehenderit deserunt vel repellat facilis harum fugiat quaerat voluptas veritatis ea possimus sapiente praesentium. Facilis minus a quidem distinctio earum modi ipsam esse asperiores aliquam impedit reiciendis fugit doloremque error, blanditiis cum exercitationem totam ut ducimus quibusdam eum natus non ipsum. Rem eum expedita ea, porro facilis unde fuga consequuntur. Amet minima aut placeat reprehenderit laboriosam sed molestiae perferendis ea saepe quibusdam. Eaque praesentium perferendis velit? Provident ullam excepturi sunt dignissimos saepe porro, unde quae nisi ipsum? Illum, nostrum! Voluptates, natus? Beatae iusto ipsum eius. Hic ab necessitatibus consequuntur voluptatum similique atque!</p>
                            </div>
                            <div className="fw">
                                <p className="head1">Lorem</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla esse sit perspiciatis numquam impedit fuga! In quae, blanditiis voluptatibus molestiae facilis autem nihil consectetur iusto, quaerat quibusdam tenetur perspiciatis? Reiciendis provident corporis rerum atque doloremque officia. Dolore, veniam, quam eum esse nostrum iste voluptas numquam neque reiciendis ipsam et necessitatibus mollitia fuga ratione praesentium dolorum! Fugit ipsam, sapiente quidem iure a adipisci, molestiae omnis architecto iste rem quia, delectus corporis alias expedita exercitationem quaerat itaque porro eaque?</p>
                                <p>Dignissimos earum, deserunt impedit inventore nemo a amet aut saepe natus quod perspiciatis adipisci, cumque beatae porro nihil? Assumenda libero architecto a expedita culpa ad ratione. Voluptatibus tempora perspiciatis soluta dolor, reprehenderit deserunt vel repellat facilis harum fugiat quaerat voluptas veritatis ea possimus sapiente praesentium. Facilis minus a quidem distinctio earum modi ipsam esse asperiores aliquam impedit reiciendis fugit doloremque error, blanditiis cum exercitationem totam ut ducimus quibusdam eum natus non ipsum. Rem eum expedita ea, porro facilis unde fuga consequuntur. Amet minima aut placeat reprehenderit laboriosam sed molestiae perferendis ea saepe quibusdam. Eaque praesentium perferendis velit? Provident ullam excepturi sunt dignissimos saepe porro, unde quae nisi ipsum? Illum, nostrum! Voluptates, natus? Beatae iusto ipsum eius. Hic ab necessitatibus consequuntur voluptatum similique atque!</p>
                            </div>
                            <div className="fw family">
                                <p className="head1">Lorem</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla esse sit perspiciatis numquam impedit fuga! In quae, blanditiis voluptatibus molestiae facilis autem nihil consectetur iusto, quaerat quibusdam tenetur perspiciatis? Reiciendis provident corporis rerum atque doloremque officia. Dolore, veniam, quam eum esse nostrum iste voluptas numquam neque reiciendis ipsam et necessitatibus mollitia fuga ratione praesentium dolorum! Fugit ipsam, sapiente quidem iure a adipisci, molestiae omnis architecto iste rem quia, delectus corporis alias expedita exercitationem quaerat itaque porro eaque? Dignissimos earum, deserunt impedit inventore nemo a amet aut saepe natus quod perspiciatis adipisci, cumque beatae porro nihil? Assumenda libero architecto a expedita culpa ad ratione. Voluptatibus tempora perspiciatis soluta dolor, reprehenderit deserunt vel repellat facilis harum fugiat quaerat voluptas veritatis ea possimus sapiente praesentium. Facilis minus a quidem distinctio earum modi ipsam esse asperiores aliquam impedit reiciendis fugit doloremque error, blanditiis cum exercitationem totam ut ducimus quibusdam eum natus non ipsum. Rem eum expedita ea, porro facilis unde fuga consequuntur. Amet minima aut placeat reprehenderit laboriosam sed molestiae perferendis ea saepe quibusdam. Eaque praesentium perferendis velit? Provident ullam excepturi sunt dignissimos saepe porro, unde quae nisi ipsum? Illum, nostrum! Voluptates, natus? Beatae iusto ipsum eius. Hic ab necessitatibus consequuntur voluptatum similique atque!</p>
                            </div>
                            <div className="fw techSkills">
                                <div className="row mu-single-counter2">
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe044;</i>
                                            <b>LoremIpsum</b>
                                            <CounterTag className="count-text" target={1000} duration={5} />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe047;</i>
                                            <b>LoremIpsum</b>
                                            <CounterTag className="count-text" target={750} duration={5} />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe031;</i>
                                            <b>LoremIpsum</b>
                                            <CounterTag className="count-text" target={250} duration={5} />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe053;</i>
                                            <b>LoremIpsum</b>
                                            <CounterTag className="count-text" target={100} duration={5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw outSideWork">
                                <p className="head2">Lorem</p>
                                <p className="texts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque quod earum et ex quasi doloribus impedit nemo, voluptatem deserunt cumque at asperiores repellat dolore vitae aliquam quae incidunt voluptas quas. Consequuntur magnam aut necessitatibus facilis quia deserunt, voluptas magni est blanditiis quos minima laborum quod? Quia atque sint explicabo animi temporibus! Ut necessitatibus ratione eius, nam reiciendis illo?</p>
                            </div>
                            <p className="btns center">
                                <a href="#" className="btn-1">Fly</a>
                                <a href="#" className="btn-2">Read More</a>
                                <a href="#" className="btn-3">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;