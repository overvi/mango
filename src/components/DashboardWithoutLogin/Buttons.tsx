import Arrow from "@/assets/images/arrow-left-white.svg?react";
import BlackArrowTwo from "@/assets/images/black-arrow-two.svg?react";
import BlackArrow from "@/assets/images/black-arrow.svg?react";
import Button from "../Button";

const Buttons = () => {
  return (
    <div className="flex flex-col mt-14.5 space-y-4.5 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="bg-orange-500  size-1.5 rounded-full"></span>
          <p className="">برای مشتریان ما</p>
        </div>
        <div className="flex items-center">
          <BlackArrow className="*:fill-black dark:*:fill-white" />

          <Button
            label="B2B"
            iconClassName="[transform:rotate(90deg)]"
            icon={Arrow}
            className="uppercase text-2xl !rounded-[1.25rem] !px-15 !py-2.5"
            iconPosition="left"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="bg-orange-500  size-1.5 rounded-full"></span>
          <p className="">برای صاحبان کسب و کار</p>
        </div>
        <div className="flex items-center">
          <BlackArrowTwo className="*:fill-black dark:*:fill-white" />

          <Button
            label="B2C"
            iconClassName="[transform:rotate(90deg)]"
            icon={Arrow}
            className="uppercase text-2xl !rounded-[1.25rem] !px-15 !py-2.5"
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
