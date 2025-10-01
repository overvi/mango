import type { ToastContextValue } from "@/context/ToastContext";
import ToastContext from "@/context/ToastContext";
import { useContext } from "react";

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
