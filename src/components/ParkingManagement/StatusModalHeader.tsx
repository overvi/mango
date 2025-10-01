import { STATUS_LABELS, STATUS_STYLES } from "@/constants/statusLabels";
import StatusTag from "./StatusTag";
import Car from "@/assets/images/car-outline.svg?react";
import Close from "@/assets/images/close-circle.svg?react";
import useModal from "../Modal/useModal";

interface Props {
  type: (typeof STATUS_LABELS)[keyof typeof STATUS_LABELS];
}
const StatusModalHeader = ({ type }: Props) => {
  const { closeModal } = useModal();
  return (
    <div className="flex justify-between border-b border-b-gray-350 dark:border-b-gray-800  pb-5">
      <div className="flex items-center gap-2 text-sm">
        <div
          style={{ color: STATUS_STYLES[type].color }}
          className="bg-neutral-50  flex items-center justify-center size-15 rounded-[.875rem]"
        >
          <Car width={30} height={30} />
        </div>
        <div className="flex  flex-col text-sm">
          <div className="flex items-center gap-4">
            <p>جایگاه ۷</p>
            <StatusTag status={type} />
          </div>
          <p className="text-gray-650 mt-2 ">بخش A طبقه ۱</p>
        </div>
      </div>
      <button onClick={() => closeModal()} className="self-start">
        <Close />
      </button>
    </div>
  );
};

export default StatusModalHeader;
