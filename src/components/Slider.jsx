import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/img/1.jpg';
import slide2 from '../assets/img/2.jpg';
import slide3 from '../assets/img/3.jpg';
import slide4 from '../assets/img/4.png';
import slide5 from '../assets/img/5.jpg';
import slide6 from '../assets/img/6.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;