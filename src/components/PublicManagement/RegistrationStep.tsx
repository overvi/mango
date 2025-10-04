import Button from "../Button";
import { Input } from "../Input";

const RegistrationStep = () => {
  return (
    <form action="" className=" gap-3.5 ">
      <Input
        containerClassName="bg-neutral-15"
        autoComplete="username"
        placeholder="وارد کنید..."
        label="پلاک ماشین"
        star
      />
      <Input
        wrapperClassName="mt-3.5"
        containerClassName="bg-neutral-15 "
        autoComplete="username"
        placeholder="وارد کنید..."
        label="یادداشت"
      />

      <div className="flex items-center col-[1/3] mt-3.5  gap-4 justify-end">
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
