import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router-dom";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3 p-1">
        <div className="text-2xl font-semibold p-3">Best Seller</div>
     <Swiper
          slidesPerView={7}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="">
          {
            Array.from({ length: 9 }, (_, i) =>
            <SwiperSlide key={i}>
                    <Link to={`./product/${i}`}>
                    <img src={`../images/product_${i}_small.jpg`} />
                    </Link>
            </SwiperSlide>)
          }
          </Swiper>
    </div>
  )
}

export default CarouselProduct