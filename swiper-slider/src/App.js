import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


function App() {
  
  return (
    <>
      <div className="container">
      {/*
        https://swiperjs.com/react
      */}
        <Swiper modules={[Navigation, Autoplay]} autoplay={true} spaceBetween={50} slidesPerView={3} navigation breakpoints={
            {
                0: {slidesPerView: 1},
                576: {
                  slidesPerView: 2,
                  spaceBetween:0
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween:30
                }
            }
        }>
          <SwiperSlide><div className='slide'>Slide 1</div></SwiperSlide>
          <SwiperSlide><div className='slide'>Slide 2</div></SwiperSlide>
          <SwiperSlide><div className='slide'>Slide 3</div></SwiperSlide>
          <SwiperSlide><div className='slide'>Slide 4</div></SwiperSlide>
          <SwiperSlide><div className='slide'>Slide 5</div></SwiperSlide>
          <SwiperSlide><div className='slide'>Slide 6</div></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default App;
