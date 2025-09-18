import { useState } from "react";
import eye from "@/assets/images/eye.svg";
import eyeVisible from "@/assets/images/visible-eye.svg";

interface Props {
  label: string;
  placeholder: string;
  wrapperClassName?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
}

export const Input = ({
  label,
  placeholder,
  wrapperClassName,
  autoComplete,
}: Props) => {
  return (
    <div className={`w-full ${wrapperClassName}`}>
      <label htmlFor="" className="text-sm">
        {label}
      </label>
      <div className="mt-1">
        <input
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="bg-form  text-base w-full placeholder:text-sm placeholder:text-gray-600 outline-none  py-2  px-3.5  rounded-full"
          type="text"
        />
      </div>
    </div>
  );
};

export const PasswordInput = ({
  label,
  placeholder,
  wrapperClassName,
  autoComplete,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`w-full ${wrapperClassName}`}>
      <label htmlFor="" className="text-sm">
        {label}
      </label>
      <div className="mt-1 flex items-center pe-3 bg-form rounded-full justify-between">
        <input
          autoComplete={autoComplete}
          placeholder={placeholder}
          className=" w-full placeholder:text-sm placeholder:text-gray-600 outline-none  py-2  px-3.5  rounded-full"
          type={showPassword ? "text" : "password"}
        />
        <button
          aria-label="Toggle Visiblity"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <div>
            <img src={showPassword ? eyeVisible : eye} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};
