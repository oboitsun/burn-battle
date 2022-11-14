import React from "react";
import Characters from "./Characters";
import styles from "./GameDescr.module.scss";
export default function GameDescr() {
  return (
    <div id={"chars"} className={styles.root}>
      <div className="wrap">
        <p className="heading text-center pb-2">
          30 DIFFERENT PLAYABLE CHARCOAL WARRIOR NFT CHARACTERS TO MINT
        </p>
        <p className="paragraph text-center mb-6 max-w-[800px] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Characters />
      </div>
    </div>
  );
}
