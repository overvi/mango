import { default as L } from "@/assets/images/language-circle.svg?react";

const Language = () => {
  return (
    <button
      aria-label="Change Language"
      className="size-11.5 bg-neutral-200  flex items-center justify-center rounded-full"
    >
      <L />
    </button>
  );
};

export default Language;
