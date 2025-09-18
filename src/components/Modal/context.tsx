import { createContext, type ReactNode } from "react";

interface ModalContextValue {
  openModal: (c: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export default ModalContext;
