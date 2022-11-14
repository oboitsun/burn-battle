import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/battle-and-bonuses.module.scss";
// const bonuses = [
//   "shield",
//   "timer",
//   "aid-kit",
//   "sword",
//   "treasure",
//   "sleep",
//   "picture",
//   "bolt",
//   "gift",
//   "double",
//   "gem",
//   "burn",
//   "lifeline",
//   "snipe",
//   "timer",
// ];
const currentBonuses = [
  {
    id: "total-block",
    name: "total block",
    image: "shield",
    about: "Totally blocks incoming damage",
  },
  {
    id: "number-vision",
    name: "number vision",
    image: "vision",
    about: `Ability to see opponent's number for one round`,
  },
  {
    id: "double-attack",
    name: "double attack",
    image: "double",
    about: "Doubles applied damage to opponent",
  },
];
export default function BattleAndBonuses() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <div className={styles.root}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-5 lg:mb-0 lg:mt-5">
            <p className="heading text-center lg:text-left mb-2 ">
              battle and <br /> win bonuses
            </p>
            <p className="paragraph text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
          <div ref={ref} className="grid grid-cols-3 lg:grid-cols-3 gap-4">
            {currentBonuses.map((bonus, i) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        scale: [1, 1.05, 1],

                        transition: { delay: 0.05 * i, duration: 0.3 },
                      }
                    : { opacity: 0 }
                }
                key={bonus.id}
                className={`${styles.bonusWrapper}`}
              >
                <div className={`${styles.card} `}>
                  <div className={styles.inner}>
                    <img
                      className={styles.icon}
                      src={`/assets/bonuses/${bonus.image}.svg`}
                      alt={`${bonus.name}-bonus`}
                    />
                  </div>
                </div>
                <div className={styles.caption}>
                  {bonus.name}
                  <div className={styles.about}>{bonus?.about}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
