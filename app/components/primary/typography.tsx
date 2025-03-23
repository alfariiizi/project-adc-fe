import React, { type ReactNode } from "react";
import { cn } from "~/lib/utils";

// Define the types for our props
type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TypographyVariant = "normal" | "italic" | "bold" | "semibold";
type TypographySize = "large" | "normal" | "small";
type TypographyFont = "display" | "sans" | "default";
type TypographyAlign = "left" | "center" | "right" | "justify";
type TypographyColor =
  | "default"
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "warning"
  | "error"
  | "success";
type TypographyTransform = "none" | "uppercase" | "lowercase" | "capitalize";

// Define the props interface
export interface TypographyProps {
  type?: TypographyElement;
  children: ReactNode;
  className?: string;
  variant?: TypographyVariant;
  size?: TypographySize;
  font?: TypographyFont;
  align?: TypographyAlign;
  color?: TypographyColor;
  transform?: TypographyTransform;
  truncate?: boolean;
  noWrap?: boolean;
  gutterBottom?: boolean;
  responsive?: boolean;
  id?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  type = "p",
  children,
  className,
  variant = "normal",
  size = "normal",
  font = "default",
  align = "left",
  color = "default",
  transform = "none",
  truncate = false,
  noWrap = false,
  gutterBottom = false,
  responsive = true,
  id,
  ...rest
}) => {
  // Determine the font family based on the type if font is set to default
  const fontFamily =
    font === "default"
      ? ["h1", "h2", "h3", "h4", "h5", "h6"].includes(type)
        ? "font-display"
        : "font-sans"
      : font === "display"
      ? "font-display"
      : "font-sans";

  // Define size classes for each element type based on responsive prop
  const sizeClasses = {
    h1: {
      large: responsive ? "text-5xl md:text-6xl lg:text-7xl" : "text-7xl",
      normal: responsive ? "text-4xl md:text-5xl lg:text-6xl" : "text-6xl",
      small: responsive ? "text-3xl md:text-4xl lg:text-5xl" : "text-5xl",
    },
    h2: {
      large: responsive ? "text-4xl md:text-5xl lg:text-6xl" : "text-6xl",
      normal: responsive ? "text-3xl md:text-4xl lg:text-5xl" : "text-5xl",
      small: responsive ? "text-2xl md:text-3xl lg:text-4xl" : "text-4xl",
    },
    h3: {
      large: responsive ? "text-3xl md:text-4xl lg:text-5xl" : "text-5xl",
      normal: responsive ? "text-2xl md:text-3xl lg:text-4xl" : "text-4xl",
      small: responsive ? "text-xl md:text-2xl lg:text-3xl" : "text-3xl",
    },
    h4: {
      large: responsive ? "text-2xl md:text-3xl lg:text-4xl" : "text-4xl",
      normal: responsive ? "text-xl md:text-2xl lg:text-3xl" : "text-3xl",
      small: responsive ? "text-lg md:text-xl lg:text-2xl" : "text-2xl",
    },
    h5: {
      large: responsive ? "text-xl md:text-2xl lg:text-3xl" : "text-3xl",
      normal: responsive ? "text-lg md:text-xl lg:text-2xl" : "text-2xl",
      small: responsive ? "text-base md:text-lg lg:text-xl" : "text-xl",
    },
    h6: {
      large: responsive ? "text-lg md:text-xl lg:text-2xl" : "text-2xl",
      normal: responsive ? "text-base md:text-lg lg:text-xl" : "text-xl",
      small: responsive ? "text-sm md:text-base lg:text-lg" : "text-lg",
    },
    p: {
      large: responsive ? "text-lg md:text-xl lg:text-xl" : "text-xl",
      normal: responsive ? "text-base md:text-base lg:text-lg" : "text-lg",
      small: responsive ? "text-sm md:text-base lg:text-base" : "text-base",
    },
    span: {
      large: responsive ? "text-lg md:text-xl lg:text-xl" : "text-xl",
      normal: responsive ? "text-base md:text-base lg:text-lg" : "text-lg",
      small: responsive ? "text-sm md:text-base lg:text-base" : "text-base",
    },
  };

  // Define variant classes
  const variantClasses = {
    normal: "",
    italic: "italic",
    bold: "font-bold",
    semibold: "font-semibold",
  };

  // Define alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  // Define color classes
  const colorClasses = {
    // default: "text-foreground",
    default: "text-netral-17",
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted-foreground",
    accent: "text-accent",
    warning: "text-amber-500",
    error: "text-destructive",
    success: "text-emerald-500",
  };

  // Define text transform classes
  const transformClasses = {
    none: "",
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
  };

  // Combine all the classes
  const combinedClasses = cn(
    sizeClasses[type][size],
    fontFamily,
    variantClasses[variant],
    alignClasses[align],
    colorClasses[color],
    transformClasses[transform],
    truncate && "truncate",
    noWrap && "whitespace-nowrap",
    gutterBottom && "mb-4",
    className
  );

  // Render the appropriate element based on type
  const Element = type as keyof JSX.IntrinsicElements;

  return (
    <Element className={combinedClasses} id={id} {...rest}>
      {children}
    </Element>
  );
};
