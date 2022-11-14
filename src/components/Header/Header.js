import React, { useState } from "react";
import Btn from "../Btn/Btn";
import styles from "./Header.module.scss";
import Menu from "./Menu";
import ConnectWallet from "../ConnectWallet/ConnectWallet";

export default function Header({ scrolled, setShowMenu, showMenu }) {
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);
  const menuClick = () => {
    console.log("click");
    setShowHeaderMenu(true);
  };
  return (
    <div className={`${styles.root} ${scrolled ? styles.scrolled : ""}`}>
      <div className="wrap">
        <div className={styles.navbar}>
          <div className={styles.leftSide}>
            <Btn onClick={menuClick}>
              <div className="flex gap-2 items-center ">
                <img className="" src="/assets/hero-screen/burger.svg" alt="menu" />
                <span className="relative top-0.5">MENU</span>
              </div>{" "}
            </Btn>
            <Btn color="blue">
              <img className="" src="/assets/hero-screen/twitter.svg" alt="visit our twitter" />
            </Btn>
            <Btn color="purple">
              <img className="" src="/assets/hero-screen/discord.svg" alt="visit our discord" />
            </Btn>
          </div>
          <img className={styles.logo} src="/assets/logo.svg" alt="Burnt BATTLE" />
          <div onClick={menuClick} className="lg:hidden">
            <Btn>
              <div className="flex gap-2 items-center ">
                <img className="" src="/assets/hero-screen/burger.svg" alt="menu" />
                <span className="relative top-0.5">MENU</span>
              </div>{" "}
            </Btn>
          </div>
          <div className="hidden lg:block">
            <ConnectWallet />
          </div>
        </div>
      </div>
      <Menu showHeaderMenu={showHeaderMenu} setShowHeaderMenu={setShowHeaderMenu} />
    </div>
  );
}
