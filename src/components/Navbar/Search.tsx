import { default as S } from "@/assets/images/search-normal.svg?react";

interface Props {
  placeholder?: string;
}

const Search = ({ placeholder }: Props) => {
  return (
    <div className="flex items-center  w-full justify-between rounded-full bg-neutral-200  ">
      <input
        className="py-3 ps-6 outline-none  w-full placeholder:text-[#ababab] placeholder:font-light"
        placeholder={placeholder || "جستجو..."}
      />
      <button className="bg-orange-500 shrink-0 rounded-full size-11.5 flex items-center justify-center">
        <S />
      </button>
    </div>
  );
};

export default Search;
