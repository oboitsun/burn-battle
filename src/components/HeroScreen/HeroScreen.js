import React from "react";
import Btn from "../Btn/Btn";
import Timer from "../Timer/Timer";
import HeroBG from "./HeroBG";
import styles from "./HeroScreen.module.scss";
import SplashCarousel from "./Slider";
export default function HeroScreen() {
  return (
    <div className={`${styles.root} overflow-hidden`}>
      <div className="absolute left-0 bottom-0 w-full h-full">
        {/* <img className={styles.bg} src="/assets/hero-screen/main-bg.svg" alt="Desert" /> */}
        <HeroBG className={styles.bg} />
        <div className="absolute w-full h-20 z-0 bg-brown-100 left-0 bottom-20 xl:hidden" />
      </div>
      <div className="wrap">
        <div className={`${styles.motto} stroke`}>
          Will you be the <br className="hidden lg:block" /> last one standing?
        </div>
        <p className={styles.subheading}>
          An NFT battle game - you lose <br className="lg:hidden" /> - your NFT gets burnt.
        </p>
        <div className="flex flex-col items-center gap-6 lg:flex-row justify-center">
          <div className="uppercase text-brown-400 text-2xl leading-none relative font-black text-center ">
            Season 1 <br className="hidden lg:block" /> Minting:
          </div>
          <Timer />
          <div className="flex gap-3 lg:gap-6 items-center">
            <div className="relative ">
              <Btn color={"bronze"} style={{ padding: "6px" }}>
                <div className="flex flex-col items-center leading-none">
                  <div className="font-black text-2xl ">950/1000</div>
                  <div className="italic text-[10px]  capitalize flex items-center gap-1">
                    mint people{" "}
                    <img className="relative -top-px" src="/assets/people-icon.svg" alt="people" />
                  </div>
                </div>
              </Btn>
            </div>
            <div className="relative">
              <Btn color={"gray"} style={{ padding: "6px" }}>
                <div className="flex flex-col items-center leading-none">
                  <div className="font-black text-2xl ">1,000,000</div>
                  <div className="italic text-[10px]  capitalize flex items-center gap-1">
                    grand prize in{" "}
                    <img
                      className="relative -top-px"
                      src="/assets/icp-gray.svg"
                      alt="ICP Blockchain Token"
                    />
                  </div>
                </div>
              </Btn>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10  w-full -translate-y-[5%]">
        <SplashCarousel />
      </div>
    </div>
  );
}
