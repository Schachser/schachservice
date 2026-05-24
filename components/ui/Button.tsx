import { cn } from "@/lib/cn";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const variants = {
  primary:
    "bg-gold text-navy hover:bg-gold-muted shadow-gold hover:shadow-lifted active:scale-[0.98]",
  secondary:
    "bg-navy text-ivory hover:bg-slate active:scale-[0.98]",
  ghost:
    "text-navy hover:text-gold hover:bg-navy/5 active:scale-[0.98]",
  outline:
    "border border-navy/20 text-navy hover:border-gold hover:text-gold bg-transparent active:scale-[0.98]",
};

const sizes = {
  sm:  "h-9  px-5  text-sm  rounded-md",
  md:  "h-11 px-7  text-sm  rounded-lg",
  lg:  "h-13 px-9  text-base rounded-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
