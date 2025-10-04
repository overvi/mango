import {
  STATUS_LABELS,
  STATUS_MODALS,
  STATUS_STYLES,
} from "@/constants/statusLabels.tsx";
import Car from "@/assets/images/car-outline.svg?react";
import useModal from "../Modal/useModal";
import AvailableModal from "./AvailableModal";
import type { Tab } from "../Tab/Tab";

const slots = [
  {
    type: STATUS_LABELS.AVAILABLE,
    description: "",
    number: 25,
  },
  {
    type: STATUS_LABELS.BROKEN,
    description: "",
    number: 25,
  },
  {
    type: STATUS_LABELS.EXPIRED,
    description: "",
    number: 25,
  },
  {
    type: STATUS_LABELS.RESERVED,
    description: "",
    number: 25,
  },
  {
    type: STATUS_LABELS.OCCUPIED,
    description: "۶۵۵خ",
    number: 25,
  },
];

const styledSlots = slots.map((slot) => ({
  ...slot,
  ...STATUS_STYLES[slot.type],
}));

interface Props {
  showStatus: boolean;
  tabs: Tab[];
}
const ParkingSlots = ({ tabs, showStatus }: Props) => {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-[34.6rem] justify-between mt-6">
      <ul className="flex items-center gap-3">
        {styledSlots.map((slot, i) => (
          <li
            key={i}
            className="rounded-xl"
            style={{
              background: slot.backgroundColor,
              color: slot.color,
              outline: slot.outline ? `1px solid ${slot.color}` : "",
            }}
          >
            <button
              onClick={() =>
                openModal(
                  slot.type === STATUS_LABELS.AVAILABLE ? (
                    <AvailableModal showStatus={showStatus} tabs={tabs} />
                  ) : (
                    STATUS_MODALS[slot.type]
                  )
                )
              }
              className=" size-15.5 rounded-xl  py-3.5 flex flex-col justify-center items-center"
            >
              <Car className="shrink-0" />
              <p className="text-sm">{slot.number}</p>
              {slot.description && (
                <p
                  style={{
                    color: slot.descColor,
                  }}
                  className="text-[10px] font-light "
                >
                  {slot.description}
                </p>
              )}
            </button>
          </li>
        ))}
      </ul>
      <div className="bg-neutral-50   rounded-full ps-6 py-2">
        <p className="text-sm font-light text-[#656565] dark:text-white">
          آخرین آپدیت:۱۲:۳۴:۲۳
        </p>
      </div>
    </div>
  );
};

export default ParkingSlots;
