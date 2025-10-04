import ExpiredModal from "@/components/ParkingManagement/ExpiredModal";
import FailureRecordModal from "@/components/ParkingManagement/FailureRecordModal";
import OccupiedModal from "@/components/ParkingManagement/OccupiedModal";
import ReservationModal from "@/components/ParkingManagement/ReservationModal";
import type { ReactNode } from "react";

export const STATUS_LABELS = {
  EXPIRED: "زمان خروج گذشته",
  AVAILABLE: "در دسترس",
  OCCUPIED: "اشغال شده",
  RESERVED: "رزرو",
  BROKEN: "خرابی",
};

export const STATUS_MODALS: Record<string, ReactNode> = {
  [STATUS_LABELS.RESERVED]: <ReservationModal />,
  [STATUS_LABELS.BROKEN]: <FailureRecordModal />,
  [STATUS_LABELS.OCCUPIED]: <OccupiedModal />,
  [STATUS_LABELS.EXPIRED]: <ExpiredModal />,
};

export const STATUS_STYLES: Record<
  string,
  {
    color: string;
    backgroundColor: string;
    outline?: boolean;
    descColor: string;
  }
> = {
  [STATUS_LABELS.EXPIRED]: {
    color: "var(--color-error)",
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    outline: true,
    descColor: "#818181",
  },
  [STATUS_LABELS.AVAILABLE]: {
    color: "var(--color-green-500)",
    backgroundColor: "rgba(0, 128, 0, 0.1)",
    descColor: "black",
  },
  [STATUS_LABELS.OCCUPIED]: {
    color: "var(--color-blue)",
    backgroundColor: "rgba(0, 0, 255, 0.1)",
    descColor: "#818181",
  },
  [STATUS_LABELS.RESERVED]: {
    color: "var(--color-orange-500)",
    backgroundColor: "rgba(255, 165, 0, 0.1)",
    descColor: "black",
  },
  [STATUS_LABELS.BROKEN]: {
    color: "var(--color-gray)",
    backgroundColor: "rgba(128, 128, 128, 0.1)",
    descColor: "black",
  },
};
