import { useEffect, useRef, type SetStateAction } from "react";

interface Props {
  seconds: number;
  onComplete?: () => void;
  timeLeft: number;
  setTimeLeft: React.Dispatch<SetStateAction<number>>;
}

export default function SimpleCountdown({ setTimeLeft, timeLeft }: Props) {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeLeft <= 0) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [timeLeft, setTimeLeft]);

  const format = (timeLeft: number) => {
    const m = String(Math.floor(timeLeft / 60));
    const s = String(timeLeft % 60);

    return `${m.padStart(2, "0")}:${s.padStart(2, "0")}`;
  };
  return (
    <div>
      <div role="timer" aria-live="polite" className="font-bold">
        {format(timeLeft)}
      </div>
    </div>
  );
}
