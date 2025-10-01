import { STATUS_LABELS } from "@/constants/statusLabels";

import Button from "../Button";
import EstimatedTime from "./EstimatedTime";
import StatusModalHeader from "./StatusModalHeader";
import { InfoRow } from "@/pages/HotelParkingManagement";
import useModal from "../Modal/useModal";
import PaymentModal from "./PaymentModal";

const OccupiedModal = () => {
  const { openModal } = useModal();
  return (
    <div className=" w-[31.375rem] p-6 ">
      <StatusModalHeader type={STATUS_LABELS.OCCUPIED} />
      <div className="grid grid-cols-2 mt-6 gap-5.5">
        <InfoRow label="نام مهمان" value="محمد میرزایی" />
        <InfoRow label="شماره اتاق" value="78" />
        <InfoRow label="پلاک ماشین" value="78" />
        <InfoRow label="ورود" value="۱۴۰۳/۰۲/۱۲ - ۱۲:۴۳" />
      </div>
      <EstimatedTime guestName="adfa" roomNumber="3" />
      <div className="flex items-center border-t  border-t-gray-350 dark:border-t-gray-800  pt-6 mt-2 gap-4 justify-end">
        <Button
          className="outline-gray-600 text-gray-600 bg-gray-600/5"
          variant="outline"
          label="بازنویسی"
        />
        <Button
          onClick={() => openModal(<PaymentModal />)}
          className="text-nowrap !h-10 !bg-error hover:text-white"
          variant="primary"
          label="ثبت خروج و پرداخت"
        />
      </div>
    </div>
  );
};

export default OccupiedModal;
