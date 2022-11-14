import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import Btn from "../Btn/Btn";
import styles from "./Roadmap.module.scss";
import RoadmapPoint from "./RoadmapPoint";
import { phases } from "./phases";
import useWindowSize from "../helpers/useWindowSize";

export default function Roadmap({ setLegend, idx, slides }) {
  const [sldrProps, setSldrProps] = React.useState({
    spaceBetween: 40,
    slidesPerView: 1,
    pagination: true,
    loop: true,
  });
  const [marginLeft, setMarginLeft] = React.useState(0);
  const size = useWindowSize();
  React.useEffect(() => {
    if (size?.width) {
      let slidesPerView = 1;
      let marginLeft = 0;

      if (size?.width >= 1024) {
        slidesPerView = 2.1;
        marginLeft = (size.width - 836) / 2;
      }
      if (size?.width >= 1280) {
        slidesPerView = 3.2;
        marginLeft = (size.width - 1024) / 2;
      }
      setMarginLeft(marginLeft);
      setSldrProps({
        slidesPerView,
      });
    }
  }, [size]);
  const wrapRef = React.useRef();

  return (
    <div id="roadmap" className="w-full h-full relative  py-[100px] ">
      <div ref={wrapRef} className="wrap">
        <div className="relative max-w-max mx-auto ">
          <p className="uppercase text-white font-black text-2xl lg:text-[40px] text-center relative top-0.5">
            Roadmap
          </p>
          <div
            id="roadmap-prev"
            className="absolute right-full mr-2  top-1/2 -translate-y-1/2 z-10"
          >
            <Btn color="slideNav">
              <img className="" src="/assets/hero-screen/arrow.svg" alt="Prev Slide" />
            </Btn>
          </div>
          <div id="roadmap-next" className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-10">
            <Btn color="slideNav">
              <img className="rotate-180" src="/assets/hero-screen/arrow.svg" alt="Next Slide" />
            </Btn>
          </div>
        </div>
      </div>
      <div style={{ marginLeft }} className="py-10 pl-10 lg:pl-0 max-w-[1280px] relative">
        <div className={styles.rightGradient} />
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          className="swiper"
          spaceBetween={0}
          slidesPerView={sldrProps.slidesPerView}
          navigation={{
            nextEl: "#roadmap-next",
            prevEl: "#roadmap-prev",
          }}
        >
          {phases.map((phase, i) => (
            <SwiperSlide key={i}>
              <RoadmapPoint phase={phase} disableLine={i === phases.length - 1} />
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </div>
  );
}
