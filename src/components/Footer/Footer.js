import React from "react";
import Btn from "../Btn/Btn";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.root}>
      <div className="wrap">
        <div className={styles.footer}>
          <img className="w-[75px]" src="/assets/logo.svg" alt="Burn BATTLE" />
          <div className="flex  flex-col items-center font-normal text-sm italic lg:mr-auto ">
            <p>© 2022 Burn Battle. All rights reserved.</p>
            <p className="underline">Terms and conditions</p>
          </div>
          <div className="flex gap-4">
            <img className="" src="/assets/appstore.svg" alt="Download from  App Store" />
            <img className="" src="/assets/googleplay.svg" alt="Download from Google Play" />
          </div>
          <div className="flex gap-4">
            <Btn color="footerBlue">
              <img className="" src="/assets/hero-screen/twitter.svg" alt="visit our twitter" />
            </Btn>
            <Btn color="footerPurple">
              <img className="" src="/assets/hero-screen/discord.svg" alt="visit our discord" />
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
