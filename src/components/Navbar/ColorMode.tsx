import Moon from "@/assets/images/moon.svg?react";
import Sun from "@/assets/images/sun.svg?react";
import { useTheme } from "@/context/ThemeContext";

const ColorMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`flex before:block relative z-0 ${
        !darkMode ? "before:left-0.5" : "before:left-[56.5%]"
      } before:-z-[1] before:absolute before:size-10.5 before:transition-all before:duration-700  before:bg-orange-500 before:rounded-full items-center gap-4 bg-neutral-200  p-[2px] rounded-full justify-between`}
    >
      <button
        onClick={() => toggleDarkMode()}
        className="size-10.5 flex items-center justify-center"
      >
        <Moon className="dark:*:fill-black" />
      </button>
      <button
        onClick={() => toggleDarkMode()}
        className="size-10.5   rounded-full flex items-center justify-center"
      >
        <Sun className="dark:*:fill-white" />
      </button>
    </div>
  );
};

export default ColorMode;
