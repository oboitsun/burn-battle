import React from "react";

import styles from "../../styles/roadmap-point.module.scss";
const points = [
  {
    checked: true,
    descr: `Lorem Ipsum has been`,
  },
  {
    checked: false,
    descr: `Lorem Ipsum has been`,
  },
  {
    checked: false,
    descr: `Lorem Ipsum has been`,
  },
  {
    checked: true,
    descr: `Lorem Ipsum has been`,
  },
];
export default function RoadmapPoint({ phase, disableLine }) {
  return (
    <div className={styles.root}>
      {!disableLine && <div className={styles.line} />}
      <div className={styles.card}>
        <div className={`${styles.inner} ${phase.bronze ? styles.bronze : ""}`}></div>
        <img className={styles.icon} src={phase.iconSrc} alt={`${phase.name}`} />
      </div>
      <div className="pr-5 lg:pr-10">
        <p className={styles.heading}>{phase.name}</p>
        <p className={styles.descr}>{phase.descr}</p>
        <div className="mt-2 grid gap-2">
          {phase.points.map((point, i) => (
            <div key={i} className={styles.point}>
              <div className={`${styles.checkbox} ${point.checked ? styles.cheked : ""}`}></div>
              <p className={styles.descr}>{point.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
