import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import Btn from "../Btn/Btn";

export default function SplashCarousel({ setLegend, idx, slides }) {
  return (
    <div className="w-full h-full  relative HeroScreen__Slider">
      <div id="swpr-prev" className="absolute left-8 top-2/3 -translate-y-1/2 z-10">
        <Btn color="slideNav">
          <img className="" src="/assets/hero-screen/arrow.svg" alt="Prev Slide" />
        </Btn>
      </div>
      <div id="swpr-next" className="absolute right-8 top-2/3 -translate-y-1/2 z-10">
        <Btn color="slideNav">
          <img className="rotate-180" src="/assets/hero-screen/arrow.svg" alt="Next Slide" />
        </Btn>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        className="swiper"
        loop={true}
        centeredSlides
        spaceBetween={140}
        slidesPerView={1}
        navigation={{
          nextEl: "#swpr-next",
          prevEl: "#swpr-prev",
        }}
      >
        <SwiperSlide key={1}>
          <div className="slide-wrap">
            <img
              className="w-[130%] lg:w-full h-full max-w-[140%] left-1/2  relative translate-x-[-52%] lg:left-0 lg:translate-x-0"
              src="/assets/hero-screen/characters1.png"
              alt="Characters"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className="slide-wrap grid grid-cols-2 h-full ">
            <img
              className="pt-20"
              // className="w-[130%] lg:w-full h-full max-w-[140%] left-1/2  relative translate-x-[-52%] lg:left-0 lg:translate-x-0"
              src="/assets/hero-screen/slide2-2.png"
              alt="Characters"
            />
            <img
              className="pt-20"
              // className="w-[130%] lg:w-full h-full max-w-[140%] left-1/2  relative translate-x-[-52%] lg:left-0 lg:translate-x-0"
              src="/assets/hero-screen/slide2-1.png"
              alt="Characters"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div className="slide-wrap grid grid-cols-2 gap-5 lg:gap-20 h-full relative">
            <img
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-auto h-[40%] z-0"
              src="/assets/hero-screen/vs.png"
            />
            <img
              className="pt-20 relative z-10"
              // className="w-[130%] lg:w-full h-full max-w-[140%] left-1/2  relative translate-x-[-52%] lg:left-0 lg:translate-x-0"
              src="/assets/hero-screen/slide3-1.png"
              alt="Characters"
            />
            <img
              className="pt-20  relative z-10"
              // className="w-[130%] lg:w-full h-full max-w-[140%] left-1/2  relative translate-x-[-52%] lg:left-0 lg:translate-x-0"
              src="/assets/hero-screen/slide3-2.png"
              alt="Characters"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
