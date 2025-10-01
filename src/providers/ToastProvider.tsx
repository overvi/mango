import ToastItem from "@/components/Toast/ToastItem";
import ToastContext from "@/context/ToastContext";
import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  type?: ToastType;
  duration?: number;
}

interface ToastProviderProps {
  children: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = "top-right",
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const addToast = useCallback(
    (toast: Omit<Toast, "id"> & { id?: string }): string => {
      const id = toast.id ?? (++idRef.current).toString();
      const t: Toast = {
        id,
        title: toast.title,
        description: toast.description,
        type: toast.type ?? "info",
        icon: toast.icon,
        duration: toast.duration ?? 4000,
      };
      setToasts((prev) => {
        const next = [t, ...prev];
        return next.slice(0, maxToasts);
      });
      return id;
    },
    [maxToasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(
    () => ({ addToast, removeToast }),
    [addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            style={{
              position: "fixed",
              zIndex: 9999,
              top: position.includes("top") ? 100 : "auto",
              bottom: position.includes("bottom") ? 100 : "auto",
              left: position.includes("left") ? 100 : "auto",
              right: position.includes("right") ? 100 : "auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              pointerEvents: "none",
            }}
          >
            {toasts.map((t) => (
              <ToastItem
                key={t.id}
                toast={t}
                onRemove={() => removeToast(t.id)}
              />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
};
