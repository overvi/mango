import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Popover: React.FC<{
  anchorRef: React.RefObject<HTMLButtonElement | null>;

  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}> = ({ anchorRef, children, open, onClose }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose, anchorRef]);

  if (!open || !anchorRef.current) return null;

  const rect = anchorRef.current.getBoundingClientRect();

  return createPortal(
    <div
      ref={popoverRef}
      className="bg-neutral-200 shadow-popover-light dark:shadow-popover"
      style={{
        position: "absolute",
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
        borderRadius: "24px",
      }}
    >
      {children}
    </div>,
    document.body
  );
};
