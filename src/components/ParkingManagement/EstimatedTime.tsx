import Clock from "@/assets/images/clock.svg?react";
import clsx from "clsx";

interface EstimatedTimeProps {
  theme?: "green" | "red";
  guestName?: string;
  roomNumber?: string;
}

const themeMap = {
  green: {
    bg: "bg-green-500/5",
    border: "border-green-500/30",
    iconBg: "bg-green-500/15",
    text: "text-green-500",
    iconFill: "var(--color-green-500)",
  },
  red: {
    bg: "bg-error/5",
    border: "border-error/30",
    iconBg: "bg-error/15",
    text: "text-error",
    iconFill: "var(--color-error)",
  },
};

const EstimatedTime = ({
  theme = "green",
  guestName = "محمد میرزایی",
  roomNumber = "78",
}: EstimatedTimeProps) => {
  const t = themeMap[theme];

  return (
    <div
      className={clsx(t.bg, t.border, "mb-3 p-4 mt-4 rounded-[.875rem] border")}
    >
      <div className="flex items-center gap-2">
        <div
          className={clsx(
            "size-7.5 flex items-center justify-center rounded-lg",
            t.iconBg
          )}
        >
          <Clock width={20} height={20} color={t.iconFill} />
        </div>
        <p className="text-sm">زمان محاسبه شده</p>
      </div>

      <div className="grid grid-cols-2 mt-6 gap-5.5">
        <div>
          <p className={clsx("text-sm", t.text)}>نام مهمان</p>
          <p>{guestName}</p>
        </div>
        <div>
          <p className={clsx("text-sm", t.text)}>شماره اتاق</p>
          <p>{roomNumber}</p>
        </div>
      </div>

      <p className={clsx(t.text, "text-xs mt-2.5")}>
        هزینه نهایی هنگام خروح محاسبه می‌شود.
      </p>
    </div>
  );
};

export default EstimatedTime;
