import useModal from "../Modal/useModal";
import ApplicationModal from "./ApplicationModal";
import Category from "@/assets/images/category.svg?react";
import { useRef } from "react";

const Application = () => {
  const { openModal } = useModal();
  const applicationRef = useRef<null | HTMLDivElement>(null);
  return (
    <div className={`sticky `} ref={applicationRef}>
      <button
        onClick={() =>
          openModal(
            <ApplicationModal />,
            "!bg-white/50 backdrop-blur-[4px]",
            applicationRef
          )
        }
        className="bg-neutral-200 rounded-full size-11.5 flex items-center justify-center"
      >
        <Category className="*:fill-orange-500" />
      </button>
    </div>
  );
};

export default Application;
