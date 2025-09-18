import logo from "@/assets/images/logo.png";
import Pattern from "../Login/Pattern";
import Buttons from "./Buttons";

const Guide = () => {
  return (
    <div className="bg-primary min-h-[42.5rem] flex flex-col overflow-hidden z-0 relative justify-end pb-20 rounded-[50px] h-[85vh]">
      <Pattern />
      <div className="px-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <h1 className="text-2xl font-semibold mt-8">
          به پنل مدیریتی خوش آمدید
        </h1>
        <div className="mt-3.5 text-justify">
          <p>
            با این برنامه، مهمانان می‌توانند درخواست خشکشویی خود را ثبت کنند،
            وضعیت لباس‌های خود را پیگیری کنند، و زمان تحویل و تحویل‌گیری لباس‌ها
            را مدیریت کنند. اپ به کارمندان کمک می‌کند تا فرآیندهای خشکشویی را به
            صورت مرتب و بهینه پیگیری کنند.
          </p>
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default Guide;
