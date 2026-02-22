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
    </section>);

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
    <div className={cn("mb-12", centered && "text-center", className)}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};