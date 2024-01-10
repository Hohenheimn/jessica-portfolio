"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const CarouselBox = ({ data }: { data: { image: string }[] }) => {
  const breakpoints = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  return (
    <div className="relative py-[30px]">
      <div className=" absolute left-0 bottom-0 w-full h-[20%] bg-gradient-to-b from-[#0b112f00] to-[#0b112f] to-[80%]  z-10 pointer-events-none"></div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        slidesPerView={3}
        freeMode
        loop
        breakpoints={breakpoints}
        slideToClickedSlide
      >
        {data.map((item, indx) => (
          <SwiperSlide key={indx}>
            <div className={`  w-full aspect-square slideitem cursor-pointer`}>
              <aside className=" w-full h-full relative">
                <Image src={item.image} alt="" fill className=" object-cover" />
              </aside>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselBox;
