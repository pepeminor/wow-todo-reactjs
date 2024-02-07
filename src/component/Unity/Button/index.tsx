import React from "react";

interface IButtonProps {
  children: string | React.ReactNode;
  onClick?: any;
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const {
    children,
    onClick,
    variant = "primary",
    style,
    className,
    disabled,
  } = props;

  const commonClass = `w-full rounded-[20px] border-[1px] border-solid border-gray px-4 py-2 font-bold text-white transition-all`;

  if (variant === "ghost") {
    return (
      <button
        disabled={disabled}
        className={`${commonClass} ${className} ${disabled && "cursor-not-allowed"}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button
        disabled={disabled}
        className={`${commonClass} bg-orange hover:bg-orange-700 ${className} ${disabled && "cursor-not-allowed"}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
  if (variant === "danger") {
    return (
      <button
        disabled={disabled}
        className={`${commonClass} bg-red hover:bg-red-700 ${className} ${disabled && "cursor-not-allowed"}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
  if (variant === "tertiary") {
    return (
      <button
        disabled={disabled}
        className={`${commonClass} bg-blue hover:bg-blue-700 ${className} ${disabled && "cursor-not-allowed"}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      className={`w-full rounded-[20px] bg-blue px-4 py-2 font-bold text-white transition-all hover:bg-blue-700 ${className} ${disabled && "cursor-not-allowed"}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
