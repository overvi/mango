import filledArrow from "@/assets/images/arrow-left-filled.svg";
import LeftArrow from "@/assets/images/arrow-left-white.svg?react";
import happy from "@/assets/images/emoji-happy.svg";
import sad from "@/assets/images/emoji-sad.svg";
import { useToast } from "@/providers/ToastProvider";
import { useState } from "react";
import Button from "../Button";
import Timer from "./Timer";

const SendCode = () => {
  const { addToast } = useToast();
  const [timeLeft, setTimeLeft] = useState(10);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center  gap-2">
        {timeLeft > 0 ? (
          <div className="flex items-center gap-2">
            <Timer setTimeLeft={setTimeLeft} timeLeft={timeLeft} seconds={60} />
            <p className="font-light">تا ارسال مجدد</p>
          </div>
        ) : (
          <button
            onClick={() => {
              if (timeLeft > 0) {
                addToast({
                  icon: <img src={sad} />,
                  description: "زمان شما تمام شد. دوباره تلاش کنید.",
                  type: "error",
                });
              } else {
                addToast({
                  icon: <img src={happy} />,
                  description: "کد ۶ رقمی جدید برای شما ارسال شد.",
                  type: "success",
                });
                setTimeLeft(10);
              }
            }}
            className="flex items-center gap-2"
          >
            <p className="font-bold">ارسال مجدد</p>
            <div>
              <img src={filledArrow} alt="" />
            </div>
          </button>
        )}
      </div>
      <div className="w-fit ms-auto">
        <Button
          variant="primary"
          label="بازیابی"
          icon={LeftArrow}
          className="mt-6 !py-3"
        />
      </div>
    </div>
  );
};

export default SendCode;
