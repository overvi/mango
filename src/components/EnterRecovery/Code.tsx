import edit from "@/assets/images/edit-number.svg";
import logo from "@/assets/images/logo.png";
import Pattern from "../Login/Pattern";
import CodeInput from "./CodeInput";
import SendCode from "./SendCode";

const Code = () => {
  return (
    <div className="bg-neutral-300 text-base  min-h-[42.5rem] flex flex-col overflow-hidden z-0 relative justify-end pb-20 rounded-[50px] h-[85vh]">
      <Pattern />
      <div className="px-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="mt-21">
          <a href="" className="flex items-center gap-1">
            <p>۰۹۱۲۱۲۳۴۵۶۷</p>
            <div>
              <img src={edit} alt="" />
            </div>
          </a>
          <p className="mt-4">
            لطفا کد ۶ رقمی ارسال شده به شماره موبایل خود را وارد کنید.
          </p>
          <CodeInput />
        </div>
        <SendCode />
      </div>
    </div>
  );
};

export default Code;
