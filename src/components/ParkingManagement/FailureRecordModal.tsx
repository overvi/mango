import { STATUS_LABELS } from "@/constants/statusLabels";

import FailureNotice from "./FailureNotice";
import StatusModalHeader from "./StatusModalHeader";
import Button from "../Button";

const FailureRecordModal = () => {
  return (
    <div className=" w-[31.375rem] p-6 ">
      <StatusModalHeader type={STATUS_LABELS.BROKEN} />

      <FailureNotice />
      <div className=" flex justify-end ms-auto  w-full pt-6 border-t-gray-350 dark:border-t-gray-800 border-t">
        <Button variant="form" label="ثبت به عنوان در دسترس" />
      </div>
    </div>
  );
};

export default FailureRecordModal;
