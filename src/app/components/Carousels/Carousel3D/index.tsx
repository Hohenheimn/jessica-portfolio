"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

const Carousel3D = ({
  data,
  type,
}: {
  data: { image: string; url: string }[];
  type?: "mobile";
}) => {
  const router = useRouter();
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: -10,
    },
  };

  return (
    <div className="threeD relative">
      <div className=" absolute left-0 bottom-0 w-full h-[20%] bg-gradient-to-b from-[#0b112f00] to-[#0b112f] to-[80%]  z-10 pointer-events-none"></div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        slidesPerView={3}
        freeMode
        loop
        centeredSlides
        breakpoints={breakpoints}
        effect="Cards"
        slideToClickedSlide
      >
        <NavigationButton />
        {data.map((item, indx) => (
          <SwiperSlide key={indx}>
            <div
              onClick={() => {
                router.push(item.url);
              }}
              className={`relative group w-full ${
                type === "mobile" ? "aspect-[1/1.8]" : "aspect-[1/1.5]"
              } slideitem cursor-pointer`}
            >
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

export default Carousel3D;

const NavigationButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className=" absolute top-[50%] left-[-20px] translate-y-[-50%] z-10"
      >
        <IoIosArrowBack className="text-[5rem] text-white" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" absolute top-[50%] right-[-20px] translate-y-[-50%] z-10 "
      >
        <IoIosArrowForward className=" text-[5rem] text-white" />
      </button>
    </>
  );
};
