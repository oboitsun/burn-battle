import React from "react";
import styles from "../../styles/btn.module.scss";

export default function Btn({ width = "w-max", color, containerClassName, children, ...props }) {
  return (
    <div
      className={`${styles.btnContainer} ${width} ${
        containerClassName ? styles[containerClassName] : ""
      }`}
    >
      <div className={`${styles.inner} ${color ? styles[color] : ""}`} {...props}>
        {children}
      </div>
    </div>
  );
}
