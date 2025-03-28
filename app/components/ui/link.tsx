import {
  Link as LinkPrimitive,
  LinkProps as LinkPrimitiveProps,
} from "@remix-run/react";
import { ButtonProps, buttonVariants } from "./button";
import { cn } from "~/lib/utils";

type LinkProps = LinkPrimitiveProps &
  ButtonProps & { icon?: React.ReactNode; iconSide?: "start" | "end" };

function Link({
  className,
  variant,
  size,
  children,
  icon,
  iconSide = "start",
  ...props
}: LinkProps) {
  return (
    <LinkPrimitive
      {...props}
      className={cn(
        "flex items-center gap-2",
        variant
          ? buttonVariants({
              variant,
              size,
              className: cn(
                variant === "link" || variant === "link-underline"
                  ? "h-fit p-0"
                  : undefined
              ),
            })
          : undefined,
        className
      )}
    >
      {icon && iconSide === "start" && icon}
      {children}
      {icon && iconSide === "end" && icon}
    </LinkPrimitive>
  );
}

export { Link };
export default Link;
