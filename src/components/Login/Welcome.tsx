import logo from "@/assets/images/logo.png";

import LoginForm from "./LoginForm";
import Pattern from "./Pattern";

const Welcome = () => {
  return (
    <div className="bg-neutral-300 min-h-[42.5rem] flex flex-col overflow-hidden z-0 relative justify-end pb-20 rounded-[50px] h-[85vh]">
      <Pattern />
      <div className="px-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-8">
          به پنل مدیریتی خوش آمدید
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Welcome;
