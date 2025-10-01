import { useState } from "react";
import Eye from "@/assets/images/eye.svg?react";
import EyeVisible from "@/assets/images/visible-eye.svg?react";

interface Props {
  label: string;
  placeholder: string;
  wrapperClassName?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  className?: string;
}

export const Input = ({
  label,
  placeholder,
  wrapperClassName,
  autoComplete,
  className,
}: Props) => {
  const baseClassName =
    "bg-white dark:bg-gray-700  text-base w-full placeholder:text-sm placeholder:text-gray-600 outline-none  py-2  px-3.5  rounded-full";
  return (
    <div className={`w-full ${wrapperClassName}`}>
      <label htmlFor="" className="text-sm">
        {label}
      </label>
      <div>
        <input
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={[baseClassName, className].join(" ")}
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
      <div className="mt-1 flex items-center pe-3 bg-white dark:bg-gray-700 rounded-full justify-between">
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
            {showPassword ? (
              <EyeVisible className="*:fill-orange-500" />
            ) : (
              <Eye className="*:fill-[#636363] dark:*:fill-gray-600" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};
