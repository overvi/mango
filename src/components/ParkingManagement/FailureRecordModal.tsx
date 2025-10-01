import { STATUS_LABELS } from "@/constants/statusLabels";

import FailureNotice from "./FailureNotice";
import StatusModalHeader from "./StatusModalHeader";

const FailureRecordModal = () => {
  return (
    <div className=" w-[31.375rem] p-6 ">
      <StatusModalHeader type={STATUS_LABELS.BROKEN} />

      <FailureNotice />
    </div>
  );
};

export default FailureRecordModal;
