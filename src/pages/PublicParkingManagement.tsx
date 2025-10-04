import Sidebar from "@/components/Sidebar/Sidebar";

import Car from "@/assets/images/car-outline.svg?react";
import ParkingFilter from "@/components/ParkingManagement/ParkingFilter";
import ParkingSlots from "@/components/ParkingManagement/ParkingSlots";
import ParkingStatus from "@/components/ParkingManagement/ParkingStatus";
import Statistics from "@/components/ParkingManagement/Statistics";
import ParkingNav from "@/components/ParkingNav/ParkingNav";
import Select from "@/components/Select/Select";
import type { Tab } from "@/components/Tab/Tab";
import RecordFailure from "@/components/ParkingManagement/RecordFailure";
import ReserveForLater from "@/components/ParkingManagement/ReserveForLater";

import CarFilled from "@/assets/images/car.svg?react";
import Clock from "@/assets/images/clock.svg?react";
import Danger from "@/assets/images/danger.svg?react";
import RegistrationStep from "@/components/PublicManagement/RegistrationStep";

const options = [
  { label: "طبقه 1", value: "1" },
  { label: "طبقه 2", value: "2" },
  { label: "طبقه 3", value: "3" },
  { label: "طبقه 4", value: "4" },
  { label: "طبقه 5", value: "5" },
];

const tabs: Tab[] = [
  {
    id: "1",
    content: <RegistrationStep />,
    label: "ثبت ورود",
    icon: CarFilled,
  },
  {
    id: "2",
    content: <ReserveForLater />,
    label: "رزرو برای بعد",
    icon: Clock,
  },

  {
    id: "3",
    content: <RecordFailure />,
    label: "ثبت خرابی",
    icon: Danger,
  },
];

const PublicParkingManagement = () => {
  return (
    <div className="flex  gap-5 py-6 text-base px-11.5 bg-primary h-screen min-w-[var(--breakpoint-desktop)]  min-h-[800px]">
      <Sidebar />
      <div className="flex-1">
        <header className="flex items-center justify-between">
          <ParkingNav
            title="مدیریت پارکینگ"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          />
        </header>
        <main className="mt-6">
          <Statistics />

          <div className="flex gap-5 ">
            <div className="basis-[70%]">
              <ParkingFilter />
              <div className="bg-neutral-200 min-h-[40rem] mt-5 flex flex-col  gap-2 rounded-[1.25rem] p-5 pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">ظرفیت پارکینگ</p>
                    <div className="flex items-center gap-1 text-nowrap">
                      <span className="size-1.5 bg-orange-500 rounded-full"></span>
                      <Select
                        iconClassName="*:stroke-orange-500"
                        listClassName="text-xs p-2"
                        optionClassName="!ps-2 !h-6 !rounded-[7px] font-light "
                        buttonClassName="w-[7.625rem] text-xs justify-start gap-2"
                        options={options}
                      />
                    </div>
                  </div>
                  <ParkingStatus />
                </div>
                <ParkingSlots showStatus={false} tabs={tabs} />
              </div>
            </div>
            <div className="bg-neutral-200 rounded-[1.25rem] py-5 px-4 mt-5 basis-[30%] ">
              <p className="text-sm">آخرین فعالیت ها</p>
              <ul className="mt-3.5 space-y-3 dark:*:*:*:text-white ">
                <li className="flex bg-neutral-50 rounded-[.875rem]  p-3.5 items-center justify-between">
                  <div>
                    <div className="flex items-center  gap-1.5">
                      <Car color="var(--color-green-500)" />
                      <p className="text-sm">جایگاه ۷</p>
                      <div className="bg-green-500/15 text-green-500 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <span className="bg-green-500 shrink-0 rounded-full  size-[3px] "></span>
                        <p className="text-[10px]">ورود</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-650  mt-2">
                      <p>محمد میرزایی ( اتاق ۳۲)</p>
                      <p>۲۰۶ سفید - ۱۲۴ف۷۶</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">12:56</p>
                    <p className="text-xs text-gray-650">۱۴۰۴/۰۲/۲۳</p>
                  </div>
                </li>
                <li className="flex bg-error/5 rounded-[.875rem]  p-3.5 items-center justify-between">
                  <div>
                    <div className="flex items-center  gap-1.5">
                      <Car color="var(--color-error)" />
                      <p className="text-sm">جایگاه ۷</p>
                      <div className="bg-error/15 text-error px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <span className="bg-error shrink-0 rounded-full  size-[3px] "></span>
                        <p className="text-[10px]">زمان خروج گذشته است</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-650  mt-2">
                      <p>محمد میرزایی ( اتاق ۳۲)</p>
                      <p>۲۰۶ سفید - ۱۲۴ف۷۶</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">12:56</p>
                    <p className="text-xs text-gray-650">۱۴۰۴/۰۲/۲۳</p>
                  </div>
                </li>
                <li className="flex bg-neutral-50 rounded-[.875rem]  p-3.5 items-center justify-between">
                  <div>
                    <div className="flex items-center  gap-1.5">
                      <Car color="var(--color-blue)" />
                      <p className="text-sm">جایگاه ۷</p>
                      <div className="bg-blue/15 text-blue px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <span className="bg-blue shrink-0 rounded-full  size-[3px] "></span>
                        <p className="text-[10px]">ورود</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-650 mt-2">
                      <p>محمد میرزایی ( اتاق ۳۲)</p>
                      <p>۲۰۶ سفید - ۱۲۴ف۷۶</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">12:56</p>
                    <p className="text-xs text-gray-650">۱۴۰۴/۰۲/۲۳</p>
                  </div>
                </li>
                <li className="flex bg-neutral-50 rounded-[.875rem]  p-3.5 items-center justify-between">
                  <div>
                    <div className="flex items-center  gap-1.5">
                      <Car color="var(--color-orange-500)" />
                      <p className="text-sm">جایگاه ۷</p>
                      <div className="bg-orange-500/15 text-orange-500 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <span className="bg-orange-500 shrink-0 rounded-full  size-[3px] "></span>
                        <p className="text-[10px]">ورود</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-650 mt-2">
                      <p>محمد میرزایی ( اتاق ۳۲)</p>
                      <p>۲۰۶ سفید - ۱۲۴ف۷۶</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">12:56</p>
                    <p className="text-xs text-gray-650">۱۴۰۴/۰۲/۲۳</p>
                  </div>
                </li>
                <li className="flex bg-neutral-50 rounded-[.875rem]  p-3.5 items-center justify-between">
                  <div>
                    <div className="flex items-center  gap-1.5">
                      <Car color="var(--color-gray)" />
                      <p className="text-sm">جایگاه ۷</p>
                      <div className="bg-gray/15 text-gray px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <span className="bg-gray shrink-0 rounded-full  size-[3px] "></span>
                        <p className="text-[10px]">ورود</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-650 mt-2">
                      <p>محمد میرزایی ( اتاق ۳۲)</p>
                      <p>۲۰۶ سفید - ۱۲۴ف۷۶</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">12:56</p>
                    <p className="text-xs text-gray-650">۱۴۰۴/۰۲/۲۳</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PublicParkingManagement;

export const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm font-semibold text-gray-600">{label}</p>
    <p>{value}</p>
  </div>
);
