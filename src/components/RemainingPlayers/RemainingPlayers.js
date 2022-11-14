import React from "react";
import useWindowSize from "../helpers/useWindowSize";
import PlayerAvatar from "./PlayerAvatar";
import { players } from "./playersDummyDB";
import styles from "../../styles/remaining-players.module.scss";
import TabsAndSearch from "./TabsAndSearch";

export default function RemainingPlayers() {
  const size = useWindowSize();
  const [avatarSize, setAvatarSize] = React.useState(58);
  const [gapSize, setGapSize] = React.useState(20);
  const [currentTab, setCurrentTab] = React.useState(true);
  const [searchStr, setSearchString] = React.useState("");
  const rows = ["", "", "", "", ""];
  const cols = new Array(players?.length / 5).fill("");
  React.useEffect(() => {
    if (size?.width) {
      if (size?.width < 1280) {
        setAvatarSize(58);
        setGapSize(20);
      }
      if (size?.width >= 1280) {
        setAvatarSize(64);
        setGapSize(36);
      }
    }
  }, [size]);
  return (
    <div id="remaining-players">
      <div className="wrap">
        <p className="heading text-center">REMAINING PLAYERS IN SEASON ONE</p>
        <p className="paragraph text-center mt-2 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
        <TabsAndSearch />
        <div className={styles.playersContainer}>
          <div
            className={`grid grid-flow-col ${styles.grid} gap-5 xl:gap-9 grid-rows-5 relative mx-auto max-w-max`}
          >
            {/* {rows.map((r, idx) => (
              <div
                style={{
                  top: 29 + idx * (avatarSize + gapSize),
                  width: (players?.length / 5) * (avatarSize + gapSize) - gapSize,
                }}
                key={idx}
                className={styles.lineHor}
              ></div>
            ))}
            {cols.map((c, i) => (
              <div
                style={{ left: 29 + i * (avatarSize + gapSize), height: `calc(100% - 2px)` }}
                key={i}
                className={styles.lineVer}
              ></div>
            ))} */}
            {players
              .filter((p) => [currentTab ? currentTab : p.burnt].includes(p.burnt))
              .map((p, i) => (
                <PlayerAvatar key={i} player={p} styles={styles} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
