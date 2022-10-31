import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Autoplay} from "swiper";

export default function CarF() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        
        
        freeMode={true}
    
 
  freeModeMomentum={false}
        loop={true}
        autoplay={{
            delay: 0,
            disableOnInteraction: false,
        
          }}
          speed={10000}
        modules={[FreeMode, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide><div id="spinB" ><h1 id="spinF">HECHO CON AMOR ❤️ </h1></div></SwiperSlide>
        
      </Swiper>
    </>
  );
}
