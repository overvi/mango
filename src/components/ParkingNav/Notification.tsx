import { default as NotificationIcon } from "@/assets/images/notification.svg?react";
import { useRef, useState } from "react";
import ArrowLeft from "@/assets/images/arrow-left-black-filled.svg?react";
import { Popover } from "../Popover/Popover";

const Notification = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const notification = [
    {
      description:
        "درخواست شما برای تمدید موجودی مایع لباسشویی توسط انبار تایید شد.",
      date: "1403/12/08-12:44",
    },
  ];
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="bg-neutral-200 rounded-full size-11.5 flex items-center justify-center"
      >
        <NotificationIcon />
      </button>
      <Popover
        anchorRef={buttonRef!}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className=" w-[21.3125rem] dark:text-white p-6 ">
          <div className="flex items-center border-b dark:border-b-gray-800  border-b-gray-350 pb-2 justify-between">
            <p>اعلانات</p>
            <button className="flex items-center gap-2  text-orange-500">
              <p>بیشتر ببینید</p>
              <ArrowLeft color="var(--color-orange-500)" />
            </button>
          </div>
          <ul className="mt-3">
            {notification.map((not, idx) => (
              <li key={idx}>
                <p className="font-light text-xs   ps-3 before:block before:absolute before:w-[6px] before:h-full relative before:rounded-[4px] before:right-0 before:bg-orange-500">
                  {not.description}
                </p>
                <p className="text-xs w-fit text-gray-76 ms-auto font-light">
                  {not.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Popover>
    </>
  );
};

export default Notification;
