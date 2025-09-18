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

  const variants: Record<typeof variant, string> = {
    primary: "bg-orange-500 text-white",
    secondary: "bg-gray-300 dark:bg-zinc-900 text-black dark:text-white",
    form: "bg-green-500 text-white",
    outline:
      "border border-zinc-400 text-zinc-800 hover:bg-zinc-100 dark:text-white dark:border-zinc-600",
  };

  const renderIcon = () => {
    if (!icon) return null;
    return (
      <div className={iconClassName}>
        {typeof icon === "function"
          ? React.createElement(icon, { className: iconClassName })
          : icon}
      </div>
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
