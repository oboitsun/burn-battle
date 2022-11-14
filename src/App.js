import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./components/Header/Header";
import BattleAndBonuses from "./components/BattleAndBonuses/BattleAndBonuses";
import GameDescr from "./components/GameDescr/GameDescr";
import HeroScreen from "./components/HeroScreen/HeroScreen";
import WillYou from "./components/WillYou/WillYou";
import SimpleFun from "./components/SimpleFun/SimpleFun";
import RemainingPlayers from "./components/RemainingPlayers/RemainingPlayers";
import Roadmap from "./components/Roadmap/Roadmap";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(0);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  const handleScreenWidth = (e) => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScreenWidth);
    setWidth(window.innerWidth);
    return () => {
      window.addEventListener("resize", handleScreenWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="App">
      <Header scrolled={scrolled} showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroScreen />
      <GameDescr />
      <WillYou />
      <BattleAndBonuses />
      <SimpleFun />
      <RemainingPlayers />
      <Roadmap />
      <div className="gra bg-gradient-to-b from-brown-100 to-brown-50">
        <FAQ />
        <div className="wrap h-0.5 bg-brown-500/10"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
