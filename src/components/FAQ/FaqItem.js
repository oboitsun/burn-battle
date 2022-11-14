import React, { useState, useRef, useEffect } from "react";
import Btn from "../Btn/Btn";
import styles from "./faq-item.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function FaqItem({ iconSrc, qstn, answr, delay, id, currentFaq, setCurrentFaq }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    delay: 0.5,
    triggerOnce: true,
  });
  const content = useRef(null);

  function toggleAccordion() {
    setCurrentFaq(id);
  }
  useEffect(() => {
    if (currentFaq === id) {
      setActiveState("active");
      setHeightState(`${content.current.scrollHeight}px`);
    } else {
      setActiveState("");
      setHeightState("0px");
    }
  }, [currentFaq]);
  return (
    <motion.div
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={
        inView ? { y: 0, opacity: 1, transition: { delay: delay * 0.1 } } : { y: -50, opacity: 0 }
      }
      className="lg:w-full text-white"
    >
      <div onClick={toggleAccordion} className={styles.question}>
        <div className={`${styles.inner} ${setActive ? styles.bronze : ""} gap-2`}>
          <img className="w-6" src={iconSrc} alt="question icon" />
          <p className="mr-auto">{qstn}</p>
          <img
            className={`arrow-down transform ${setActive ? "rotate-180" : "rotate-0"}`}
            src="/assets/arrow-down.svg"
            alt="expand"
          />
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className=" transition-all overflow-hidden "
      >
        <p className="paragraph pt-5">{answr}</p>
      </div>
    </motion.div>
  );
}
