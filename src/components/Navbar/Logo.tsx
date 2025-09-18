import { default as L } from "@/assets/images/nav-logo.svg?react";

const Logo = () => {
  return (
    <button
      aria-label="Logo"
      className="bg-neutral-100 rounded-full size-11.5 flex items-center justify-center"
    >
      <L />
    </button>
  );
};

export default Logo;
