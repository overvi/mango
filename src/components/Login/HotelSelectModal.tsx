/// <reference types="vite-plugin-svgr/client" />
import Building from "@/assets/images/buliding.svg?react";
import Close from "@/assets/images/close-circle.svg?react";
import useModal from "../Modal/useModal";
import Button from "../Button";

const HotelSelectModal = () => {
  const { closeModal } = useModal();
  return (
    <div className="p-3 w-[31.375rem] ">
      <div className="flex items-center  pb-4 justify-between border-b border-b-gray-350 ">
        <div className="flex items-center gap-2">
          <div className="bg-secondary   p-3.5 rounded-[.875rem]">
            <Building />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">انتخاب هتل</p>
            <p className="text-xs text-gray-650 ">
              لطفا هتل خود را انتخاب کنید!
            </p>
          </div>
        </div>
        <button onClick={() => closeModal()} aria-label="Close Modal">
          <Close />
        </button>
      </div>
      <form className="mt-4 ">
        <ul className="grid grid-cols-2 gap-3.5">
          {[...Array(6)].map((_, i) => (
            <li key={i}>
              <label
                htmlFor={`hotel-${i}`}
                className="flex has-[input:checked]:bg-orange-500 has-[input:checked]:text-white cursor-pointer bg-secondary rounded-[.875rem]  p-3 items-center gap-2"
              >
                <input
                  type="radio"
                  defaultChecked={i === 0}
                  className="opacity-0 hidden"
                  id={`hotel-${i}`}
                  name="hotel"
                />
                <div className="size-6.5 text-[8px] flex items-center justify-center bg-[#D9D9D9] rounded-full">
                  logo
                </div>
                <p className="text-sm ">هتل استقلال ۱</p>
              </label>
            </li>
          ))}
        </ul>
        <div className="ms-auto w-fit mt-6">
          <Button className="!px-15" label="ورود" variant="form" />
        </div>
      </form>
    </div>
  );
};

export default HotelSelectModal;
