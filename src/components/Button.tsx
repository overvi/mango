import React, { type ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactNode | React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  iconPosition?: "left" | "right";
  iconClassName?: string;
  variant?: "primary" | "secondary" | "outline" | "form";
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className = "",
  type = "button",
  iconPosition = "right",
  iconClassName,
  variant = "primary",
}) => {
  const baseClasses =
    "flex items-center py-2 px-9.5 rounded-full gap-2.5 transition-colors duration-300";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-orange-500 group text-white dark:hover:bg-[#655a47] hover:bg-orange-15 hover:text-orange-500",
    secondary:
      "bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:text-orange-500 ",
    form: "bg-green-500 text-white hover:bg-green-15 dark:hover:bg-[#475a4f] hover:text-green-500",
    outline:
      "border border-zinc-400 text-zinc-800 hover:bg-zinc-100 dark:text-white dark:border-zinc-600",
  };

  const iconVariants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "text-white group-hover:*:fill-orange-500",
    secondary: "",
    form: "",
    outline: "",
  };

  const renderIcon = () => {
    if (!icon) return null;
    const finalIconClass = `${iconVariants[variant]} ${iconClassName ?? ""}`;

    return typeof icon === "function" ? (
      React.createElement(icon, { className: finalIconClass })
    ) : (
      <div className={finalIconClass}>{icon}</div>
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {iconPosition === "left" && renderIcon()}
      <p>{label}</p>
      {iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Button;
