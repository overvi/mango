import React from "react";
import Select from "../Select/Select";

interface YearPickerProps {
  calendarType: "jalali" | "gregorian";
  selectedYear: number;
  onYearChange: (year: number) => void;
}

const YearPicker: React.FC<YearPickerProps> = ({
  calendarType,
  selectedYear,
  onYearChange,
}) => {
  const getYearOptions = () => {
    const years = [];
    let startYear = 1900;
    let endYear = new Date().getFullYear() + 10;

    if (calendarType === "jalali") {
      startYear = 1403;
      endYear = 1406;
    }

    for (let y = startYear; y <= endYear; y++) {
      years.push(y);
    }
    return years;
  };
  {
    getYearOptions().map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  }
  return (
    <Select
      value={selectedYear.toString()}
      onChange={(e) => onYearChange(Number(e))}
      buttonClassName="gap-2 "
      optionClassName="!ps-2.5 !h-6"
      showCheckbox
      listClassName="w-[4.8125rem] text-sm !rounded-lg  !ps-0 scroll-hidden  max-h-[10rem] overflow-y-scroll "
      options={getYearOptions().map((n) => ({
        label: n.toString(),
        value: n.toString(),
        checked: false,
      }))}
    />
  );
};

export default YearPicker;
