import { useCallback, useEffect, useRef } from "react";
import type { MonthDetail } from "./Datepicker";

interface ScrollPickerProps {
  months: string[];
  calendarType: "jalali" | "gregorian";
  selectedYear: number;
  selectedMonthIndex: number;
  setSelectedMonthIndex: (index: number) => void;
  getMonthDetails: (year: number, month: number) => MonthDetail[];
  getMonthDetailsGregorian: (year: number, month: number) => MonthDetail[];
  setMonthDetails: (details: MonthDetail[]) => void;
}
const ScrollPicker: React.FC<ScrollPickerProps> = ({
  months,
  calendarType,
  selectedYear,
  selectedMonthIndex,
  setSelectedMonthIndex,
  getMonthDetails,
  getMonthDetailsGregorian,
  setMonthDetails,
}) => {
  const monthListRef = useRef<HTMLDivElement | null>(null);

  const scrollToMonth = useCallback((index: number) => {
    const container = monthListRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".month-item");
    const item = items[index] as HTMLDivElement;
    if (!item) return;

    const scrollTop =
      item.offsetTop - container.clientHeight / 2 + item.offsetHeight / 2;

    container.scrollTo({ top: scrollTop, behavior: "smooth" });
  }, []);

  const updateSelectedMonth = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, months.length - 1));
      setSelectedMonthIndex(clampedIndex);

      const year = selectedYear ?? new Date().getFullYear();
      const details =
        calendarType === "jalali"
          ? getMonthDetails(year, clampedIndex)
          : getMonthDetailsGregorian(year, clampedIndex);

      setMonthDetails(details);
    },
    [
      months.length,
      calendarType,
      selectedYear,
      getMonthDetails,
      getMonthDetailsGregorian,
      setMonthDetails,
      setSelectedMonthIndex,
    ]
  );

  useEffect(() => {
    const container = monthListRef.current;
    if (!container) return;

    let lastScrollPosition = container.scrollTop;
    let scrollTimeout: number | undefined = undefined;
    const isScrolling = false;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (isScrolling) return;

      const step = Math.min(2, Math.max(1, Math.abs(event.deltaY / 110)));
      const direction = event.deltaY > 0 ? step : -step;
      const newIndex = selectedMonthIndex + direction;

      if (newIndex >= 0 && newIndex < months.length) {
        updateSelectedMonth(newIndex);
        scrollToMonth(newIndex);
      }
    };

    const SCROLL_THRESHOLD = 30;

    const handleScroll = () => {
      if (isScrolling) return;

      if (Math.abs(container.scrollTop - lastScrollPosition) > 10) {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          const containerRect = container.getBoundingClientRect();
          const containerCenter = containerRect.top + containerRect.height / 2;

          const items = container.querySelectorAll(".month-item");
          let closestIndex = 0;
          let closestDistance = Infinity;

          items.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height / 2;
            const distance = Math.abs(itemCenter - containerCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          if (closestDistance >= SCROLL_THRESHOLD) {
            updateSelectedMonth(closestIndex);
            scrollToMonth(closestIndex);
          } else {
            scrollToMonth(closestIndex);
          }
        }, 100);

        lastScrollPosition = container.scrollTop;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [selectedMonthIndex, months.length, scrollToMonth, updateSelectedMonth]);
  useEffect(() => {
    setTimeout(() => scrollToMonth(selectedMonthIndex), 100);
  }, [selectedMonthIndex, scrollToMonth]);

  return (
    <div className="month-list-container">
      <div className="selection-indicator"></div>
      <div className="month-list" ref={monthListRef}>
        {months.map((month, index) => {
          const distance = Math.abs(index - selectedMonthIndex);
          const fontSize = Math.max(6, 14 - distance * 2);
          const colors = ["#000", "#5A5A5A", "#858585", "#B6B6B6", "#D4D4D4"];
          const color = colors[Math.min(distance, colors.length - 1)];

          return (
            <div
              key={index}
              className={`month-item ${
                selectedMonthIndex === index ? "selected" : ""
              }`}
              style={{ fontSize: `${fontSize}px`, color }}
              onClick={() => {
                updateSelectedMonth(index);
                scrollToMonth(index);
              }}
            >
              {month}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollPicker;
