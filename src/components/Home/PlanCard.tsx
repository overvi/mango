import image from "@/assets/images/plan-image.png";
import Button from "../Button";
import LeftArrow from "@/assets/images/arrow-left-white.svg?react";
import IconBlack from "@/assets/images/arrow-left-black-filled.svg?react";

const PlanCard = ({ active }: { active: boolean }) => {
  return (
    <div className="pt-8 p-4 w-full bg-neutral-200 max-w-[18rem] rounded-[30px] ">
      <div className="bg-gray-300 dark:bg-gray-700 size-24.5 rounded-full  flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <p className="font-semibold text-sm mt-5.5">برنامه مدیریت خشکشویی</p>
      <p className="text-justify text-xs mt-2 ">
        با این برنامه، مهمانان می‌توانند درخواست خشکشویی خود را ثبت کنند، وضعیت
        لباس‌های خود را پیگیری کنند، و زمان تحویل و تحویل‌گیری لباس‌ها را مدیریت
        کنند. اپ به کارمندان کمک می‌کند تا فرآیندهای خشکشویی را به صورت مرتب و
        بهینه پیگیری کنند.
      </p>
      <div className="w-fit ms-auto mt-11">
        {active ? (
          <Button
            className="hover:!bg-orange-500/10 !px-2"
            label="رفتن به برنامه"
            icon={LeftArrow}
          />
        ) : (
          <Button
            className="!px-2"
            variant="secondary"
            label="کاتالوگ معرفی"
            icon={IconBlack}
          />
        )}
      </div>
    </div>
  );
};

export default PlanCard;
