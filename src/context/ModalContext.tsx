import { createContext, type ReactNode } from "react";

interface ModalContextValue {
  openModal: (
    c: ReactNode,
    overlayClass?: string,
    anchor?: React.RefObject<HTMLElement | null>
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export default ModalContext;
