import React from "react";
import DropdownLayout from "./DropdownLayout";
import Btn from "../Btn/Btn";
export default function ConnectWalletDropdown({
  show,
  setShowDropdown,
  connectPlugWallet,
  connectStoicWallet,
  connectEarthWallet,
}) {
  const buttons = [
    { name: "plug", imgSrc: "/assets/wallets/plug.png", onClick: connectPlugWallet },
    { name: "stoic", imgSrc: "/assets/wallets/stoic.png", onClick: connectStoicWallet },
    { name: "earth", imgSrc: "/assets/wallets/earth.png", onClick: connectEarthWallet },
  ];
  return (
    <DropdownLayout show={show} setShowDropdown={setShowDropdown}>
      <div className="flex flex-col gap-5 p-1">
        {buttons.map((b, i) => (
          <div key={b.name} onClick={b.onClick} className="flex gap-3 items-center relative">
            <Btn color="bronzeSmall" containerClassName="rounded">
              CONNECT
            </Btn>
            <img className="icon-logo" src={b.imgSrc} />
            {i < buttons.length - 1 && (
              <div className="absolute h-px w-full bg-black bottom-0 left-0 translate-y-3 " />
            )}
          </div>
        ))}
      </div>
    </DropdownLayout>
  );
}
