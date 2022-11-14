import React from "react";
import styles from "./Char.module.scss";
import Btn from "../Btn/Btn";
export default function Char({ char }) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <img className="w-full transition-all hover:scale-110" src={char?.src} alt={char?.name} />
        <p className={styles.name}>{char?.name}</p>
        <p className={styles.id}>#0001</p>
        <div className="w-full">
          {" "}
          <Btn width="w-full" color={"bronzePrice"}>
            <span className="uppercase relative top-0.5 ">MORE INFO</span>
          </Btn>
        </div>
      </div>
    </div>
  );
}
