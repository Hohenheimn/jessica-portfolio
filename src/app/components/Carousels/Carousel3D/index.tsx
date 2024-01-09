"use client";

import React from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
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

const Carousel3D = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: -50,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: -50,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: -50,
    },
  };
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        slidesPerView={3}
        freeMode
        loop
        centeredSlides
        breakpoints={breakpoints}
      >
        <NavigationButton />
        <SwiperSlide>
          <div className=" relative w-full  aspect-[1/1.5] slideitem">
            <aside className=" w-full h-full">
              <Image
                src="/images/sample.jpg"
                alt=""
                fill
                className=" object-cover"
              />
            </aside>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative w-full aspect-[1/1.5] slideitem">
            <aside className=" w-full h-full">
              <Image
                src="/images/sample.jpg"
                alt=""
                fill
                className=" object-cover"
              />
            </aside>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative w-full aspect-[1/1.5] slideitem">
            <aside className=" w-full h-full">
              <Image
                src="/images/sample.jpg"
                alt=""
                fill
                className=" object-cover"
              />
            </aside>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" relative w-full aspect-[1/1.5]">
            <Image
              src="/images/sample.jpg"
              alt=""
              fill
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel3D;

const NavigationButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className=" absolute top-[50%] left-[-20px] translate-y-[-50%] z-10"
      >
        <IoIosArrowBack className="text-[5rem] text-secondary" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" absolute top-[50%] right-[-20px] translate-y-[-50%] z-10 "
      >
        <IoIosArrowForward className=" text-[5rem] text-secondary" />
      </button>
    </>
  );
};
