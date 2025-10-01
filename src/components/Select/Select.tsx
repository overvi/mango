import { useEffect, useState } from "react";
import SelectArrow from "@/assets/images/select-arrow.svg?react";

type Option = { label: string; value: string; checked?: boolean };

interface Props {
  options: Option[];
  buttonClassName?: string;
  listClassName?: string;
  optionClassName?: string;
  iconClassName: string;
  label?: string;
  labelClassName?: string;
  id?: string;
}

const Select = ({
  options,
  buttonClassName,
  listClassName,
  optionClassName,
  iconClassName,
  label,
  labelClassName,
  id,
}: Props) => {
  const [selected, setSelected] = useState(options.find((o) => o.checked));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const buttonId = id || `select-${Math.random().toString(36).slice(2, 8)}`;
  const labelId = `${buttonId}-label`;

  const onButtonKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!dropdownOpen) {
          setDropdownOpen(true);
        } else {
          setFocusedIndex((prev) =>
            prev === null ? 0 : (prev + 1) % options.length
          );
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!dropdownOpen) {
          setDropdownOpen(true);
        } else {
          setFocusedIndex((prev) =>
            prev === null
              ? options.length - 1
              : (prev - 1 + options.length) % options.length
          );
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!dropdownOpen) {
          setDropdownOpen(true);
        } else if (focusedIndex !== null) {
          handleClick(options[focusedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setDropdownOpen(false);
        break;
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      const selectedIdx = options.findIndex((o) => o.value === selected?.value);
      setFocusedIndex(selectedIdx >= 0 ? selectedIdx : 0);
    } else {
      setFocusedIndex(null);
    }
  }, [dropdownOpen, options, selected?.value]);

  const selectedLabel =
    options.find((o) => o.value === selected?.value)?.label || "انتخاب کنید...";

  const handleClick = (option: Option) => {
    setSelected(option);
    setDropdownOpen(false);
  };

  return (
    <div className="flex flex-col relative">
      {label && (
        <label
          htmlFor={buttonId}
          id={labelId}
          className={labelClassName || "mb-1 text-sm font-medium"}
        >
          {label}
        </label>
      )}

      <button
        type="button"
        id={buttonId}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        onKeyDown={onButtonKeyDown}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        aria-labelledby={label ? `${labelId} ${buttonId}` : buttonId}
        className={`${buttonClassName}  text-right flex items-center justify-between`}
      >
        <p className={`${!selected ? "text-[#ababab]" : ""}`}>
          {selectedLabel}
        </p>
        <SelectArrow
          className={`${iconClassName} shrink-0 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {dropdownOpen && (
        <ul
          role="listbox"
          aria-activedescendant={`option-${focusedIndex}`}
          className={`${listClassName} bg-base p-3 shadow-select absolute -bottom-2 translate-y-full right-0 left-0 rounded-[1.25rem]`}
        >
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              className={`${optionClassName} rounded-xl h-10 flex items-center ps-5 ${
                selected === opt ? "bg-neutral-15" : ""
              } ${focusedIndex === idx ? "bg-neutral-15" : ""}`}
              role="option"
              id={`option-${idx}`}
            >
              <button
                className="w-full text-right"
                tabIndex={focusedIndex === idx ? 0 : -1}
                onClick={() => handleClick(opt)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(opt);
                  }
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
