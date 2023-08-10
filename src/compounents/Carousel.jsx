import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper 
        loop={true}
        navigation={true}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        autoplay={{
        delay: 4500 }}
        className="h-[50%]">
           <SwiperSlide>
            <img src={"../images/carousel_1.jpg"} alt="/"/>
           </SwiperSlide>
           <SwiperSlide>
            <img src={"../images/carousel_2.jpg"} alt="/"/>
           </SwiperSlide>
           <SwiperSlide>
            <SwiperSlide className="bg-black">
              <video controls muted="muted">
                <source src={"../images/carousel_vid.mp4"} type="video/mp4"/>
              </video>
            </SwiperSlide>
            <img src={"../images/carousel_3.jpg"} alt="/"/>
           </SwiperSlide>
           <SwiperSlide>
            <img src={"../images/carousel_4.jpg"} alt="/"/>
           </SwiperSlide>
           <SwiperSlide>
            <img src={"../images/carousel_5.jpg"} alt="/"/>
           </SwiperSlide>
           


      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-black">

      </div>
    </div>
  )
}

export default Carousel
