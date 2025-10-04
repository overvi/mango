import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactNode,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import ModalContext from "../context/ModalContext";
import { Outlet } from "react-router";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [exiting, setExiting] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [overlayClass, setOverlayClassName] = useState<string | undefined>("");
  const [rectRef, setRectRef] = useState<RefObject<HTMLElement | null> | null>(
    null
  );
  const [style, setStyle] = useState<React.CSSProperties>();

  const openModal = useCallback(
    (
      c: ReactNode,
      className?: string,
      anchor?: React.RefObject<HTMLElement | null>
    ) => {
      setExiting(false);
      setContent(c);
      setOverlayClassName(className);

      if (anchor?.current) {
        setRectRef(anchor);
        anchor.current.classList.add("z-[1000]");
      } else {
        setRectRef(null);
        setStyle(undefined);
      }
    },
    []
  );
  const closeModal = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    if (rectRef?.current) {
      rectRef.current.classList.remove("z-[1000]");
    }
  }, [exiting, rectRef]);

  useLayoutEffect(() => {
    if (rectRef?.current) {
      const rect = rectRef.current.getBoundingClientRect();

      setStyle({
        position: "absolute",
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + rect.width / 2 + window.scrollX,
        transform: "translateX(-50%)",
      });
    }
  }, [rectRef]);

  const handleTransitionEnd = () => {
    if (exiting) setContent(null);
  };

  const value = useMemo(
    () => ({ openModal, closeModal, setOverlayClassName }),
    [openModal, closeModal, setOverlayClassName]
  );

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
        <Outlet />
        {content &&
          createPortal(
            <div
              className={["modal-overlay", overlayClass].join(" ")}
              onClick={closeModal}
            >
              <div
                style={style}
                className={`modal-content bg-neutral-200 text-base ${
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
    </>
  );
};
