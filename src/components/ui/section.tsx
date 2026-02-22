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






}: {eyebrow?: string;title: string;description?: string;centered?: boolean;className?: string;}) => {
  return;














};