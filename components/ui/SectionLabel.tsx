import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.18em] uppercase",
        light ? "text-gold-light" : "text-gold",
        className
      )}
    >
      <span
        className={cn(
          "block h-px w-6",
          light ? "bg-gold-light" : "bg-gold"
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
