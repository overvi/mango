import type { Toast } from "@/providers/ToastProvider";
import { createContext } from "react";

export interface ToastContextValue {
  addToast: (toast: Omit<Toast, "id"> & { id?: string }) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export default ToastContext;
