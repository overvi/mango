import React, { useState, useRef } from "react";

interface CodeInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  className?: string;
}

const CodeInput: React.FC<CodeInputProps> = ({
  length = 6,
  onComplete,
  className = "",
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (val: string, idx: number) => {
    if (/^[0-9]?$/.test(val)) {
      const newValues = [...values];
      newValues[idx] = val;
      setValues(newValues);

      if (val && idx < length - 1) {
        inputsRef.current[idx + 1]?.focus();
      }

      const code = newValues.join("");
      if (code.length === length && !code.includes("")) {
        onComplete?.(code);
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className={`flex gap-3  mt-4 ${className}`}>
      {values.map((val, idx) => (
        <input
          key={idx}
          ref={(el) => {
            inputsRef.current[idx] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(e.target.value, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="size-15 bg-white dark:bg-gray-700 text-center text-xl  rounded-[.875rem] focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      ))}
    </div>
  );
};

export default CodeInput;
