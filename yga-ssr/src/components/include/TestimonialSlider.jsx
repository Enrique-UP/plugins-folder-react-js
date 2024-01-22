import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TestimonialSlider = () => {
  return (
    <>
        <section className="sectionTB testimonials">
            <div className="container">
                <div className="mainHead">
                    <p className="subHead" data-aos="fade-left">Testimonials</p>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-6">
                            <h1 className="head" data-aos="fade-right">What client's say?</h1>
                        </div>{/* col */}
                        <div className="col-xs-12 col-sm-12 col-6">
                            <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                        </div>{/* col */}
                    </div>{/* row */}
                </div>{/* mainHead */}
                {/*
                    https://swiperjs.com/react
                */}
                <Swiper modules={[Navigation, Autoplay]} autoplay={true} spaceBetween={30} slidesPerView={3} navigation breakpoints={
                    {
                        0: {slidesPerView: 1},
                        576: {slidesPerView: 2},
                        992: {slidesPerView: 3}
                    }
                }>
                    <SwiperSlide className="testiArea">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis doloremque tempora possimus error voluptatibus aliquid, laborum dolore officia, labore illum laboriosam ipsum enim.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                NameHere
                                <i>PostHere</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis doloremque tempora possimus error voluptatibus aliquid, laborum dolore officia, labore illum laboriosam ipsum enim.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                NameHere
                                <i>PostHere</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis doloremque tempora possimus error voluptatibus aliquid, laborum dolore officia, labore illum laboriosam ipsum enim.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                NameHere
                                <i>PostHere</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis doloremque tempora possimus error voluptatibus aliquid, laborum dolore officia, labore illum laboriosam ipsum enim.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                NameHere
                                <i>PostHere</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis doloremque tempora possimus error voluptatibus aliquid, laborum dolore officia, labore illum laboriosam ipsum enim.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                NameHere
                                <i>PostHere</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis doloremque tempora possimus error voluptatibus aliquid, laborum dolore officia, labore illum laboriosam ipsum enim.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                NameHere
                                <i>PostHere</i>
                            </span>
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>{/* container */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="btn center">
                            <Link to="/testimonials" data-aos="zoom-in"><span>View more <i className="icon">&#xf178;</i></span></Link>
                        </div>{/* btn */}
                    </div>{/* cols */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
    </>
  );
}

export default TestimonialSlider;
