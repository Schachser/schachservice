import { Zap } from "lucide-react";
import { cn } from "@/lib/cn";
import { BLITZANGEBOT_URL } from "@/lib/constants";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-9  px-5  text-xs  gap-1.5",
  md: "h-11 px-7  text-sm  gap-2",
  lg: "h-14 px-9  text-base gap-2.5",
};

const iconSizes: Record<Size, string> = {
  sm: "w-3.5 h-3.5",
  md: "w-4   h-4",
  lg: "w-5   h-5",
};

type Props = {
  size?: Size;
  label?: string;
  className?: string;
  wrapperClassName?: string;
};

export function BlitzangebotButton({ size = "md", label = "Blitzangebot erhalten", className, wrapperClassName }: Props) {
  return (
    <span className={cn("relative inline-flex shrink-0", wrapperClassName)}>
      {/* Animated glow ring */}
      <span
        className="blitz-ring absolute -inset-[3px] rounded-full bg-gold/30 pointer-events-none"
        aria-hidden="true"
      />

      <a
        href={BLITZANGEBOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-event="blitzangebot_click"
        aria-label={label}
        className={cn(
          "btn-blitz relative inline-flex items-center justify-center rounded-full",
          "bg-gold text-navy font-body font-bold tracking-wide",
          "transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          sizes[size],
          className,
        )}
      >
        {/* Subtle highlight gloss */}
        <span
          className="absolute inset-x-0 top-0 h-[45%] rounded-t-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <Zap className={cn(iconSizes[size], "flex-shrink-0 relative z-10 fill-navy/20")} aria-hidden="true" />
        <span className="relative z-10">{label}</span>
      </a>
    </span>
  );
}
