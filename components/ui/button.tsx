import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  // ✅ 补上 'default'，避免 size 默认值不在联合类型里导致的类型不匹配
  size?: "sm" | "lg" | "default";
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // 保持你的可访问性样式
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default:
      "bg-accent text-accent-foreground hover:bg-accent/90 focus:bg-accent active:bg-accent",
    outline:
      "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent active:bg-accent",
  };
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-9 px-3 text-sm",
    default: "h-11 px-6 text-base",
    lg: "h-12 px-8 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
