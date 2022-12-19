import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


// import required modules


export default function Roullette() {
  return (
    <>
      <Swiper
         slidesPerView={1}
         spaceBetween={0}
         loop={true}
         autoplay={{
           delay: 2000,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         className="mySwiper"
      >
        <SwiperSlide><div className="rouD"><img src="./images/image1.jpeg" className="rou"/></div></SwiperSlide>
        <SwiperSlide><div className="rouD"><img src="./images/image2.jpeg" className="rou"/></div></SwiperSlide>
        <SwiperSlide><div className="rouD"><img src="./images/image4.jpeg" className="rou"/></div></SwiperSlide>
        <SwiperSlide><div className="rouD"><img src="./images/image5.jpeg" className="rou"/></div></SwiperSlide>
        <SwiperSlide><div className="rouD"><img src="./images/image6.jpeg" className="rou"/></div></SwiperSlide>
        <SwiperSlide><div className="rouD"><img src="./images/image7.jpeg" className="rou"/></div></SwiperSlide>
      </Swiper>
    </>
  );
}
