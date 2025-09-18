import { default as S } from "@/assets/images/search-normal.svg?react";

const Search = () => {
  return (
    <div className="flex items-center max-w-[34.375rem] w-full justify-between rounded-full bg-neutral-100  ">
      <input
        className="py-3 ps-6 outline-none  w-full"
        placeholder="جستجو..."
      />
      <button className="bg-orange-500 shrink-0 rounded-full size-11.5 flex items-center justify-center">
        <S />
      </button>
    </div>
  );
};

export default Search;
