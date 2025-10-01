import Car from "@/assets/images/car-outline.svg?react";
import StatusTag from "./StatusTag";
import { STATUS_LABELS } from "@/constants/statusLabels";
import Close from "@/assets/images/close-circle.svg?react";

import Tabs, { type Tab } from "../Tab/Tab";
import Clock from "@/assets/images/clock.svg?react";
import CarFilled from "@/assets/images/car.svg?react";
import Danger from "@/assets/images/danger.svg?react";
import RegistrationStep from "./RegistrationStep";
import ReserveForLater from "./ReserveForLater";
import RecordFailure from "./RecordFailure";
import { useState } from "react";
import FastSearch from "./FastSearch";
import FailureHint from "./FailureHint";

const tabs: Tab[] = [
  {
    id: "1",
    content: <RegistrationStep />,
    label: "ثبت ورود",
    icon: CarFilled,
  },
  {
    id: "2",
    content: <ReserveForLater />,
    label: "رزرو برای بعد",
    icon: Clock,
  },

  {
    id: "3",
    content: <RecordFailure />,
    label: "ثبت خرابی",
    icon: Danger,
  },
];

const ReservationModal = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className=" w-[31.375rem] p-6 ">
      <div className="flex justify-between border-b border-b-gray-350 dark:border-b-gray-800 pb-5">
        <div className="flex items-center gap-2 text-sm">
          <div className="bg-neutral-50 text-orange-500 flex items-center justify-center size-15 rounded-[.875rem]">
            <Car width={30} height={30} />
          </div>
          <div className="flex  flex-col text-sm">
            <div className="flex items-center gap-4">
              <p>جایگاه ۷</p>
              <StatusTag status={STATUS_LABELS.RESERVED} />
            </div>
            <p className="text-gray-650 mt-2 ">بخش A طبقه ۱</p>
          </div>
        </div>
        <button className="self-start">
          <Close />
        </button>
      </div>
      {activeTab !== "3" ? <FastSearch /> : <FailureHint />}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
    </div>
  );
};

export default ReservationModal;
