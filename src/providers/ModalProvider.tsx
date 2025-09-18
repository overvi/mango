import {
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import ModalContext from "../components/Modal/context";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [exiting, setExiting] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = useCallback((c: ReactNode) => {
    setExiting(false);
    setContent(c);
  }, []);
  const closeModal = useCallback(() => {
    if (exiting) return;
    setExiting(true);
  }, [exiting]);

  const handleTransitionEnd = () => {
    if (exiting) setContent(null);
  };

  const value = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {content &&
        createPortal(
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className={`modal-content bg-primary text-base ${
                exiting ? "exiting" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
              onTransitionEnd={handleTransitionEnd}
            >
              {content}
            </div>
          </div>,
          document.body
        )}
    </ModalContext.Provider>
  );
};
