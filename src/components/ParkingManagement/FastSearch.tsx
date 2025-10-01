import Search from "../Navbar/Search";
import Profile from "@/assets/images/profile.svg?react";

const FastSearch = () => {
  return (
    <div className="bg-neutral-50 p-4 my-4  rounded-[.875rem]">
      <div className="flex items-center gap-2">
        <div className="size-7.5 rounded-lg  p-1 bg-orange-500/15 w-fit  ">
          <Profile />
        </div>
        <p className="text-sm">جستجو سریع مسافر</p>
      </div>
      <div className="mt-3.5">
        <Search />
      </div>
    </div>
  );
};

export default FastSearch;
