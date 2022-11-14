import React from "react";
import Btn from "../Btn/Btn";
export default function TimerItem({ time, text }) {
  return (
    <Btn color="timer">
      <div className="flex flex-col items-center">
        <p className=" text-[32px] lg:text-[36px] leading-none">{time}</p>
        <p className="font-normal text-[10px] leading-none uppercase">{text}</p>
      </div>
    </Btn>
  );
}
