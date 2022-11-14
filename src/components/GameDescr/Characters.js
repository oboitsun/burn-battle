import React from "react";
import Char from "./Char";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import Btn from "../Btn/Btn";
const chars = [
  { name: "Boulder", src: "/assets/game-descr/boulder1.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer1.png", price: 75 },
  { name: "Axeman", src: "/assets/game-descr/axeman1.png", price: 75 },
  { name: "Thrower", src: "/assets/game-descr/thrower1.png", price: 75 },
  { name: "Boulder", src: "/assets/game-descr/boulder2.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer2.png", price: 75 },
  { name: "Axeman", src: "/assets/game-descr/axeman2.png", price: 75 },
  { name: "Thrower", src: "/assets/game-descr/thrower3.png", price: 75 },
  { name: "Boulder", src: "/assets/game-descr/boulder.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer3.png", price: 75 },

  { name: "Boulder", src: "/assets/game-descr/boulder3.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer3.png", price: 75 },
  { name: "Axeman", src: "/assets/game-descr/axeman3.png", price: 75 },
  { name: "Thrower", src: "/assets/game-descr/thrower4.png", price: 75 },
  { name: "Boulder", src: "/assets/game-descr/boulder4.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer4.png", price: 75 },
  { name: "Axeman", src: "/assets/game-descr/axeman4.png", price: 75 },
  { name: "Thrower", src: "/assets/game-descr/thrower5.png", price: 75 },
  { name: "Boulder", src: "/assets/game-descr/boulder5.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer5.png", price: 75 },

  { name: "Boulder", src: "/assets/game-descr/boulder6.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer6.png", price: 75 },
  { name: "Axeman", src: "/assets/game-descr/axeman5.png", price: 75 },
  { name: "Thrower", src: "/assets/game-descr/thrower6.png", price: 75 },
  { name: "Boulder", src: "/assets/game-descr/boulder7.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer7.png", price: 75 },
  { name: "Axeman", src: "/assets/game-descr/axeman4.png", price: 75 },
  { name: "Thrower", src: "/assets/game-descr/thrower5.png", price: 75 },
  { name: "Boulder", src: "/assets/game-descr/boulder5.png", price: 100 },
  { name: "Archer", src: "/assets/game-descr/archer5.png", price: 75 },
];
export default function Characters() {
  return (
    <div className="relative ">
      <div
        id="descr-prev"
        className="absolute left-0 translate-x-[-20px] lg:-translate-x-[calc(100%+10px)] top-1/2 -translate-y-1/2 z-10"
      >
        <Btn color="">
          <img className="" src="/assets/hero-screen/arrow.svg" alt="Prev Slide" />
        </Btn>
      </div>
      <div
        id="descr-next"
        className="absolute right-0 translate-x-[20px] lg:translate-x-[calc(100%+10px)] top-1/2 -translate-y-1/2 z-10"
      >
        <Btn color="  ">
          <img className="rotate-180" src="/assets/hero-screen/arrow.svg" alt="Next Slide" />
        </Btn>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        // autoplay={{ delay: 2500 }}
        className="swiper"
        loop={true}
        centeredSlides
        spaceBetween={140}
        slidesPerView={1}
        navigation={{
          nextEl: "#descr-next",
          prevEl: "#descr-prev",
        }}
      >
        <SwiperSlide key={`${Math.random()}_1`}>
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-4">
            {chars.slice(0, 10).map((char, i) => (
              <Char key={`${char.name}_${i}`} char={char} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide key={`${Math.random()}_2`}>
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-4">
            {chars.slice(10, 20).map((char, i) => (
              <Char key={`${char.name}_${i}`} char={char} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide key={`${Math.random()}_3`}>
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-4">
            {chars.slice(20, 30).map((char, i) => (
              <Char key={`${char.name}_${i}`} char={char} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
