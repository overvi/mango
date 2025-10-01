import { STATUS_LABELS } from "@/constants/statusLabels";

type Status = { label: string; color: string };

const statuses: Status[] = [
  {
    label: STATUS_LABELS.EXPIRED,
    color: "var(--color-error)",
  },
  {
    label: STATUS_LABELS.AVAILABLE,
    color: "var(--color-green-500)",
  },
  {
    label: STATUS_LABELS.OCCUPIED,
    color: "var(--color-blue)",
  },
  {
    label: STATUS_LABELS.RESERVED,
    color: "var(--color-orange-500)",
  },
  {
    label: STATUS_LABELS.BROKEN,
    color: "var(--color-gray)",
  },
];

const ParkingStatus = () => {
  return (
    <div className="flex items-center ">
      <ul className="flex items-center gap-3.5">
        {statuses.map((status, idx) => (
          <li key={idx} className="flex items-center gap-2.5">
            <span
              style={{
                background: status.color,
              }}
              className="size-4  rounded-[5px]"
            ></span>
            <p className="text-sm font-light">{status.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingStatus;
