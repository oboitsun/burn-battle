import React from "react";
import styles from "../../styles/simple-fun.module.scss";
import SimpleFunSlider from "./SimpleFunSlider";
export default function SimpleFun() {
  return (
    <div className={styles.root}>
      <div className="wrap">
        <p className="heading text-center mb-5">
          SIMPLE YET <br className="lg:hidden" />
          FUN GAME PLAY
        </p>
        <div className="overflow-hidden relative w-full">
          <SimpleFunSlider styles={styles} />
        </div>
      </div>
    </div>
  );
}
