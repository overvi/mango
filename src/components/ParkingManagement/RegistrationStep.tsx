import Button from "../Button";
import { Input } from "../Input";
import Select from "../Select/Select";

const options = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" },
];

const RegistrationStep = () => {
  return (
    <form
      action=""
      className=" grid gap-3.5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
    >
      <Input
        containerClassName="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="نام مهمان"
      />
      <Input
        containerClassName="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="شماره اتاق"
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
      />
      <Select
        label="نوع وسیله نقلیه"
        id="status-select"
        iconClassName=""
        buttonClassName="bg-neutral-15 text-sm h-10 py-2 px-3.5 rounded-full "
        options={options}
      />
      <Select
        label="مدت زمان اقامت"
        id="status-select"
        iconClassName=""
        buttonClassName="bg-neutral-15 text-sm h-10 py-2 px-3.5 rounded-full "
        options={options}
      />
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
