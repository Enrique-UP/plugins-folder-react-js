import { useEffect } from "react";
import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import data from "./Data.js";
import img7 from "./images/img7.jpg";

function App() {
  useEffect(() => {
    for(var j = 0; j < data.length; j++){
      var elementSwiperSlide = document.createElement("div");
      elementSwiperSlide.classList = "swiper-slide";
      document.querySelector(".swiper .swiper-wrapper").append(elementSwiperSlide);
      elementSwiperSlide.innerHTML = data[j].text;
    }

    var slide = document.querySelectorAll(".swiper .swiper-wrapper .swiper-slide");
    for(var i = data.length; i < slide.length; i++){
      slide[i].remove();
    }
  }, []);
  return (
    <>
      <div className='container'>
        <img src={img7} width={100} />
        <Swiper modules={[Navigation, Pagination, Autoplay]} autoplay={true} spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: false }} breakpoints={
            {
                0: {slidesPerView: 1},
                576: {
                  slidesPerView: 2,
                  spaceBetween:20
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween:30
                }
            }
        }>
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper> 
      </div>
    </>
  );
}

export default App;
