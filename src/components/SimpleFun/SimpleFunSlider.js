import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import useWindowSize from "../helpers/useWindowSize";

export default function SimpleFunSlider({ styles }) {
  const [sldrProps, setSldrProps] = React.useState({
    spaceBetween: 40,
    slidesPerView: 1,
    pagination: true,
    loop: true,
  });
  const [intialize, setInitialize] = React.useState(false);
  const size = useWindowSize();
  React.useEffect(() => {
    if (size?.width) {
      setInitialize(false);
      size?.width < 1024 &&
        setSldrProps({
          spaceBetween: 40,
          slidesPerView: 1,
          pagination: true,
          loop: false,
          autoplay: { delay: 3500 },
          allowTouchMove: true,
        });
      size?.width >= 1024 &&
        setSldrProps({
          spaceBetween: 40,
          slidesPerView: 3,
          pagination: false,

          loop: false,
          autoplay: false,
          allowTouchMove: false,
        });
    }
    setInitialize(true);
    console.log(size?.width, intialize, sldrProps);
  }, [size]);

  return (
    <div className="w-full h-full  relative">
      {/* <div id="swpr-prev" className="absolute left-8 top-2/3 -translate-y-1/2 z-10">
        <Btn color="slideNav">
          <img className="" src="/assets/hero-screen/arrow.svg" alt="Prev Slide" />
        </Btn>
      </div>
      <div id="swpr-next" className="absolute right-8 top-2/3 -translate-y-1/2 z-10">
        <Btn color="slideNav">
          <img className="rotate-180" src="/assets/hero-screen/arrow.svg" alt="Next Slide" />
        </Btn>
      </div> */}
      {intialize && (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          className="simple-fun-slider"
          centeredSlides={false}
          {...sldrProps}
          // navigation={{
          //   nextEl: "#swpr-next",
          //   prevEl: "#swpr-prev",
          // }}
        >
          <SwiperSlide key={1}>
            <div className="w-full">
              <img className="w-full " src="/assets/simple-fun/slide1.png" />

              <p className={styles.slideHeading}>Choose a number</p>
              <p className={styles.slideDescr}>
                You will take a turn to attack by trying to choose your opponents number. The closer
                you are to his number the more damage you will deal. You will then have a turn to
                defend by selecting a number for your opponent to guess. Try to trick them and
                defend as good as you can!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <div className="w-full">
              <img className=" w-full" src="/assets/simple-fun/slide2.png" />

              <p className={styles.slideHeading}>Attacking</p>
              <p className={styles.slideDescr}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key={3}>
            <div className="w-full">
              <img className="w-full " src="/assets/simple-fun/slide3.png" />

              <p className={styles.slideHeading}>Arena</p>
              <p className={styles.slideDescr}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
