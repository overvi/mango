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

  const colors: Record<string, string> = {
    success: "47, 172, 102", // #2FAC66
    error: "248, 113, 113", // #f87171
    info: "96, 165, 250", // #60a5fa
    warning: "250, 204, 21", // #facc15
  };

  return (
    <div
      role="status"
      aria-live={type === "error" ? "assertive" : "polite"}
      aria-atomic="true"
      className={`toast ${exiting ? "exiting" : ""}`}
      ref={toastRef}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
      style={{
        pointerEvents: "auto",
        minWidth: 240,
        maxWidth: 360,
        padding: 12,
        paddingInline: 24,
        borderRadius: 24,
        background: type === "error" ? "#FDF4F4" : `#F5FBF7`,
        border: `1px solid rgba(${colors[type]}, 1)`,
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        transform: entering ? "translateY(-8px)" : "translateY(0)",
        transition: "opacity 220ms ease, transform 220ms ease",
        display: "flex",
        backdropFilter: "blur(16px)",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
      }}
    >
      <div style={{ flex: 1 }}>
        {icon && <div>{icon}</div>}
        {title && (
          <div className="mt-1" style={{ fontWeight: 700 }}>
            {title}
          </div>
        )}
        {description && (
          <div
            className="mt-1 text-sm font-semibold"
            style={{ fontSize: 13, color: `rgb(${colors[type]})` }}
          >
            {description}
          </div>
        )}
      </div>
      <button
        onClick={handleClose}
        aria-label="Dismiss"
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: 16,
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
};

export default ToastItem;
