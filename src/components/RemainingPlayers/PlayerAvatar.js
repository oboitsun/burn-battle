import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function PlayerAvatar({ player, styles }) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    delay: 0.5,
    triggerOnce: false,
  });
  return (
    <div ref={ref} className={`${styles.avatar} overflow-hidden`}>
      <div className={`${styles.inner}  ${player?.burnt ? styles.red : styles.bronze} `}>
        <img className={styles.img} src={player?.img} alt="Player" />
        {player?.burnt && (
          <motion.p
            initial={{ x: -100 }}
            animate={
              inView ? { x: "-50%", transition: { delay: Math.random() * 1.1 } } : { x: -100 }
            }
            className={styles.burnt}
          >
            Burnt
          </motion.p>
        )}
      </div>
    </div>
  );
}
