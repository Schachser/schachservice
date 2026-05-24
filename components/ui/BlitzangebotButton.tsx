import { Zap } from "lucide-react";
import { cn } from "@/lib/cn";
import { BLITZANGEBOT_URL } from "@/lib/constants";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-9  px-5  text-xs  gap-1.5",
  md: "h-11 px-7  text-sm  gap-2",
  lg: "h-13 px-9  text-[0.93rem] gap-2",
};

const iconSizes: Record<Size, string> = {
  sm: "w-3.5 h-3.5",
  md: "w-4   h-4",
  lg: "w-4.5 h-4.5",
};

type Props = {
  size?: Size;
  label?: string;
  className?: string;
  wrapperClassName?: string;
};

export function BlitzangebotButton({ size = "md", label = "Blitzangebot erhalten", className, wrapperClassName }: Props) {
  return (
    <span className={cn("inline-flex shrink-0", wrapperClassName)}>
      <a
        href={BLITZANGEBOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-event="blitzangebot_click"
        aria-label={label}
        className={cn(
          "inline-flex items-center justify-center rounded-xl",
          "bg-gold text-navy font-body font-bold tracking-wide",
          "shadow-[0_4px_20px_rgba(205,163,73,0.28)]",
          "hover:bg-gold-muted hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          sizes[size],
          className,
        )}
      >
        <Zap className={cn(iconSizes[size], "flex-shrink-0")} aria-hidden="true" />
        <span>{label}</span>
      </a>
    </span>
  );
}
