import Close from "@/assets/images/close-circle.svg?react";
import Dollar from "@/assets/images/dollar-square.svg?react";
import Profile from "@/assets/images/profile.svg?react";
import Building from "@/assets/images/buliding.svg?react";
import Clock from "@/assets/images/clock.svg?react";
import Calculator from "@/assets/images/calculator.svg?react";
import { InfoRow } from "@/pages/HotelParkingManagement";
import Card from "@/assets/images/card.svg?react";
import CardPos from "@/assets/images/card-pos.svg?react";
import Money from "@/assets/images/moneys.svg?react";
import Button from "../Button";
import useModal from "../Modal/useModal";
import SuccessPayment from "./SuccessPayment";
import { useState, type ChangeEvent } from "react";

const PaymentModal = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.id);
  };
  const { openModal } = useModal();
  return (
    <div className=" w-[31.375rem] scroll-hidden p-6 max-h-[45.25rem] overflow-y-scroll ">
      <div className="border-b border-b-gray-350 dark:border-b-gray-800  pb-5">
        <div className="flex justify-between ">
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-green-500/15  flex items-center justify-center size-15 rounded-[.875rem]">
              <Dollar width={30} height={30} />
            </div>
            <div className="flex  flex-col text-sm">
              <div className="flex items-center gap-4">
                <p>جایگاه ۷</p>
              </div>
              <p className="text-gray-650 mt-2 ">بخش A طبقه ۱</p>
            </div>
          </div>
          <button className="self-start">
            <Close />
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2.5">
          <div className="flex gap-1 items-center">
            <Profile />
            <p className="text-xs">محمد میرزایی</p>
          </div>
          <div className="flex gap-1 items-center">
            <Building width={16} />
            <p className="text-xs">محمد میرزایی</p>
          </div>
          <div className="bg-gray/15  w-17.5 rounded-[6px] flex items-center gap-1  ps-2 py-1">
            <span className="size-[3px] bg-gray rounded-full"></span>
            <p className="text-xs text-gray mt-0.5">G780</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-15  p-4 mt-4  rounded-[.875rem]">
        <div className="flex items-center gap-2">
          <div className="bg-neutral-200 size-7.5  rounded-lg flex items-center justify-center ">
            <Clock color="var(--color-gray)" width={20} />
          </div>
          <p className="text-sm">مدت زمان پارکینگ</p>
        </div>
        <div className="grid grid-cols-2 mt-6 gap-5.5">
          <InfoRow label="نام مهمان" value="محمد میرزایی" />
          <InfoRow label="شماره اتاق" value="78" />
          <InfoRow label="پلاک ماشین" value="78" />
          <InfoRow label="ورود" value="۱۴۰۳/۰۲/۱۲ - ۱۲:۴۳" />
        </div>
      </div>
      <div className="bg-neutral-15  p-4 mt-4  rounded-[.875rem]">
        <div className="flex items-center gap-2">
          <div className="bg-neutral-200 size-7.5  rounded-lg flex items-center justify-center ">
            <Calculator color="var(--color-gray)" width={20} />
          </div>
          <p className="text-sm">هزینه ها</p>
        </div>
        <div className="text-xs mt-2.5">
          <p>تخفیف های جدید</p>
          <ul className="mt-2  space-y-2">
            <li>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="">تخفیف مهمان هتل (۱۰٪)</label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="">(100٪) تخفیف مهمان VIP</label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="">باشگاه مشتریان (۵٪)</label>
              </div>
            </li>
          </ul>
          <div className="flex items-center border-b  border-b-gray-350 dark:border-b-gray-800  pb-2 justify-between text-xs mt-5">
            <p>نرخ پایه ( ۶ساعت × ۵۰.۰۰۰ تومان)</p>
            <div className="flex items-center gap-1">
              <Dollar width={16} />
              <p>۳۰۰.۰۰۰ تومان</p>
            </div>
          </div>
          <div className="space-y-1 border-b border-b-gray-350 dark:border-b-gray-800  pb-2">
            <div className="flex items-center  justify-between text-xs mt-2">
              <p>جمع جزء</p>
              <div className="flex items-center gap-1">
                <Dollar width={16} height={16} />
                <p>۳۰۰.۰۰۰ تومان</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs ">
              <p>مالیات (۸٪)</p>
              <div className="flex items-center gap-1">
                <Dollar width={16} height={16} />
                <p>۳۰۰.۰۰۰ تومان</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs ">
              <p>مالیات (۸٪)</p>
              <div className="flex items-center gap-1">
                <Dollar width={16} height={16} />
                <p>۳۰۰.۰۰۰ تومان</p>
              </div>
            </div>
            <div className="flex items-center text-green-500 justify-between text-xs ">
              <p>تخفیف مهمان هتل (۱۰٪)</p>
              <div className="flex items-center gap-1">
                <p>۳۰۰.۰۰۰ تومان</p>
              </div>
            </div>
            <div className="flex items-center text-green-500 justify-between text-xs ">
              <p>تخفیف مهمان هتل (۱۰٪)</p>
              <div className="flex items-center gap-1">
                <p>۳۰۰.۰۰۰ تومان</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p>مجموع</p>
            <div className="flex items-center gap-1">
              <Dollar width={16} height={16} />
              <p className="font-bold">۳۰۰.۰۰۰ تومان</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-15  p-4 mt-4  rounded-[.875rem]">
        <div className="flex items-center gap-2">
          <div className="bg-neutral-200 size-7.5  rounded-lg flex items-center justify-center ">
            <Card color="var(--color-gray)" width={20} />
          </div>
          <p className="text-sm">روش های پرداختی</p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="card"
            className="mt-2.5 bg-neutral-200 flex items-center ps-3 w-full h-9.5 rounded-xl"
          >
            <div className="flex items-center gap-7   ">
              <input
                type="radio"
                name="payment"
                id="card"
                onChange={handleChange}
                className="checkbox"
              />
              <div className="text-xs flex items-center gap-2">
                <CardPos width={16} />
                <p> (100٪) تخفیف مهمان VIP</p>
              </div>
            </div>
          </label>
          <label
            htmlFor="building"
            className="mt-2.5 bg-neutral-200  flex items-center ps-3 w-full h-9.5 rounded-xl"
          >
            <div className="flex items-center gap-7  ">
              <input
                id="building"
                name="payment"
                onChange={handleChange}
                type="radio"
                className="checkbox"
              />
              <div className="text-xs flex items-center gap-2">
                <Building className="*:fill-gray *:stroke-gray" width={16} />
                <p>ثبت روی فاکتور اتاق</p>
              </div>
            </div>
          </label>
          <label
            htmlFor="money"
            className="mt-2.5 bg-neutral-200  flex items-center ps-3 w-full h-9.5 rounded-xl"
          >
            <div className="flex items-center gap-7  ">
              <input
                id="money"
                type="radio"
                name="payment"
                onChange={handleChange}
                className="checkbox"
              />
              <div className="text-xs flex items-center gap-2">
                <Money className="*:fill-gray *:stroke-gray" width={16} />
                <p>ثبت روی فاکتور اتاق</p>
              </div>
            </div>
          </label>
        </div>
      </div>
      {selectedPayment === "building" && (
        <div className="bg-green-500/5 border border-green-500/30 text-xs text-green-500 mt-2.5 rounded-[.875rem] ps-8  py-2.5 ">
          <p>هزینه ها به اتاق ۳۴۵ اضافه خواهد شد.</p>
        </div>
      )}
      <Button
        onClick={() => openModal(<SuccessPayment />)}
        variant="form"
        className="w-full text-center flex items-center justify-center mt-3.5"
        label="مبلغ دریافت شد (۳۲۴.۰۰۰ تومان )"
      />
    </div>
  );
};

export default PaymentModal;
