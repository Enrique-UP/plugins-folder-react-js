import 'swiper/scss';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Reviews = () => {
    return(
        <>
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
                        slide 1
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        slide 2
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        slide 3
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        slide 4
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        slide 5
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        slide 6
                    </SwiperSlide>
                </Swiper>
        </>
    );
}
export default Reviews;