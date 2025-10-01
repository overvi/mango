import { STATUS_LABELS } from "@/constants/statusLabels";

import CarFilled from "@/assets/images/car.svg?react";
import Clock from "@/assets/images/clock.svg?react";
import Danger from "@/assets/images/danger.svg?react";
import { useState } from "react";
import Tabs, { type Tab } from "../Tab/Tab";
import FailureHint from "./FailureHint";
import FastSearch from "./FastSearch";
import RecordFailure from "./RecordFailure";
import RegistrationStep from "./RegistrationStep";
import ReserveForLater from "./ReserveForLater";
import StatusModalHeader from "./StatusModalHeader";

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
      <StatusModalHeader type={STATUS_LABELS.RESERVED} />
      {activeTab !== "3" ? <FastSearch /> : <FailureHint />}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
    </div>
  );
};

export default ReservationModal;
