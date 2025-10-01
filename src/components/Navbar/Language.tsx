import { default as L } from "@/assets/images/language-circle.svg?react";
import { useRef, useState } from "react";
import { Popover } from "../Popover/Popover";
import clsx from "clsx";

const Language = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const languages = [
    {
      fa: "فارسی",
      en: "FA",
    },
    {
      fa: "انگلیسی",
      en: "EN",
    },
    {
      fa: "عربی",
      en: "AR",
    },
    {
      fa: "ترکی",
      en: "TU",
    },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label="Change Language"
        className="size-11.5 bg-neutral-200  flex items-center justify-center rounded-full"
      >
        <L />
      </button>
      <Popover
        anchorRef={buttonRef!}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className=" w-[12rem] ">
          <ul className="flex flex-col p-3.5  ">
            {languages.map((lan, idx) => (
              <li
                key={idx}
                className={clsx(
                  "group mt-1",
                  idx === 0 && "active",
                  idx !== languages.length - 1 &&
                    "border-b border-gray-300 dark:border-gray-800 pb-2"
                )}
              >
                <div className="flex dark:text-white items-center text-xs group-[.active]:bg-gray-250 dark:group-[.active]:bg-gray-700 group-[.active]:text-orange-500 ps-3.5 rounded-xl h-11 gap-3">
                  <p>{lan.en}</p>
                  <p>{lan.fa}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Popover>
    </>
  );
};

export default Language;
