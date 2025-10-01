import Button from "../Button";
import { Input } from "../Input";
import Select from "../Select/Select";

const options = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" },
];

const RecordFailure = () => {
  return (
    <form action="" className="  gap-3.5 ">
      <div className="space-y-3.5">
        <Select
          label="نوع وسیله نقلیه"
          id="status-select"
          iconClassName=""
          buttonClassName="bg-neutral-15 py-2 px-3.5 rounded-full "
          options={options}
        />

        <Input
          className="bg-neutral-15"
          autoComplete="notes"
          placeholder="وارد کنید..."
          label="یادداشت"
        />
      </div>
      <div className="flex items-center  mt-3.5 gap-4 justify-end">
        <Button
          className="outline-error text-error bg-error/5"
          variant="outline"
          label="بازنویسی"
        />
        <Button
          className="text-nowrap !h-10"
          variant="form"
          label="ثبت به عنوان خرابی"
        />
      </div>
    </form>
  );
};

export default RecordFailure;
