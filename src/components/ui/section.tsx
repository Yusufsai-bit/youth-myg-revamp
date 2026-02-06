import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClass?: string;
  id?: string;
}

export const Section = ({ children, className, containerClass, id }: SectionProps) => {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={cn("container-page", containerClass)}>{children}</div>
    </section>
  );
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {description && (
        <p className={cn("text-lg max-w-3xl", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
};
