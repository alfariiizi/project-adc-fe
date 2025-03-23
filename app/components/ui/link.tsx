import {
  Link as LinkPrimitive,
  LinkProps as LinkPrimitiveProps,
} from "@remix-run/react";
import { ButtonProps, buttonVariants } from "./button";
import { cn } from "~/lib/utils";

type LinkProps = LinkPrimitiveProps & ButtonProps;

export default function Link({
  className,
  variant,
  size,
  ...props
}: LinkProps) {
  return (
    <LinkPrimitive
      {...props}
      className={cn(
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
    />
  );
}
