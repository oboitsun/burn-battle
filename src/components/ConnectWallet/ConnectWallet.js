import React, { useState, useRef } from "react";
import { StoicIdentity } from "ic-stoic-identity";
import Btn from "../Btn/Btn";
import { useOutsideClick } from "../helpers/hooks";
import DropdownLayout from "../DropdownLayouts/DropdownLayout";
import ConnectWalletDropdown from "../DropdownLayouts/ConnectWalletDropdown";
// import CWalletbutton from "./button";

// import ComingSoonPopUp from "./ComingSoonPopUp";

function ConnectWallet({
  showPopup,
  setShowPopup,
  setUserAddress,
  header = false,
  big,
  userAddress,
  // connectWallet,
  // connectStoic,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  //   useOutsideClick(ref, () => closeDropDown());
  const connectPlugWallet = async () => {
    const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
    const whitelist = [nnsCanisterId];
    if (window.ic?.plug) {
      try {
        const isConnected = await window.ic.plug.requestConnect({
          whitelist,
        });
        console.log(isConnected);
        if (isConnected) {
          const principalId = await window.ic.plug.agent.getPrincipal();
          setUserAddress(principalId.toText());
          console.log("hola", `Plug's user principal Id is ${principalId}`);
        }
      } catch (error) {
        window.alert("connection was refused");
      }
    } else {
      window.alert("Plug Wallet not installed.");
    }
  };

  const connectStoicWallet = async () => {
    await StoicIdentity.load();
    try {
      let identity = await StoicIdentity.connect();
      if (identity) {
        setUserAddress(identity.getPrincipal().toText());
        console.log("hola", identity.getPrincipal().toText());
      }
    } catch (error) {
      window.alert("connection was refused");
    }
  };

  const eventCallback = (resolve) => {
    if (window.earth) {
      resolve(window.earth);
      window.removeEventListener("load", eventCallback(resolve));
    } else {
      window.alert("Earth Wallet not installed.");
      window.removeEventListener("load", eventCallback);
    }
  };

  const injectEarth = () => {
    return new Promise((resolve, reject) => {
      window.addEventListener("load", eventCallback(resolve));
      const event = new Event("load");
      window.dispatchEvent(event);
    });
  };

  const connectEarthWallet = async () => {
    await injectEarth();
    let account = await window.earth.enable();
    if (account) {
      console.log("hola", "Successfully connected to Earth Wallet 🌍", account);
      setUserAddress(account);
    } else {
      window.alert("connection was refused");
    }
  };

  return (
    <div className="flex items-center">
      {!userAddress ? (
        <div className="relative">
          <Btn
            color="bronze"
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
          >
            <div className="flex gap-2 items-center ">
              <img className="" src="/assets/hero-screen/wallet.svg" alt="Connect Wallet" />
              <span className="relative top-0.5">Connect Wallet</span>
            </div>{" "}
          </Btn>

          <ConnectWalletDropdown
            show={showDropdown}
            setShowDropdown={setShowDropdown}
            connectPlugWallet={connectPlugWallet}
            connectEarthWallet={connectEarthWallet}
            connectStoicWallet={connectStoicWallet}
          ></ConnectWalletDropdown>
        </div>
      ) : (
        <div className="text-white text-xs font-normal flex flex-col items-center justify-start">
          {header && (
            <p onClick={() => setUserAddress("")} className="pb-1">{`${userAddress.slice(
              0,
              8
            )}...${userAddress.slice(-6)}`}</p>
          )}
          {/* <CWalletbutton
            onClick={() => {
              setShowPopup(true);
            }}
            text="Mint NFT"
            spcng="px-9"
            icon={false}
            type="filled"
          /> */}
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
