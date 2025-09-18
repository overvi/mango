import ArrowLeft from "@/assets/images/arrow-left-white.svg?react";
import { PasswordInput } from "../Input";
import PrimaryButton from "../Button";

const PassForm = () => {
  return (
    <form className="mt-19" action="">
      <PasswordInput
        wrapperClassName=""
        placeholder="وارد کنید..."
        label="رمز عبور"
      />
      <PasswordInput
        wrapperClassName="mt-6"
        placeholder="وارد کنید..."
        label="تکرار رمز عبور"
      />

      <div className="w-fit ms-auto mt-6 ">
        <PrimaryButton
          label="تایید رمز عبور"
          icon={ArrowLeft}
          type="button"
          className="!px-3"
        />
      </div>
    </form>
  );
};

export default PassForm;
