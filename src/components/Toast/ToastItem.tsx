import type { Toast } from "@/providers/ToastProvider";
import React, { useEffect, useRef, useState } from "react";

interface ToastItemProps {
  toast: Toast;
  onRemove: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const { title, description, type = "info", duration = 122000, icon } = toast;
  const [exiting, setExiting] = useState(false);

  const [entering, setEntering] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = useRef<number>(0);
  const remainingRef = useRef<number>(duration);

  useEffect(() => {
    const id = setTimeout(() => setEntering(false), 10);
    return () => clearTimeout(id);
  });

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  });

  const startTimer = () => {
    startRef.current = Date.now();
    timerRef.current = setTimeout(handleClose, remainingRef.current);
  };

  const pauseTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const elapsed = Date.now() - startRef.current;

    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
  };

  const toastRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (exiting) return;
    setExiting(true);

    const node = toastRef.current;

    if (node) {
      const onTransitionEnd = (e: TransitionEvent) => {
        if (e.propertyName === "opacity") {
          onRemove();
          node.removeEventListener("transitionend", onTransitionEnd);
        }
      };
      node.addEventListener("transitionend", onTransitionEnd);
    }
  };

  const resumeTimer = () => {
    startTimer();
  };

  const baseClasses =
    "toast flex justify-between items-center gap-2.5 rounded-3xl px-9 ps-4 pt-4 pb-6 shadow-lg backdrop-blur-lg transition ease-in-out";

  const typeClasses: Record<typeof type, string> = {
    success:
      "bg-[#F5FBF7] border border-green-500 text-green-500 dark:bg-gray-750 before:absolute relative before:block before:inset-0 before:bg-green-500/10 before:rounded-3xl",
    error: "bg-red-50 border border-red-500 text-red-600",
    info: "bg-blue-50 border border-blue-500 text-blue-600",
    warning: "bg-yellow-50 border border-yellow-500 text-yellow-600",
  };

  return (
    <div
      role="status"
      aria-live={type === "error" ? "assertive" : "polite"}
      aria-atomic="true"
      ref={toastRef}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
      className={`${baseClasses} ${typeClasses[type]} ${
        exiting ? "exiting" : ""
      } ${entering ? "translate-y-[-8px]" : "translate-y-0"} opacity-100`}
      style={{
        pointerEvents: "auto",
        minWidth: 240,
        maxWidth: 360,
        transition: "opacity 220ms ease, transform 220ms ease",
      }}
    >
      <div className="flex-1">
        {icon && <div>{icon}</div>}
        {title && <div className="mt-1 font-bold">{title}</div>}
        {description && (
          <div className="mt-1 text-sm font-semibold">{description}</div>
        )}
      </div>
    </div>
  );
};

export default ToastItem;
