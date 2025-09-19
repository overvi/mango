import LeftArrow from "@/assets/images/arrow-left-white.svg?react";
import hotel from "@/assets/images/hotel-image.png";

import { Popover } from "../Popover/Popover";
import { useRef, useState } from "react";

const Hotel = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen((o) => !o)}
        className=" p-1.5 pe-6  bg-neutral-200 text-base rounded-full flex items-center gap-2"
      >
        <div className="rounded-full size-8.5">
          <img src={hotel} alt="" />
        </div>
        <div>
          <p className="text-sm font-semibold">هتل اسپیناس پالاس</p>
        </div>
      </button>
      <Popover
        anchorRef={buttonRef!}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className=" p-3.5 w-[12rem] ">
          <ul>
            {[...Array(3)].map((_, i) => (
              <li
                className={`pt-2 border-b-gray-300 dark:border-b-gray-800 group ${
                  i !== 2 && "border-b pb-2"
                } ${i == 2 && "active"}`}
              >
                <div className="flex items-center text-base group-[.active]:bg-gray-250 dark:group-[.active]:bg-[var(--color-gray-700)] bg-neutral-200 p-2  rounded-xl justify-between">
                  <button className=" flex w-full items-center gap-1.5   ">
                    <div className="size-6.5 rounded-full">
                      <img src={hotel} alt="" />
                    </div>
                    <p className="text-xs group-[.active]:text-orange-500 ">
                      هتل استقلال ۱
                    </p>
                  </button>
                  <LeftArrow
                    className=" group-[.active]:hidden"
                    color="var(--color-orange-500)"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Popover>
    </>
  );
};

export default Hotel;
