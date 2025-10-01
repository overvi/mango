import { useContext } from "react";
import ModalContext from "../../context/ModalContext";

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw Error();
  return ctx;
};

export default useModal;
