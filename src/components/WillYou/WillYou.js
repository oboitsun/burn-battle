import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/will-you.module.scss";
export default function WillYou() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    delay: 0.5,
    triggerOnce: false,
  });
  return (
    <div id="gameplay" className={styles.root}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-5 lg:mb-0 lg:order-2">
            <p className="heading text-center lg:text-left mb-2 ">
              WILL YOU CONQUER <br /> OR GET BURNT?
            </p>
            <p className="paragraph text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
          <div ref={ref} className="grid grid-cols-2 gap-x-5 lg:gap-x-8 gap-y-3 lg:order-1">
            <div className={styles.card}>
              <div className={`${styles.inner} ${styles.loser} overflow-hidden `}>
                <motion.img
                  initial={{ y: "100%" }}
                  animate={inView ? { y: 0, transition: { delay: 0.5 } } : { y: "-100%" }}
                  className="w-full"
                  src={"/assets/will-you/loser.png"}
                  alt={"Loser"}
                />
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.inner} overflow-hidden `}>
                <motion.img
                  initial={{ y: "-100%" }}
                  animate={inView ? { y: 0, transition: { delay: 0.0 } } : { y: "100%" }}
                  className="w-full"
                  src={"/assets/will-you/winner.png"}
                  alt={"Winner"}
                />
              </div>
            </div>
            <p className={styles.role}>Loose</p>
            <p className={styles.role}>Victory</p>
          </div>
        </div>
      </div>
    </div>
  );
}
