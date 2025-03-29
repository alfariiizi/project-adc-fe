"use client";

import { cn } from "~/lib/utils";
import {
  Dialog as DialogRoot,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "./radix";
import { X } from "lucide-react";
import { useState } from "react";

type DialogProps = {
  overflow?: "overlay" | "children" | "content";
  isOverlayBlur?: boolean;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children:
    | React.ReactNode
    | ((opts: {
        open: boolean;
        onOpenChange: (open: boolean) => void;
      }) => React.ReactNode);
  trigger?:
    | React.ReactNode
    | ((opts: {
        open: boolean;
        onOpenChange: (open: boolean) => void;
      }) => React.ReactNode);
  triggerClassName?: string;
  headerClassName?: string;
  title?: React.ReactNode;
  titleClassName?: string;
  titleIcon?: React.ReactNode;
  description?: React.ReactNode;
  descriptionClassName?: string;
  contentClassName?: string;
  closeClassName?: string;
};

export function Dialog({
  overflow = "overlay",
  isOverlayBlur,
  className,
  open,
  onOpenChange,
  children,
  trigger,
  triggerClassName,
  headerClassName,
  title,
  titleClassName,
  titleIcon,
  description,
  descriptionClassName,
  contentClassName,
  closeClassName,
}: DialogProps) {
  // assert(
  //   !(
  //     (open !== undefined && onOpenChange === undefined) ||
  //     (open === undefined && onOpenChange !== undefined)
  //   ),
  //   "Both open and onOpenChange must be initialize together"
  // );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DialogRoot open={open ?? isOpen} onOpenChange={onOpenChange ?? setIsOpen}>
      {typeof trigger === "function" ? (
        <div className={cn(triggerClassName)}>
          {trigger({
            open: open ?? isOpen,
            onOpenChange: onOpenChange ?? setIsOpen,
          })}
        </div>
      ) : (
        <DialogTrigger
          asChild
          className={cn("cursor-pointer", triggerClassName)}
          onClick={() => {
            if (onOpenChange) {
              onOpenChange(true);
            } else {
              setIsOpen(true);
            }
          }}
        >
          {trigger}
        </DialogTrigger>
      )}
      <DialogContent
        isBlur={isOverlayBlur}
        overflow={overflow}
        className={cn(
          "scrollbar-hide p-0 border-neutral-200 border",
          overflow === "content" &&
            "h-full max-h-[calc(100dvh-1.5rem)] w-[calc(100dvw-1.5rem)] overflow-y-auto",
          overflow === "overlay" && "relative",
          contentClassName
        )}
      >
        <DialogHeader
          className={cn("m-0 rounded-t-lg border-none p-4", headerClassName)}
        >
          <DialogTitle
            className={cn(
              "flex items-center font-display gap-2",
              titleClassName
            )}
          >
            {titleIcon}
            <h3 className="mt-0.5">{title}</h3>
          </DialogTitle>
          <DialogDescription className={descriptionClassName}>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            "mt-0 p-4 pt-0",
            overflow === "children" && "max-h-[70dvh] overflow-y-auto",
            overflow === "content" && "max-h-[calc(100dvh-3rem)]",
            className
          )}
        >
          {typeof children === "function"
            ? children({
                open: open ?? isOpen,
                onOpenChange: onOpenChange ?? setIsOpen,
              })
            : children}
        </div>
        <DialogClose
          className={cn(
            "absolute right-4 top-4 size-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:text-muted-foreground",
            closeClassName
          )}
        >
          <X className="h-full w-full" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogRoot>
  );
}

export default Dialog;
