import Search from "@/components/Navbar/Search";
import Select from "@/components/Select/Select";

const options = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" },
];

const ParkingFilter = () => {
  return (
    <div className="flex items-center gap-5 mt-5">
      <div className="basis-[70%]">
        <Search placeholder="جستجوی بر اساس نام مسافر، شماره اتاق یا شماره پارکینگ ..." />
      </div>
      <div className="basis-[30%]">
        <Select
          iconClassName=""
          buttonClassName="bg-neutral-200 py-2 px-3.5 rounded-full "
          options={options}
        />
      </div>
    </div>
  );
};

export default ParkingFilter;
