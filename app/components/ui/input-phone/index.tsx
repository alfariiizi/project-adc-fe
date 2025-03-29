"use client";

import { Input, type InputProps, type InputType } from "../input";

type Props<T extends InputType = "text"> = Omit<
  InputProps<T>,
  "type" | "endAdornment" | "value" | "onValueChange"
> & {
  value: string | undefined;
  onValueChange: (value: string | undefined) => void;
};

export default function InputPhone<T extends InputType = "text">({
  value,
  onValueChange,
  ...props
}: Props<T>) {
  return (
    <Input
      type="tel"
      value={value}
      onValueChange={onValueChange}
      startAdornment="+62"
      {...props}
    />
  );
}

export { InputPhone };
