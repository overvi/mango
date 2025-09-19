import logo from "@/assets/images/logo.png";
import Pattern from "../Login/Pattern";
import PassForm from "./PassForm";

const Content = () => {
  return (
    <div className="bg-neutral-300 text-base min-h-[42.5rem] flex flex-col overflow-hidden z-0 relative justify-end pb-20 rounded-[50px] h-[85vh]">
      <Pattern />
      <div className="px-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-8">رمز عبور جدید</h1>
        <p className="mt-1">لطفا رمز عبور جدیدی برای خود ثبت کنید!</p>
        <PassForm />
      </div>
    </div>
  );
};

export default Content;
