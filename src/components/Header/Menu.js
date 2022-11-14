import React from "react";
import Btn from "../Btn/Btn";
import styles from "./Menu.module.scss";
import { Link } from "react-scroll";
const header_anchors = [
  { href: "chars", text: "Charecters" },
  { href: "gameplay", text: "gameplay" },
  { href: "remaining-players", text: "Remaining Players" },
  { href: "roadmap", text: "roadmap" },
  { href: "faq", text: `Faq's` },
];
const linkProps = {
  spy: true,
  smooth: true,
  offset: -100,
  duration: 500,

  activeClass: "active",
};
export default function Menu({ showHeaderMenu, setShowHeaderMenu }) {
  const closeMenu = () => {
    setShowHeaderMenu(false);
  };
  return (
    <div className={`${styles.backdrop} ${showHeaderMenu ? styles.show : ""}`} onClick={closeMenu}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.menu}
      >
        <img
          className={styles.closeMenu}
          src="assets/x-mark.svg"
          alt="close-menu"
          onClick={closeMenu}
        />
        <div className={styles.inner}>
          <p className="text-brown-500 text-3xl">Menu</p>
          <div className={styles.divider} />
          {header_anchors.map((a, i) => (
            <>
              <Link
                delay={50}
                onClick={closeMenu}
                to={a.href}
                {...linkProps}
                key={`link_${a.href}_${i}`}
              >
                {a.text}
              </Link>
              {i < header_anchors.length - 1 && (
                <div key={`divider_${i}`} className={styles.divider} />
              )}
            </>
          ))}
          <Btn width="w-full" color="black">
            <div className="flex gap-2 items-center ">
              <img className="" src="/assets/hero-screen/wallet.svg" alt="Connect Wallet" />
              <span className="relative top-0.5 text-xl leading-[0.9]">Connect Wallet</span>
            </div>{" "}
          </Btn>
        </div>
      </div>
    </div>
  );
}
