import logo from "@/assets/images/logo.png";
import Pattern from "../Login/Pattern";
import { Input } from "../Input";
import LeftArrow from "@/assets/images/arrow-left-white.svg?react";
import PrimaryButton from "../Button";
import { Link } from "react-router";

const Recovery = () => {
  return (
    <div className="bg-neutral-300 text-base min-h-[42.5rem] flex flex-col overflow-hidden z-0 relative justify-end pb-20 rounded-[50px] h-[85vh]">
      <Pattern />
      <div className="px-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-21">بازیابی رمز عبور</h1>
        <p className="mt-1">
          جهت بازیابی رمز عبور لطفا شماره موبایل خود را وارد کنید.
        </p>
        <Input
          label="موبایل"
          placeholder="وارد کنید..."
          wrapperClassName="mt-10"
        />
        <Link to={"/password-entry"} className="w-fit ms-auto block">
          <PrimaryButton
            label="ارسال کد"
            icon={LeftArrow}
            className="mt-6 !py-3"
          />
        </Link>
      </div>
    </div>
  );
};

export default Recovery;
