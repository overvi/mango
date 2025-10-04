import ArrowDown from "@/assets/images/arrow-down-input.svg?react";
import { useState } from "react";
import Button from "../Button";
import { Input } from "../Input";
import Select from "../Select/Select";

const options = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" },
];

const stay = [
  { label: "ماه", value: "month" },
  { label: "روز", value: "day", checked: true },
  { label: "سال", value: "year" },
];

const RegistrationStep = () => {
  const [stayType, setStayType] = useState<"day" | "month" | "year">("day");

  const [value, setValue] = useState(1);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <form
      action=""
      className=" grid gap-3.5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
    >
      <Input
        containerClassName="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="نام و نام خانوادگی"
      />
      <Input
        containerClassName="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="شماره موبایل"
      />
      <Input
        containerClassName="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="پلاک ماشین"
        star
      />

      <Select
        label="نوع وسیله نقلیه"
        id="status-select"
        iconClassName=""
        buttonClassName="bg-neutral-15 text-sm h-10 py-2 px-3.5 rounded-full "
        options={options}
      />
      <div className="self-end">
        <Select
          label="مدت زمان اقامت"
          id="status-select-2"
          iconClassName=""
          buttonClassName="bg-neutral-15 text-sm h-10 py-2 px-3.5 rounded-full "
          options={stay}
          onChange={(v) => setStayType(v as "day" | "month")}
        />
      </div>
      <div>
        <label htmlFor="stay" className="text-sm">
          مدت زمان اقامت
        </label>
        <label
          htmlFor="stay"
          className="bg-neutral-15 has-[:disabled]:opacity-50 px-3.5  h-10 rounded-full flex items-center justify-between"
        >
          <div className="flex items-center max-w-full">
            <p className="text-sm font-light text-[#949494]">
              {stayType == "day" ? "روز:" : stayType == "month" && "ماه:"}
            </p>
            <input
              id="stay"
              type="numbr"
              disabled={stayType === "year"}
              value={stayType !== "year" ? value : ""}
              onChange={(e) => setValue(Number(e.target.value))}
              className="ms-1 outline-none max-w-[6rem] "
            />
          </div>
          <div className="flex flex-col  justify-between">
            <button
              type="button"
              className="rotate-180 hover:*:*:fill-orange-500"
              onClick={increment}
            >
              <ArrowDown />
            </button>
            <button
              type="button"
              className="hover:*:*:fill-orange-500"
              onClick={decrement}
            >
              <ArrowDown />
            </button>
          </div>
        </label>
      </div>

      <div className="col-[1/3]">
        <Input
          containerClassName="bg-neutral-15"
          autoComplete="notes"
          placeholder="وارد کنید..."
          label="یادداشت"
        />
      </div>
      <div className="flex items-center col-[1/3]  gap-4 justify-end">
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

export default RegistrationStep;
