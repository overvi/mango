import Button from "../Button";
import { Input } from "../Input";
import Select from "../Select/Select";
import {
  DatePicker as DatePickerJalali,
  JalaliLocaleListener,
} from "antd-jalali";

const options = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" },
];

const ReserveForLater = () => {
  return (
    <form
      action=""
      className=" grid gap-3.5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
    >
      <Input
        className="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="نام مهمان"
      />
      <Input
        className="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="شماره اتاق"
      />
      <div>
        <label htmlFor="resDate">تاریخ رزرو</label>
        <JalaliLocaleListener />
        <DatePickerJalali id="resDate" />
      </div>

      <Input
        className="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="ساعت رزرو"
      />
      <Select
        label="مدت زمان اقامت"
        id="status-select"
        iconClassName=""
        buttonClassName="bg-neutral-15 py-2 px-3.5 rounded-full "
        options={options}
      />
      <Input
        className="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="شماره موبایل"
      />
      <div className="col-[1/3]">
        <Input
          className="bg-neutral-15"
          autoComplete="notes"
          placeholder="وارد کنید..."
          label="یادداشت"
        />
      </div>
      <div className="flex items-center col-[1/3] mt-2 gap-4 justify-end">
        <Button
          className="outline-error text-error bg-error/5"
          variant="outline"
          label="بازنویسی"
        />
        <Button className="text-nowrap !h-10" variant="form" label="ثبت ورود" />
      </div>
    </form>
  );
};

export default ReserveForLater;
