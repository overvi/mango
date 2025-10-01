import image from "@/assets/images/plan-image.png";
import ColorMode from "@/components/Navbar/ColorMode";
import Language from "@/components/Navbar/Language";
import Hotel from "@/components/Navbar/Hotel";

import Application from "./Application";
import Notification from "./Notification";

interface Props {
  title: string;
  description: string;
}

const ParkingNav = ({ title, description }: Props) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="size-14 bg-neutral-200 rounded-full flex items-center justify-center">
          <img width={30} src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-[1.25rem]">{title}</h1>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Application />
        <ColorMode />
        <Language />
        <Hotel />
        <Notification />
      </div>
    </>
  );
};

export default ParkingNav;
