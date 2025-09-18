import arrowLeftOrange from "@/assets/images/arrow-left-orange.svg";
import ArrowLeft from "@/assets/images/arrow-left-white.svg?react";
import { Link } from "react-router";
import { Input, PasswordInput } from "../Input";
import useModal from "../Modal/useModal";
import Button from "../Button";
import HotelSelectModal from "./HotelSelectModal";

const LoginForm = () => {
  const { openModal } = useModal();
  return (
    <form className="mt-19" action="">
      <Input
        autoComplete="username"
        placeholder="وارد کنید..."
        label="نام کاربری"
      />

      <PasswordInput
        autoComplete="new-password"
        wrapperClassName="mt-6"
        placeholder="وارد کنید..."
        label="رمز عبور"
      />
      <Link
        to={"/password-recovery"}
        className="flex items-center gap-1.5 mt-1 "
      >
        <div className="text-xs">فراموشی رمز عبور</div>
        <div>
          <img src={arrowLeftOrange} alt="" />
        </div>
      </Link>
      <div className="w-fit ms-auto ">
        <Button
          onClick={() => openModal(<HotelSelectModal />)}
          label="ورود"
          icon={ArrowLeft}
          variant="primary"
          type="button"
        />
      </div>
    </form>
  );
};

export default LoginForm;
