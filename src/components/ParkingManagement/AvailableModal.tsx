import { STATUS_LABELS } from "@/constants/statusLabels";

import { useState } from "react";
import Tabs, { type Tab } from "../Tab/Tab";
import FailureHint from "./FailureHint";
import FastSearch from "./FastSearch";
import StatusModalHeader from "./StatusModalHeader";

interface Props {
  tabs: Tab[];
  showStatus?: boolean;
}

const AvailableModal = ({ tabs, showStatus = true }: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className=" w-[31.375rem] p-6 ">
      <StatusModalHeader type={STATUS_LABELS.AVAILABLE} />

      {showStatus && (activeTab !== "3" ? <FastSearch /> : <FailureHint />)}
      <div className={!showStatus ? "mt-4" : ""}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      </div>
    </div>
  );
};

export default AvailableModal;
