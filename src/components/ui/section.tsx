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
  className
}: {eyebrow?: string; title: string; description?: string; centered?: boolean; className?: string;}) => {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {description && <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  );
};