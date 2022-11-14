import React, { useEffect, useState } from "react";
import TimerItem from "./TimerItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const today = Date.now();
  const dayX = new Date(Date.UTC(2022, 12, 6, 15, 0, 0)).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(dayX));

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 60 * 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className=" flex items-center justify-center   relative ">
      {dayX < today ? (
        <p>{` IT'S BATTLE TIME`}</p>
      ) : (
        <>
          <div className="flex text-white items-center ">
            <TimerItem time={timeLeft.days} text="Days" />
            <p className="text-brown-400 font-black text-[36px] lg:text-[40px] mx-2 lg:mx-4 leading-none">
              :
            </p>
            <TimerItem time={timeLeft.hours} text="Hours" />
            <p className="text-brown-400 font-black text-[36px] lg:text-[40px] mx-2 lg:mx-4 leading-none">
              :
            </p>
            <TimerItem time={timeLeft.minutes} text="Minutes" />
          </div>
        </>
      )}
    </div>
  );
}
