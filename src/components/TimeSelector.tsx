import { useState, type ChangeEvent } from "react";

export default function TimeSelector({ label = "ساعت رزرو" }) {
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const validateTime = (value: string | null) => {
    if (!value) return true;

    const timeRegex = /^(\d{1,2}):(\d{2})$/;
    const match = value.match(timeRegex);

    if (!match) return false;

    const hour = parseInt(match[1], 10);
    const minute = parseInt(match[2], 10);

    return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTime(value);

    if (validateTime(value)) {
      setError("");
    } else {
      setError("زمان وارد شده نامعتبر است");
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm ">{label}</label>
      <input
        type="text"
        value={time}
        pattern="[0-9]{1,2}:[0-9]{2}"
        onChange={handleChange}
        placeholder="00:00"
        className={`p-2 ps-3.5 text-sm h-10 mt-1  bg-neutral-15 outline-none rounded-full focus:outline-none `}
        inputMode="numeric"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
