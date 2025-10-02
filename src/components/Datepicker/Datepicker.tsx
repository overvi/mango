/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, type SetStateAction } from "react";
import jalaali from "jalaali-js";
import ScrollPicker from "./ScrollPicker";
import YearPicker from "./YearPicker";
import "./datepicker.css";
import { Input } from "../Input";
import Calendar from "@/assets/images/calendar.svg?react";

export interface MonthDetail {
  date: number;
  day: number;
  month: number;
  timestamp: number;
  dayString: string;
}

export interface DayDetailArgsGregorian {
  index: number;
  firstDay: number;
  month: number;
  year: number;
  numberOfDays: number;
}

const Jalalimonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر ",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const Jalalidays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهار شنبه",
  "پنج شنبه",
  "جمعه",
];

const Georgianmonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Georgiandays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const Datepicker = ({ isOpen, setIsOpen }: Props) => {
  const today = new Date();
  const initialJalali = jalaali.toJalaali(today);
  const [calendarType, setCalendarType] = useState("jalali");

  const [selectedYear, setSelectedYear] = useState<number>(
    calendarType === "jalali" ? initialJalali.jy : today.getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    calendarType === "jalali" ? initialJalali.jm - 1 : today.getMonth()
  );
  const [todayTimestamp, setTodayTimestamp] = useState<number>(Date.now());

  const [selectedTime, setSelectedTime] = useState<null | number>(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const [monthDetails, setMonthDetails] = useState<MonthDetail[]>([]);

  const [months, setMonths] = useState(Jalalimonths);
  const [days, setDays] = useState(Jalalidays);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (selectedYear === null || selectedMonth === null) return;

    let details: MonthDetail[];

    if (calendarType === "jalali") {
      details = getMonthDetails(selectedYear, selectedMonth);
    } else {
      details = getMonthDetailsGregorian(selectedYear, selectedMonth);
    }

    setMonthDetails(details);
  }, [selectedYear, selectedMonth, calendarType]);

  useEffect(() => {
    const currentDate = new Date();
    const today = new Date();
    let year: number, month: number, day: number;

    if (calendarType === "jalali") {
      const jalaliDate = jalaali.toJalaali(currentDate);

      year = jalaliDate.jy;
      month = jalaliDate.jm - 1;

      setMonths(Jalalimonths);
      setDays(Jalalidays);
      setSelectedYear(jalaliDate.jy);
      setSelectedMonth(jalaliDate.jm - 1);

      const todayJalali = jalaali.toJalaali(today);
      const gregorianToday = jalaali.toGregorian(
        todayJalali.jy,
        todayJalali.jm,
        todayJalali.jd
      );

      const todayTimestamp = new Date(
        gregorianToday.gy,
        gregorianToday.gm - 1,
        gregorianToday.gd
      ).getTime();

      setSelectedTime(todayTimestamp);
      setCurrentMonthIndex(month);
      setMonthDetails(getMonthDetails(year, month));
      setTodayTimestamp(todayTimestamp);
    } else {
      year = currentDate.getFullYear();
      month = currentDate.getMonth();
      day = currentDate.getDate();

      setMonths(Georgianmonths);
      setDays(Georgiandays);
      setSelectedYear(year);
      setSelectedMonth(month);

      const todayTimestamp = new Date(year, month, day).getTime();

      setSelectedTime(todayTimestamp);
      setCurrentMonthIndex(month);
      setMonthDetails(getMonthDetailsGregorian(year, month));
      setTodayTimestamp(todayTimestamp);
    }

    if (inputRef.current) {
      const ts =
        calendarType === "jalali"
          ? jalaali.toGregorian(year, month + 1, 1)
          : { gy: year, gm: month + 1, gd: 1 };

      const initialDate = new Date(ts.gy, ts.gm - 1, ts.gd).getTime();
      const dateString = getDateStringFromTimestamp(initialDate);
      inputRef.current.value = dateString;
    }
  }, [calendarType]);

  const dpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dpRef.current && !dpRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  function getDateStringFromTimestamp(timestamp: number) {
    if (calendarType === "jalali") {
      const dateObject = jalaali.toJalaali(new Date(timestamp));
      return `${months[dateObject.jm - 1]} ${dateObject.jd}, ${dateObject.jy}`;
    } else {
      const dateObject = new Date(timestamp);
      const year = dateObject.getFullYear();
      const month = dateObject.getMonth();
      const day = dateObject.getDate();
      return `${months[month]} ${day}, ${year}`;
    }
  }

  function isLeapYear(year: number) {
    return jalaali.isLeapJalaaliYear(year);
  }
  function getNumberOfDaysGregorian(year: number, month: number) {
    return 40 - new Date(year, month, 40).getDate();
  }

  function getNumberOfDays(year: number, month: number) {
    const monthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

    if (month === 11 && isLeapYear(year)) {
      return 30;
    }

    return monthDays[month];
  }

  function getDayDetailsGregorian(args: DayDetailArgsGregorian) {
    const date = args.index - args.firstDay;
    const day = args.index % 7;

    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    const prevMonthNumberOfDays = getNumberOfDaysGregorian(prevYear, prevMonth);

    const _date =
      (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;

    const month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    const timestamp = new Date(args.year, args.month, _date).getTime();

    return {
      date: _date,
      day,
      month,
      timestamp,
      dayString: days[day],
    };
  }

  function getMonthDetailsGregorian(year: number, month: number) {
    const firstDay = new Date(year, month).getDay();
    const numberOfDays = getNumberOfDaysGregorian(year, month);
    const monthArray = [];
    const rows = 5;
    let currentDay = null;
    let index = 0;
    const cols = firstDay >= 5 ? 8 : 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        currentDay = getDayDetailsGregorian({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });
        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  }

  function getDayDetails(args: DayDetailArgsGregorian) {
    const date = args.index - args.firstDay;
    let day = args.index % 7;

    day = (day + 1) % 7;

    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);

    const _date =
      (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
    const month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;

    const gregorianDate = jalaali.toGregorian(args.year, args.month + 1, _date);

    const timestamp = new Date(
      gregorianDate.gy,
      gregorianDate.gm - 1,
      gregorianDate.gd
    ).getTime();

    return {
      date: _date,
      day,
      month,
      timestamp,
      dayString: days[day],
    };
  }

  function getMonthDetails(year: number, month: number) {
    const firstDay = getJalaliFirstDay(year, month);
    const monthArray = [];
    const numberOfDays = getNumberOfDays(year, month);
    const rows = 5;
    let currentDay = null;
    let index = 0;
    const cols = firstDay >= 5 ? 8 : 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        currentDay = getDayDetails({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });
        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  }

  function getJalaliFirstDay(year: number, month: number) {
    const { gy, gm, gd } = jalaali.toGregorian(year, month + 1, 1);
    const gregorianFirstDay = new Date(gy, gm - 1, gd).getDay();
    const jalaliFirstDay = (gregorianFirstDay + 1) % 7;
    return jalaliFirstDay;
  }

  return (
    <div
      className={`dp *:*:text-base ${
        calendarType === "jalali" ? "font-yekan" : "font-spartan"
      }`}
      id="departure_date_picker"
      ref={dpRef}
    >
      <div className="date_picker_input flex items-center justify-between">
        <Input
          autoComplete="username"
          placeholder="روز / ماه / سال"
          ref={inputRef}
          readOnly
          className="!bg-transparent"
          containerClassName="bg-neutral-15"
          icon={<Calendar />}
          label="تاریخ رزرو"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="date_picker_calendar bg-neutral-200 absolute z-[1000]">
          <div className="calendar_header">
            <div className="flex items-center">
              <p className="font-bold cal_label">
                {calendarType === "jalali" ? "تاریخ رفت" : "Departure Date"}
              </p>

              <div className="select-container year-container flex items-center gap-2 relative">
                <div className="year-picker">
                  <YearPicker
                    calendarType={calendarType as "jalali" | "gregorian"}
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                  />
                </div>
                <div className="dropdown-ico"></div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="change-calendar text-xs px-2 !py-1.5"
                onClick={() => {
                  const newCalendarType =
                    calendarType === "jalali" ? "gregorian" : "jalali";
                  setCalendarType(newCalendarType);

                  const today = new Date();
                  if (newCalendarType === "jalali") {
                    const j = jalaali.toJalaali(today);
                    setSelectedYear(j.jy);
                    setSelectedMonth(j.jm - 1);
                    setMonths(Jalalimonths);
                    setDays(Jalalidays);
                  } else {
                    setSelectedYear(today.getFullYear());
                    setSelectedMonth(today.getMonth());
                    setMonths(Georgianmonths);
                    setDays(Georgiandays);
                  }
                }}
              >
                {calendarType === "jalali" ? "تقویم میلادی" : "Jalali Date"}
              </button>
            </div>
          </div>
          <div className="flex whole-wrapper items-center">
            <div className="month-picker">
              <ScrollPicker
                months={months}
                calendarType={calendarType as "jalali" | "gregorian"}
                selectedYear={selectedYear ?? new Date().getFullYear()}
                selectedMonthIndex={currentMonthIndex}
                setSelectedMonthIndex={setCurrentMonthIndex}
                getMonthDetails={getMonthDetails}
                getMonthDetailsGregorian={getMonthDetailsGregorian}
                setMonthDetails={(details) => {
                  setMonthDetails(details);
                }}
              />
            </div>
            <div className="cal_wrapper">
              <div className="cal_days">
                {days.map((dayName, i) => (
                  <div key={i} className="cell_wrapper">
                    <span className="cell_item">{dayName}</span>
                  </div>
                ))}
              </div>
              <div className="calendar_main">
                {monthDetails.map((day, index) => {
                  const isToday = day.timestamp === todayTimestamp;
                  const isSelected = day.timestamp === selectedTime;
                  const isDisabled = day.timestamp < todayTimestamp;

                  const classNames = [
                    "cell_wrapper",
                    "cal_date",
                    isDisabled ? "disabled" : "",
                    isToday ? "isCurrent" : "",
                    isSelected ? "active isSelected" : "",
                    day.month === 0 ? "current" : "hiddenz",
                  ].join(" ");

                  return (
                    <div
                      key={index}
                      className={classNames}
                      onClick={() => {
                        if (!isDisabled && day.month === 0) {
                          setSelectedTime(day.timestamp);
                        }
                      }}
                    >
                      <span className="cell_item">{day.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center actions text-xs">
            <button
              type="button"
              className="dp-btn delete text-xs"
              onClick={() => {
                setSelectedTime(null);
                if (inputRef.current) inputRef.current.value = "";
              }}
            >
              {calendarType === "jalali" ? "حذف" : "Delete"}
            </button>

            <button
              type="button"
              className="dp-btn select text-xs"
              onClick={() => {
                if (selectedTime && inputRef.current) {
                  const dateString = getDateStringFromTimestamp(selectedTime);
                  inputRef.current.value = dateString;
                }
              }}
            >
              {calendarType === "jalali" ? "انتخاب" : "Select"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
