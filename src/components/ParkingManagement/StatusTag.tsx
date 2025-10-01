import { STATUS_STYLES } from "@/constants/statusLabels";
import React from "react";

type StatusTagProps = {
  status: string;
};

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const style = STATUS_STYLES[status];

  if (!style) {
    return null;
  }

  return (
    <div
      style={{
        color: style.color,
        backgroundColor: style.backgroundColor,
        padding: "4px 8px",
        borderRadius: "6px",
        fontSize: "0.625rem",
        fontWeight: 500,
      }}
      className="flex items-center gap-1"
    >
      <span
        className="size-[4px] shrink-0 block rounded-full"
        style={{
          background: style.color,
        }}
      ></span>
      <span>{status}</span>
    </div>
  );
};

export default StatusTag;
