import { cn } from "~/lib/utils";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  bigPadding?: boolean;
  edgePadding?: boolean;
};

export function Maxwidthdiv({
  bigPadding = false,
  edgePadding = false,
  className,
  children,
  ...props
}: Props) {
  const Comp = () => (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-10",
        bigPadding && "px-8 md:px-10 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );

  return (
    <>
      {edgePadding ? (
        <div className="mx-auto w-full px-3">
          <Comp />
        </div>
      ) : (
        <Comp />
      )}
    </>
  );
}
